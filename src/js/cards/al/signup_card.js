
// signup card

signup = `
  <div class="w-full max-w-4xl mx-auto relative animate-[fadeIn_0.8s_ease-in-out]">
    <!-- Decorative Background Orbs -->
    <div class="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
    <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

    <div class="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-10 overflow-hidden">
      
      <!-- Header -->
      <div class="text-center mb-10">
        <div class="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-5">
          <i class="bi bi-person-plus-fill text-white text-xl"></i>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
          Create Account
        </h2>
        <p class="mt-2 text-sm text-slate-500 font-medium">
          Start your academic journey with us today.
        </p>
      </div>

     
      <form class="space-y-8" onsubmit="event.preventDefault();">

        
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Personal Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">STUDENT ID</label>
              <input type="text" id='identity' placeholder="e.g. STU-2024-001" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">NAME</label>
              <input type="text" id='name' placeholder="First name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">SURNAME</label>
              <input type="text" id='surname' placeholder="Last name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Section 2: Academic Details -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Academic Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5">
            
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PROGRAM</label>
              <select required id='pg' class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none shadow-sm bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
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

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">EXAM BOARD</label>
              <select required id='board' class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none shadow-sm bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
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

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">LEVEL</label>
              <select required id='level' class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none shadow-sm bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
                <option value="" disabled selected>Select level</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
                <option value="6">Level 6</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Section 3: Contact & Location -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Contact & Location
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">EMAIL ADDRESS</label>
              <input type="email" id='email' placeholder="you@example.com" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PHONE NUMBER</label>
              <input type="tel" id='phone' placeholder="+263 7XX XXX XXX" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">DISTRICT OF ORIGIN</label>
              <input type="text" id='district' placeholder="e.g. Harare" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">CITY</label>
              <input type="text" id='city' placeholder="e.g. Harare" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Section 4: Account Security -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Account Security
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PASSWORD</label>
              <input type="password" id='pass' placeholder="Create a strong password" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">CONFIRM PASSWORD</label>
              <input type="password" id='pass2' placeholder="Confirm your password" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Section 5: Parent/Guardian -->
        <div class="bg-indigo-50/80 p-5 sm:p-6 rounded-2xl border border-indigo-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-700 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-700 rounded-full"></span> Parent / Guardian Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div class="md:col-span-2">
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">FULL NAME</label>
              <input type="text" id='g_name' placeholder="Parent's full name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">EMAIL ADDRESS</label>
              <input type="email" id='g_email' placeholder="parent@example.com" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PHONE NUMBER</label>
              <input type="tel" id='g_phone' placeholder="+263 7XX XXX XXX" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button type="submit" id='signup_btn' class="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-[0.98]" onclick="register();">
            Create Account <i class="bi bi-rocket-takeoff-fill"></i>
          </button>
        </div>

      </form>
    </div>
  </div>
`;

