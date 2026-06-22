
// main dashboard after successful login
access = `
<div class="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:bg-blue-900 p-4 md:p-8 space-y-6">

    <!-- Hero Section -->
    <div class="animate-[fadeIn_0.8s_ease-in-out] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">

        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div class="relative z-10 grid lg:grid-cols-12 gap-8 items-center">

            <!-- Text Content -->
            <div class="lg:col-span-7">
                <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold border border-white/10">
                    <i class="bi bi-mortarboard-fill"></i> DIMT Student Portal
                </div>

                <h1 class="text-3xl lg:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                    Welcome Back, <span id='db_st_name'>Student</span>
                </h1>

                <p class="mt-3 text-blue-100/80 max-w-2xl leading-relaxed text-sm lg:text-[15px]">
                    Access your academic progress, courses, results, announcements, examination schedules, downloads, and student resources from one intelligent dashboard.
                </p>

                <div class="flex flex-wrap gap-3 mt-6">
                    <button onclick='view_results()' class="bg-white text-blue-700 hover:bg-blue-50 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-900/20">
                        View Results
                    </button>
                    <button class="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                        Download Timetable
                    </button>
                </div>
            </div>

            <!-- Profile Card -->
            <div class="lg:col-span-5 flex justify-start lg:justify-end">
                <div class="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-full max-w-[300px] shadow-xl">
                    <div class="flex items-center gap-4">
                        <!-- Avatar with Fallback Logic -->
                        <div class="relative w-16 h-16 rounded-xl bg-white/20 border-2 border-white/30 overflow-hidden flex-shrink-0">
                            <!-- Fallback Icon (Visible if image fails - Added bg-blue-600/30 for visibility) -->
                            <div class="absolute inset-0 flex items-center justify-center text-white/0 z-0 bg-blue-600/30">
                                <i class="bi bi-person-fill text-3xl"></i>
                            </div>
                            <!-- Profile Image -->
                            <img id='pix1' onclick="p_pic(this.src);" src="src/img/person.svg" class="cursor-pointer absolute inset-0 w-full h-full object-cover z-10">
                        
                        </div>
                        
                        <div class="min-w-0">
                            <h3 class="font-bold text-lg leading-tight truncate" id='db_st_id'>loading...</h3>
                            <p class="text-blue-200/70 text-xs mt-1 truncate" id="db_st_program"></p>
                            <div class="mt-2 inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide">
                                <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> Active
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/10">
                        <div class="bg-white/5 rounded-xl p-3 text-center">
                            <p class="text-[10px] text-blue-200/60 uppercase font-bold">Graded</p>
                            <h2 class="text-xl font-bold mt-1" id='st_ttrecords'><div class='skeleton'>...</div></h2>
                        </div>
                        <div class="bg-white/5 rounded-xl p-3 text-center">
                            <p class="text-[10px] text-blue-200/60 uppercase font-bold">AVG</p>
                            <h2 class="text-xl font-bold mt-1" id='st_ttaverage'><div class='skeleton'>...</div></h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Quick Stats (Compact) -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">

    <!-- All Courses -->
    <div class="bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 shadow-[0_4px_15px_-3px_rgba(15,23,42,0.1)] ">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">All Courses</p>
                <h2 class="text-[22px] font-extrabold text-slate-900 mt-0.5 leading-tight" id="all_courses">
                    <div class="skeleton w-7 h-5 rounded bg-slate-100 animate-pulse"></div>
                </h2>
            </div>
            <div class="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
                <i class="bi bi-book-half text-base text-slate-600"></i>
            </div>
        </div>
    </div>

    <!-- Performance -->
    <div class="bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 shadow-[0_8px_25px_-5px_rgba(15,23,42,0.18)]">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Performance</p>
                <h2 class="text-[22px] font-extrabold text-slate-900 mt-0.5 leading-tight" id="st_per">
                    <div class="skeleton w-7 h-5 rounded bg-slate-100 animate-pulse"></div>
                </h2>
            </div>
            <div class="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
                <i class="bi bi-award-fill text-base text-slate-600"></i>
            </div>
        </div>
    </div>

    <!-- Schedule -->
    <div onclick="showCAL()" class="group border-b-2 border-b-blue-600/50 pb-2 cursor-pointer bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 shadow-[0_4px_15px_-3px_rgba(15,23,42,0.1)] hover:shadow-[0_10px_30px_-5px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200">
        <div class="flex items-center justify-between">
            <div class="min-w-0">
                <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Schedule</p>
                <h3 class="text-sm font-bold text-slate-900 mt-0.5 leading-tight truncate">View Calendar</h3>
            </div>
            <div class="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 ml-2 group-hover:bg-slate-200 transition-colors">
                <i class="bi bi-calendar-event-fill text-base text-slate-600"></i>
            </div>
        </div>
    </div>

    <!-- Support -->
    <div onclick="contact_admin()" class="group cursor-pointer border-b-2 border-b-blue-600/50 pb-2 bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 shadow-[0_4px_15px_-3px_rgba(15,23,42,0.1)] hover:shadow-[0_10px_30px_-5px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200">
        <div class="flex items-center justify-between">
            <div class="min-w-0">
                <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Support</p>
                <h3 class="text-sm font-bold text-slate-900 mt-0.5 leading-tight truncate">Contact Admin</h3>
            </div>
            <div class="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 ml-2 group-hover:bg-slate-200 transition-colors">
                <i class="bi bi-chat-dots-fill text-base text-slate-600"></i>
            </div>
        </div>
    </div>

</div>

    <!-- Main Grid (Increased Height to 380px) -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <!-- Personal Information -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-[380px]">
            <!-- Fixed Header -->
            <div class="p-4 border-b border-slate-100 shrink-0 flex items-center justify-between bg-slate-50/50">
                <h3 class="text-base font-bold text-slate-800">Personal Information</h3>
                <i class="bi bi-person-vcard-fill text-blue-500"></i>
            </div>
            
            <!-- Scrollable Body -->
<div class="flex-1 overflow-y-auto p-4 space-y-1.5 text-sm pr-1">

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Full Name</span>
        <div id="db_st_PROFILEname" class="font-semibold text-slate-800 text-right max-w-[150px] truncate">
            <span class="skeleton inline-block w-24 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Student ID</span>
        <div id="db_st_PROFILEid" class="font-semibold text-slate-800 text-right">
            <span class="skeleton inline-block w-20 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Program</span>
        <div id="db_st_PROFILEprogram" class="font-semibold text-slate-800 text-right max-w-[150px] truncate">
            <span class="skeleton inline-block w-24 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Exam Board</span>
        <div id="db_st_board" class="font-semibold text-slate-800 text-right">
            <span class="skeleton inline-block w-20 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Level</span>
        <div id="db_st_level" class="font-semibold text-slate-800 text-right">
            <span class="skeleton inline-block w-12 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Email</span>
        <div id="db_st_email" class="font-semibold text-slate-800 text-right max-w-[140px] truncate">
            <span class="skeleton inline-block w-24 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2">
        <span class="text-slate-500">Phone</span>
        <div id="db_st_phone" class="font-semibold text-slate-800 text-right">
            <span class="skeleton inline-block w-24 h-4 rounded"></span>
        </div>
    </div>

</div>
        </div>

        <!-- personal messages -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-[380px]">
            <div class="p-4 border-b border-slate-100 shrink-0 flex items-center justify-between bg-slate-50/50">
                <h3 class="text-base font-bold text-slate-800">Messaes</h3>
                <i class="bi bi-megaphone-fill text-red-500"></i>
            </div>
            
            <div id='zex' class="flex-1 overflow-y-auto p-4 space-y-3 pr-1">
                <div class='skeleton h-16 rounded-lg'>loading...</div>
                <div class='skeleton h-16 rounded-lg'>loading...</div>
                <div class='skeleton h-16 rounded-lg'>loading...</div>
                <div class='skeleton h-16 rounded-lg'>loading...</div>
            </div>
        </div>

        <!-- Results -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-[380px]" id='results_section'>
            <div class="p-4 border-b border-slate-100 shrink-0 flex items-center justify-between bg-slate-50/50">
                <h3 class="text-base font-bold text-slate-800">Final Exam Results</h3>
                <i class="bi bi-journal-check text-blue-500 text-lg"></i>
            </div>
            
            <div id="st_perfomance" class="flex-1 overflow-y-auto p-4 space-y-2 pr-1">
                <div class="text-gray-400 text-center py-4">
                    <div class='skeleton w-20 h-4 mx-auto'>loading...</div>
                </div>
            </div>
        </div>

    </div>
</div>
`;





