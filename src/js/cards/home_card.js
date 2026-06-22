
// main dashboard after successful login
access = `
<div class="min-h-screen bg-[#f0f4f8] font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 p-4 md:p-6 lg:p-8 space-y-5">

    <!-- Hero Section -->
    <div class="animate-[fadeIn_0.6s_ease-out] relative rounded-2xl overflow-hidden shadow-lg shadow-blue-600/10">

        <!-- Gradient background -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

        <!-- Decorative shapes -->
        <div class="absolute top-[-40px] right-[-40px] w-80 h-80 bg-white/[0.06] rounded-full"></div>
        <div class="absolute bottom-[-60px] left-[-30px] w-64 h-64 bg-white/[0.04] rounded-full"></div>
        <div class="absolute top-1/2 left-1/3 w-40 h-40 bg-amber-400/[0.08] rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-400/[0.1] rounded-full blur-2xl"></div>

        <!-- Subtle pattern overlay -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>

        <div class="relative grid lg:grid-cols-12 gap-0 items-stretch">

            <!-- Left Content -->
            <div class="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div class="inline-flex items-center gap-2 text-[11px] font-semibold text-white/80 bg-white/[0.12] border border-white/[0.15] px-3 py-1.5 rounded-full tracking-wide uppercase w-fit backdrop-blur-sm">
                    <i class="bi bi-mortarboard-fill text-[10px] text-amber-300"></i>
                    <span>DIMT Student Portal</span>
                </div>

                <h1 class="text-[30px] sm:text-4xl lg:text-[44px] font-extrabold text-white mt-6 tracking-[-0.035em] leading-[1.1]">
                    Hi,
                    <span id='db_st_name' class="text-3xl">Student</span>
                </h1>

                <p class="mt-4 text-blue-100/70 max-w-md leading-relaxed text-[15px]">
                    Access your courses, results, schedules, and academic resources from your personalized dashboard.
                </p>

                <div class="flex flex-wrap gap-3 mt-8">
                    <button onclick='view_results()' class="bg-white/[0.12] text-white hover:bg-white/[0.2] border border-white/[0.2] hover:border-white/[0.3] px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97] backdrop-blur-sm">
                        View Results
                        <i class="bi bi-arrow-right ml-1 text-xs inline-block transition-transform duration-200 group-hover:translate-x-0.5"></i>
                    </button>
                    <button class="bg-white/[0.12] text-white hover:bg-white/[0.2] border border-white/[0.2] hover:border-white/[0.3] px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97] backdrop-blur-sm">
                        <i class="bi bi-download mr-1.5 text-xs opacity-70"></i>
                        Download Timetable
                    </button>
                </div>
            </div>

            <!-- Right — Profile Card -->
            <div class="lg:col-span-5 p-5 sm:p-6 lg:p-8 flex flex-col justify-center relative">

                <div class="bg-white/[0.1] backdrop-blur-md border border-white/[0.15] rounded-2xl p-5 relative overflow-hidden">
                    <!-- Card inner glow -->
                    <div class="absolute top-0 right-0 w-32 h-32 bg-white/[0.05] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <div class="relative flex items-center gap-4">
                        <div class="relative w-16 h-16 rounded-2xl bg-white/[0.15] border border-white/[0.2] overflow-hidden flex-shrink-0 shadow-lg">
                            <div class="absolute inset-0 flex items-center justify-center text-white/30 z-0">
                                <i class="bi bi-person-fill text-3xl"></i>
                            </div>
                            <img id='pix1' onclick="p_pic(this.src);" src="src/img/person.svg" class="cursor-pointer absolute inset-0 w-full h-full object-cover z-10">
                        </div>
                        
                        <div class="min-w-0">
                            <h3 class="font-bold text-[15px] text-white leading-tight truncate" id='db_st_id'>loading...</h3>
                            <p class="text-blue-200/60 text-xs mt-0.5 truncate" id="db_st_program"></p>
                            <div class="mt-2 inline-flex items-center gap-1.5 text-emerald-300 text-[11px] font-semibold bg-emerald-400/15 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                                <span class="relative flex h-1.5 w-1.5">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-60"></span>
                                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300"></span>
                                </span>
                                Active
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 mt-5">
                        <div class="bg-white/[0.08] border border-white/[0.1] rounded-xl py-3.5 text-center backdrop-blur-sm">
                            <p class="text-[10px] text-blue-200/50 font-semibold tracking-widest uppercase">Graded</p>
                            <p class="text-2xl font-bold text-white mt-1 tracking-tight" id='st_ttrecords'>
                                <span class="inline-block w-6 h-5 rounded bg-white/10 animate-pulse"></span>
                            </p>
                        </div>
                        <div class="bg-white/[0.08] border border-white/[0.1] rounded-xl py-3.5 text-center backdrop-blur-sm">
                            <p class="text-[10px] text-blue-200/50 font-semibold tracking-widest uppercase">Average</p>
                            <p class="text-2xl font-bold text-white mt-1 tracking-tight" id='st_ttaverage'>
                                <span class="inline-block w-6 h-5 rounded bg-white/10 animate-pulse"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

        <div class="bg-white rounded-xl border border-slate-100 px-4 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                <i class="bi bi-book text-blue-500 text-sm"></i>
            </div>
            <p class="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Courses</p>
            <p class="text-2xl font-bold text-slate-900 mt-1 tracking-tight" id="all_courses">
                <span class="inline-block w-7 h-6 rounded bg-slate-100 animate-pulse"></span>
            </p>
        </div>

        <div class="bg-white rounded-xl border border-slate-100 px-4 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
                <i class="bi bi-trophy text-amber-500 text-sm"></i>
            </div>
            <p class="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">GPA</p>
            <p class="text-2xl font-bold text-slate-900 mt-1 tracking-tight" id="st_per">
                <span class="inline-block w-7 h-6 rounded bg-slate-100 animate-pulse"></span>
            </p>
        </div>

        <div onclick="showCAL()" class="bg-white rounded-xl border border-slate-100 px-4 py-4 shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-0.5 hover:border-blue-100 transition-all duration-300">
            <div class="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center mb-3">
                <i class="bi bi-calendar3 text-cyan-600 text-sm"></i>
            </div>
            <p class="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Schedule</p>
            <p class="text-sm font-semibold text-slate-700 mt-1">View Calendar <i class="bi bi-arrow-right text-[10px] text-slate-300 ml-0.5"></i></p>
        </div>

        <div onclick="contact_admin()" class="bg-white rounded-xl border border-slate-100 px-4 py-4 shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-0.5 hover:border-blue-100 transition-all duration-300">
            <div class="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center mb-3">
                <i class="bi bi-headset text-rose-500 text-sm"></i>
            </div>
            <p class="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Support</p>
            <p class="text-sm font-semibold text-slate-700 mt-1">Contact Admin <i class="bi bi-arrow-right text-[10px] text-slate-300 ml-0.5"></i></p>
        </div>

    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-5">

        <!-- Personal Information -->
        <div class="bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col h-[380px] overflow-hidden hover:shadow-md transition-shadow duration-300">
            
            <div class="px-5 py-3.5 border-b border-slate-100 shrink-0 flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                    <i class="bi bi-person-vcard text-blue-500 text-[11px]"></i>
                </div>
                <h3 class="text-sm font-semibold text-slate-900">Personal Information</h3>
            </div>
            
            <div class="flex-1 overflow-y-auto px-5 py-2">

                <div class="flex justify-between items-center py-3 border-b border-slate-50">
                    <span class="text-slate-400 text-[12px]">Full Name</span>
                    <span id="db_st_PROFILEname" class="font-medium text-slate-700 text-right max-w-[160px] truncate text-[13px]">
                        <span class="inline-block w-24 h-3.5 rounded bg-slate-100 animate-pulse"></span>
                    </span>
                </div>

                <div class="flex justify-between items-center py-3 border-b border-slate-50">
                    <span class="text-slate-400 text-[12px]">Student ID</span>
                    <span id="db_st_PROFILEid" class="font-mono font-medium text-slate-700 text-right text-[13px]">
                        <span class="inline-block w-20 h-3.5 rounded bg-slate-100 animate-pulse"></span>
                    </span>
                </div>

                <div class="flex justify-between items-center py-3 border-b border-slate-50">
                    <span class="text-slate-400 text-[12px]">Program</span>
                    <span id="db_st_PROFILEprogram" class="font-medium text-slate-700 text-right max-w-[160px] truncate text-[13px]">
                        <span class="inline-block w-24 h-3.5 rounded bg-slate-100 animate-pulse"></span>
                    </span>
                </div>

                <div class="flex justify-between items-center py-3 border-b border-slate-50">
                    <span class="text-slate-400 text-[12px]">Exam Board</span>
                    <span id="db_st_board" class="font-medium text-slate-700 text-right text-[13px]">
                        <span class="inline-block w-20 h-3.5 rounded bg-slate-100 animate-pulse"></span>
                    </span>
                </div>

                <div class="flex justify-between items-center py-3 border-b border-slate-50">
                    <span class="text-slate-400 text-[12px]">Level</span>
                    <span id="db_st_level" class="font-medium text-slate-700 text-right text-[13px]">
                        <span class="inline-block w-12 h-3.5 rounded bg-slate-100 animate-pulse"></span>
                    </span>
                </div>

                <div class="flex justify-between items-center py-3 border-b border-slate-50">
                    <span class="text-slate-400 text-[12px]">Email</span>
                    <span id="db_st_email" class="font-medium text-slate-700 text-right max-w-[150px] truncate text-[13px]">
                        <span class="inline-block w-24 h-3.5 rounded bg-slate-100 animate-pulse"></span>
                    </span>
                </div>

                <div class="flex justify-between items-center py-3">
                    <span class="text-slate-400 text-[12px]">Phone</span>
                    <span id="db_st_phone" class="font-medium text-slate-700 text-right text-[13px]">
                        <span class="inline-block w-24 h-3.5 rounded bg-slate-100 animate-pulse"></span>
                    </span>
                </div>

            </div>
        </div>

        <!-- Messages -->
        <div class="bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col h-[380px] overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div class="px-5 py-3.5 border-b border-slate-100 shrink-0 flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                    <i class="bi bi-megaphone text-amber-500 text-[11px]"></i>
                </div>
                <h3 class="text-sm font-semibold text-slate-900">Announcements</h3>
            </div>
            
            <div id='zex' class="flex-1 overflow-y-auto p-4 space-y-2">
                <div class="h-14 rounded-lg bg-slate-50 animate-pulse"></div>
                <div class="h-14 rounded-lg bg-slate-50 animate-pulse"></div>
                <div class="h-14 rounded-lg bg-slate-50 animate-pulse"></div>
                <div class="h-14 rounded-lg bg-slate-50 animate-pulse"></div>
            </div>
        </div>

        <!-- Results -->
        <div class="bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col h-[380px] overflow-hidden hover:shadow-md transition-shadow duration-300" id='results_section'>
            <div class="px-5 py-3.5 border-b border-slate-100 shrink-0 flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <i class="bi bi-journal-check text-emerald-500 text-[11px]"></i>
                </div>
                <h3 class="text-sm font-semibold text-slate-900">Exam Results</h3>
            </div>
            
            <div id="st_perfomance" class="flex-1 overflow-y-auto p-4">
                <div class="flex flex-col items-center justify-center py-10 text-slate-300">
                    <i class="bi bi-hourglass-split text-3xl mb-3"></i>
                    <span class="inline-block w-20 h-3.5 rounded bg-slate-100 animate-pulse mb-2"></span>
                    <span class="inline-block w-28 h-3 rounded bg-slate-100 animate-pulse"></span>
                </div>
            </div>
        </div>

    </div>
</div>
`;





