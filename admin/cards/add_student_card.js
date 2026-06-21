const add_student = `
<div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">
    <h2 class="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-4 mb-6">Student Registration</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
            <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Add Single Student</h3>
            <div class="space-y-3">
                <input type="text" required id="STU_ID" maxlength='7' placeholder="Student ID" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                <input type="text" required id="STU_NAME" maxlength='25' placeholder="First Name" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                <input type="text" required id="STU_SURNAME" maxlength='12' placeholder="Surname" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                <button id='add_btn' class="w-full mt-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30" onclick='ADD()'>Add Student</button>
            </div>
        </div>

        <div>
            <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Bulk Student Import</h3>
            <div class="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center bg-gray-50/50">
                <div class="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                    <i class="bi bi-cloud-arrow-up text-blue-600 text-xl"></i>
                </div>
                <p class="text-sm text-gray-600 mb-4">Select a CSV file containing student records.</p>
                <input id='csvFile' type="file" accept=".csv" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer">
                <p class="text-xs text-gray-400 mt-3">Expected columns: student_id, first_name, surname</p>
                <button id='csv2_btn' class="w-full mt-4 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500/30" onclick='uploadCSV()'>Import Students</button>
            </div>
        </div>
    </div>
</div>
`;
