// mobile bottom menu
mobile =`
    <div class="flex md:hidden border-t border-blue-100/60" id='bottomNAV' style="display:;">
            <button onclick="nav('dashboard')" class="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-blue-600 bg-blue-100/50">
                <i class="bi bi-grid-fill text-lg"></i>
                <span class="text-[9px] font-semibold">Dashboard</span>
            </button>
            <button onclick="nav('library')" class="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-blue-400 hover:text-blue-600 transition-colors">
                <i class="bi bi-book text-lg"></i>
                <span class="text-[9px] font-medium">Library</span>
            </button>
            <button onclick="nav('anncmts')" class="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-blue-400 hover:text-blue-600 transition-colors">
                <i class="bi bi-megaphone text-lg"></i>
                <span class="text-[9px] font-medium">Announce</span>
            </button>
            <button onclick="nav('exams')" class="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-blue-400 hover:text-blue-600 transition-colors">
                <i class="bi bi-file-earmark-text text-lg"></i>
                <span class="text-[9px] font-medium">Exams</span>
            </button>
            <button onclick="nav('profile')" class="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-blue-400 hover:text-blue-600 transition-colors">
                <i class="bi bi-person-circle text-lg"></i>
                <span class="text-[9px] font-medium">Profile</span>
            </button>
        </div>
`;
//document.getElementById("mobile_menu").innerHTML =mobile;
