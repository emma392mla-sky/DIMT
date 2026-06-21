const settings = `
<div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">

    <h2 class="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-4 mb-6">System Settings</h2>

    <div class="flex flex-wrap gap-2 mb-6 border-b border-gray-100 pb-4">

        <button onclick="
            document.querySelectorAll('.settings-tab-content').forEach(e=>e.classList.add('hidden'));
            document.getElementById('tab-general').classList.remove('hidden');
            this.parentElement.querySelectorAll('button').forEach(b=>{
                b.classList.remove('bg-blue-600','text-white','border-transparent');
                b.classList.add('bg-gray-50','text-gray-500','border','border-gray-200');
            });
            this.classList.remove('bg-gray-50','text-gray-500','border','border-gray-200');
            this.classList.add('bg-blue-600','text-white','border-transparent');
        "
        class="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide bg-blue-600 text-white border border-transparent transition-colors">
            General
        </button>

        <button onclick="
            document.querySelectorAll('.settings-tab-content').forEach(e=>e.classList.add('hidden'));
            document.getElementById('tab-calendar').classList.remove('hidden');
            this.parentElement.querySelectorAll('button').forEach(b=>{
                b.classList.remove('bg-blue-600','text-white','border-transparent');
                b.classList.add('bg-gray-50','text-gray-500','border','border-gray-200');
            });
            this.classList.remove('bg-gray-50','text-gray-500','border','border-gray-200');
            this.classList.add('bg-blue-600','text-white','border-transparent');
        "
        class="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide bg-gray-50 text-gray-500 border border-gray-200 transition-colors">
            Calendar
        </button>

        <button onclick="
            document.querySelectorAll('.settings-tab-content').forEach(e=>e.classList.add('hidden'));
            document.getElementById('tab-events').classList.remove('hidden');
            this.parentElement.querySelectorAll('button').forEach(b=>{
                b.classList.remove('bg-blue-600','text-white','border-transparent');
                b.classList.add('bg-gray-50','text-gray-500','border','border-gray-200');
            });
            this.classList.remove('bg-gray-50','text-gray-500','border','border-gray-200');
            this.classList.add('bg-blue-600','text-white','border-transparent');
        "
        class="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide bg-gray-50 text-gray-500 border border-gray-200 transition-colors">
            Events
        </button>

        <button id='del' onclick="
            document.querySelectorAll('.settings-tab-content').forEach(e=>e.classList.add('hidden'));
            document.getElementById('tab-delete').classList.remove('hidden');
            this.parentElement.querySelectorAll('button').forEach(b=>{
                b.classList.remove('bg-blue-600','text-white','border-transparent');
                b.classList.add('bg-gray-50','text-gray-500','border','border-gray-200');
            });
            this.classList.remove('bg-gray-50','text-gray-500','border','border-gray-200');
            this.classList.add('bg-blue-600','text-white','border-transparent');
        "
        class="px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide bg-gray-50 text-gray-500 border border-gray-200 transition-colors">
            Delete Student
        </button>

    </div>

    <!-- GENERAL -->
    <div id="tab-general" class="settings-tab-content">
        <div class="grid md:grid-cols-2 gap-4">
            <div class="border border-gray-200 rounded-xl p-5 flex items-center justify-between bg-gray-50/50">
                <div>
                    <h3 class="text-sm font-semibold text-gray-900">Exam Registration</h3>
                    <p class="text-xs text-gray-500 mt-1">Allow students to register for exams</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" onclick="system('exam',this.checked)" id="toggleExamReg" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all after:shadow-sm peer-checked:after:translate-x-full"></div>
                </label>
            </div>

            <div class="border border-gray-200 rounded-xl p-5 flex items-center justify-between bg-gray-50/50">
                <div>
                    <h3 class="text-sm font-semibold text-gray-900">Candidate Applications</h3>
                    <p class="text-xs text-gray-500 mt-1">Allow candidates to apply</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" onclick="system('apply',this.checked)" id="toggleCandidateApp" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all after:shadow-sm peer-checked:after:translate-x-full"></div>
                </label>
            </div>
        </div>
    </div>

    <!-- CALENDAR -->
    <div id="tab-calendar" class="settings-tab-content hidden">
        <div id="mycal" class="border border-gray-200 rounded-xl p-5 h-[70vh] overflow-auto bg-gray-50/30"></div>
    </div>

    <!-- EVENTS -->
    <div id="tab-events" class="settings-tab-content hidden">
        <div class="h-[65vh] flex flex-col border border-gray-200 rounded-xl p-6 bg-gray-50/30">
            <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Academic Calendar Settings</h3>
            
            <div class="flex flex-col sm:flex-row gap-3 mb-5">
                <input type="date" id="event_date" class="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                <input type="text" id="event_label" list="events" placeholder="Event label" class="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                <button onclick="createEVENT()" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                    Set Event
                </button>
            </div>

            <datalist id="events">
                <option value="General Assembly">
                <option value="Trip">
                <option value="Registration">
            </datalist>

            <div id="listEVENTS" class="flex-1 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-white">
                <div class="text-center text-gray-400 text-sm py-6">Loading events...</div>
            </div>
        </div>
    </div>

    <!-- DELETE -->
    <div id="tab-delete" class="settings-tab-content hidden">
        <div class="border border-red-100 rounded-xl p-6 bg-red-50/30">
            <nav id='panel'>
                <h3 class="text-base font-semibold text-gray-900 mb-1">Delete Student Record</h3>
                <p class="text-xs text-gray-500 mb-5">Search and permanently remove a student.</p>
            </nav>
            
            <div id='manage_profile' class="flex flex-col sm:flex-row gap-3 mb-4">
                <input type="text" id="deleteStudentId" placeholder="Enter Student ID..." onkeyup="deleteStudent()" class="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all">
                <button onclick="deleteNOW()" id='del_btn' class="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500/30" style="display:none;">
                    Delete Record
                </button>
                <input type='hidden' id='key'>
            </div>

            <div id="deleteMsg" class="min-h-[150px] border border-gray-200 rounded-lg bg-white p-4">
                <div class="flex flex-col items-center justify-center text-center py-8 text-gray-400">
                    <i class="bi bi-search text-3xl mb-3 text-gray-300"></i>
                    <p class="text-sm">Search for a student to view details</p>
                </div>
            </div>
        </div>
    </div>

</div>
`;
