const dashboard = `
<div class="flex flex-col h-full space-y-4">

    <!-- SEARCH -->
    <div>
        

        <div id="SEARCH_RESULTS" class="hidden mt-1 bg-white border rounded-lg shadow-lg max-h-40 overflow-y-auto text-sm"></div>
    </div>

    <!-- STATS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">

        <div class="bg-white rounded-xl shadow-sm border p-4 flex items-center justify-between">
            <div>
                <p class="text-xs text-gray-500">Enrolled Students</p>
                <p id="STAT_STUDENTS" class="text-2xl font-bold text-blue-600">0</p>
            </div>
            <i class="bi bi-people-fill text-blue-500 text-2xl"></i>
        </div>

        <div onclick="show_total_enroll_requests(1)" class="cursor-pointer bg-white rounded-xl shadow-sm border p-4 flex items-center justify-between">
            <div>
                <p class="text-xs text-gray-500">Intake Requests</p>
                <p id="intake_requests" class="text-2xl font-bold text-blue-500 ">0</p>
            </div>
            <i class="bi bi-inbox-fill text-blue-500  text-2xl"></i>
        </div>

        <div onclick="Run(4)" class="cursor-pointer bg-white rounded-xl shadow-sm border p-4 flex items-center justify-between">
            <div>
                <p class="text-xs text-gray-500">Library Books</p>
                <p id="STAT_BOOKS" class="text-2xl font-bold text-blue-500 ">0</p>
            </div>
            <i class="bi bi-book-fill text-blue-500  text-2xl"></i>
        </div>

        <div onclick="show_total_exam_applied(1)" class="cursor-pointer bg-white rounded-xl shadow-sm border p-4 flex items-center justify-between">
            <div>
                <p class="text-xs text-gray-500">Exam Requests</p>
                <p id="sit_exam" class="text-2xl font-bold text-blue-500 ">0</p>
            </div>
            <i class="bi bi-inbox-fill text-blue-500  text-2xl"></i>
        </div>

        <div onclick='read_total_messages_from_students(1)' class="cursor-pointer bg-white rounded-xl shadow-sm border p-4 flex items-center justify-between">

    <div>
        <p class="text-xs text-gray-500">Messages</p>
        <p class="text-2xl font-bold text-blue-500">Inbox</p>

        <p class="text-xs text-gray-500 mt-1">
            <span class="text-green-600">Total: <b id="total_msgs">0</b></span>
        </p>
    </div>

    <i class="bi bi-envelope-fill text-blue-500 text-2xl"></i>
</div>

    </div>

    <!-- ENROLLED STUDENTS -->

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
        <div class="bg-white rounded-xl shadow-sm border p-4 flex flex-col h-[420px]">

            <div class="flex items-center justify-between mb-3 shrink-0">
                <h3 class="font-semibold text-gray-700 text-sm">Recent Activity</h3>
                <i class="bi bi-clock-history text-gray-400"></i>
            </div>

            <div id="ACTIVITY_LIST" class="space-y-3 overflow-y-auto flex-1 pr-1">
                <!-- dynamic items here -->
            </div>

        </div>

    <!-- STUDENT PERFOMANCE -->

        <div class="bg-white rounded-xl shadow-sm border p-4 flex flex-col h-[420px]">

            <div class="flex items-center justify-between mb-3 shrink-0">
                <h3 class="font-semibold text-gray-700 text-sm">Students by Program</h3>
                <i class="bi bi-pie-chart text-gray-400"></i>
            </div>

            <div id="PROGRAM_INFO" class="space-y-3 overflow-y-auto flex-1 pr-1">
                <!-- dynamic items here -->
            </div>

        </div>
        

    </div>
</div>
`;