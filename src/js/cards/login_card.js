
//login card

login = `
  <div class="w-full max-w-md mx-auto relative animate-[fadeIn_0.8s_ease-in-out]">
    <!-- Decorative Background Orbs -->
    <div class="absolute -top-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
    <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>

    <div class="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-10 overflow-hidden">
      
      
      <div class="text-center mb-8">
        <div class="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-5">
          <i class="bi bi-shield-lock-fill text-white text-xl"></i>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-slate-500 font-medium">
          Enter your credentials to access your account
        </p>
      </div>

      
      <form class="space-y-5" onsubmit="event.preventDefault();">
        
        <!-- id details -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">STUDENT #</label>
          <div class="relative">
            <i class="bi bi-person-vcard absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input id='st_id' type="text" value="" placeholder="20200501"
              required class="w-full pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 bg-white/60 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm"
            />
          </div>
        </div>


<div>
  <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PASSWORD</label>

  <div class="relative">
    <i class="bi bi-key absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>

    <input id="st_pwd" type="password" placeholder="••••••••" required
      class="w-full pl-11 pr-10 py-3.5 border rounded-2xl">

    <i id="togglePwd"
      class="bi bi-eye absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
      onclick="
        const input = document.getElementById('st_pwd');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
      ">
    </i>
  </div>
</div>

        
        <div class="flex items-center justify-between">
          <a href="#" class="text-xs font-bold text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
            Forgot password?
          </a>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button 
            type="submit" 
            onclick='signin()' id='signin_btn' class="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-[0.98]"
          >
            Sign In <i class="bi bi-arrow-right"></i>
          </button>
        </div>

      </form>
    </div>
  </div>
`;

