
// checking session storage before displaying cards

let student_info = JSON.parse(sessionStorage.getItem('student_info'));


if(student_info == null){
    student_info = ['0000','4','000','default','default'];
    prog = "default";
}else{
    if(student_info[2] == "P001"){
        prog = "Public Health";
      }else if(student_info[2] == "P002"){
        prog = "Business Studies";
      }else if(student_info[2] == "P003"){
        prog = "Tailoring";
      }else if(student_info[2] == "P004"){
        prog = "Agro Business";
      }else if(student_info[2] == "P005"){
        prog = "Hotel Management";
      }else if(student_info[2] == "P006"){
        prog = "Computer Engineering";
      }else if(student_info[2] == "P007"){
        prog = "Community Development";
      }else if(student_info[2] == "P008"){
        prog = "HIV & AIDS Management";
      }else if(student_info[2] == "P009"){
        prog = "Nutrition & Food Security";
      }else if(student_info[2] == "P010"){
        prog = "Human Resource Management";
      }else if(student_info[2] == "P011"){
        prog = "Comp Science & Cyber Security";
      }else{
        prog = "default";
      }

}











// dashboard card

dashboard = `
            <div class="space-y-5">

    <!-- Hero Card -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-[fadeIn_0.6s_ease-out]">
        <div class="relative bg-slate-100 h-56 md:h-auto">
            <img id='land_card' src="src/img/gala2.jpg" class="w-full h-full object-cover" alt="DIMT Campus"/>
        </div>
        <div class="p-6 sm:p-8 flex flex-col justify-center">
            <div class="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-[11px] font-semibold px-2.5 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Admissions Open
            </div>
            <h2 class="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-tight">
                Welcome to Your Future at DIMT
            </h2>
            <p class="text-slate-500 leading-relaxed mt-3 text-sm">
                Discover a vibrant learning environment where students are empowered to grow, innovate, and achieve their dreams. We combine quality education, practical experience, and a supportive community to prepare you for success.
            </p>
            <h4 class="text-base font-semibold text-slate-800 tracking-tight leading-tight mt-5">Be Our Next Graduate</h4>
            <div class="mt-6 flex flex-wrap gap-2.5">
                <a onclick="nav('apply')" class="text-[13px] font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2">
                    Apply Now <i class="bi bi-arrow-right text-xs"></i>
                </a>
                <a onclick="document.getElementById('programs_offered').scrollIntoView({ behavior: 'smooth' });" class="text-[13px] font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-lg transition-colors cursor-pointer">
                    Explore Programs
                </a>
            </div>
        </div>
    </div>

    <!-- Accreditation & Campus Life -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-1 md:grid-cols-3">
        
        <!-- Left: TEVETA -->
        <div class="p-6 sm:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
            <div class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-[11px] font-semibold px-2.5 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                <i class="bi bi-patch-check-fill text-[10px]"></i>
                Accredited
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight leading-tight">
                TEVETA-accredited institution in Zomba, Malawi.
            </h3>
            <p class="text-slate-500 leading-relaxed mt-3 text-[13px]">
                With a proven track record in delivering high-quality vocational training, we equip students with job-ready skills that meet local market demands and lay the foundation for economic independence.
            </p>
        </div>

        <!-- Middle: Image -->
        <div class="relative bg-slate-100 h-52 md:h-auto">
            <img src="src/img/add.jpg" class="w-full h-full object-cover" alt="DIMT Students"/>
        </div>

        <!-- Right: Campus Life -->
        <div class="p-6 sm:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
            <h3 class="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight leading-tight">
                Your Future Starts Here
            </h3>
            <p class="text-slate-500 leading-relaxed mt-3 text-[13px]">
                Life at DIMT is more than education — it's a journey of growth, creativity, and opportunity. Join a vibrant student community where dreams are shaped into successful futures.
            </p>
            
            <div class="flex gap-4 mt-6">
                <div class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-300 transition-colors">
                        <img src="src/img/gala3.jpg" class="w-full h-full object-cover" alt="Lifestyle"/>
                    </div>
                    <span class="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 mt-1.5 transition-colors">Lifestyle</span>
                </div>
                <div class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-300 transition-colors">
                        <img src="src/img/gala4.jpg" class="w-full h-full object-cover" alt="Tours"/>
                    </div>
                    <span class="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 mt-1.5 transition-colors">Tours</span>
                </div>
                <div class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-300 transition-colors">
                        <img src="src/img/gala5.jpg" class="w-full h-full object-cover" alt="Sports"/>
                    </div>
                    <span class="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 mt-1.5 transition-colors">Sports</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Programs Offered -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-1 md:grid-cols-5">
        <!-- Image side -->
        <div class="relative bg-slate-100 h-56 md:h-auto md:col-span-2">
            <img src="src/img/gala2.jpg" class="w-full h-full object-cover" alt="Programs"/>
        </div>
        <!-- Programs side -->
        <div class="p-6 sm:p-8 md:col-span-3">
            <div id='programs_offered' class="inline-flex items-center gap-1.5 bg-violet-50 text-violet-600 text-[11px] font-semibold px-2.5 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                <i class="bi bi-bookmark-fill text-[10px]"></i>
                Programs
            </div>
            <h3 class="text-xl font-semibold text-slate-900 tracking-tight">
                Programs We Offer
            </h3>
            <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">ICT</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">Tailoring</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">Agro Business</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">Hotel Management</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">Computer Engineering</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">Community Development</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">HIV & AIDS Management</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">Nutrition & Food Security</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">Human Resource Management</span>
                </div>
                <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 cursor-pointer transition-colors">
                    <span class="text-sm text-slate-600">Comp Science & Cyber Security</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Certifications & Partners -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6 sm:p-8">
        <div class="text-center mb-8">
            <div class="inline-flex items-center gap-1.5 bg-amber-50 text-amber-600 text-[11px] font-semibold px-2.5 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                <i class="bi bi-award-fill text-[10px]"></i>
                Recognized By
            </div>
            <h3 class="text-xl font-semibold text-slate-900 tracking-tight">Our Certifications & Partners</h3>
            <p class="text-slate-400 text-[13px] mt-1.5">Programs accredited by leading national and international examination bodies</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            
            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/teveta.png" class="w-9 h-9 object-contain" alt="TEVETA"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">TEVETA</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Technical & Vocational Education</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/abma.png" class="w-9 h-9 object-contain rounded" alt="ABMA"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">ABMA</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Association of Business Managers</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/abp.jpg" class="w-9 h-9 object-contain rounded" alt="ABP"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">ABP</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Association of Business Professionals</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/icam.jpg" class="w-9 h-9 object-contain rounded" alt="ICAM"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">ICAM</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Institute of Chartered Accountants</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/icm.svg" class="w-9 h-9 object-contain rounded" alt="ICM"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">ICM</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Institute of Commercial Management</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/aies.jpg" class="w-9 h-9 object-contain rounded" alt="AIES"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">AIES</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">African Institute of Extended Studies</p>
            </div>

        </div>
    </div>

</div>
`;

//enable dashboard by default

document.getElementById("view").innerHTML =dashboard;
