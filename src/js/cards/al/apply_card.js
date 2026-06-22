

// apply card


function APPLY_REG(){



supabaseClient
  .from('system_settings')
  .select('*')
  .then(({ data, error }) => {

    if (error) {
      console.error(error);
      return;
    }

    const examValue2 = data?.[0]?.apply;
        
        
    if (examValue2 == 'false') {

  apply = `
<div class="animate-[fadeIn_0.8s_ease-in-out] min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-blue-50 p-6">

  <div class="max-w-md w-full bg-white border border-blue-100 rounded-3xl shadow-lg p-8 text-center">

    <div class="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-5">
      <i class="bi bi-people text-2xl"></i>
    </div>

    <h1 class="text-2xl font-extrabold text-blue-950 mb-2">
      Applications Not Open Yet
    </h1>

    <p class="text-sm text-blue-600 leading-relaxed">
      We’re currently preparing for the next intake. New student applications will open soon we’d be happy to have you join us when they do.
    </p>

    <div class="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
      <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      Coming Soon
    </div>

  </div>

</div>
`;
}else{
apply = `
  <div class="w-full max-w-xl mx-auto relative animate-[fadeIn_0.8s_ease-in-out]">
    <!-- Decorative Background Orbs -->
    <div class="absolute -top-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
    <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>

    <div class="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-10 overflow-hidden">
      
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-5">
          <i class="bi bi-file-earmark-arrow-up-fill text-white text-xl"></i>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
          Apply
        </h2>
        <p class="mt-2 text-sm text-slate-500 font-medium">
          Complete the form below to apply for your chosen program.
        </p>
      </div>

      <!-- Section 1: Personal Information -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Personal Information
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">NAME</label>
              <input type="text" id="apply_name" placeholder="First name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">SURNAME</label>
              <input type="text" id="apply_surname" placeholder="Last name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">EMAIL ADDRESS</label>
              <input type="email" id="apply_email" placeholder="you@example.com" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PHONE NUMBER</label>
              <input type="tel" id="apply_phone" placeholder="+263 8XX XXX XXX" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Section 2: Academic & Documents -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
          
          <!-- Program Selection -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PROGRAM TO PURSUE</label>
            <select required id="apply_program" class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none shadow-sm bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
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

        <!-- Important Notice -->
        <div class="bg-amber-50/80 border border-amber-200/60 rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
  <div class="flex-shrink-0 mt-0.5">
    <i class="bi bi-exclamation-triangle-fill text-amber-500 text-lg"></i>
  </div>

  <div>
    <h4 class="text-sm font-extrabold text-amber-900">
      Important Notice
    </h4>

    <p class="text-xs font-medium text-amber-800/80 mt-1">
      Upon acceptance, applicants are required to pay an
      <span class="font-extrabold text-amber-900">Application Fee of MWK 15,000</span>
      and a
      <span class="font-extrabold text-amber-900">Medical Examination Fee of MWK 10,000</span>.
    </p>
  </div>
</div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button id='apply_btn' onclick="applyNOW()" 
            class="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-[0.98]"
          >
            Submit Application <i class="bi bi-send-fill"></i>
          </button>
        </div>
    </div>
  </div>
`;
}
document.getElementById("view").innerHTML=apply;
});


}

