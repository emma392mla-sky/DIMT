

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
  <div class="w-full max-w-2xl mx-auto px-4 py-6 animate-[fadeIn_0.6s_ease-out]">

    <div class="overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-100/30 border border-blue-100">

        <!-- Hero Header -->
        <div class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 sm:px-8 py-8 text-white">

            <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div class="relative flex items-center gap-4">

                <div class="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <i class="bi bi-mortarboard-fill text-2xl"></i>
                </div>

                <div>
                    <h2 class="text-2xl sm:text-3xl font-bold">
                        Start Your Application
                    </h2>

                    <p class="text-blue-100 text-sm mt-1">
                        Join DIMT and begin your journey toward professional success.
                    </p>
                </div>

            </div>

        </div>

        <!-- Form -->
        <div class="p-6 sm:p-8 space-y-8">

            <!-- Personal Information -->
            <div>

                <h3 class="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
                    <i class="bi bi-person-circle text-blue-600"></i>
                    Personal Information
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">
                            First Name
                        </label>

                        <input
                            type="text"
                            id="apply_name"
                            placeholder="John"
                            required
                            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">
                            Last Name
                        </label>

                        <input
                            type="text"
                            id="apply_surname"
                            placeholder="Doe"
                            required
                            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="apply_email"
                            placeholder="you@example.com"
                            required
                            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            id="apply_phone"
                            placeholder="+265 XXX XXX XXX"
                            required
                            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all">
                    </div>

                </div>

            </div>

            <!-- Program Selection -->
            <div>

                <h3 class="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
                    <i class="bi bi-book-half text-blue-600"></i>
                    Program Selection
                </h3>

                <div>

                    <label class="block text-sm font-medium text-slate-700 mb-2">
                        Program to Pursue
                    </label>

                    <select
                        required
                        id="apply_program"
                        class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all">

                        <option value="" disabled selected>
                            Select your preferred program
                        </option>

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

            <!-- Fee Notice -->
            <div class="rounded-2xl bg-blue-50 border border-blue-100 p-5">

                <div class="flex gap-3">

                    <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <i class="bi bi-info-circle-fill text-blue-600"></i>
                    </div>

                    <div>

                        <h4 class="font-semibold text-blue-900">
                            Application Fees
                        </h4>

                        <p class="text-sm text-blue-700 mt-2 leading-relaxed">
                            Application Fee:
                            <span class="font-semibold">
                                MWK 15,000
                            </span>
                            <br>

                            Medical Examination Fee:
                            <span class="font-semibold">
                                MWK 10,000
                            </span>
                        </p>

                    </div>

                </div>

            </div>

            <!-- Submit -->
            <button
                id="apply_btn"
                onclick="applyNOW()"
                class="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300">

                Submit Application

            </button>

        </div>

    </div>

</div>
`;
}
document.getElementById("view").innerHTML=apply;
});


}

