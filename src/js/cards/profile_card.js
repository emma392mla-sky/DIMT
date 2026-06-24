// student profile card

const profile = `
<div class="h-[100%] my-5 max-w-2xl mx-auto p-4 animate-[fadeIn_0.5s_ease-out]">

    <!-- Compact Header -->
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">

        <!-- Identity Bar -->
        <div class="p-4 sm:p-5 flex items-center gap-4 border-b border-slate-100">
            <img id='pix2' src="https://ui-avatars.com/api/?name=${student_info[3]}+${student_info[4]}&background=2563EB&color=fff&size=128&bold=true" class="pix2 w-14 h-14 rounded-xl object-cover ring-2 ring-slate-100" alt="Avatar">
            <div class="min-w-0 flex-1">
                <h2 class="text-lg font-bold text-slate-900 truncate">${student_info[3]} ${student_info[4]}</h2>
                <div class="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                    <span class="text-xs text-slate-500 font-medium">${student_info[0]}</span>
                    <span class="text-xs text-slate-400">•</span>
                    <span class="text-xs text-slate-500 font-medium">${prog}</span>
                    <span class="text-xs text-slate-400">•</span>
                    <span class="text-xs text-slate-500 font-medium">Lv ${student_info[1]}</span>
                </div>
            </div>
            <span class="hidden sm:inline-flex text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md uppercase tracking-wider flex-shrink-0">Locked</span>
        </div>

        <!-- Editable Fields -->
        <div class="p-4 sm:p-5 space-y-3">

            <!-- DOB -->
            <div class="flex items-center gap-2">
                <label class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider w-16 flex-shrink-0">DOB</label>
                <input required type="date" id='dates1' value="2000-01-01" class="flex-1 min-w-0 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/15 focus:border-blue-400 outline-none transition-all">
                <button id='dates2' onclick="update_inf('dates')" class="px-3 py-2 bg-blue-600 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-all flex-shrink-0 active:scale-[0.97]">Save</button>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-2">
                <label class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider w-16 flex-shrink-0">Phone</label>
                <input type="tel" id="phone1" placeholder="+265 999 000 000" class="flex-1 min-w-0 bg-slate-50 border border-slate-200 text-blue-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/15 focus:border-blue-400 outline-none transition-all">
                <button id="phone2" onclick="update_inf('phone')" class="px-3 py-2 bg-blue-600 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-all flex-shrink-0 active:scale-[0.97]">Save</button>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-2">
                <label class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider w-16 flex-shrink-0">Email</label>
                <input type="email" id='email_address1' placeholder="you@example.com" class="flex-1 min-w-0 bg-slate-50 border border-slate-200 text-blue-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/15 focus:border-blue-400 outline-none transition-all">
                <button id='email_address2' onclick="update_inf('email_address')" class="px-3 py-2 bg-blue-600 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-all flex-shrink-0 active:scale-[0.97]">Save</button>
            </div>

            <!-- Divider -->
            <div class="border-t border-slate-100"></div>

            <!-- Photo Upload -->
            <div class="flex items-center gap-2">
                <label class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider w-16 flex-shrink-0">Photo</label>
                <label for="profile_pic" class="flex-1 min-w-0 flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-2 cursor-pointer transition-all">
                    <i class="bi bi-image text-slate-400 text-sm flex-shrink-0"></i>
                    <span class="text-sm text-slate-500 truncate">Choose file</span>
                    <input type="file" id="profile_pic" accept=".png,.jpg,.jpeg" class="hidden">
                </label>
                <button id="upload_btn" onclick="updatePic()" class="px-3 py-2 bg-blue-600 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-all flex-shrink-0 active:scale-[0.97]">Upload</button>
            </div>

        </div>
    </div>

    <p class="text-center text-[10px] text-slate-400 mt-3">Need academic changes? Contact admin.</p>

</div>
`;