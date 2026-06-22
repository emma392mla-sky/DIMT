const dashboard = `
<div class="flex flex-col h-full space-y-4">

    <!-- SEARCH -->
    <div>
        <div id="SEARCH_RESULTS" class="hidden mt-1 bg-white border rounded-lg shadow-lg max-h-40 overflow-y-auto text-sm"></div>
    </div>

    <!-- STATS -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">

        <div class="group bg-white rounded-xl border border-gray-100 p-3 sm:p-4 flex items-start justify-between gap-2 hover:shadow-md hover:border-gray-200 transition-all duration-200 cursor-default">
            <div class="min-w-0">
                <p class="text-[0.65rem] sm:text-xs text-gray-400 font-medium uppercase tracking-wide truncate">Students</p>
                <p id="STAT_STUDENTS" class="text-xl sm:text-2xl font-bold text-gray-800 mt-0.5">0</p>
            </div>
            <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-users text-xs sm:text-sm"></i>
            </span>
        </div>

        <div onclick="show_total_enroll_requests(1)" class="group bg-white rounded-xl border border-gray-100 p-3 sm:p-4 flex items-start justify-between gap-2 hover:shadow-md hover:border-amber-200 transition-all duration-200 cursor-pointer">
            <div class="min-w-0">
                <p class="text-[0.65rem] sm:text-xs text-gray-400 font-medium uppercase tracking-wide truncate">Intake</p>
                <p id="intake_requests" class="text-xl sm:text-2xl font-bold text-gray-800 mt-0.5">0</p>
            </div>
            <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-inbox text-xs sm:text-sm"></i>
            </span>
        </div>

        <div onclick="Run(4)" class="group bg-white rounded-xl border border-gray-100 p-3 sm:p-4 flex items-start justify-between gap-2 hover:shadow-md hover:border-violet-200 transition-all duration-200 cursor-pointer">
            <div class="min-w-0">
                <p class="text-[0.65rem] sm:text-xs text-gray-400 font-medium uppercase tracking-wide truncate">Books</p>
                <p id="STAT_BOOKS" class="text-xl sm:text-2xl font-bold text-gray-800 mt-0.5">0</p>
            </div>
            <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-violet-50 text-violet-500 flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-book text-xs sm:text-sm"></i>
            </span>
        </div>

        <div onclick="show_total_exam_applied(1)" class="group bg-white rounded-xl border border-gray-100 p-3 sm:p-4 flex items-start justify-between gap-2 hover:shadow-md hover:border-rose-200 transition-all duration-200 cursor-pointer">
            <div class="min-w-0">
                <p class="text-[0.65rem] sm:text-xs text-gray-400 font-medium uppercase tracking-wide truncate">Exams</p>
                <p id="sit_exam" class="text-xl sm:text-2xl font-bold text-gray-800 mt-0.5">0</p>
            </div>
            <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-clipboard-check text-xs sm:text-sm"></i>
            </span>
        </div>

        <!-- 5th card spans full width on mobile (2-col grid), single col on lg -->
        <div onclick="read_total_messages_from_students(1)" class="group col-span-2 lg:col-span-1 bg-white rounded-xl border border-gray-100 p-3 sm:p-4 flex items-center justify-between gap-3 hover:shadow-md hover:border-emerald-200 transition-all duration-200 cursor-pointer">
            <div class="min-w-0 flex items-center gap-3">
                <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-envelope text-xs sm:text-sm"></i>
                </span>
                <div class="min-w-0">
                    <p class="text-[0.65rem] sm:text-xs text-gray-400 font-medium uppercase tracking-wide">Messages</p>
                    <p class="text-xs sm:text-sm text-gray-500 mt-0.5">Total: <b id="total_msgs" class="text-gray-800">0</b></p>
                </div>
            </div>
            <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex-shrink-0">Inbox</span>
        </div>

    </div>

    <!-- BOTTOM PANELS -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">

        <div class="bg-white rounded-xl shadow-sm border p-4 flex flex-col h-[420px]">
            <div class="flex items-center justify-between mb-3 shrink-0">
                <h3 class="font-semibold text-gray-700 text-sm">Recent Activity</h3>
                <i class="fa-solid fa-clock-rotate-left text-gray-400 text-sm"></i>
            </div>
            <div id="ACTIVITY_LIST" class="space-y-3 overflow-y-auto flex-1 pr-1"></div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border p-4 flex flex-col h-[420px]">
            <div class="flex items-center justify-between mb-3 shrink-0">
                <h3 class="font-semibold text-gray-700 text-sm">Students by Program</h3>
                <i class="fa-solid fa-chart-pie text-gray-400 text-sm"></i>
            </div>
            <div id="PROGRAM_INFO" class="space-y-3 overflow-y-auto flex-1 pr-1"></div>
        </div>

    </div>
</div>
`;