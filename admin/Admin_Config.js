// DATABASE CONFIG DATA

const SUPABASE_URL = "https://iiaokjspxfaabgmrkbat.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpYW9ranNweGZhYWJnbXJrYmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NjIzNjQsImV4cCI6MjA5NTEzODM2NH0.OBj4K3SPTrm6K1ozV8nY2o5MTXPk_96f_BTgIxLB_8o";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);










// A RECORD OF PROGRAM ID TO PROGRAM NAME

const dictionary = {
    P001: "Public Health",
    P002: "Business Studies",
    P003: "Tailoring",
    P004: "Agro Business",
    P005: "Hotel Management",
    P006: "Computer Engineering",
    P007: "Community Development",
    P008: "HIV & AIDS Management",
    P009: "Nutrition & Food Security",
    P010: "Human Resource Management",
    P011: "Comp Science & Cyber Security",
    P012: "Accounting"
};








// 1. ADDING STUDENT - SECTION

// ADD A SINGLE USER TO THE DB BEFORE PORTAL REGISTRATION

let add_memory=0;
function ADD(){
	const ID = document.getElementById("STU_ID").value;
	const NAME = document.getElementById("STU_NAME").value;
	const SURNAME = document.getElementById("STU_SURNAME").value;
    let adduser = document.getElementById("add_btn");
    add_memory = adduser.innerHTML;
    adduser.innerHTML = 'Adding...';

	supabaseClient
    .from('student_id_records')
    .select('student_id')
    .eq('student_id',ID)

    .then((storage) => {
    	if(storage.error){
            adduser.innerHTML = 'Adding...';
    		setTimeout(()=>{
                adduser.innerHTML = add_memory;
            },500);
    		return
    	}

		if(storage.data.length > 0){
			adduser.innerHTML = 'Already Exist';
            setTimeout(()=>{
                adduser.innerHTML = add_memory;
            },500);
		}else{
			//log a new user
			supabaseClient
		    .from('student_id_records')
		    .insert([{student_id:ID,name:NAME,surname:SURNAME}])

		    .then((cos) => {
				if(cos.error){
					adduser.innerHTML = 'Not saved';
                setTimeout(()=>{
                    adduser.innerHTML = add_memory;
                },500);
				}else{
					adduser.innerHTML = 'Successfully saved';
                    setTimeout(()=>{
                        adduser.innerHTML = add_memory;
                    },500);
				}
			})
		}
})
}











// ADD MULTIPLE STUDENTS VIA A CSV FILE BEFORE PORTAL REGISTRATION
let csv_memory = 0;

function uploadCSV() {
    const file = document.getElementById('csvFile').files[0];
    const btn = document.getElementById('csv2_btn');
    csv_memory = btn.innerHTML;

    const setLoading = (text) => {
        btn.disabled = true;
        btn.innerHTML = `<span class="btn-spinner"></span> ${text}`;
    };

    const setDone = (text) => {
        btn.disabled = false;
        btn.innerHTML = text || csv_memory;
    };

    const showConfirm = (message) => {
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999';

            const box = document.createElement('div');
            box.style.cssText = 'background:#fff;padding:24px;border-radius:8px;max-width:420px;width:90%;box-shadow:0 4px 20px rgba(0,0,0,0.15)';

            const msg = document.createElement('p');
            msg.style.cssText = 'margin:0 0 20px 0;font-size:14px;line-height:1.5;color:#333';
            msg.textContent = message;

            const btnWrap = document.createElement('div');
            btnWrap.style.cssText = 'display:flex;gap:10px;justify-content:flex-end';

            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.style.cssText = 'padding:8px 16px;border:1px solid #ccc;border-radius:4px;background:#fff;cursor:pointer;font-size:14px';
            cancelBtn.onclick = () => { document.body.removeChild(overlay); resolve(false); };

            const confirmBtn = document.createElement('button');
            confirmBtn.textContent = 'Confirm';
            confirmBtn.style.cssText = 'padding:8px 16px;border:none;border-radius:4px;background:#2563eb;color:#fff;cursor:pointer;font-size:14px';
            confirmBtn.onclick = () => { document.body.removeChild(overlay); resolve(true); };

            btnWrap.append(cancelBtn, confirmBtn);
            box.append(msg, btnWrap);
            overlay.append(box);
            document.body.appendChild(overlay);
        });
    };

    const showResults = (saved, skipped) => {
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999';

            const box = document.createElement('div');
            box.style.cssText = 'background:#fff;padding:24px;border-radius:8px;max-width:480px;width:90%;box-shadow:0 4px 20px rgba(0,0,0,0.15)';

            let html = `<p style="margin:0 0 16px 0;font-size:15px;font-weight:600;color:#111">${saved} saved, ${skipped.length} skipped</p>`;

            if (skipped.length > 0) {
                html += `<div style="max-height:200px;overflow-y:auto;margin-bottom:20px">`;
                html += `<p style="margin:0 0 8px 0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px">Skipped (already exist)</p>`;
                for (const s of skipped) {
                    html += `<div style="padding:6px 10px;margin-bottom:4px;background:#f9f9f9;border-radius:4px;font-size:13px;color:#555;display:flex;justify-content:space-between">
                        <span>${s.name} ${s.surname}</span>
                        <span style="color:#aaa;font-size:12px">${s.student_id}</span>
                    </div>`;
                }
                html += `</div>`;
            }

            html += `<div style="display:flex;justify-content:flex-end">`;
            html += `<button id="_result_close" style="padding:8px 20px;border:none;border-radius:4px;background:#2563eb;color:#fff;cursor:pointer;font-size:14px">Done</button>`;
            html += `</div>`;

            box.innerHTML = html;
            overlay.append(box);
            document.body.appendChild(overlay);

            document.getElementById('_result_close').onclick = () => {
                document.body.removeChild(overlay);
                resolve();
            };
        });
    };

    if (!file) {
        setLoading('Select a file first');
        setTimeout(() => setDone(), 2000);
        return;
    }

    setLoading('Parsing...');

    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async ({ data }) => {
            const rows = data
                .filter(row => row.student_id?.trim() && row.name?.trim() && row.surname?.trim())
                .map(row => ({
                    student_id: row.student_id.trim(),
                    name: row.name.trim(),
                    surname: row.surname.trim()
                }));

            if (rows.length === 0) {
                setLoading('No valid rows found');
                setTimeout(() => setDone(), 2000);
                return;
            }

            // Fetch existing student_ids in one query
            setLoading('Checking existing...');

            const idsToCheck = rows.map(r => r.student_id);
            const { data: existing, error: checkError } = await supabaseClient
                .from('student_id_records')
                .select('student_id')
                .in('student_id', idsToCheck);

            if (checkError) {
                setLoading('Check failed');
                setTimeout(() => setDone(), 2500);
                return;
            }

            const existingSet = new Set(existing ? existing.map(e => e.student_id) : []);

            const toInsert = [];
            const skipped = [];

            for (const row of rows) {
                if (existingSet.has(row.student_id)) {
                    skipped.push(row);
                } else {
                    toInsert.push(row);
                }
            }

            if (toInsert.length === 0 && skipped.length > 0) {
                setLoading(`${skipped.length} already exist`);
                setTimeout(() => {
                    showResults(0, skipped).then(() => setDone());
                }, 1500);
                return;
            }

            const msg = toInsert.length > 0 && skipped.length > 0
                ? `Save ${toInsert.length} new student(s)?\n${skipped.length} already exist and will be skipped.`
                : `Save ${toInsert.length} student(s)?`;

            const confirmed = await showConfirm(msg);
            if (!confirmed) {
                setDone();
                return;
            }

            let saved = 0;

            for (let i = 0; i < toInsert.length; i++) {
                const row = toInsert[i];
                btn.innerHTML = `<span class="btn-spinner"></span> Saving ${row.name}...`;

                const { error } = await supabaseClient
                    .from('student_id_records')
                    .insert({
                        student_id: row.student_id,
                        name: row.name,
                        surname: row.surname
                    });

                if (!error) {
                    saved++;
                }
            }

            // Now show skips live on button
            for (const s of skipped) {
                btn.innerHTML = `<span class="btn-spinner"></span> Skipping ${s.name}...`;
                await new Promise(r => setTimeout(r, 80));
            }

            if (skipped.length > 0) {
                setLoading(`${saved} saved, ${skipped.length} skipped`);
                setTimeout(() => {
                    showResults(saved, skipped).then(() => {
                        setDone();
                        document.getElementById('csvFile').value = '';
                    });
                }, 1500);
            } else {
                setLoading(`${saved} saved`);
                setTimeout(() => {
                    setDone();
                    document.getElementById('csvFile').value = '';
                }, 2500);
            }
        },
        error: () => {
            setLoading('Parse error');
            setTimeout(() => setDone(), 2000);
        }
    });
}













// SEARCH A USER BY USING STUDENT_ID AND UPDATE GRADES MANUALLY

function validator(rule) {
    const CHECK_ID = document.getElementById("PUSH_ID").value.trim();
    const CHECK_COURSE = document.getElementById("PUSH_COURSE").value.trim();
    const CHECK_GRADE = document.getElementById("PUSH_GRADE").value.trim();
    const SHOW_ID = document.getElementById("SHOW_ID");

    if (!CHECK_ID) {
        SHOW_ID.innerHTML = "Student:";
        return;
    }

    SHOW_ID.innerHTML = "Searching...";

    supabaseClient
        .from('student_id_records')
        .select('name,surname')
        .eq('student_id', CHECK_ID)
        .then((storage) => {

            if (storage.error) {
                //callback
                return;
            }

            if (storage.data && storage.data.length > 0) {
                const pack = storage.data[0];
                SHOW_ID.innerHTML = pack.name + ' ' + pack.surname;

                if (rule == 1) {
                    supabaseClient
                        .from('Student_Courses')
                        .update({ grades: CHECK_GRADE,course_name:'uploaded - '+CHECK_COURSE})
                        .eq('student_id', CHECK_ID)
                        .eq('course_id', CHECK_COURSE)
                        .then((set) => {

                            if (set.error) {
                                SHOW_ID.innerHTML = "Not saved";
                                return;
                            }
                                SHOW_ID.innerHTML = "successfully saved";
                        });
                }

            } else {
                SHOW_ID.innerHTML = "Not Found";
            }
        });
}

















//2. UPLOAD RESULTS - SECTION
// UPLOAD MULTIPLE RESULTS VIA A CSV FILE

async function uploadCSVresults() {
    const file = document.getElementById('csvFile2').files[0];
    const btn = document.getElementById('csv_btn');
    const originalText = btn.textContent;

    const setLoading = (text) => {
        btn.disabled = true;
        btn.innerHTML = `<span class="btn-spinner"></span> ${text}`;
    };

    const setDone = (text) => {
        btn.disabled = false;
        btn.textContent = text || originalText;
    };

    const showConfirm = (message) => {
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999';

            const box = document.createElement('div');
            box.style.cssText = 'background:#fff;padding:24px;border-radius:8px;max-width:420px;width:90%;box-shadow:0 4px 20px rgba(0,0,0,0.15)';

            const msg = document.createElement('p');
            msg.style.cssText = 'margin:0 0 20px 0;font-size:14px;line-height:1.5;color:#333;white-space:pre-line';
            msg.textContent = message;

            const btnWrap = document.createElement('div');
            btnWrap.style.cssText = 'display:flex;gap:10px;justify-content:flex-end';

            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.style.cssText = 'padding:8px 16px;border:1px solid #ccc;border-radius:4px;background:#fff;cursor:pointer;font-size:14px';
            cancelBtn.onclick = () => { document.body.removeChild(overlay); resolve(false); };

            const confirmBtn = document.createElement('button');
            confirmBtn.textContent = 'Confirm';
            confirmBtn.style.cssText = 'padding:8px 16px;border:none;border-radius:4px;background:#2563eb;color:#fff;cursor:pointer;font-size:14px';
            confirmBtn.onclick = () => { document.body.removeChild(overlay); resolve(true); };

            btnWrap.append(cancelBtn, confirmBtn);
            box.append(msg, btnWrap);
            overlay.append(box);
            document.body.appendChild(overlay);
        });
    };

    if (!file) {
        setLoading('Select a file');
        setTimeout(() => setDone(), 2000);
        return;
    }

    setLoading('Parsing...');

    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async ({ data, meta }) => {
            const courses = meta.fields
                .map(f => ({ original: f, clean: f.trim() }))
                .filter(f => f.clean.toLowerCase() !== 'student_id');

            const studentIds = [...new Set(
                data.map(row => row.student_id?.trim()).filter(Boolean)
            )];

            if (!studentIds.length) {
                setLoading('No student IDs found');
                setTimeout(() => setDone(), 2000);
                return;
            }

            setLoading('Fetching levels...');

            const { data: studentLevels, error: levelError } = await supabaseClient
                .from('registered_students')
                .select('student_id, level')
                .in('student_id', studentIds);

            if (levelError) {
                setLoading('Failed to fetch levels');
                setTimeout(() => setDone(), 2500);
                return;
            }

            const levelMap = new Map();
            if (studentLevels) {
                for (const s of studentLevels) {
                    levelMap.set(s.student_id, s.level);
                }
            }

            const updates = [];
            let missingLevelCount = 0;
            const missingLevelStudents = new Set();

            for (const row of data) {
                const studentId = row.student_id?.trim();
                if (!studentId) continue;

                const level = levelMap.get(studentId);

                if (level === undefined || level === null) {
                    missingLevelStudents.add(studentId);
                }

                for (const course of courses) {
                    const rawValue = row[course.original];
                    const cleanValue = rawValue?.toString().trim();
                    if (!cleanValue) continue;

                    const grade = parseInt(cleanValue, 10);
                    if (isNaN(grade)) continue;

                    updates.push({
                        student_id: studentId,
                        course_id: course.clean,
                        grades: grade,
                        course_name: 'uploaded - ' + course.clean,
                        level: level ?? null
                    });
                }
            }

            missingLevelCount = missingLevelStudents.size;

            if (!updates.length) {
                setLoading('No valid data');
                setTimeout(() => setDone(), 2000);
                return;
            }

            let confirmMsg = `Update ${updates.length} grade(s)?`;
            if (missingLevelCount > 0) {
                confirmMsg += `\n\n${missingLevelCount} student(s) have no level in registered_students`;
            }

            const confirmed = await showConfirm(confirmMsg);
            if (!confirmed) {
                setDone();
                return;
            }

            setLoading(`0/${updates.length}`);

            let success = 0, failedCount = 0;

            for (let i = 0; i < updates.length; i++) {
                const item = updates[i];
                btn.innerHTML = `<span class="btn-spinner"></span> ${i + 1}/${updates.length}`;

                const { error } = await supabaseClient
                    .from('Student_Courses')
                    .upsert(item, {
                        onConflict: 'student_id,course_id'
                    })
                    .select();

                if (error) {
                    failedCount++;
                } else {
                    success++;
                }
            }

            if (failedCount === 0) {
                setLoading(`${success} saved`);
            } else {
                setLoading(`${success} saved | ${failedCount} failed`);
            }

            setTimeout(() => {
                setDone();
                document.getElementById('csvFile2').value = '';
            }, 2500);
        },
        error: () => {
            setLoading('Parse error');
            setTimeout(() => setDone(), 2000);
        }
    });
}










// UPLOADING PDF BOOKS

let book_memory=0;
function uploadBook() {

    const book = document.getElementById('book_file').files[0];
    const Bpg = document.getElementById('book_pg').value;
    const Btitle = document.getElementById('book_title').value;
    const Blevel = document.getElementById('book_level').value;
    const user= document.getElementById('logged').innerHTML;
    let bookBTN=document.getElementById('book_btn');
    book_memory = bookBTN.innerHTML;
    bookBTN.innerHTML='Uploading...';

    if (!book) {
        bookBTN.innerHTML='Select file first';
        setTimeout(()=>{
            bookBTN.innerHTML=book_memory;
            },3000);
        return;
    }

    supabaseClient
        .storage
        .from('books')
        .upload(book.name, book)
        .then(res => {

            if (res.error) {
                bookBTN.innerHTML='Upload failed';
                setTimeout(()=>{
                bookBTN.innerHTML=book_memory;
                },3000);
                return;
            }
            // file record
            supabaseClient
		    .from('uploads')
		    .insert([{uploaded_by:user,pg:Bpg,level:Blevel,title:Btitle,path:res.data.path}])

		    .then((BOOK) => {
				if(BOOK.error){
                    bookBTN.innerHTML='Data not  saved';
					setTimeout(()=>{
                        bookBTN.innerHTML=book_memory;
                    },3000);
				}else{
					bookBTN.innerHTML='Saved successfully';
                    setTimeout(()=>{
                        bookBTN.innerHTML=book_memory;
                        show_books();
                    },3000);
				}
			})

        });

}













//SEND TOTAL UPLOADED BOOKS TO THE DASHBOARD

function show_books() {
    supabaseClient
        .from('uploads')
        .select('*')
        .then(({data,error})=>{
                if (error){
                    //callback
                    return
                }

                document.getElementById('STAT_BOOKS').innerHTML = data.length;
        });
}







// SHOWS UPLOADED BOOKS BY ADMINISTRATORS

function show() {
    const box = document.getElementById('AllBooks');
    box.innerHTML = '';
    box.innerHTML = `
    <div class='grid place-items-center' style=" width:100%; height:100%;">
        <div class='loader2 h-[100px] w-[100px]'></div>
    </div>
  `;

    supabaseClient
        .from('uploads')
        .select('*')
        .order('id', { ascending: false })
        .then(({ data, error }) => {

            if (error){
                //callback
                return
            }

            box.innerHTML = '';

            data.forEach(book => {

                const pdf = book.path
                    ? supabaseClient.storage.from('books')
                        .getPublicUrl(book.path).data.publicUrl
                    : '#';

                box.innerHTML += `
                    <div class="bg-white p-4 rounded-xl shadow border mb-3">
                        
                        <h3 class="font-semibold text-lg mb-2">
                            ${book.title.toUpperCase()}
                        </h3>

                        <p class="text-sm text-gray-500">
                            ${dictionary[book.pg] || ''}
                        </p>

                        <p class="text-sm text-gray-500">
                            ${book.level}
                        </p>

                        <a href="${pdf}"
                           target="_blank"
                           class="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg">
                            View Book
                        </a>

                    </div>
                `;
            });
        });
}












//3. NOTIFICATION - SECTION
// SEND A NOTIFICATION TO STUDENTS

let note_memory=0;
function sendNotification(){
     // send notification
    const Notice_target = document.getElementById('NOTIF_TARGET').value;
    const Notice_priority = document.getElementById('NOTIF_PRIORITY').value;
    const Notice_title = document.getElementById('NOTIF_TITLE').value;
    const Notice_message = document.getElementById('NOTIF_MESSAGE').value;
    let note_btn = document.getElementById('send_notice');
        note_memory = note_btn.innerHTML;
        note_btn.innerHTML = "Deleting...";

    if (!Notice_target || !Notice_priority || !Notice_title || !Notice_message) {
        note_btn.innerHTML = "Fill all fields";
    return;
}
    
            supabaseClient
            .from('notification')
            .insert([{target:Notice_target,priority:Notice_priority,title:Notice_title,message:Notice_message}])

            .then((NOTICE) => {
                if(NOTICE.error){
                    note_btn.innerHTML = 'Failed to send';
                    setTimeout(()=>{
                        note_btn.innerHTML = note_memory;
                    },3000);
                }else{
                    note_btn.innerHTML ='successfully sent';
                    document.getElementById('send_notice').innerHTML="successfully sent";
                    setTimeout(()=>{
                        note_btn.innerHTML = note_memory;
                    },3000);
                }
            })
}








// DISPLAY NOTIFICATIONS SENT TO STUDENT 

function note() {
    supabaseClient
        .from('notification')
        .select('*')
        .eq('target', 'all')
        .order('id', { ascending: false })
        .then((NOTICE) => {

            if (NOTICE.error) {
                document.getElementById('NOTIF_LIST').innerHTML="Failed to load notices";
                return;
            }

            let show_all = '';
            let p, icon, colorClass;

            NOTICE.data.forEach((data) => {
                
                // Format date
                let dateStr = new Date(data.created_at).toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'numeric', year: 'numeric'
                });

                // Pick icon and colors based on priority
                p = (data.priority || '').toLowerCase();
                
                if (p === 'urgent') {
                    icon = 'bi-exclamation-octagon';
                    colorClass = 'border-l-red-500 bg-red-50/50';
                } else if (p === 'high') {
                    icon = 'bi-exclamation-triangle';
                    colorClass = 'border-l-amber-500 bg-amber-50/50';
                } else if (p === 'normal') {
                    icon = 'bi-info-circle';
                    colorClass = 'border-l-blue-500 bg-blue-50/50';
                } else {
                    icon = 'bi-dash-circle';
                    colorClass = 'border-l-gray-300 bg-gray-50/50';
                }

                show_all += `
                    <div class="p-3 mb-3 border border-gray-200 border-l-4 ${colorClass} rounded-r-lg shadow-sm">
                        <div class="flex items-center gap-2 mb-1">
                            <i class="bi ${icon} text-gray-500 text-sm"></i>
                            <h4 class="text-sm font-semibold text-gray-800 truncate">${data.title}</h4>
                            <span class="ml-auto text-[0.6rem] font-bold uppercase text-gray-400">${data.priority}</span>
                        </div>
                        <p class="text-sm text-gray-600 pl-6 mb-2">${data.message}</p>
                        <div class="flex items-center gap-1.5 text-xs text-gray-400 pl-6">
                            <i class="bi bi-clock text-[0.6rem]"></i> ${dateStr}
                        </div>
                    </div>
                `;
            });

            if (!show_all) {
                show_all = `
                    <div class="text-center text-gray-400 text-sm py-8">
                        <i class="bi bi-bell-slash text-2xl block mb-2"></i>No notifications sent
                    </div>
                `;
            }

            document.getElementById('NOTIF_LIST').innerHTML = show_all;
        });
}










// 4. SETTINGS - SECTION
// DISPLAY CALENDER TOGETHER WITH CURRENT EVENTS

function showCAL() {

    //display calender using calender js library

  Calendar.DayEvent.click(function(day) {
    document.getElementById("event_date").value =
      `${day.year}-${String(day.month).padStart(2,'0')}-${String(day.day).padStart(2,'0')}`;
  });



  supabaseClient
    .from('calendar_config')
    .select()
    .then(({ data, error }) => {

            if (error){
                //callback
                return
            }
      Calendar.clear();

      let list = "";

data.forEach(attr => {
    const [y, m, d] = attr.date.split('-').map(Number);

    Calendar.add({
        year: y,
        month: m,
        day: d,
        label: attr.label,
        labelColor: attr.color
    });

    list += `
        <div class="flex items-center justify-between bg-white border border-gray-100 rounded-lg p-3 mb-2 shadow-sm hover:shadow-md transition-shadow" style="border-left: 4px solid ${attr.color};">

            <div class="flex flex-col">
                <div class="text-sm font-medium text-gray-800">
                    ${attr.label}
                </div>

                <div class="text-xs text-gray-500 mt-0.5">
                    ${d}/${m}/${y}
                </div>
            </div>

            <button
                class="px-3 py-1 text-xs font-medium bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200"
                onclick="deleteEvent('${attr.id}')">
                Remove
            </button>

        </div>
    `;
});

document.getElementById("listEVENTS").innerHTML = list;

      document.getElementById("mycal").innerHTML =
        Calendar.show(new Date().getFullYear(), new Date().getMonth() + 1);
    });
}














// ADD AN EVENT ON A CALENDAR

function createEVENT() {
    let date_event = document.getElementById("event_date").value;
    let label_event = document.getElementById("event_label").value;

    let colors = [
        "#dc2626", "#ea580c", "#d97706", "#65a30d", "#16a34a",
        "#0891b2", "#2563eb", "#7c3aed", "#c026d3", "#db2777"
    ];

    let choice = Math.floor(Math.random() * colors.length);

    supabaseClient
        .from('calendar_config')
        .insert({
            date: date_event,
            label: label_event,
            color: colors[choice]
        })
        .select()
        .then(({ data, error }) => {

            if (error) {
                //callback
            } else {
                showCAL();

            }

        })
        .catch(err => {
            //callback
        });
}
setTimeout(() => {
    universal();
}, 1000);
























// RMOVE OLD EVENTS FROM THE CALENDAR 

function deleteEvent(code){
    supabaseClient
        .from('calendar_config')
        .delete()
        .eq('id', code)
        .then(({ data, error }) => {

            if (error) {
                //callback
            } else {
                showCAL();
            }

        })
        .catch(err => {
            //callback
        });
}












//CONFIGURE SWITCHES TO ENABLE NEW STUDENT ENROLLMENT OR EXAM REGISTRATION

function system(column, value){
    supabaseClient
        .from('system_settings')
        .upsert({ id: 1, [column]: value })
        .then(({ error }) => {
            if (error){
                //callback
                return
            }
        });
}















// SHOW A STUDENT PROFILE WITHA DELETE BUTTON

function deleteStudent() {
    let code = document.getElementById('deleteStudentId').value;

    supabaseClient
        .from('registered_students')
        .select('*')
        .eq('student_id', code)
        .maybeSingle()
        .then(({ data, error }) => {

            const msg = document.getElementById("deleteMsg");

            if (error) {
                msg.innerHTML = `
                    <div class="p-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm">
                        ${error.message}
                    </div>
                `;
                return;
            }
const img = data.pic ? supabaseClient.storage.from('profile').getPublicUrl(data.pic).data.publicUrl: null;

msg.innerHTML = `
<div class="bg-slate-50 text-slate-900 rounded-xl p-6 shadow-lg">

    <div class="flex flex-col md:flex-row gap-6">

        <!-- LEFT SIDE: FULL HEIGHT PROFILE -->
        <div class="md:w-1/4 flex flex-col items-center md:items-start">

            <div class="flex-1 h-full min-h-[300px] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
                ${
                    img
                        ? `<img src="${img}" class="w-full h-full object-cover">`
                        : `<i class="bi bi-person text-6xl text-slate-500"></i>`
                }
            </div>

            <div class="mt-4 text-center md:text-left">
                <h2 class="text-xl font-bold">
                    ${data.name || ''} ${data.surname || ''}
                </h2>

                <p class="text-slate-400 text-sm">
                    <i class="bi bi-person-badge me-1"></i>
                    ${data.student_id || 'N/A'}
                </p>

                <div class="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">

                    <span class="px-2 py-1 text-xs rounded bg-green-900 text-green-300">
                        ${data.program || 'No Program'}
                    </span>

                    <span class="px-2 py-1 text-xs rounded bg-blue-900 text-blue-300">
                        ${data.exam_board || 'No Board'}
                    </span>

                    <span class="px-2 py-1 text-xs rounded bg-purple-900 text-purple-300">
                        Level ${data.level || '-'}
                    </span>

                </div>
            </div>

        </div>

        <!-- RIGHT SIDE: DETAILS -->
        <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">

        <div class="bg-white rounded-xl border p-4 shadow-sm h-full">
            <h3 class="font-semibold text-sky-400">
                    <i class="bi bi-mortarboard me-2"></i>Academic
                </h3>

                <div><i class="bi bi-book me-2"></i>${data.program || '—'}</div>
                <div><i class="bi bi-award me-2"></i>${data.exam_board || '—'}</div>
                <div><i class="bi bi-layers me-2"></i>Level ${data.level || '—'}</div>
                <div><i class="bi bi-calendar-event me-2"></i>${data.dates || '—'}</div>
        </div>

        <div class="bg-white rounded-xl border p-4 shadow-sm h-full">
            <h3 class="font-semibold text-amber-400">
                    <i class="bi bi-person-lines-fill me-2"></i>Contact
                </h3>

                <div><i class="bi bi-envelope me-2"></i>${data.email_address || '—'}</div>
                <div><i class="bi bi-telephone me-2"></i>${data.phone || '—'}</div>
                <div><i class="bi bi-geo-alt me-2"></i>${data.district || '—'}</div>
                <div><i class="bi bi-buildings me-2"></i>${data.city || '—'}</div>
        </div>

        <div class="bg-white rounded-xl border p-4 shadow-sm h-full">
            <h3 class="font-semibold text-violet-400">
                    <i class="bi bi-people me-2"></i>Guardian
                </h3>

                <div><i class="bi bi-person me-2"></i>${data.guardian_name || '—'}</div>
                <div><i class="bi bi-envelope me-2"></i>${data.guardian_email || '—'}</div>
                <div><i class="bi bi-telephone me-2"></i>${data.guardian_phone || '—'}</div>
        </div>

        <div id='pay_config' class="bg-white rounded-xl border p-4 shadow-sm h-full">

        </div>

    </div>

    </div>

    <div class="border-t border-slate-700 mt-6 pt-4 text-xs text-slate-400">
        <i class="bi bi-clock-history me-1"></i>
        Registered: ${data.created_at || '—'}
    </div>

</div>
`;
document.getElementById("del_btn").style.display='block';
document.getElementById("key").value = code;
        })
        .catch(() => {
            document.getElementById("deleteMsg").innerHTML = `
                <div class="p-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm">
                    Not found
                </div>
            `;
            document.getElementById("del_btn").style.display='none';
        });
}











// PERMANENTLY DROP THE USER FROM THE DB

function deleteNOW() {

    let del_student = document.getElementById("key").value;
    let btn = document.getElementById("del_btn");

    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 bg-black/60 flex items-center justify-center z-50";

    // Create box
    const box = document.createElement("div");
    box.className = "bg-white rounded-lg shadow-lg p-6 w-80 text-slate-900";

    box.innerHTML = `
        <h2 class="text-lg font-bold mb-2">Confirm Delete</h2>
        <p class="text-sm text-slate-600 mb-4">
            Are you sure you want to delete student <b>${del_student}</b>? This action cannot be undone.
        </p>
    `;

    // Buttons container
    const btnWrap = document.createElement("div");
    btnWrap.className = "flex justify-end gap-2";

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.className = "px-3 py-1 bg-slate-200 rounded";

    cancelBtn.onclick = () => {
        document.body.removeChild(overlay);
    };

    // Confirm button
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Delete";
    confirmBtn.className = "px-3 py-1 bg-red-600 text-white rounded";

    confirmBtn.onclick = () => {

        btn.innerHTML = "Deleting...";

        supabaseClient.from('Student_Courses')
            .delete()
            .eq('student_id', del_student)
            .then(({ error }) => {
                if (error) throw error;

                return supabaseClient.from('registered_students')
                    .delete()
                    .eq('student_id', del_student);
            })
            .then(({ error }) => {
                if (error) throw error;

                return supabaseClient.from('login_sessions')
                    .delete()
                    .eq('student_id', del_student);
            })
            .then(({ error }) => {
                if (error) throw error;

                return supabaseClient.from('student_id_records')
                    .delete()
                    .eq('student_id', del_student);
            })
            .then(({ error }) => {
                if (error) throw error;

                btn.innerHTML = "Deleted";
                deleteStudent();
                document.body.removeChild(overlay);
            })
            .catch(() => {
                btn.innerHTML = "Delete failed";
                document.body.removeChild(overlay);
            });
    };

    btnWrap.appendChild(cancelBtn);
    btnWrap.appendChild(confirmBtn);
    box.appendChild(btnWrap);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
}











// 5. DASHBOARD - SECTION
//SHOW SHUDENT DATA IN ADMIN DASHBOARD

function dashboard_data(Q,DATA){

    let data1 = document.getElementById('ACTIVITY_LIST');
    let data2 = document.getElementById('STAT_STUDENTS');
    
    setTimeout(()=>{
        data1.innerHTML = `
            <div class='grid place-items-center' style=" width:100%; height:100%;">
                <div class='loader2 h-[100px] w-[100px]'></div>
            </div>
        `;
    

                let query = supabaseClient
                .from('registered_students')
                .select(`
                    *,
                    Exam_Registration(*)
                `);
                    if (Q == 'search') {

                        let data = DATA.trim();

                        let words = data.split(' ');

                        if (words.length > 1) {
                            query = query.or(
                                `and(name.ilike.%${words[0]}%,surname.ilike.%${words[1]}%),and(name.ilike.%${words[1]}%,surname.ilike.%${words[0]}%)`
                            );
                        } else {
                            query = query.or(
                                `student_id.eq.${data},name.ilike.%${data}%,surname.ilike.%${data}%`
                            );
                        }
                    }
                    query.then(({data,error})=>{
                        //total enrolled students
                        if(data.length>0){
                            let students = '';

                        data.forEach((all) => {
                                    //getting status from a foreign table
                                     let STATUZ = 'hidden';
                                    
                                     if (
                                         all.Exam_Registration &&
                                         all.Exam_Registration.length > 0
                                     ) {
                                         STATUZ = all.Exam_Registration[0].status;
                                     }
                            const pro = all.pic
                                ? supabaseClient.storage.from('profile').getPublicUrl(all.pic).data.publicUrl
                                : null;

                            students += `
<div class="group bg-white border border-slate-200 rounded-2xl p-4 mb-3 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">

    <div class="flex items-center gap-4">

        <div class="relative flex-shrink-0">
            <div class="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                ${
                    pro
                        ? `<img src="${pro}" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">`
                        : `<i class="bi bi-person-fill text-2xl text-slate-400"></i>`
                }
            </div>
        </div>

        <div onclick='personal_data("${all.student_id}")' class="flex-1 cursor-pointer">

            <div class="flex items-center gap-2 flex-wrap">
                <h3 class="font-semibold text-slate-800">
                    ${all.name} ${all.surname}
                </h3>

                <span class="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
                    ${all.student_id}
                </span>
            </div>

            <p class="text-sm text-slate-500 mt-1">
                ${dictionary[all.program]}
            </p>

        </div>

        <div class="flex gap-2">

            <button
                onclick='view_specific_student_details("${all.student_id}")'
                class=" px-3 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
                <i class="bi bi-person-vcard"></i>
                <span class="hidden md:inline">Details</span>
            </button>

            <button
                onclick='show_request("${all.student_id}")'
                class="${STATUZ} px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 flex items-center gap-2"
            >
                <i class="bi bi-credit-card"></i>
                <span class="hidden md:inline">Exam</span>
            </button>

        </div>

    </div>

</div>
`;
                        });
                        let tag = `
                            <div class="flex items-center justify-center py-3">
                                <span class="text-xs text-gray-400">
                                    More records will load as they become available
                                </span>
                            </div>
                        `;
                        data1.innerHTML = students+tag;
                        data2.innerHTML = data.length;

                        }else{
                            document.getElementById('ACTIVITY_LIST').innerHTML = "No Data Found";
                            if(DATA == ''|| DATA.length < 1){
                                //load data back after text clear in the searchbox
                                dashboard_data();

                            }
                            return
                        }

                    })
},50)
}









// SHOW NUMBER OF STUDENTS APPLIED FOR EXAM

function show_request(req){
    show_total_exam_applied(req);
    document.getElementById('PROGRAM_INFO').innerHTML = `
              <div class='grid place-items-center' style=" width:100%; height:100%;">
                <div class='loader2 h-[100px] w-[100px]'></div>
              </div>`;
}










// DYNAMICALLY LOOP THROUGH FUNCTIONS TO GET TO STUDENT PROFILE

async function view_specific_student_details(uid){

    await Run(5); //open settings

    document.getElementById('del').click(); //then click the delete button

    let inp = document.getElementById('deleteStudentId');
    inp.value = uid; // there after enter student id in search field

    await deleteStudent(); // then run the delete function to display student data before deleting
    
    let bit = document.getElementById('manage_profile');
    bit.style.display='none'; // hide both search input and delete button

    let pay_hist = document.getElementById('panel');
    pay_hist.innerHTML=`
        <h3 class="text-xl font-bold text-gray-900 mb-1">Student Profile</h3>
        <p class="text-sm text-gray-500 mb-4"></p>
    `; // Modify titles

    //set data from 2 tables
    setTimeout(async () => {

    const conf = document.getElementById('pay_config');

    const [
        { data: examData, error: examError },
        { data: studentData, error: studentError }
    ] = await Promise.all([
        supabaseClient
            .from('Exam_Registration')
            .select('exam_name')
            .eq('student_id', uid),

        supabaseClient
            .from('registered_students')
            .select('exam_board')
            .eq('student_id', uid)
    ]);

    conf.innerHTML = `
        Name: ${examData?.[0]?.exam_name || 'N/A'}<br>
        Board: ${studentData?.[0]?.exam_board || 'N/A'}
    `;

}, 500);


}









//SHOW STUDENT GRADES AND PERFOMANCE

 function personal_data(info){
    let camp = document.getElementById('PROGRAM_INFO');
    camp.innerHTML = ""; //clear old data
    camp.innerHTML = `
    <div class='grid place-items-center' style=" width:100%; height:100%;">
        <div class='loader2 h-[100px] w-[100px]'></div>
    </div>
  `;
    supabaseClient.from('Student_Courses')
                    .select('*')
                    .eq("student_id",info)
                    .then(({data,error})=>{
                        //total enrolled students
                        if(data.length>0){
                            //clear loader
                            camp.innerHTML = ""; 
                             data.forEach((personal) => {
                                const g = personal.grades;
                                const label =
                                    g === 0 ? 'Not Graded' :
                                    g <= 30 ? 'Fail' :
                                    g <= 49 ? 'Pass' :
                                    g <= 70 ? 'Credit' :
                                    g <= 79 ? 'Good' :
                                    'Distinction';

                                const color =
                                    g === 0 ? 'gray' :
                                    g <= 30 ? 'red' :
                                    g <= 49 ? 'orange' :
                                    g <= 70 ? 'yellow' :
                                    g <= 79 ? 'blue' :
                                    'green';
const nm = personal.course_name == null ? 'Unknown Course' : personal.course_name;
        camp.innerHTML += `
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="flex items-start justify-between mb-3">
                <div>
                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wide">${personal.course_id}</p>
                    <h3 class="text-sm font-semibold text-gray-800">${nm}</h3>
                </div>
                <div class="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 border border-indigo-100">
                    <span class="text-lg font-bold text-indigo-600">${g}%</span>
                </div>
            </div>
            <div class="mb-2">
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Performance</span><span>${g}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div class="h-full rounded-full bg-indigo-600" style="width:${g}%"></div>
                </div>
            </div>
            <div class="mt-3 flex items-center justify-between">
                <span class="text-xs text-gray-500">Course Grade</span>
                <span class="text-xs font-semibold px-2 py-1 rounded-full bg-${color}-100 text-${color}-700">${label}</span>
            </div>
        </div>`;
                             });

                        }else{
                            camp.innerHTML = "No Data Found";
                        }
                    });
 }









// SHOWS A LIST OF STUDENTS APPLIED FOR EXAMS

 function show_total_exam_applied(lock) {

    if (lock == 1) {
        document.getElementById('PROGRAM_INFO').innerHTML = `
            <div class='grid place-items-center' style="width:100%; height:100%;">
                <div class='loader2 h-[100px] w-[100px]'></div>
            </div>
        `;
    }

    let query = supabaseClient
        .from('Exam_Registration')
        .select('*')
        .order('id', { ascending: false })
    if (lock !== 1 && lock !== 0) {
        query = query.eq('student_id', lock);
    }

    query.then(({ data, error }) => {

        if (error) {
            document.getElementById('sit_exam').textContent = '0';
            return;
        }

        let all_data = '';

        if (data.length > 0) {

            data.forEach((row) => {
                let colour;
                let hiden;
                if(row.status == 'Not Approved'){
                    colour ='red';
                    hider0 = 'hidden';
                    hider1 = '';
                    BG = 'blue';
                }else{
                    colour ='green';
                    hider0 = '';
                    hider1 = 'hidden';
                    BG = 'green';
                }

                let state;
                if(row.status == 'Approved'){
                    state = '<i class="bi bi-patch-check-fill text-green-500 font-bold text-5xl"></i>';
                }else{
                    state =row.status;
                }
                all_data += `
                <div class="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5 mb-4">

                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h3 class="font-bold text-slate-800 text-lg">
                                ${row.exam_name} ${row.exam_surname}
                            </h3>
                            <p class="text-sm text-slate-500">
                                Exam Registration Request
                            </p>
                        </div>

                        <div class="text-xs text-slate-500">
                            <i class="bi bi-calendar-event me-1"></i>
                            ${new Date(row.created_at).toLocaleString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false
                            })}
                        </div>
                    </div>

                        <div class="mt-4 flex items-center justify-end border-t pt-3">
                        
                            <button onclick="approveExam('${row.student_id}',0)" class="${hider0} px-5 py-2 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-500 transition-all duration-200 shadow-sm hover:shadow-md">
                                Reject
                            </button>

                            <button onclick="approveExam('${row.student_id}',1)" class="${hider1} px-5 py-2 rounded-xl bg-${BG}-600 text-white text-sm font-semibold hover:bg-${BG}-700 transition-all duration-200 shadow-sm hover:shadow-md">
                                Approve
                            </button>
                        
                        </div>
                    <div class="grid md:grid-cols-2 gap-3 text-sm py-2">

                        <div class="bg-slate-50 rounded-xl p-3">
                            <div class="text-slate-500">Student ID</div>
                            <div class="font-semibold text-slate-800">
                                ${row.student_id}
                            </div>
                        </div>

                        <div class="bg-slate-50 rounded-xl p-3">
                            <div class="text-slate-500">Programme</div>
                            <div class="font-semibold text-slate-800">
                                ${dictionary[row.exam_pg]}
                            </div>
                        </div>

                        <div class="bg-slate-50 rounded-xl p-3">
                            <div class="text-slate-500">Level</div>
                            <div class="font-semibold text-slate-800">
                                ${row.exam_level}
                            </div>
                        </div>

                        <div class="bg-slate-50 rounded-xl p-3">
                            <div class="text-slate-500">Status</div>
                            <div class="font-semibold text-${colour}-600">
                                ${state}
                            </div>

                        </div>

                    </div>

                </div>
                `;
            });

                let exp1 = `
                    <button onclick="approveExam()" class="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
                        Export Records
                    </button>
                `;
                if(lock != 0){
            document.getElementById('PROGRAM_INFO').innerHTML =exp1 + all_data;
        }

        } else {
            if (lock != 0) {
                document.getElementById('PROGRAM_INFO').innerHTML = `
<div class="flex items-center justify-center py-10">
    <div class="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 max-w-md w-full text-center">

        <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-100">
            <i class="bi bi-search text-3xl text-amber-600"></i>
        </div>

        <h3 class="text-xl font-bold text-slate-800 mb-2">
            No Exam Registration Found
        </h3>

        <p class="text-slate-500 leading-relaxed">
            The student may not have registered for the upcoming examinations.
        </p>

    </div>
</div>
`;
            }
        }

        document.getElementById('sit_exam').textContent = data.length;
    });
}









// AN FEATURE USED TO APROVE STUDENTS EXAM REQUEST

function approveExam(ids,type){
    if(type == 1){
        opt = "Approved";
    }else{
        opt = "Not Approved";
    }
        supabaseClient
        .from('Exam_Registration')
        .update({status:opt})
        .eq('student_id',ids)
        .then(({ data, error }) => {
            show_request(ids);
        });
}









// SHOWS A LIST OF STUDENTS APPLIED TO THE INSTITUTION

function show_total_enroll_requests(aim) {
    if(aim == 1){
        document.getElementById('PROGRAM_INFO').innerHTML = `
    <div class='grid place-items-center' style=" width:100%; height:100%;">
        <div class='loader2 h-[100px] w-[100px]'></div>
    </div>
  `;
    }

    let all_list = '';
    supabaseClient
        .from('Application_Requests')
        .select('*')
        .then(({ data, error }) => {

            if (error) {
                document.getElementById('intake_requests').textContent = '0';
                return;
            }

            document.getElementById('intake_requests').textContent = data.length;
            if(aim == 1){
                if(data.length >0){
                                data.forEach((enroll) => {
    var date = new Date(enroll.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    var initials = enroll.apply_name.charAt(0) + enroll.apply_surname.charAt(0);

    all_list += `
    <div class="p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
        
        <div class="flex items-center gap-4 mb-4">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-200 shrink-0">
                <i class="bi bi-person-fill text-lg"></i>
            </div>

            <div class="flex-1 min-w-0">
                <h4 class="text-sm font-semibold text-gray-800 truncate">${enroll.apply_name} ${enroll.apply_surname}</h4>
                <span class="text-[0.65rem] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mt-1 inline-block">${enroll.apply_program}</span>
            </div>
            <div class="text-right shrink-0 hidden sm:block">
                <span class="text-xs text-gray-400 font-medium">${date}</span>
            </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-dashed border-gray-100">
            <div class="flex items-center gap-2.5 text-xs text-gray-500">
                <div class="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                    <i class="bi bi-envelope text-[0.7rem]"></i>
                </div>
                <span class="truncate">${enroll.apply_email}</span>
            </div>
            <div class="flex items-center gap-2.5 text-xs text-gray-500">
                <div class="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                    <i class="bi bi-telephone text-[0.7rem]"></i>
                </div>
                <span>0${enroll.apply_phone}</span>
            </div>
        </div>

        <div class="sm:hidden pt-3 mt-3 border-t border-dashed border-gray-100 text-xs text-gray-400 text-right">
            ${date}
        </div>
        
    </div>
    `;
});
            let exp2 = `<button onclick="approveExam()" class="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
                        Export Records
                       </button>`;

            document.getElementById('PROGRAM_INFO').innerHTML = exp2+all_list;

                }else{
            let fail = `
                <div class="flex flex-col items-center justify-center text-center py-12 text-gray-400">
                    <div class="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
                        <i class="bi bi-person-plus text-2xl text-gray-300"></i>
                    </div>
                    <p class="text-sm font-medium text-gray-500">No applications yet</p>
                    <p class="text-xs text-gray-400 mt-1">New applications will appear here</p>
                </div>
            `;  
            document.getElementById('PROGRAM_INFO').innerHTML = fail;      

                }
            }

        });
}





// LIST MESSAGES FROM STUDENTS

function read_total_messages_from_students(law) {
    if(law == 1){
        document.getElementById('PROGRAM_INFO').innerHTML = `
    <div class='grid place-items-center' style=" width:100%; height:100%;">
        <div class='loader2 h-[100px] w-[100px]'></div>
    </div>
  `;
    }
    supabaseClient
        .from('MessagesToAdmin')
        .select('*')
        .order('id', { ascending: false })
        .then(({ data, error }) => {

            if (error) {
                document.getElementById('total_msgs').textContent = '0';
                return;
            }

            document.getElementById('total_msgs').textContent = data.length;

            const unread = data.filter(m => m.status == 0);
            document.getElementById('inbox_msg').textContent = unread.length;

            if (law == 1) {

                const container = document.getElementById('PROGRAM_INFO');
                container.innerHTML = "";

                data.forEach((D) => {

                    supabaseClient
                        .from('registered_students')
                        .select('created_at,name, surname, pic')
                        .eq('student_id', D.student_id)
                        .single()
                        .then(({ data: student, error }) => {

                            let fullName = "Unknown student";
                            let sender_img = null;

                            if (!error && student) {

                                fullName = `${student.name} ${student.surname}`;

                                if (student.pic) {
                                    sender_img = supabaseClient
                                        .storage
                                        .from('profile')
                                        .getPublicUrl(student.pic)
                                        .data
                                        .publicUrl;
                                }
                            }

                            const avatar = sender_img
                                ? `<img src="${sender_img}" class="w-full h-full object-cover">`
                                : `<span class="text-white text-sm font-semibold">
                                        ${fullName.charAt(0).toUpperCase()}
                                   </span>`;

                            const dateObj = new Date(student.created_at);

                            const formattedDate = dateObj.toLocaleDateString();
                            const formattedTime = dateObj.toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            });

                            let status;
                            if (D.status == 0) {
                                status = `
                                    <span class="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">
                                        <i class="bi bi-x-circle-fill"></i>
                                        Not replied
                                    </span>
                                `;
                            } else {
                                status = `
                                    <span class="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                                        <i class="bi bi-check-circle-fill"></i>
                                        Replied
                                    </span>
                                `;
}
                            const html = `
<div class="flex gap-3 p-3 hover:bg-slate-50 transition group">

    <!-- Avatar -->
    <div class="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center overflow-hidden shrink-0">
        ${avatar}
    </div>

    <!-- Content -->
    <div class="flex-1">

        <!-- Sender + time row -->
        <div class="flex items-center justify-between">

            <p class="text-xs text-green-600 font-medium">
                ${fullName}
            </p>

            <p class="text-[10px] text-slate-400">
                ${formattedDate} • ${formattedTime}
            </p>

        </div>

        <!-- Message bubble -->
        <div class="relative bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm max-w-[85%] mt-1">

            <p class="text-sm font-semibold text-slate-800">
                ${D.title}
            </p>

            <p class="text-sm text-slate-600 mt-1 leading-relaxed">
                ${D.message}
            </p>
            <p class='py-2 font-small text-sm opacity-40'>${status}</p>
            <!-- Actions -->
            <div class="absolute -top-3 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">

                <button 
                    onclick="contact_student('${D.student_id}','${D.id}','${fullName}','${D.title}','${D.message}')"
                    class="p-1.5 bg-blue-100 text-blue-600 rounded-full shadow hover:scale-105 transition"
                >
                    <i class="bi bi-reply-fill text-sm"></i>
                </button>

                <button id='kill_msg' onclick="deleteMessage('${D.student_id}','${D.id}')"
                    class="p-1.5 bg-red-100 text-red-600 rounded-full shadow hover:scale-105 transition"
                >
                    <i class="bi bi-trash-fill text-sm"></i>
                </button>

            </div>

        </div>

    </div>
</div>
`;
                            container.innerHTML += html;
                        });
                });
            }
        });
}










// DELETE STUDENT OLD MESSAAGES

let kill_memory =0;
function deleteMessage(specific,Msg) {
    document.getElementById('PROGRAM_INFO').innerHTML = `
    <div class='grid place-items-center' style=" width:100%; height:100%;">
        <div class='loader2 h-[100px] w-[100px]'></div>
    </div>
  `;
  let kill = document.getElementById('kill_msg');
            kill_memory = kill.innerHTML;
            kill.innerHTML = 'Deleting...';
    supabaseClient
        .from('MessagesToAdmin')
        .delete()
        .eq('student_id', specific)
        .eq('id', Msg)
        .select() // return deleted rows
        .then(({ data, error }) => {

            if (error) {
                    kill.innerHTML = 'Failed to delete';
                setTimeout(()=>{
                    kill.innerHTML = kill_memory;
                },3000);
                return;
            }

            if (!data || data.length === 0) {
                //failed to delete
                return;
            }
            //successfuly deleted
            read_total_messages_from_students(1);
        });
}








// PREPARING A DYNAMIC REPLY CARD TO STUDENT MESSAGE

function contact_student(x,y,z,pre_title,pre_msg) { //student_id, id,name,surname

    const popup = document.createElement('div');

    popup.className = `
        fixed inset-0 z-50
        bg-black/60 backdrop-blur-sm
        flex items-center justify-center p-4
    `;

    popup.onclick = (e) => {
        if (e.target === popup) popup.remove();
    };

    popup.innerHTML = `
        <div class="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">

            <!-- Header -->
            <div class="bg-blue-600 p-6 text-white">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl text-white/50 font-bold">Contact Student</h2>
                        <p class="text-blue-100 text-lg mt-1">
                            To: <b class='text-lg text-gray-50 font-bold shadow-sm'>${z.toUpperCase()}</b>.
                        </p>
                    </div>

                    <button onclick="this.closest('.fixed').remove()"
                            class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>

            <!-- Body -->
            <div class="p-6">

                <p class="text-lg font-bold p-2">${pre_title}</p>
                <p class="text-sm bg-gray-100 p-6 font-small py-2 rounded-lg">${pre_msg}</p>

                <label class="p-4 block text-sm font-medium text-gray-700 mb-2">
                    Message
                </label>

                <textarea
                    id="msg_body"
                    rows="5"
                    placeholder="Type your message here..."
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                    id='sendBTN' onclick="send_message('${x}','${y}','${z}','${pre_title}','${pre_msg}')"
                    class="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
                >
                    <i class="bi bi-send-fill"></i>
                    Send Message
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(popup);
}








// SEND A REPLY MESSAGE TO STUDENT

function send_message(user_id, msg_id, user_name, tt, ms) {
    
    let Msg_Body = document.getElementById('msg_body').value.trim();
    let sendBTN = document.getElementById('sendBTN');

    if (!Msg_Body) {
        sendBTN.innerHTML = `
            <i class="bi bi-exclamation-circle-fill text-red-500"></i>
            Type message first
        `;
        return;
    }

    sendBTN.disabled = true;
    sendBTN.innerHTML = `
        <i class="bi bi-hourglass-split"></i>
        Sending...
    `;

    supabaseClient
        .from('notification')
        .insert([{
            target: user_id,
            priority:'high',
            title: tt,
            message: Msg_Body,
            inquiry: ms
        }])
        .then(({ error }) => {

            if (error) {
                sendBTN.disabled = false;
                sendBTN.innerHTML = `
                    <i class="bi bi-x-circle-fill text-red-500"></i>
                    Not Sent
                `;
                return;
            }

            Read(user_id,msg_id);
            
            sendBTN.innerHTML = `
                <i class="bi bi-check-circle-fill text-green-500"></i>
                Sent Successfully
            `;

            document.getElementById('msg_body').value = '';
            read_total_messages_from_students(1);

            setTimeout(() => {
                document.querySelector('.fixed.z-50')?.remove();
            }, 1500);
        });

}









// CONFIRMS IF THE ADMIN REPLIED TO INBOX MESSAGES 

function Read(u,v){
            supabaseClient.from('MessagesToAdmin')
                .update({status: '1'})
                .eq('id', v)
                .eq('student_id', u)
                .then(({ error }) => {
                    if (error) {
                        //callback
                        return;
                    }
                });

}












// USED TO AUTORUN FUNCTIONS

function universal(){

    showCAL();
    dashboard_data();
    show_books();
    show_total_exam_applied(0); //load total exam applicats
    show_total_enroll_requests(0); //load total enroll requests
    read_total_messages_from_students(0); //find total messages

    document.getElementById('PROGRAM_INFO').innerHTML = `
    <div class="w-full min-h-[400px] flex flex-col items-center justify-center text-center bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-200">
        <div class="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
            <i class="bi bi-eye-slash text-2xl text-gray-400"></i>
        </div>
        <h3 class="text-base font-semibold text-gray-600">View Pad</h3>
        <p class="text-sm text-gray-400 mt-1">Select an item to see details here</p>
    </div>
`;


    
}