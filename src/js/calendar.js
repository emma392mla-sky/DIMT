
var Calendar = (function () {

  var events = [];
  var _clickRegistry = {};
  var _dayClick = null;
  var _dayHover = null;
  var _currentDir = 0;
  var _bgCache = {};

  var MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
  var DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  var _styled = false;

  function p(n) { return n < 10 ? '0' + n : '' + n; }

  function getBg(hex, alpha) {
    var key = hex + alpha;
    if (_bgCache[key]) return _bgCache[key];
    if (hex && hex.charAt(0) === '#' && hex.length === 7) {
      var r = parseInt(hex.slice(1, 3), 16);
      var g = parseInt(hex.slice(3, 5), 16);
      var b = parseInt(hex.slice(5, 7), 16);
      if (!isNaN(r)) { var v = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')'; _bgCache[key] = v; return v; }
    }
    return hex || 'transparent';
  }

  function injectCSS() {
    if (_styled) return;
    _styled = true;
    var s = document.createElement('style');
    s.textContent =
      '@keyframes a{from{opacity:0;transform:translateX(28px) scale(.98)}to{opacity:1;transform:none}}'
      + '@keyframes b{from{opacity:0;transform:translateX(-28px) scale(.98)}to{opacity:1;transform:none}}'
      + '@keyframes c{from{opacity:0;transform:scale(.97) translateY(5px)}to{opacity:1;transform:none}}'
      + '@keyframes d{from{opacity:0;transform:translateY(7px) scale(.92)}to{opacity:1;transform:none}}'
      + '@keyframes e{0%,100%{box-shadow:0 0 0 0 rgba(251,191,36,.2),inset 0 1px 0 0 rgba(251,191,36,.1)}50%{box-shadow:0 0 0 5px transparent,inset 0 1px 0 0 rgba(251,191,36,.15)}}'
      + '@keyframes f{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:none}}'
      + '.cr{animation:a .3s cubic-bezier(.22,1,.36,1) forwards}'
      + '.cl{animation:b .3s cubic-bezier(.22,1,.36,1) forwards}'
      + '.cf{animation:c .38s cubic-bezier(.22,1,.36,1) forwards}'
      + '.cd{animation:d .25s cubic-bezier(.22,1,.36,1) both}'
      + '.tp{animation:e 2.6s ease-in-out infinite}'
      + '.lb{animation:f .2s ease-out both}'
      + '.tt{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) scale(.94);opacity:0;pointer-events:none;transition:all .16s ease-out;z-index:60}'
      + '.tt::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#fff}'
      + '.cd:hover .tt{opacity:1;transform:translateX(-50%) scale(1)}'
      + '.nb{position:relative;overflow:hidden}'
      + '.nb::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at var(--x,50%) var(--y,50%),rgba(251,191,36,.08) 0%,transparent 55%);opacity:0;transition:opacity .2s}'
      + '.nb:hover::after{opacity:1}';
    document.head.appendChild(s);
  }

  var C = {
    pd: 'min-h-[54px] flex items-center justify-center text-sm text-slate-300 rounded-lg select-none',
    dh: 'text-center text-[10px] font-semibold uppercase tracking-[0.13em] py-2 text-slate-400',
    dw: 'text-center text-[10px] font-semibold uppercase tracking-[0.13em] py-2 text-orange-500/50',
    db: 'cd relative min-h-[54px] p-1 rounded-xl cursor-pointer transition-all duration-150 hover:scale-[1.03] active:scale-[0.97]',
    dt: ' bg-amber-50 border border-amber-300 tp',
    dn: ' bg-slate-50/80 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-sm',
    nt: 'block text-[13px] leading-none mt-1.5 ml-1.5 font-bold text-amber-700',
    nw: 'block text-[13px] leading-none mt-1.5 ml-1.5 font-medium text-orange-600/60',
    nn: 'block text-[13px] leading-none mt-1.5 ml-1.5 font-medium text-slate-700',
    el: 'lb block text-[10px] mt-[3px] mx-1 px-1.5 py-[2px] rounded-md font-medium truncate transition-colors duration-150 hover:brightness-110 hover:shadow-sm cursor-pointer',
    mo: 'block text-[9px] mt-[2px] ml-1.5 text-slate-400 font-medium',
    lg: 'flex flex-wrap gap-x-4 gap-y-1.5 px-3 pt-4 mt-3 border-t border-slate-100',
    li: 'flex items-center gap-2 py-0.5',
    ld: 'w-[7px] h-[7px] rounded-full flex-shrink-0',
    lt: 'text-[11px] text-slate-500 font-medium',
    tw: 'tt px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 min-w-[140px]',
    tr: 'flex items-center gap-2 py-[2px]',
    td: 'w-[5px] h-[5px] rounded-full flex-shrink-0',
    tx: 'text-[11px] text-slate-700 font-medium',
    nb: 'nb w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600 transition-all duration-150 active:scale-90 text-xl font-extralight select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/25',
    mn: 'text-[22px] font-bold text-slate-900 tracking-wide',
    yr: 'text-[22px] font-extralight text-slate-400 ml-2'
  };

  function show(year, month) {
    injectCSS();

    var now = new Date();
    var y = year || now.getFullYear();
    var m = (month || now.getMonth() + 1) - 1;
    var total = new Date(y, m + 1, 0).getDate();
    var startDay = new Date(y, m, 1).getDay();
    var start = startDay === 0 ? 6 : startDay - 1;
    var prevTotal = new Date(y, m, 0).getDate();
    var todayStr = now.getFullYear() + '-' + p(now.getMonth() + 1) + '-' + p(now.getDate());

    var lookup = {};
    var legend = {};
    for (var ei = 0, el = events.length; ei < el; ei++) {
      var ev = events[ei];
      var key = ev.year + '-' + p(ev.month) + '-' + p(ev.day);
      (lookup[key] || (lookup[key] = [])).push(ev);
      if (ev.labelColor) {
        (legend[ev.labelColor] || (legend[ev.labelColor] = {}))[ev.label] = 1;
      }
    }

    var anim = _currentDir > 0 ? 'cr' : _currentDir < 0 ? 'cl' : 'cf';
    _currentDir = 0;

    var h = [];
    var i = 0;

    h[i++] = '<div class="cal ' + anim + ' max-w-[480px] mx-auto">';

    h[i++] = '<div class="flex items-center justify-between px-4 py-4 mb-2">';
    h[i++] = '<button onclick="Calendar._go(' + y + ',' + m + ',-1)" class="' + C.nb + '">\u2039</button>';
    h[i++] = '<div class="text-center select-none"><span class="' + C.mn + '">' + MONTHS[m] + '</span><span class="' + C.yr + '">' + y + '</span></div>';
    h[i++] = '<button onclick="Calendar._go(' + y + ',' + m + ',1)" class="' + C.nb + '">\u203a</button>';
    h[i++] = '</div>';

    h[i++] = '<div class="grid grid-cols-7 gap-1 mb-1 px-1">';
    for (var di = 0; di < 7; di++) {
      h[i++] = '<div class="' + (di >= 5 ? C.dw : C.dh) + '">' + DAYS[di] + '</div>';
    }
    h[i++] = '</div>';

    h[i++] = '<div class="grid grid-cols-7 gap-1 px-1">';

    for (var pi = start - 1; pi >= 0; pi--) {
      h[i++] = '<div class="' + C.pd + '">' + (prevTotal - pi) + '</div>';
    }

    for (var d = 1; d <= total; d++) {
      var ds = y + '-' + p(m + 1) + '-' + p(d);
      var de = lookup[ds];
      var hasEv = !!de;
      var evCnt = hasEv ? de.length : 0;
      var isTd = ds === todayStr;
      var isWk = (start + d - 1) % 7 >= 5;
      var delay = ((d + start) >> 1) * 14;

      h[i++] = '<div class="' + C.db + (isTd ? C.dt : C.dn) + '" style="animation-delay:' + delay + 'ms" onclick="Calendar._onDayClick(' + d + ',' + (m + 1) + ',' + y + ')">';
      h[i++] = '<span class="' + (isTd ? C.nt : isWk ? C.nw : C.nn) + '">' + d + '</span>';

      if (hasEv) {
        var vis = evCnt > 2 ? 2 : evCnt;
        for (var vi = 0; vi < vis; vi++) {
          var vev = de[vi];
          var vc = vev.labelColor || '#10b981';
          h[i++] = '<span class="' + C.el + '" style="color:' + vc + ';background:' + getBg(vc, 0.14) + ';animation-delay:' + (delay + (vi + 1) * 45) + 'ms" onclick="event.stopPropagation();Calendar._click(\'' + vev._id + '\')">' + vev.label + '</span>';
        }
        if (evCnt > 2) {
          h[i++] = '<span class="' + C.mo + '">+' + (evCnt - 2) + ' more</span>';
        }

        h[i++] = '<div class="' + C.tw + '">';
        for (var ti = 0; ti < evCnt; ti++) {
          var te = de[ti];
          var tc = te.labelColor || '#10b981';
          h[i++] = '<div class="' + C.tr + '"><span class="' + C.td + '" style="background:' + tc + ';box-shadow:0 0 5px ' + getBg(tc, 0.35) + '"></span><span class="' + C.tx + '">' + te.label + '</span></div>';
        }
        h[i++] = '</div>';
      }

      h[i++] = '</div>';
    }

    var rem = (7 - (start + total) % 7) % 7;
    for (var ni = 1; ni <= rem; ni++) {
      h[i++] = '<div class="' + C.pd + '">' + ni + '</div>';
    }

    h[i++] = '</div>';

    var lk = Object.keys(legend);
    if (lk.length) {
      h[i++] = '<div class="' + C.lg + '">';
      for (var li = 0; li < lk.length; li++) {
        var lc = lk[li];
        var ll = Object.keys(legend[lc]);
        for (var lj = 0; lj < ll.length; lj++) {
          h[i++] = '<div class="' + C.li + '"><span class="' + C.ld + '" style="background:' + lc + ';box-shadow:0 0 6px ' + getBg(lc, 0.2) + '"></span><span class="' + C.lt + '">' + ll[lj] + '</span></div>';
        }
      }
      h[i++] = '</div>';
    }

    h[i++] = '</div>';
    return h.join('');
  }

  function add(ev) {
    ev._id = ev.year + '-' + ev.month + '-' + ev.day + '-' + Math.random().toString(36).substr(2, 9);
    events.push(ev);
    _clickRegistry[ev._id] = null;
    return { click: function (fn) { _clickRegistry[ev._id] = fn; } };
  }

  function clear() {
    events = [];
    _clickRegistry = {};
    _bgCache = {};
  }

  function _click(id) {
    var fn = _clickRegistry[id];
    if (!fn) return;
    for (var i = 0, l = events.length; i < l; i++) {
      if (events[i]._id == id) { fn.call(events[i], events[i]); return; }
    }
  }

  function _onDayClick(d, m, y) {
    if (!_dayClick) return;
    var ctx = { day: d, month: m, year: y, date: d + '/' + m + '/' + y };
    _dayClick.call(ctx, ctx);
  }

  function _go(y, m, offset) {
    _currentDir = offset;
    var d = new Date(y, m + offset, 1);
    var el = document.getElementById('mycal');
    if (el) el.innerHTML = Calendar.show(d.getFullYear(), d.getMonth() + 1);
  }

  return {
    show: show,
    add: add,
    clear: clear,
    _go: _go,
    _click: _click,
    _onDayClick: _onDayClick,
    DayEvent: { click: function (fn) { _dayClick = fn; }, hover: function (fn) { _dayHover = fn; } }
  };

})();