// signup card

signup = `
  <div class="w-full max-w-4xl mx-auto relative animate-[fadeIn_0.8s_ease-in-out]">
    <!-- Animated Gradient Orbs -->
    <div class="absolute -top-20 -left-20 w-72 h-72 bg-indigo-400 rounded-full filter blur-[100px] opacity-25 animate-[pulse_6s_ease-in-out_infinite]"></div>
    <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400 rounded-full filter blur-[100px] opacity-20 animate-[pulse_6s_ease-in-out_infinite_2s]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-300 rounded-full filter blur-[120px] opacity-10 animate-[pulse_8s_ease-in-out_infinite_1s]"></div>

    <!-- Gradient Border Wrapper -->
    <div class="relative p-[1.5px] rounded-[26px] bg-gradient-to-br from-indigo-500/40 via-transparent to-cyan-500/40">
      <div class="relative bg-white/80 backdrop-blur-2xl rounded-[24px] shadow-2xl shadow-indigo-900/8 p-6 sm:p-10 overflow-hidden">

        <!-- Subtle dot pattern overlay -->
        <div class="absolute inset-0 opacity-[0.025] pointer-events-none" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 20px 20px;"></div>

        <!-- Header -->
        <div class="relative text-center mb-10">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Create Account
          </h2>
          <p class="mt-2 text-sm text-slate-500 font-medium">
            Start your academic journey with us today
          </p>

          <!-- Step Progress Indicators -->
          <div class="flex items-center justify-center gap-1 mt-7">
            <div class="flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">1</span>
              <span class="text-[10px] font-semibold text-slate-500 hidden sm:inline">Personal</span>
            </div>
            <div class="w-5 h-px bg-slate-200"></div>
            <div class="flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">2</span>
              <span class="text-[10px] font-semibold text-slate-500 hidden sm:inline">Academic</span>
            </div>
            <div class="w-5 h-px bg-slate-200"></div>
            <div class="flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">3</span>
              <span class="text-[10px] font-semibold text-slate-500 hidden sm:inline">Contact</span>
            </div>
            <div class="w-5 h-px bg-slate-200"></div>
            <div class="flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">4</span>
              <span class="text-[10px] font-semibold text-slate-500 hidden sm:inline">Security</span>
            </div>
            <div class="w-5 h-px bg-slate-200"></div>
            <div class="flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-400 text-[10px] font-bold flex items-center justify-center">5</span>
              <span class="text-[10px] font-semibold text-slate-400 hidden sm:inline">Guardian</span>
            </div>
          </div>
        </div>

        <form class="relative space-y-4" onsubmit="event.preventDefault();">

          <!-- Section 1: Personal Details -->
          <div class="group bg-white/60 hover:bg-white/90 p-5 sm:p-6 rounded-2xl border border-slate-200/70 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300/70">
            <h3 class="text-[11px] font-bold text-indigo-600 uppercase tracking-[0.15em] mb-5 flex items-center gap-2.5">
              <span class="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-extrabold flex items-center justify-center border border-indigo-100">01</span>
              Personal Details
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Student ID</label>
                <div class="relative">
                  <i class="bi bi-hash absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="text" id='identity' placeholder="STU-2024-001" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Name</label>
                <div class="relative">
                  <i class="bi bi-person absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="text" id='name' placeholder="First name" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Surname</label>
                <div class="relative">
                  <i class="bi bi-person-badge absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="text" id='surname' placeholder="Last name" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: Academic Details -->
          <div class="group bg-white/60 hover:bg-white/90 p-5 sm:p-6 rounded-2xl border border-slate-200/70 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300/70">
            <h3 class="text-[11px] font-bold text-indigo-600 uppercase tracking-[0.15em] mb-5 flex items-center gap-2.5">
              <span class="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-extrabold flex items-center justify-center border border-indigo-100">02</span>
              Academic Details
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Program</label>
                <div class="relative">
                  <i class="bi bi-mortarboard absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <select required id='pg' class="w-full pl-10 pr-10 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
                    <option value="" disabled selected>Select program</option>
                    <option value="P001">Public Health</option>
                    <option value="P002">Business Studies</option>
                    <option value="P003">Tailoring</option>
                    <option value="P004">Agro Business</option>
                    <option value="P005">Hotel Management</option>
                    <option value="P006">Computer Engineering</option>
                    <option value="P007">Community Development</option>
                    <option value="P008">HIV & AIDS Management</option>
                    <option value="P009">Nutrition & Food Security</option>
                    <option value="P010">Human Resource Management</option>
                    <option value="P011">Comp Science & Cyber Security</option>
                    <option value="P012">Accounting</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Exam Board</label>
                <div class="relative">
                  <i class="bi bi-award absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <select required id='board' class="w-full pl-10 pr-10 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
                    <option value="" disabled selected>Select board</option>
                    <option value="AISE">AISE</option>
                    <option value="BMEC">BMEC</option>
                    <option value="ABP">ABP</option>
                    <option value="ABMA">ABMA</option>
                    <option value="ICAM">ICAM</option>
                    <option value="TEVETA">TEVETA</option>
                    <option value="ICM">ICM</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Level</label>
                <div class="relative">
                  <i class="bi bi-bar-chart-steps absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <select required id='level' class="w-full pl-10 pr-10 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
                    <option value="" disabled selected>Select level</option>
                    <option value="4">Level 4</option>
                    <option value="5">Level 5</option>
                    <option value="6">Level 6</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Contact & Location -->
          <div class="group bg-white/60 hover:bg-white/90 p-5 sm:p-6 rounded-2xl border border-slate-200/70 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300/70">
            <h3 class="text-[11px] font-bold text-indigo-600 uppercase tracking-[0.15em] mb-5 flex items-center gap-2.5">
              <span class="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-extrabold flex items-center justify-center border border-indigo-100">03</span>
              Contact & Location
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Email Address</label>
                <div class="relative">
                  <i class="bi bi-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="email" id='email' placeholder="you@example.com" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Phone Number</label>
                <div class="relative">
                  <i class="bi bi-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="tel" id='phone' placeholder="+263 7XX XXX XXX" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">District of Origin</label>
                <div class="relative">
                  <i class="bi bi-geo-alt absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="text" id='district' placeholder="e.g. Harare" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">City</label>
                <div class="relative">
                  <i class="bi bi-building absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="text" id='city' placeholder="e.g. Harare" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
            </div>
          </div>

          <!-- Section 4: Account Security -->
          <div class="group bg-white/60 hover:bg-white/90 p-5 sm:p-6 rounded-2xl border border-slate-200/70 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300/70">
            <h3 class="text-[11px] font-bold text-indigo-600 uppercase tracking-[0.15em] mb-5 flex items-center gap-2.5">
              <span class="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-extrabold flex items-center justify-center border border-indigo-100">04</span>
              Account Security
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Password</label>
                <div class="relative">
                  <i class="bi bi-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="password" id='pass' placeholder="Create a strong password" required class="w-full pl-10 pr-11 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400" oninput="checkStrength(this.value)">
                  <button type="button" onclick="togglePass('pass', this)" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                    <i class="bi bi-eye text-sm"></i>
                  </button>
                </div>
                <div class="mt-2.5 flex gap-1">
                  <div id="str1" class="h-1 flex-1 rounded-full bg-slate-200 transition-colors duration-300"></div>
                  <div id="str2" class="h-1 flex-1 rounded-full bg-slate-200 transition-colors duration-300"></div>
                  <div id="str3" class="h-1 flex-1 rounded-full bg-slate-200 transition-colors duration-300"></div>
                  <div id="str4" class="h-1 flex-1 rounded-full bg-slate-200 transition-colors duration-300"></div>
                </div>
                <p id="str_text" class="text-[10px] mt-1.5 text-slate-400 font-medium h-3"></p>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Confirm Password</label>
                <div class="relative">
                  <i class="bi bi-lock-fill absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="password" id='pass2' placeholder="Confirm your password" required class="w-full pl-10 pr-11 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400" oninput="checkMatch()">
                  <button type="button" onclick="togglePass('pass2', this)" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                    <i class="bi bi-eye text-sm"></i>
                  </button>
                </div>
                <p id="match_text" class="text-[10px] mt-3.5 text-slate-400 font-medium h-3"></p>
              </div>
            </div>
          </div>

          <!-- Section 5: Parent/Guardian -->
          <div class="group bg-indigo-50/40 hover:bg-indigo-50/60 p-5 sm:p-6 rounded-2xl border border-indigo-100/60 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100/40 hover:border-indigo-200/60">
            <h3 class="text-[11px] font-bold text-indigo-700 uppercase tracking-[0.15em] mb-5 flex items-center gap-2.5">
              <span class="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-[10px] font-extrabold flex items-center justify-center border border-indigo-200">05</span>
              Parent / Guardian Details
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="md:col-span-2">
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Full Name</label>
                <div class="relative">
                  <i class="bi bi-people absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="text" id='g_name' placeholder="Parent's full name" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Phone Number</label>
                <div class="relative">
                  <i class="bi bi-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none"></i>
                  <input type="tel" id='g_phone' placeholder="+263 7XX XXX XXX" required class="w-full pl-10 pr-4 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all duration-200 placeholder:text-slate-400">
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button type="submit" id='signup_btn' class="group/btn relative w-full flex items-center justify-center gap-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-slate-900/15 hover:shadow-xl hover:shadow-slate-900/25 focus:outline-none focus:ring-4 focus:ring-slate-400/20 active:scale-[0.98] overflow-hidden" onclick="register();">
              <span class="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/10 to-cyan-600/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></span>
              <span class="relative z-10 flex items-center gap-2.5">
                Create Account
                <i class="bi bi-arrow-right text-base transition-transform duration-300 group-hover/btn:translate-x-1"></i>
              </span>
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
`;

// Helper functions for password UX
function togglePass(id, btn) {
  const inp = document.getElementById(id);
  const ico = btn.querySelector('i');
  if (inp.type === 'password') {
    inp.type = 'text';
    ico.className = 'bi bi-eye-slash text-sm';
  } else {
    inp.type = 'password';
    ico.className = 'bi bi-eye text-sm';
  }
}

function checkStrength(val) {
  const bars = [document.getElementById('str1'), document.getElementById('str2'), document.getElementById('str3'), document.getElementById('str4')];
  const label = document.getElementById('str_text');
  let score = 0;
  if (val.length >= 6) score++;
  if (val.length >= 10) score++;
  if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
  if (/[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val)) score++;

  const colors = ['bg-slate-200', 'bg-red-400', 'bg-amber-400', 'bg-emerald-400', 'bg-emerald-500'];
  const labels = ['', 'Weak — add more characters', 'Fair — try adding symbols', 'Good — almost there', 'Strong password'];

  bars.forEach((b, i) => {
    b.className = 'h-1 flex-1 rounded-full transition-colors duration-300 ' + (i < score ? colors[score] : 'bg-slate-200');
  });
  label.textContent = val.length > 0 ? labels[score] : '';
  label.className = 'text-[10px] mt-1.5 font-medium h-3 ' + (score <= 1 ? 'text-red-500' : score === 2 ? 'text-amber-500' : 'text-emerald-500');
}

function checkMatch() {
  const p1 = document.getElementById('pass').value;
  const p2 = document.getElementById('pass2').value;
  const label = document.getElementById('match_text');
  if (p2.length === 0) { label.textContent = ''; return; }
  if (p1 === p2) {
    label.textContent = 'Passwords match';
    label.className = 'text-[10px] mt-3.5 font-medium h-3 text-emerald-500';
  } else {
    label.textContent = 'Passwords do not match';
    label.className = 'text-[10px] mt-3.5 font-medium h-3 text-red-500';
  }
}