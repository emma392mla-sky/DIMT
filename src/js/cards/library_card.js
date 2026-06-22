
// library section

const library = `
<div id="pdfViewer" class="hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    
    <div class="bg-white w-full max-w-4xl h-[90vh] relative rounded-xl overflow-hidden">

        <button onclick="closePdf()" 
            class="absolute top-2 right-2 bg-red-500 text-white px-3 py-10 rounded z-10">
            Close
        </button>

        <iframe id="pdfFrame" class="w-full h-full"></iframe>

    </div>

</div>

<!-- book list -->
<div class="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">



    <div class="w-full max-w-6xl relative z-10">

        <!-- Header -->
        <div class="text-center mb-10">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white mb-4 shadow-lg shadow-indigo-200">
                <i class="bi bi-book-half text-2xl"></i>
            </div>
            <h1 class="text-3xl font-extrabold text-slate-800 tracking-tight">${prog}</h1>
            <p class="text-slate-500 mt-2">
                Explore our diverse range of vocational and academic disciplines.
            </p>
        </div>

        <!-- Books Grid -->
        <div id="bookContainer"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        </div>

        <!-- Footer -->
        <div class="mt-10 text-center">
            <p class="text-xs text-slate-400">
                Curriculums are regulated by the relevant national examination bodies.
            </p>
        </div>

    </div>
</div>
`;


