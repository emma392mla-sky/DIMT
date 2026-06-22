
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
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/60 overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-[fadeIn_0.8s_ease-in-out]">
                <div class="img-overlay relative">
                    <img id='land_card' src="src/img/gala2.jpg" class="w-full h-56 md:h-full object-cover hover:rounded-2xl hover:scale-110 transition duration-300"/>
                </div>
                <div class="animate-[fadeIn_1s_ease-in-out] p-8 lg:p-10 flex flex-col justify-center">
                    <div class="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-[11px] font-bold px-3 py-1.5 rounded-full w-fit mb-5 uppercase tracking-wider">
                        <div class="w-1.5 h-1.5 rounded-full bg-blue-500 glow-dot"></div>
                        Admissions Open
                    </div>
                    <h2 class="animate-[fadeIn_1.2s_ease-in-out] text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight leading-tight">
                        Welcome to Your Future at DIMT
                    </h2>
                    <p class="animate-[fadeIn_1.4s_ease-in-out] text-blue-800/60 leading-relaxed mt-4 text-sm lg:text-[15px]">
                        Discover a vibrant learning environment where students are empowered to grow, innovate, and achieve their dreams. At DIMT, we combine quality education, practical experience, and a supportive community to prepare you for success in today's world.
                    </p>
                    <h4 class="animate-[fadeIn_1.2s_ease-in-out] text-xl lg:text-xl font-bold text-blue-950 tracking-tight leading-tight">Be Our Next Graduate</h4>
                    <div class="animate-[fadeIn_1.6s_ease-in-out] mt-7 flex flex-wrap gap-3">
                        <a onclick="nav('apply')" class="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md shadow-blue-300/50 inline-flex items-center gap-2">
                            Apply Now <i class="bi bi-arrow-right"></i>
                        </a>
                        <a onclick="document.getElementById('programs_offered').scrollIntoView({ behavior: 'smooth' });" class="animate-[fadeIn_1.8s_ease-in-out] text-sm font-medium text-blue-700 hover:text-blue-900 bg-blue-100/60 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer">
                            Explore Programs
                        </a>
                    </div>
                </div>
            </div>

           

            <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/60 overflow-hidden grid grid-cols-1 md:grid-cols-3">
                <!-- Left: TEVETA -->
                <div class="p-7 lg:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-blue-100/60">
                    <div class="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-700 text-[11px] font-bold px-3 py-1.5 rounded-full w-fit mb-4 uppercase tracking-wider">
                        <i class="bi bi-patch-check-fill text-xs"></i>
                        Accredited
                    </div>
                    <h3 class="text-xl lg:text-2xl font-bold text-blue-950 tracking-tight leading-tight">
                        TEVETA-accredited institution in Zomba, Malawi.
                    </h3>
                    <p class="text-blue-800/60 leading-relaxed mt-3 text-sm">
                        With a proven track record in delivering high-quality vocational training, we have become a trusted provider of skills-based education in both vocational and executive study programmes. Through our practical, industry-oriented training programs, DIMT equips students with job-ready skills that meet local market demands and lay the foundation for economic independence.
                    </p>
                </div>

                
                <div class="img-overlay relative">
                    <img src="src/img/add.jpg" class="w-full h-52 md:h-full object-cover"/>
                </div>

                

                <div class="p-7 lg:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-blue-100/60">
                    <h3 class="text-xl lg:text-2xl font-bold text-blue-950 tracking-tight leading-tight">
                        Your Future Starts Here
                    </h3>
                    <p class="text-blue-800/60 leading-relaxed mt-3 text-sm">
                        Life at DIMT is more than education — it's a journey of growth, creativity, and opportunity. Join a vibrant student community where dreams are shaped into successful futures.
                    </p>
                    
                    <div class="flex gap-5 mt-6">
                        <div class="flex flex-col items-center group cursor-pointer">
                            <div class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-200/50 group-hover:ring-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50">
                                <img src="src/img/gala3.jpg" class="w-full h-full object-cover"/>
                            </div>
                            <span class="text-[11px] font-semibold text-blue-400 group-hover:text-blue-700 mt-2 transition-colors">Lifestyle</span>
                        </div>
                        <div class="flex flex-col items-center group cursor-pointer">
                            <div class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-200/50 group-hover:ring-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50">
                                <img src="src/img/gala4.jpg" class="w-full h-full object-cover"/>
                            </div>
                            <span class="text-[11px] font-semibold text-blue-400 group-hover:text-blue-700 mt-2 transition-colors">Tours</span>
                        </div>
                        <div class="flex flex-col items-center group cursor-pointer">
                            <div class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-200/50 group-hover:ring-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50">
                                <img src="src/img/gala5.jpg" class="w-full h-full object-cover"/>
                            </div>
                            <span class="text-[11px] font-semibold text-blue-400 group-hover:text-blue-700 mt-2 transition-colors">Sports</span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/60 overflow-hidden grid grid-cols-1 md:grid-cols-5">
                <!-- Image side (2/5) -->
                <div class="img-overlay relative md:col-span-2">
                    <img src="src/img/gala2.jpg" class="w-full h-56 md:h-full object-cover"/>
                </div>
                <!-- Programs side (3/5) -->
                <div class="p-7 lg:p-8 md:col-span-3">
                    <div id='programs_offered' class="inline-flex items-center gap-1.5 bg-violet-100/80 text-violet-700 text-[11px] font-bold px-3 py-1.5 rounded-full w-fit mb-4 uppercase tracking-wider">
                        <i class="bi bi-bookmark-fill text-xs"></i>
                        Programs
                    </div>
                    <h3 class="text-2xl font-bold text-blue-950 tracking-tight">
                        Programs We Offer
                    </h3>
                    <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-display text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">ICT</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-scissors text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">Tailoring</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-flower1 text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">Agro Business</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-building text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">Hotel Management</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-cpu text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">Computer Engineering</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-people text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">Community Development</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-heart-pulse text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">HIV & AIDS Management</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-apple text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">Nutrition & Food Security</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-briefcase text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">Human Resource Management</span>
                        </div>
                        <div class="program-chip flex items-center gap-2.5 px-4 py-3 rounded-xl bg-blue-50/60 hover:bg-blue-100 border border-blue-100/60 hover:border-blue-300 cursor-pointer group">
                            <i class="bi bi-shield-lock text-blue-400 group-hover:text-blue-600 transition-colors text-sm"></i>
                            <span class="text-sm font-medium text-blue-800/70 group-hover:text-blue-900 transition-colors">Comp Science & Cyber Security</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/60 p-7 lg:p-8">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-700 text-[11px] font-bold px-3 py-1.5 rounded-full w-fit mb-4 uppercase tracking-wider">
                        <i class="bi bi-award-fill text-xs"></i>
                        Recognized By
                    </div>
                    <h3 class="text-2xl font-bold text-blue-950 tracking-tight">Our Certifications & Partners</h3>
                    <p class="text-blue-800/50 text-sm mt-2">Programs accredited by leading national and international examination bodies</p>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    <!-- TEVETA -->
                    <div class="cert-card card-lift flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-blue-50/80 to-white/50 border border-blue-100/60 cursor-pointer group text-center">
                        <div class="w-16 h-16 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-3 group-hover:shadow-md group-hover:shadow-blue-200/50 transition-shadow">
                            <img src="src/img/teveta.png" class="w-10 h-10 object-contain"/>
                        </div>
                        <h4 class="text-sm font-bold text-blue-900">TEVETA</h4>
                        <p class="text-[10px] text-blue-700/50 mt-1 leading-tight">Technical & Vocational Education</p>
                    </div>
                    <!-- ABMA -->
                    <div class="cert-card card-lift flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-blue-50/80 to-white/50 border border-blue-100/60 cursor-pointer group text-center">
                        <div class="w-16 h-16 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-3 group-hover:shadow-md group-hover:shadow-blue-200/50 transition-shadow">
                            <img src="src/img/abma.png" class="w-10 h-10 object-contain rounded-lg"/>
                        </div>
                        <h4 class="text-sm font-bold text-blue-900">ABMA</h4>
                        <p class="text-[10px] text-blue-700/50 mt-1 leading-tight">Association of Business Managers</p>
                    </div>
                    <!-- ABP -->
                    <div class="cert-card card-lift flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-blue-50/80 to-white/50 border border-blue-100/60 cursor-pointer group text-center">
                        <div class="w-16 h-16 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-3 group-hover:shadow-md group-hover:shadow-blue-200/50 transition-shadow">
                            <img src="src/img/abp.jpg" class="w-10 h-10 object-contain rounded-lg"/>
                        </div>
                        <h4 class="text-sm font-bold text-blue-900">ABP</h4>
                        <p class="text-[10px] text-blue-700/50 mt-1 leading-tight">Association of Business Professionals</p>
                    </div>
                    <!-- ICAM -->
                    <div class="cert-card card-lift flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-blue-50/80 to-white/50 border border-blue-100/60 cursor-pointer group text-center">
                        <div class="w-16 h-16 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-3 group-hover:shadow-md group-hover:shadow-blue-200/50 transition-shadow">
                            <img src="src/img/icam.jpg" class="w-10 h-10 object-contain rounded-lg"/>
                        </div>
                        <h4 class="text-sm font-bold text-blue-900">ICAM</h4>
                        <p class="text-[10px] text-blue-700/50 mt-1 leading-tight">Institute of Chartered Accountants</p>
                    </div>
                    <!-- ICM -->
                    <div class="cert-card card-lift flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-blue-50/80 to-white/50 border border-blue-100/60 cursor-pointer group text-center">
                        <div class="w-16 h-16 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-3 group-hover:shadow-md group-hover:shadow-blue-200/50 transition-shadow">
                            <img src="src/img/icm.svg" class="w-10 h-10 object-contain rounded-lg"/>
                        </div>
                        <h4 class="text-sm font-bold text-blue-900">ICM</h4>
                        <p class="text-[10px] text-blue-700/50 mt-1 leading-tight">Institute of Commercial Management</p>
                    </div>
                    <!-- AIES -->
                    <div class="cert-card card-lift flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-blue-50/80 to-white/50 border border-blue-100/60 cursor-pointer group text-center">
                        <div class="w-16 h-16 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-3 group-hover:shadow-md group-hover:shadow-blue-200/50 transition-shadow">
                            <img src="src/img/aies.jpg" class="w-10 h-10 object-contain rounded-lg"/>
                        </div>
                        <h4 class="text-sm font-bold text-blue-900">AIES</h4>
                        <p class="text-[10px] text-blue-700/50 mt-1 leading-tight">African Institute of Extended Studies</p>
                    </div>

                </div>

            </div>
`;

//enable dashboard by default

document.getElementById("view").innerHTML =dashboard;
