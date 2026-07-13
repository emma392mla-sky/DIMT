
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
        <div class="relative bg-slate-100 h-56 md:h-auto overflow-hidden">
            <img id='land_card' src="src/img/N/N2.png" class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/10"></div>
            <div class="absolute bottom-4 left-4 md:hidden">
                <div class="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Admissions Open ${new Date().getFullYear()}
                </div>
            </div>
        </div>
        <div class="p-6 sm:p-8 flex flex-col justify-center">
            <div class="hidden md:inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-[11px] font-semibold px-2.5 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Admissions Open 2025
            </div>
            <h2 class="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-tight">
                Welcome to Your Future
            </h2>
            <p class="text-slate-500 leading-relaxed mt-3 text-sm">
                Discover a vibrant learning environment where students are empowered to grow, innovate, and achieve their dreams. We combine quality education, practical experience, and a supportive community to prepare you for success.
            </p>
            <div class="mt-5 flex items-center gap-3">
                <div class="flex -space-x-2">
                    <img src="src/img/N/N6.jpg" class="w-7 h-7 rounded-full border-2 border-white object-cover" alt=""/>
                    <img src="src/img/N/N7.jpg" class="w-7 h-7 rounded-full border-2 border-white object-cover" alt=""/>
                    <img src="src/img/N/N8.png" class="w-7 h-7 rounded-full border-2 border-white object-cover" alt=""/>
                    <div class="w-7 h-7 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center">
                        <span class="text-[9px] font-bold text-blue-600">+500</span>
                    </div>
                </div>
                <span class="text-[12px] text-slate-400">Join our growing community</span>
            </div>
            <div class="mt-6 flex flex-wrap gap-2.5">
                <a onclick="nav('apply')" class="text-[13px] font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm shadow-blue-600/20">
                    Apply Now <i class="bi bi-arrow-right text-xs"></i>
                </a>
                <a onclick="document.getElementById('programs_offered').scrollIntoView({ behavior: 'smooth' });" class="text-[13px] font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-lg transition-colors cursor-pointer">
                    Explore Programs
                </a>
            </div>
        </div>
    </div>

    <!-- About Us -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden animate-[fadeIn_0.6s_ease-out]">
        
        <!-- Hero Banner -->
        <div class="relative h-48 sm:h-64 overflow-hidden">
            <img src="src/img/N/N10.png" class="w-full h-full object-cover" alt="Mzuzu Campus"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div class="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider border border-white/20">
                    <span class="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    About Us
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                    The The Northen Hospitality
                </h2>
                <p class="text-white/70 text-sm mt-2 max-w-lg">A TEVETA-accredited college in Mzuzu shaping the next generation of professionals, innovators, and leaders.</p>
            </div>
        </div>

        <div class="p-6 sm:p-8">

            <!-- Our Story -->
            <div class="flex flex-col sm:flex-row gap-5 items-start">
                <div class="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-slate-100 shadow-sm">
                    <img src="src/img/gala3.jpg" class="w-full h-full object-cover" alt="Our Story"/>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                        Our Story
                        <div class="h-px flex-1 bg-slate-100 ml-2"></div>
                    </h3>
                    <p class="text-slate-500 leading-relaxed mt-2 text-[13px]">
                        The Northen Hospitality was founded on a simple belief: that every young person in Malawi deserves access to education that actually leads somewhere. We saw too many graduates with certificates but no skills, and too many employers struggling to find capable staff. So we built a college that bridges that gap with hands-on training, real-world projects, and qualifications that employers actually respect. Today, we're proud to be one of Mzuzu's fastest growing colleges, and we're just getting started.
                    </p>
                </div>
            </div>

            <!-- Mission & Vision -->
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="relative p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div class="relative">
                        <div class="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4 backdrop-blur-sm">
                            <i class="bi bi-bullseye text-white text-lg"></i>
                        </div>
                        <h4 class="text-base font-bold tracking-tight">Our Mission</h4>
                        <p class="text-blue-100 leading-relaxed mt-2.5 text-[13px]">
                            To deliver accessible, high quality vocational and professional education that empowers individuals with practical skills for self-reliance, employment, and national development.
                        </p>
                    </div>
                </div>
                <div class="relative p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div class="relative">
                        <div class="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4 backdrop-blur-sm">
                            <i class="bi bi-eye text-white text-lg"></i>
                        </div>
                        <h4 class="text-base font-bold tracking-tight">Our Vision</h4>
                        <p class="text-slate-300 leading-relaxed mt-2.5 text-[13px]">
                            To become a leading center of academic excellence and innovation in vocational training across Malawi and the Eastern African region.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Core Values -->
            <div class="mt-8">
                <h3 class="text-lg font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                    Our Core Values
                    <div class="h-px flex-1 bg-slate-100 ml-2"></div>
                </h3>
                <div class="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    <div class="text-center p-3.5 rounded-xl bg-rose-50 border border-rose-100/80 hover:shadow-sm transition-shadow">
                        <div class="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-2">
                            <i class="bi bi-shield-check text-rose-500 text-sm"></i>
                        </div>
                        <span class="text-[12px] font-semibold text-rose-700">Integrity</span>
                    </div>
                    <div class="text-center p-3.5 rounded-xl bg-blue-50 border border-blue-100/80 hover:shadow-sm transition-shadow">
                        <div class="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                            <i class="bi bi-star text-blue-500 text-sm"></i>
                        </div>
                        <span class="text-[12px] font-semibold text-blue-700">Excellence</span>
                    </div>
                    <div class="text-center p-3.5 rounded-xl bg-amber-50 border border-amber-100/80 hover:shadow-sm transition-shadow">
                        <div class="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-2">
                            <i class="bi bi-lightbulb text-amber-500 text-sm"></i>
                        </div>
                        <span class="text-[12px] font-semibold text-amber-700">Innovation</span>
                    </div>
                    <div class="text-center p-3.5 rounded-xl bg-emerald-50 border border-emerald-100/80 hover:shadow-sm transition-shadow">
                        <div class="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-2">
                            <i class="bi bi-hand-thumbs-up text-emerald-500 text-sm"></i>
                        </div>
                        <span class="text-[12px] font-semibold text-emerald-700">Inclusivity</span>
                    </div>
                    <div class="text-center p-3.5 rounded-xl bg-violet-50 border border-violet-100/80 hover:shadow-sm transition-shadow col-span-2 sm:col-span-1">
                        <div class="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-2">
                            <i class="bi bi-heart text-violet-500 text-sm"></i>
                        </div>
                        <span class="text-[12px] font-semibold text-violet-700">Impact</span>
                    </div>
                </div>
            </div>

            <!-- Campus Highlights -->
            <div class="mt-8">
                <h3 class="text-lg font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                    Life at The Northen Hospitality
                    <div class="h-px flex-1 bg-slate-100 ml-2"></div>
                </h3>
                <div class="mt-4 grid grid-cols-3 gap-2.5">
                    <div class="relative rounded-2xl overflow-hidden h-28 sm:h-36 group cursor-pointer col-span-2">
                        <img src="src/img/gala14.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Classrooms"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        <div class="absolute bottom-3 left-3.5">
                            <span class="text-white text-[13px] font-semibold">Modern Classrooms</span>
                            <p class="text-white/60 text-[11px] mt-0.5">Equipped for hands-on learning</p>
                        </div>
                    </div>
                    <div class="relative rounded-2xl overflow-hidden h-28 sm:h-36 group cursor-pointer">
                        <img src="src/img/gala17.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Lab"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        <div class="absolute bottom-3 left-3.5">
                            <span class="text-white text-[12px] font-semibold">Computer Labs</span>
                        </div>
                    </div>
                    <div class="relative rounded-2xl overflow-hidden h-28 sm:h-36 group cursor-pointer">
                        <img src="src/img/gala16.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Events"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        <div class="absolute bottom-3 left-3.5">
                            <span class="text-white text-[12px] font-semibold">Student Events</span>
                        </div>
                    </div>
                    <div class="relative rounded-2xl overflow-hidden h-28 sm:h-36 group cursor-pointer col-span-2">
                        <img src="src/img/gala19.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Community"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        <div class="absolute bottom-3 left-3.5">
                            <span class="text-white text-[13px] font-semibold">Student Community</span>
                            <p class="text-white/60 text-[11px] mt-0.5">Diverse, vibrant, and supportive</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why Choose The Northen Hospitality -->
            <div class="mt-8">
                <h3 class="text-lg font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                    Why Choose The Northen Hospitality?
                    <div class="h-px flex-1 bg-slate-100 ml-2"></div>
                </h3>
                <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group">
                        <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                            <i class="bi bi-patch-check-fill text-blue-500 text-sm"></i>
                        </div>
                        <div>
                            <h4 class="text-[13px] font-semibold text-slate-800">Accredited Qualifications</h4>
                            <p class="text-slate-400 text-[12px] leading-relaxed mt-1">Certified by TEVETA and recognized internationally through ABMA, ICM, ABP, and more.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group">
                        <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                            <i class="bi bi-tools text-emerald-500 text-sm"></i>
                        </div>
                        <div>
                            <h4 class="text-[13px] font-semibold text-slate-800">Practical Training</h4>
                            <p class="text-slate-400 text-[12px] leading-relaxed mt-1">More doing, less memorizing. Our labs and workshops mirror real work environments.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group">
                        <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                            <i class="bi bi-cash-stack text-amber-500 text-sm"></i>
                        </div>
                        <div>
                            <h4 class="text-[13px] font-semibold text-slate-800">Affordable Fees</h4>
                            <p class="text-slate-400 text-[12px] leading-relaxed mt-1">Quality education shouldn't be a luxury. We offer flexible payment plans that work for you.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group">
                        <div class="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-100 transition-colors">
                            <i class="bi bi-people-fill text-violet-500 text-sm"></i>
                        </div>
                        <div>
                            <h4 class="text-[13px] font-semibold text-slate-800">Small Class Sizes</h4>
                            <p class="text-slate-400 text-[12px] leading-relaxed mt-1">Get the attention you deserve. Our lecturers know every student by name, not by number.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group">
                        <div class="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-100 transition-colors">
                            <i class="bi bi-briefcase-fill text-rose-500 text-sm"></i>
                        </div>
                        <div>
                            <h4 class="text-[13px] font-semibold text-slate-800">Career Support</h4>
                            <p class="text-slate-400 text-[12px] leading-relaxed mt-1">From internships to job referrals, we help you land on your feet after graduation.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group">
                        <div class="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-100 transition-colors">
                            <i class="bi bi-calendar-check text-cyan-500 text-sm"></i>
                        </div>
                        <div>
                            <h4 class="text-[13px] font-semibold text-slate-800">Flexible Schedules</h4>
                            <p class="text-slate-400 text-[12px] leading-relaxed mt-1">Working? No problem. We offer morning and afternoon sessions to fit your life.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats Bar -->
            <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div class="text-center p-5 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
                    <div class="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
                    <span class="text-3xl font-bold relative">500+</span>
                    <p class="text-slate-400 text-[11px] mt-1 relative">Alumni Network</p>
                </div>
                <div class="text-center p-5 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden">
                    <div class="absolute -bottom-3 -left-3 w-12 h-12 bg-slate-100 rounded-full"></div>
                    <span class="text-3xl font-bold text-slate-800 relative">10</span>
                    <p class="text-slate-400 text-[11px] mt-1 relative">Programs Offered</p>
                </div>
                <div class="text-center p-5 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden">
                    <div class="absolute -bottom-3 -left-3 w-12 h-12 bg-slate-100 rounded-full"></div>
                    <span class="text-3xl font-bold text-slate-800 relative">15+</span>
                    <p class="text-slate-400 text-[11px] mt-1 relative">Expert Lecturers</p>
                </div>
                <div class="text-center p-5 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
                    <div class="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
                    <span class="text-3xl font-bold relative">6</span>
                    <p class="text-slate-400 text-[11px] mt-1 relative">Exam Partners</p>
                </div>
            </div>

            <!-- CTA -->
            <div class="mt-8 p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                <div class="relative">
                    <h4 class="text-white font-semibold text-[15px]">Ready to join Us?</h4>
                    <p class="text-blue-100 text-[13px] mt-0.5">Admissions are now open for the next intake.</p>
                </div>
                <div class="flex gap-2.5 relative">
                    <a onclick="nav('apply')" class="text-[13px] font-medium text-blue-600 bg-white hover:bg-blue-50 px-5 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm">
                        Apply Now <i class="bi bi-arrow-right text-xs"></i>
                    </a>
                    <a onclick="document.getElementById('programs_offered').scrollIntoView({ behavior: 'smooth' });" class="text-[13px] font-medium text-white bg-white/15 hover:bg-white/25 px-5 py-2.5 rounded-lg transition-colors cursor-pointer border border-white/20 backdrop-blur-sm">
                        View Programs
                    </a>
                </div>
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
                TEVETA-accredited institution in Mzuzu, Malawi.
            </h3>
            <p class="text-slate-500 leading-relaxed mt-3 text-[13px]">
                With a proven track record in delivering high-quality vocational training, we equip students with job-ready skills that meet local market demands and lay the foundation for economic independence.
            </p>
        </div>

        <!-- Middle: Image -->
        <div class="relative bg-slate-100 h-52 md:h-auto overflow-hidden">
            <img src="src/img/N/N13.jpg" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Students"/>
        </div>

        <!-- Right: Campus Life -->
        <div class="p-6 sm:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
            <h3 class="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight leading-tight">
                Your Future Starts Here
            </h3>
            <p class="text-slate-500 leading-relaxed mt-3 text-[13px]">
                Life at The Northen Hospitality is more than education it's a journey of growth, creativity, and opportunity. Join a vibrant student community where dreams are shaped into successful futures.
            </p>
            
            <div class="flex justify-center gap-4 mt-6">
                <div class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-300 transition-colors shadow-sm">
                        <img src="src/img/gala3.jpg" class="w-full h-full object-cover" alt="Lifestyle"/>
                    </div>
                    <span class="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 mt-1.5 transition-colors">Lifestyle</span>
                </div>
                <div class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-300 transition-colors shadow-sm">
                        <img src="src/img/gala4.jpg" class="w-full h-full object-cover" alt="Tours"/>
                    </div>
                    <span class="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 mt-1.5 transition-colors">Tours</span>
                </div>
                <div class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-300 transition-colors shadow-sm">
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
        <div class="relative bg-slate-100 h-56 md:h-auto md:col-span-2 overflow-hidden">
<img 
  src="src/img/N/N8.png"
  class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
  alt="Programs"
/>            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">ICT</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Certificate</span>
                        <span class="text-[11px] text-slate-400">3 Year</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Tailoring & Fashion Design</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full">Certificate</span>
                        <span class="text-[11px] text-slate-400">6 Months</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Agro Business Management</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Diploma</span>
                        <span class="text-[11px] text-slate-400">2 Years</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Hotel Management</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Diploma</span>
                        <span class="text-[11px] text-slate-400">2 Years</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Computer Engineering</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">Diploma</span>
                        <span class="text-[11px] text-slate-400">2 Years</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Community Development</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Diploma</span>
                        <span class="text-[11px] text-slate-400">2 Years</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">HIV & AIDS Management</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Diploma</span>
                        <span class="text-[11px] text-slate-400">2 Year</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Nutrition & Food Security</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">Diploma</span>
                        <span class="text-[11px] text-slate-400">2 Years</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Human Resource Management</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">Diploma</span>
                        <span class="text-[11px] text-slate-400">2 Years</span>
                    </div>
                </div>

                <div class="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all group">
                    <span class="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Comp Science & Cyber Security</span>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">Diploma</span>
                        <span class="text-[11px] text-slate-400">2 Years</span>
                    </div>
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
            
            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/teveta.png" class="w-9 h-9 object-contain" alt="TEVETA"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">TEVETA</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Technical & Vocational Education</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/abma.png" class="w-9 h-9 object-contain rounded" alt="ABMA"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">ABMA</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Association of Business Managers</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/abp.jpg" class="w-9 h-9 object-contain rounded" alt="ABP"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">ABP</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Association of Business Professionals</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/icam.jpg" class="w-9 h-9 object-contain rounded" alt="ICAM"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">ICAM</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Institute of Chartered Accountants</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/icm.svg" class="w-9 h-9 object-contain rounded" alt="ICM"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">ICM</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">Institute of Commercial Management</p>
            </div>

            <div class="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all text-center">
                <div class="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center mb-2.5">
                    <img src="src/img/aies.jpg" class="w-9 h-9 object-contain rounded" alt="AIES"/>
                </div>
                <h4 class="text-[13px] font-semibold text-slate-800">AIES</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">African Institute of Extended Studies</p>
            </div>

        </div>
    </div>

    <!-- Contact Us -->
    <div id="contact_section" class="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-1 md:grid-cols-5 animate-[fadeIn_0.6s_ease-out]">
        
        <!-- Contact Info -->
        <div class="p-6 sm:p-8 md:col-span-3 flex flex-col justify-center">
            <div class="inline-flex items-center gap-1.5 bg-sky-50 text-sky-600 text-[11px] font-semibold px-2.5 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                <i class="bi bi-chat-dots-fill text-[10px]"></i>
                Get In Touch
            </div>
            <h3 class="text-xl font-semibold text-slate-900 tracking-tight leading-tight">
                Contact Us
            </h3>
            <p class="text-slate-500 leading-relaxed mt-3 text-[13px]">
                Have questions about admissions, programs, or campus life? We'd love to hear from you. Reach out and our team will get back to you as soon as possible.
            </p>

            <div class="mt-6 space-y-4">
                <div class="flex items-start gap-3.5">
                    <div class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                        <i class="bi bi-geo-alt-fill text-slate-500 text-sm"></i>
                    </div>
                    <div>
                        <h4 class="text-[13px] font-semibold text-slate-800">Location</h4>
                        <p class="text-slate-400 text-[12px] leading-relaxed mt-0.5">Mzuzu Campus, opposite Grand Palace Hotel, next to Multi Career Secondary School</p>
                    </div>
                </div>
                <div class="flex items-start gap-3.5">
                    <div class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                        <i class="bi bi-telephone-fill text-slate-500 text-sm"></i>
                    </div>
                    <div>
                        <h4 class="text-[13px] font-semibold text-slate-800">Phone</h4>
                        <p class="text-slate-400 text-[12px] leading-relaxed mt-0.5">+265 888 287 816 / +265 993 266 810</p>
                    </div>
                </div>
                <div class="flex items-start gap-3.5">
                    <div class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                        <i class="bi bi-envelope-fill text-slate-500 text-sm"></i>
                    </div>
                    <div>
                        <h4 class="text-[13px] font-semibold text-slate-800">Email</h4>
                        <p class="text-slate-400 text-[12px] leading-relaxed mt-0.5">thenorthernhospitality@gmail.com</p>
                    </div>
                </div>
                <div class="flex items-start gap-3.5">
                    <div class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                        <i class="bi bi-clock-fill text-slate-500 text-sm"></i>
                    </div>
                    <div>
                        <h4 class="text-[13px] font-semibold text-slate-800">Office Hours</h4>
                        <p class="text-slate-400 text-[12px] leading-relaxed mt-0.5">Mon — Fri: 8:00 AM — 3:30 PM<br>Sat: 8:00 AM — 12:00 PM</p>
                    </div>
                </div>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-2 mt-6 pt-5 border-t border-slate-100">
                <span class="text-[11px] font-medium text-slate-400 uppercase tracking-wider mr-1">Follow Us</span>
                <a href="https://web.facebook.com/p/The-Northern-Hospitality-100094440677874/?_rdc=1&_rdr#" class="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-200 flex items-center justify-center transition-all group">
                    <i class="bi bi-facebook text-slate-400 group-hover:text-blue-600 text-sm transition-colors"></i>
                </a>
                <a href="https://wa.me/265885234259" target="_blank" class="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 hover:bg-green-50 hover:border-green-200 flex items-center justify-center transition-all group">
                    <i class="bi bi-whatsapp text-slate-400 group-hover:text-green-600 text-sm transition-colors"></i>
                </a>
            </div>
        </div>

        <!-- Map / Visual Side -->
        <div class="relative bg-slate-100 h-72 md:h-auto md:col-span-2 flex flex-col overflow-hidden">
            <div class="flex-1 relative">
                <img src="src/img/N/N1.png" class="w-full h-full object-cover" alt="Campus"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                    <div class="bg-white/90 backdrop-blur-md rounded-xl p-3.5 border border-white/50 shadow-lg">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-600/30">
                                <i class="bi bi-pin-map-fill text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="text-[12px] font-semibold text-slate-800">Mzuzu Campus</h4>
                                <p class="text-[11px] text-slate-500">Mzuzu, Malawi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=The Northen+hospitality+mzuzu" target="_blank" class="flex items-center justify-center gap-2 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-[12px] font-medium transition-colors cursor-pointer">
                <i class="bi bi-map text-sm"></i>
                Open in Google Maps
            </a>
        </div>
    </div>

</div>
`;

//enable dashboard by default

document.getElementById("view").innerHTML =dashboard;
