
// student profile card

const profile = `
<div class="min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
    

    <div class="w-full max-w-3xl relative z-10 py-10">

        <!-- Page Header -->
        <div class="text-center mb-8">
            
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
    <label class="block text-xs font-bold text-blue-500 uppercase tracking-wider mb-3">
        Profile Picture
    </label>

    <div class="flex flex-col sm:flex-row sm:items-center gap-3">
        
        <!-- Custom file trigger -->
        <label for="profile_pic"
            class="flex-1 cursor-pointer group bg-white border border-blue-200 hover:border-blue-400 rounded-2xl px-4 py-3 flex items-center justify-between transition-all shadow-sm hover:shadow-md">

            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
                    <i class="bi bi-upload text-blue-600"></i>
                </div>

                <div>
                    <p class="text-sm font-semibold text-blue-900">Choose image</p>
                    <p class="text-xs text-gray-400">PNG or JPG (recommended square)</p>
                </div>
            </div>

            <span class="text-xs text-blue-500 font-medium">Browse</span>

            <input
                type="file"
                id="profile_pic"
                accept=".png,.jpg,.jpeg"
                class="hidden"
            />
        </label>

        <!-- Upload button -->
        <button
            id="upload_btn"
            onclick="updatePic()"
            class="sm:w-auto w-full px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
        >
            Upload
        </button>
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