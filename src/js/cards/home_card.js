
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
                    <img id='land_card' src="src/img/gala2.jpg" class="w-full h-56 md:h-full object-cover hover:scale-105 transition duration-300"/>
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
                        With a proven track record in delivering high quality vocational training, we have become a trusted provider of skills-based education in both vocational and executive study programmes. Through our practical, industry-oriented training programs, DIMT equips students with job-ready skills that meet local market demands and lay the foundation for economic independence.
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
                        Life at DIMT is more than education  it's a journey of growth, creativity, and opportunity. Join a vibrant student community where dreams are shaped into successful futures.
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


















//login card

login = `
  <div class="w-full max-w-md mx-auto relative animate-[fadeIn_0.8s_ease-in-out]">
    <!-- Decorative Background Orbs -->
    <div class="absolute -top-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
    <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>

    <div class="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-10 overflow-hidden">
      
      
      <div class="text-center mb-8">
        <div class="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-5">
          <i class="bi bi-shield-lock-fill text-white text-xl"></i>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-slate-500 font-medium">
          Enter your credentials to access your account
        </p>
      </div>

      
      <form class="space-y-5" onsubmit="event.preventDefault();">
        
        <!-- id details -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">STUDENT #</label>
          <div class="relative">
            <i class="bi bi-person-vcard absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input id='st_id' type="text" value="" placeholder="20200501"
              required class="w-full pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 bg-white/60 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm"
            />
          </div>
        </div>


<div>
  <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PASSWORD</label>

  <div class="relative">
    <i class="bi bi-key absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>

    <input id="st_pwd" type="password" placeholder="••••••••" required
      class="w-full pl-11 pr-10 py-3.5 border rounded-2xl">

    <i id="togglePwd"
      class="bi bi-eye absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
      onclick="
        const input = document.getElementById('st_pwd');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
      ">
    </i>
  </div>
</div>

        
        <div class="flex items-center justify-between">
          <a href="#" class="text-xs font-bold text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
            Forgot password?
          </a>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button 
            type="submit" 
            onclick='signin()' id='signin_btn' class="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-[0.98]"
          >
            Sign In <i class="bi bi-arrow-right"></i>
          </button>
        </div>

      </form>
    </div>
  </div>
`;


















// signup card

signup = `
  <div class="w-full max-w-4xl mx-auto relative animate-[fadeIn_0.8s_ease-in-out]">
    <!-- Decorative Background Orbs -->
    <div class="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
    <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

    <div class="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-10 overflow-hidden">
      
      <!-- Header -->
      <div class="text-center mb-10">
        <div class="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-5">
          <i class="bi bi-person-plus-fill text-white text-xl"></i>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
          Create Account
        </h2>
        <p class="mt-2 text-sm text-slate-500 font-medium">
          Start your academic journey with us today.
        </p>
      </div>

     
      <form class="space-y-8" onsubmit="event.preventDefault();">

        
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Personal Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">STUDENT ID</label>
              <input type="text" id='identity' placeholder="e.g. STU-2024-001" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">NAME</label>
              <input type="text" id='name' placeholder="First name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">SURNAME</label>
              <input type="text" id='surname' placeholder="Last name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Section 2: Academic Details -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Academic Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5">
            
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PROGRAM</label>
              <select required id='pg' class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none shadow-sm bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
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
                <option value="P012">Accounting</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">EXAM BOARD</label>
              <select required id='board' class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none shadow-sm bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
                <option value="" disabled selected>Select board</option>
                <option value="AISE">AISE</option>
                <option value="BMEC">BMEC</option>
                <option value="ABP">ABP</option>
                <option value="ABMA">ABMA</option>
                <option value="ICAM">ICAM</option>
                <option value="TEVETA">TEVETA</option>
                <option value="ICM">ICM</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">LEVEL</label>
              <select required id='level' class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none shadow-sm bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
                <option value="" disabled selected>Select level</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
                <option value="6">Level 6</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Section 3: Contact & Location -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Contact & Location
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">EMAIL ADDRESS</label>
              <input type="email" id='email' placeholder="you@example.com" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PHONE NUMBER</label>
              <input type="tel" id='phone' placeholder="+263 7XX XXX XXX" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">DISTRICT OF ORIGIN</label>
              <input type="text" id='district' placeholder="e.g. Harare" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">CITY</label>
              <input type="text" id='city' placeholder="e.g. Harare" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Section 4: Account Security -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Account Security
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PASSWORD</label>
              <input type="password" id='pass' placeholder="Create a strong password" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">CONFIRM PASSWORD</label>
              <input type="password" id='pass2' placeholder="Confirm your password" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Section 5: Parent/Guardian -->
        <div class="bg-indigo-50/80 p-5 sm:p-6 rounded-2xl border border-indigo-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-700 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-700 rounded-full"></span> Parent / Guardian Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div class="md:col-span-2">
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">FULL NAME</label>
              <input type="text" id='g_name' placeholder="Parent's full name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">EMAIL ADDRESS</label>
              <input type="email" id='g_email' placeholder="parent@example.com" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PHONE NUMBER</label>
              <input type="tel" id='g_phone' placeholder="+263 7XX XXX XXX" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button type="submit" id='signup_btn' class="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-[0.98]" onclick="register();">
            Create Account <i class="bi bi-rocket-takeoff-fill"></i>
          </button>
        </div>

      </form>
    </div>
  </div>
`;


















// apply card


function APPLY_REG(){



supabaseClient
  .from('system_settings')
  .select('*')
  .then(({ data, error }) => {

    if (error) {
      console.error(error);
      return;
    }

    const examValue2 = data?.[0]?.apply;
        
        
    if (examValue2 == 'false') {

  apply = `
<div class="animate-[fadeIn_0.8s_ease-in-out] min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-blue-50 p-6">

  <div class="max-w-md w-full bg-white border border-blue-100 rounded-3xl shadow-lg p-8 text-center">

    <div class="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-5">
      <i class="bi bi-people text-2xl"></i>
    </div>

    <h1 class="text-2xl font-extrabold text-blue-950 mb-2">
      Applications Not Open Yet
    </h1>

    <p class="text-sm text-blue-600 leading-relaxed">
      We’re currently preparing for the next intake. New student applications will open soon we’d be happy to have you join us when they do.
    </p>

    <div class="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
      <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      Coming Soon
    </div>

  </div>

</div>
`;
}else{
apply = `
  <div class="w-full max-w-xl mx-auto relative animate-[fadeIn_0.8s_ease-in-out]">
    <!-- Decorative Background Orbs -->
    <div class="absolute -top-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
    <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>

    <div class="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-10 overflow-hidden">
      
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-5">
          <i class="bi bi-file-earmark-arrow-up-fill text-white text-xl"></i>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
          Submit Application
        </h2>
        <p class="mt-2 text-sm text-slate-500 font-medium">
          Complete the form below to apply for your chosen program.
        </p>
      </div>

      <!-- Section 1: Personal Information -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 class="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-500 rounded-full"></span> Personal Information
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">NAME</label>
              <input type="text" id="apply_name" placeholder="First name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">SURNAME</label>
              <input type="text" id="apply_surname" placeholder="Last name" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">EMAIL ADDRESS</label>
              <input type="email" id="apply_email" placeholder="you@example.com" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PHONE NUMBER</label>
              <input type="tel" id="apply_phone" placeholder="+263 8XX XXX XXX" required class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-slate-400 shadow-sm">
            </div>
          </div>
        </div>

        <!-- Section 2: Academic & Documents -->
        <div class="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
          
          <!-- Program Selection -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">PROGRAM TO PURSUE</label>
            <select required id="apply_program" class="w-full px-4 py-3.5 text-sm font-medium text-slate-900 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none shadow-sm bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[center_right_1rem]">
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
                <option value="P012">Accounting</option>
            </select>
          </div>

          

        </div>

        <!-- Important Notice -->
        <div class="bg-amber-50/80 border border-amber-200/60 rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
  <div class="flex-shrink-0 mt-0.5">
    <i class="bi bi-exclamation-triangle-fill text-amber-500 text-lg"></i>
  </div>

  <div>
    <h4 class="text-sm font-extrabold text-amber-900">
      Important Notice
    </h4>

    <p class="text-xs font-medium text-amber-800/80 mt-1">
      Upon acceptance, applicants are required to pay an
      <span class="font-extrabold text-amber-900">Application Fee of MWK 15,000</span>
      and a
      <span class="font-extrabold text-amber-900">Medical Examination Fee of MWK 10,000</span>.
    </p>

    <p class="text-xs font-medium text-amber-800/80 mt-2">
      Accepted students must also present their
      <span class="font-extrabold text-amber-900">original MSCE certificate</span>
      during registration.
    </p>
  </div>
</div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button id='apply_btn' onclick="applyNOW()" 
            class="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-[0.98]"
          >
            Submit Application <i class="bi bi-send-fill"></i>
          </button>
        </div>
    </div>
  </div>
`;
}
document.getElementById("view").innerHTML=apply;
});


}

















// main dashboard after successful login
access = `
<div class="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:bg-blue-900 p-4 md:p-8 space-y-6">

    <!-- Hero Section -->
    <div class="animate-[fadeIn_0.8s_ease-in-out] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">

        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div class="relative z-10 grid lg:grid-cols-12 gap-8 items-center">

            <!-- Text Content -->
            <div class="lg:col-span-7">
                <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold border border-white/10">
                    <i class="bi bi-mortarboard-fill"></i> DIMT Student Portal
                </div>

                <h1 class="text-3xl lg:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                    Welcome Back, <span id='db_st_name'>Student</span>
                </h1>

                <p class="mt-3 text-blue-100/80 max-w-2xl leading-relaxed text-sm lg:text-[15px]">
                    Access your academic progress, courses, results, announcements, examination schedules, downloads, and student resources from one intelligent dashboard.
                </p>

                <div class="flex flex-wrap gap-3 mt-6">
                    <button onclick='view_results()' class="bg-white text-blue-700 hover:bg-blue-50 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-900/20">
                        View Results
                    </button>
                    <button class="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                        Download Timetable
                    </button>
                </div>
            </div>

            <!-- Profile Card -->
            <div class="lg:col-span-5 flex justify-start lg:justify-end">
                <div class="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-full max-w-[300px] shadow-xl">
                    <div class="flex items-center gap-4">
                        <!-- Avatar with Fallback Logic -->
                        <div class="relative w-16 h-16 rounded-xl bg-white/20 border-2 border-white/30 overflow-hidden flex-shrink-0">
                            <!-- Fallback Icon (Visible if image fails - Added bg-blue-600/30 for visibility) -->
                            <div class="absolute inset-0 flex items-center justify-center text-white/0 z-0 bg-blue-600/30">
                                <i class="bi bi-person-fill text-3xl"></i>
                            </div>
                            <!-- Profile Image -->
                            <img id='pix1' onclick="p_pic(this.src);" src="src/img/person.svg" class="cursor-pointer absolute inset-0 w-full h-full object-cover z-10">
                        
                        </div>
                        
                        <div class="min-w-0">
                            <h3 class="font-bold text-lg leading-tight truncate" id='db_st_id'>loading...</h3>
                            <p class="text-blue-200/70 text-xs mt-1 truncate" id="db_st_program"></p>
                            <div class="mt-2 inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide">
                                <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> Active
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/10">
                        <div class="bg-white/5 rounded-xl p-3 text-center">
                            <p class="text-[10px] text-blue-200/60 uppercase font-bold">Graded</p>
                            <h2 class="text-xl font-bold mt-1" id='st_ttrecords'><div class='skeleton'>...</div></h2>
                        </div>
                        <div class="bg-white/5 rounded-xl p-3 text-center">
                            <p class="text-[10px] text-blue-200/60 uppercase font-bold">AVG</p>
                            <h2 class="text-xl font-bold mt-1" id='st_ttaverage'><div class='skeleton'>...</div></h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Quick Stats (Compact) -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">

    <!-- All Courses -->
    <div class="bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 shadow-[0_4px_15px_-3px_rgba(15,23,42,0.1)] ">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">All Courses</p>
                <h2 class="text-[22px] font-extrabold text-slate-900 mt-0.5 leading-tight" id="all_courses">
                    <div class="skeleton w-7 h-5 rounded bg-slate-100 animate-pulse"></div>
                </h2>
            </div>
            <div class="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
                <i class="bi bi-book-half text-base text-slate-600"></i>
            </div>
        </div>
    </div>

    <!-- Performance -->
    <div class="bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 shadow-[0_8px_25px_-5px_rgba(15,23,42,0.18)]">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Performance</p>
                <h2 class="text-[22px] font-extrabold text-slate-900 mt-0.5 leading-tight" id="st_per">
                    <div class="skeleton w-7 h-5 rounded bg-slate-100 animate-pulse"></div>
                </h2>
            </div>
            <div class="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center">
                <i class="bi bi-award-fill text-base text-slate-600"></i>
            </div>
        </div>
    </div>

    <!-- Schedule -->
    <div onclick="showCAL()" class="group border-b-2 border-b-blue-600/50 pb-2 cursor-pointer bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 shadow-[0_4px_15px_-3px_rgba(15,23,42,0.1)] hover:shadow-[0_10px_30px_-5px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200">
        <div class="flex items-center justify-between">
            <div class="min-w-0">
                <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Schedule</p>
                <h3 class="text-sm font-bold text-slate-900 mt-0.5 leading-tight truncate">View Calendar</h3>
            </div>
            <div class="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 ml-2 group-hover:bg-slate-200 transition-colors">
                <i class="bi bi-calendar-event-fill text-base text-slate-600"></i>
            </div>
        </div>
    </div>

    <!-- Support -->
    <div onclick="contact_admin()" class="group cursor-pointer border-b-2 border-b-blue-600/50 pb-2 bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 shadow-[0_4px_15px_-3px_rgba(15,23,42,0.1)] hover:shadow-[0_10px_30px_-5px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200">
        <div class="flex items-center justify-between">
            <div class="min-w-0">
                <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Support</p>
                <h3 class="text-sm font-bold text-slate-900 mt-0.5 leading-tight truncate">Contact Admin</h3>
            </div>
            <div class="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 ml-2 group-hover:bg-slate-200 transition-colors">
                <i class="bi bi-chat-dots-fill text-base text-slate-600"></i>
            </div>
        </div>
    </div>

</div>

    <!-- Main Grid (Increased Height to 380px) -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <!-- Personal Information -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-[380px]">
            <!-- Fixed Header -->
            <div class="p-4 border-b border-slate-100 shrink-0 flex items-center justify-between bg-slate-50/50">
                <h3 class="text-base font-bold text-slate-800">Personal Information</h3>
                <i class="bi bi-person-vcard-fill text-blue-500"></i>
            </div>
            
            <!-- Scrollable Body -->
<div class="flex-1 overflow-y-auto p-4 space-y-1.5 text-sm pr-1">

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Full Name</span>
        <div id="db_st_PROFILEname" class="font-semibold text-slate-800 text-right max-w-[150px] truncate">
            <span class="skeleton inline-block w-24 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Student ID</span>
        <div id="db_st_PROFILEid" class="font-semibold text-slate-800 text-right">
            <span class="skeleton inline-block w-20 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Program</span>
        <div id="db_st_PROFILEprogram" class="font-semibold text-slate-800 text-right max-w-[150px] truncate">
            <span class="skeleton inline-block w-24 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Exam Board</span>
        <div id="db_st_board" class="font-semibold text-slate-800 text-right">
            <span class="skeleton inline-block w-20 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Level</span>
        <div id="db_st_level" class="font-semibold text-slate-800 text-right">
            <span class="skeleton inline-block w-12 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2 border-b border-slate-100">
        <span class="text-slate-500">Email</span>
        <div id="db_st_email" class="font-semibold text-slate-800 text-right max-w-[140px] truncate">
            <span class="skeleton inline-block w-24 h-4 rounded"></span>
        </div>
    </div>

    <div class="flex justify-between items-center py-2">
        <span class="text-slate-500">Phone</span>
        <div id="db_st_phone" class="font-semibold text-slate-800 text-right">
            <span class="skeleton inline-block w-24 h-4 rounded"></span>
        </div>
    </div>

</div>
        </div>

        <!-- personal messages -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-[380px]">
            <div class="p-4 border-b border-slate-100 shrink-0 flex items-center justify-between bg-slate-50/50">
                <h3 class="text-base font-bold text-slate-800">Messaes</h3>
                <i class="bi bi-megaphone-fill text-red-500"></i>
            </div>
            
            <div id='zex' class="flex-1 overflow-y-auto p-4 space-y-3 pr-1">
                <div class='skeleton h-16 rounded-lg'>loading...</div>
                <div class='skeleton h-16 rounded-lg'>loading...</div>
                <div class='skeleton h-16 rounded-lg'>loading...</div>
                <div class='skeleton h-16 rounded-lg'>loading...</div>
            </div>
        </div>

        <!-- Results -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-[380px]" id='results_section'>
            <div class="p-4 border-b border-slate-100 shrink-0 flex items-center justify-between bg-slate-50/50">
                <h3 class="text-base font-bold text-slate-800">Final Exam Results</h3>
                <i class="bi bi-journal-check text-blue-500 text-lg"></i>
            </div>
            
            <div id="st_perfomance" class="flex-1 overflow-y-auto p-4 space-y-2 pr-1">
                <div class="text-gray-400 text-center py-4">
                    <div class='skeleton w-20 h-4 mx-auto'>loading...</div>
                </div>
            </div>
        </div>

    </div>
</div>
`;















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














function EXAM_REG(){


supabaseClient
  .from('system_settings')
  .select('*')
  .then(({ data, error }) => {

    if (error) {
      console.error(error);
      return;
    }

    const examValue = data?.[0]?.exam;

    if (examValue == 'false') {

  exam = `
<div class="animate-[fadeIn_0.8s_ease-in-out] min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-blue-50 p-6">

  <div class="max-w-md w-full bg-white border border-blue-100 rounded-3xl shadow-lg p-8 text-center">

    <!-- Icon -->
    <div class="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-5">
      <i class="bi bi-hourglass-split text-2xl"></i>
    </div>

    <!-- Title -->
    <h1 class="text-2xl font-extrabold text-blue-950 mb-2">
      Registration Closed
    </h1>

    <!-- Message -->
    <p class="text-sm text-blue-600 leading-relaxed">
      Exam registration is not currently open. It will be available soon.
      Please check back later for updates.
    </p>

    <!-- Badge -->
    <div class="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
      <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      Coming Soon
    </div>

  </div>

</div>
`;
}else{
exam = `
<div class="min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
    


    <div class="w-full max-w-2xl relative z-10">

        <!-- Header -->
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white mb-4 shadow-lg shadow-blue-200">
                <i class="bi bi-pencil-square text-2xl"></i>
            </div>
            <h1 class="text-3xl font-extrabold text-blue-950 tracking-tight">Exam Registration</h1>
            <p class="text-blue-400 mt-2 font-medium">Confirm your details and select your exam session.</p>
        </div>

        <!-- Main Card -->
        <div class="bg-white rounded-3xl border border-blue-100 shadow-sm overflow-hidden">
            
            <div class="p-8">
                
                <!-- Student Details Section -->
                <div class="mb-8">
                    <h3 class="text-sm font-bold text-blue-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <i class="bi bi-person-check-fill"></i> Student Information
                    </h3>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5">Full Name</label>
                            <div class="bg-sky-50 border border-blue-100 rounded-xl px-4 py-3 text-blue-900 font-semibold text-sm">
                                ${student_info[3]} ${student_info[4]}

                                <input type='hidden' id='s_exam_id' value="${student_info[0]}">
                                <input type='hidden' id='s_exam_level' value="${student_info[1]}">
                                <input type='hidden' id='s_exam_pg' value="${student_info[2]}">
                                <input type='hidden' id='s_exam_name' value="${student_info[3]}">
                                <input type='hidden' id='s_exam_surname' value="${student_info[4]}">


                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5">Student ID</label>
                            <div class="bg-sky-50 border border-blue-100 rounded-xl px-4 py-3 text-blue-900 font-semibold text-sm">
                                ${student_info[0]}
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5">Program</label>
                            <div class="bg-sky-50 border border-blue-100 rounded-xl px-4 py-3 text-blue-900 font-semibold text-sm">
                                ${prog}
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-1.5">Level</label>
                            <div class="bg-sky-50 border border-blue-100 rounded-xl px-4 py-3 text-blue-900 font-semibold text-sm">
                                Level ${student_info[1]}
                            </div>
                        </div>
                    </div>
                </div>

                
                

                <!-- Payment Instructions Box -->
                <div class="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
                    <div class="flex items-start gap-3">
                        <i class="bi bi-info-circle-fill text-blue-500 text-xl mt-0.5"></i>
                        <div class="text-sm text-blue-800">
                            <h4 class="font-bold mb-1">Payment Instructions</h4>
                            <p class="text-blue-600/80 leading-relaxed">
                                The registration fee is <span class="font-extrabold text-blue-900">MWK 400,000</span>. 
                                After submitting this form, please pay the exact amount at any 
                                <span class="font-bold">FDH Bank</span> branch to Account Number <span class="font-mono font-bold">4574 0909 2434 0008</span> (Dimt Savings). 
                                Submit your deposit slip to the registrar for confirmation..
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Footer / Actions -->
                <div id='call' class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    

                    <button onclick="exam_registration()" class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-sm font-bold shadow-md shadow-blue-200 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                        Register for Exam
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>

            </div>
        </div>

        <!-- Footer Info -->
        <div class="mt-6 text-center">
            <p class="text-xs text-blue-300">Exams are scheduled for March, June, September & December only.</p>
        </div>

    </div>
</div>
`;
}
document.getElementById("view").innerHTML=exam;
// if student already registered overwrite the view element
 let local_id = JSON.parse(sessionStorage.getItem('student_info'));

  supabaseClient
    .from('Exam_Registration')
    .select('*')
    .eq('student_id', local_id[0])
    .then(({ data, error }) => {

      if (error) {
        alert(error.message);
        return;
      }

      if (data.length > 0) {
        document.getElementById("view").innerHTML = `
<div class="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

  <div class="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 text-center">

    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 flex items-center justify-center">
      <i class="bi bi-exclamation-triangle text-red-600 text-xl"></i>
    </div>

    <h3 class="text-lg font-semibold text-red-600 mb-2">
  You Have Already Been Registered
</h3>

    <button onclick="this.closest('.fixed').remove(); allow();" 
      class="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
      OK
    </button>

  </div>

</div>
`;
      }

    });
});


}


















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


















// student profile card

const profile = `
<div class="min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
    

    <div class="w-full max-w-3xl relative z-10 py-10">

        <!-- Page Header -->
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white mb-4 shadow-lg shadow-blue-200">
                <i class="bi bi-person-gear text-2xl"></i>
            </div>
            <h1 class="text-3xl font-extrabold text-blue-950 tracking-tight">My Profile</h1>
            <p class="text-blue-400 mt-1 text-sm">Manage your personal and academic details</p>
        </div>

        <!-- Main Card -->
        <div class="bg-white rounded-3xl border border-blue-100 shadow-sm overflow-hidden">
            
            <!-- Profile Header -->
            <div class="bg-sky-50/50 p-6 border-b border-blue-100 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img id='pix2' src="https://ui-avatars.com/api/?name=${student_info[3]}+${student_info[4]}&background=2563EB&color=fff&size=128&bold=true" class="pix2 w-20 h-20 rounded-2xl object-cover border-2 border-white/20" alt="Avatar">
                <div class="text-center sm:text-left">
                    <h2 class="text-2xl font-bold text-blue-950">${student_info[3]} ${student_info[4]}</h2>
                    <p class="text-blue-500 text-sm font-medium mt-1">ID: ${student_info[0]} • Level ${student_info[1]} • ${prog}</p>
                </div>
            </div>

            <!-- Form Body -->
            <div class="p-8 space-y-10">
                
                <!-- Academic Details (Locked) -->
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="h-6 w-1 bg-blue-500 rounded-full"></div>
                        <h3 class="text-lg font-bold text-blue-950">Academic Information</h3>
                        <span class="text-[10px] font-bold text-blue-400 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Locked</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-blue-400 uppercase mb-2">Student ID</label>
                            <input required type="text" value="${student_info[0]}" disabled class="w-full bg-sky-50/50 border border-blue-100 text-blue-800 rounded-xl px-4 py-3 text-sm font-semibold cursor-not-allowed">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-blue-400 uppercase mb-2">Program</label>
                            <input required type="text" value="${prog}" disabled class="w-full bg-sky-50/50 border border-blue-100 text-blue-800 rounded-xl px-4 py-3 text-sm font-semibold cursor-not-allowed">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-blue-400 uppercase mb-2">Study Level</label>
                            <input required type="text" value="Level ${student_info[1]}" disabled class="w-full bg-sky-50/50 border border-blue-100 text-blue-800 rounded-xl px-4 py-3 text-sm font-semibold cursor-not-allowed">
                        </div>
                    </div>
                </div>

                <!-- Personal Details (Editable) -->
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="h-6 w-1 bg-blue-500 rounded-full"></div>
                        <h3 class="text-lg font-bold text-blue-950">Personal Information</h3>
                        <span class="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Editable</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <!-- Date of Birth -->
                        <div>
                            <label class="block text-xs font-bold text-blue-400 uppercase mb-2">Date of Birth</label>
                            <div class="flex gap-2">
                                <input required type="date" id='dates1' value="2000-01-01" class="flex-1 w-full bg-white border border-blue-200 text-blue-900 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                                <button id='dates2' onclick="update_inf('dates')" class="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-xl text-sm font-semibold transition-all whitespace-nowrap">Update</button>
                            </div>
                        </div>

                        <!-- Phone Number -->
                        <div>
                            <label class="block text-xs font-bold text-blue-400 uppercase mb-2">Phone Number</label>
                            <div class="flex gap-2">
                                <input type="tel" id="phone1" placeholder="+265 999 000 000" class="flex-1 w-full bg-white border border-blue-200 text-blue-900 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                                <button id="phone2" onclick="update_inf('phone')" class="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-xl text-sm font-semibold transition-all whitespace-nowrap">Update</button>
                            </div>
                        </div>

                        <!-- Email Address -->
                        <div class="md:col-span-2">
                            <label class="block text-xs font-bold text-blue-400 uppercase mb-2">Email Address</label>
                            <div class="flex gap-2">
                                <input type="email" id='email_address1' placeholder="student@example.com" class="flex-1 w-full bg-white border border-blue-200 text-blue-900 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                                <button id='email_address2' onclick="update_inf('email_address')" class="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-xl text-sm font-semibold transition-all whitespace-nowrap">Update</button>
                            </div>
                        </div>

                        <!-- Profile Picture -->
                        <div class="md:col-span-2">
                            <label class="block text-xs font-bold text-blue-400 uppercase mb-2">Profile Picture</label>
                            <div class="flex gap-2">
                                <input type="file" id="profile_pic" accept='.png,.jpg' class="flex-1 cursor-pointer w-full bg-white border border-blue-200 text-blue-900 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                                <button id='upload_btn' onclick="updatePic()" class="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-xl text-sm font-semibold transition-all whitespace-nowrap">Upload</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <!-- Footer Info -->
            <div class="bg-sky-50/50 px-8 py-4 border-t border-blue-100 flex items-center justify-center">
                <p class="text-xs text-blue-300">Contact admin to update academic details.</p>
            </div>

        </div>

    </div>
</div>
`;