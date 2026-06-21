const library = `
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

    <!-- UPLOAD BOOK CARD -->
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <h2 class="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
            <i class="bi bi-cloud-upload text-blue-600"></i>
            Upload Book
        </h2>

        <select id="book_pg" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
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
        </select>

        <select id="book_level" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
            <option value="">Select Course Level</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>

        <input type="text" id="book_title" placeholder="Book Title" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">

        <input type="file" id="book_file" accept=".pdf,.doc,.docx,.ppt,.pptx" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer">

        <button id='book_btn' onclick="uploadBook()" class="w-full px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30">
            Upload Book
        </button>
    </div>

    <!-- VIEW BOOKS CARD -->
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
        <h2 class="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2 mb-4">
            <i class="bi bi-journal-text text-blue-600"></i>
            Uploaded Books
        </h2>

        <div id="BOOK_LIST" class="space-y-2 overflow-y-auto flex-1 pr-1 max-h-96">
            <div id="AllBooks" class="flex flex-col items-center justify-center text-center py-10 text-gray-400">
                <i class="bi bi-inbox text-4xl mb-3 text-gray-300"></i>
                <p class="text-sm mb-4">No books uploaded yet</p>
                <button onclick="show()" class="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-lg shadow-sm transition-colors">Refresh</button>
            </div>
        </div>
    </div>

</div>
`;
