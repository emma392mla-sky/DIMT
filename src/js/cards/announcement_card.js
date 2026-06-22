
// announcement card

const anncmt = `
<div class="min-h-screen bg-orange-50/30 flex items-center justify-center p-6 relative overflow-hidden font-sans">
    

    <div class="w-full max-w-2xl relative z-10">

        <!-- Warm & Catchy Header -->
        <div class="flex items-center justify-between mb-10">
            <div>
                <h1 class="text-3xl font-extrabold text-slate-800 tracking-tight">Announcements</h1>
                <p class="text-neutral-500 text-sm mt-1 font-medium">Updates from your campus</p>
            </div>
            <div class="h-12 w-12 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center relative">
                <i class="bi bi-bell text-orange-500 text-xl"></i>
                <span class="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
            </div>
        </div>

        <!-- Warm Feed Container -->
        <div id='station1' class="space-y-4">

            

        </div>

        <!-- Warm Footer -->
        <div class="mt-10 text-center">
            <button class="group px-6 py-3 rounded-full bg-white border border-orange-200 text-neutral-500 text-sm font-bold shadow-sm hover:border-orange-400 hover:text-orange-600 hover:shadow-md transition-all inline-flex items-center gap-2">
                Load More Updates
                <i class="bi bi-chevron-down group-hover:translate-y-0.5 transition-transform"></i>
            </button>
        </div>

    </div>
</div>
`;

