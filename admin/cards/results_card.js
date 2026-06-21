const upload_results = `
<div class="space-y-5">
    <h3 id='SHOW_ID' class="text-base font-semibold text-gray-800 border-b border-gray-100 pb-3">Student Details</h3>

    <div class="space-y-3">
        <input type="text" onkeyup='validator()' id='PUSH_ID' placeholder="Student ID" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
        <input type="text" id='PUSH_COURSE' placeholder="Course ID" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
        <input type="text" id='PUSH_GRADE' placeholder="Grade" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
    </div>

    <button class="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30" onclick='validator(1)'>
        Upload Results
    </button>

    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg">
        <input id='csvFile2' type="file" accept=".csv" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer">
        <button id='csv_btn' class="w-full sm:w-auto px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500/30 whitespace-nowrap" onclick='uploadCSVresults()'>
            Auto Upload
        </button>
    </div>
</div>
`;

