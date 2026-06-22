

//login card

logins = `
  <div class="w-full max-w-md mx-auto relative animate-[fadeIn_0.6s_ease-out] pt-4 pb-8 px-4 sm:px-0">

    <div class="overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-100/40 border border-blue-100">

        <!-- Top Accent -->
        <div class="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500"></div>

        <!-- Header -->
        <div class="px-6 sm:px-8 pt-7 pb-6">

            <div class="flex items-center gap-3 mb-4">

                <div class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <i class="bi bi-person-circle text-blue-600 text-xl"></i>
                </div>

                <div>
                    <h2 class="text-2xl font-bold text-slate-900">
                        Welcome Back 
                    </h2>

                    <p class="text-sm text-slate-500">
                        Sign in to continue your academic journey
                    </p>
                </div>

            </div>

        </div>

        <!-- Form -->
        <form class="px-6 sm:px-8 pb-8 space-y-5" onsubmit="event.preventDefault();">

            <div>

                <label class="block text-sm font-semibold text-slate-700 mb-2">
                    Student ID
                </label>

                <input
                    id="st_id"
                    type="text"
                    placeholder="20200501"
                    required
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all">

            </div>

            <div>

                <label class="block text-sm font-semibold text-slate-700 mb-2">
                    Password
                </label>

                <input
                    id="st_pwd"
                    type="password"
                    placeholder="••••••••"
                    required
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all">

            </div>

            <div class="flex justify-end">

                <a href="#"
                    class="text-sm font-medium text-blue-600 hover:text-blue-700">
                    Forgot password?
                </a>

            </div>

            <button
                id="signin_btn"
                onclick="signin()"
                type="submit"
                class="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">

                Sign In

            </button>

        </form>

    </div>

</div>
`;

