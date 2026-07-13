const SUPABASE_URL = "https://iiaokjspxfaabgmrkbat.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpYW9ranNweGZhYWJnbXJrYmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NjIzNjQsImV4cCI6MjA5NTEzODM2NH0.OBj4K3SPTrm6K1ozV8nY2o5MTXPk_96f_BTgIxLB_8o";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);










function register() {
  // Start by checking if the user left any fields empty
  const allFilled = [...document.querySelectorAll("input, select")].every(el => el.value.trim() !== "");
  
  // Show a loading spinner so the user knows something is happening
  let ld = document.getElementById('signup_btn');
  ld.innerHTML="<div class='loader1'></div>";

  if (!allFilled) {
    ld.innerHTML = "Please fill in all fields.";
    return;
  }

// Grab all the data from the input fields
  const studentData = {
    Identity: document.getElementById("identity").value,
    Name: document.getElementById("name").value,
    Surname: document.getElementById("surname").value,
    Pg: document.getElementById("pg").value,
    Board: document.getElementById("board").value,
    Level: document.getElementById("level").value,
    Email: document.getElementById("email").value,
    Phone: document.getElementById("phone").value,
    District: document.getElementById("district").value,
    City: document.getElementById("city").value,
    G_name: document.getElementById("g_name").value,
    G_email: document.getElementById("g_email").value,
    G_phone: document.getElementById("g_phone").value,
    Pass: document.getElementById("pass").value,
    Pass2: document.getElementById("pass2").value
  };

  // password entries match before going to the database
  if (studentData.Pass !== studentData.Pass2) {
    ld.innerHTML="Passwords do not match";
    return;
  }

  // First, check if this Student ID actually exists in our official records
  supabaseClient
  .from('student_id_records')
  .select('student_id')
  .eq('student_id', studentData.Identity.trim())
  .then(async (response) => {

    if (response.error) {
      ld.innerHTML="Error checking ID: " + response.error.message;
      return;
    }

    // If we found the ID in the records, proceed
    if (response.data.length > 0) {

      // Now, double-check if they haven't already registered an account
      const duplicateCheck = await supabaseClient
        .from('registered_students')
        .select('student_id')
        .eq('student_id', studentData.Identity.trim());

      if (duplicateCheck.error) {
        ld.innerHTML="Error checking registration: " + duplicateCheck.error.message;
        return;
      }

      // If we find a record, they are already signed up
      if (duplicateCheck.data.length > 0) {
        msg = "Student already registered";

        dl.innerHTML =
          '<a class="text-red-400 text-lg">' + msg + '</a>';

        setTimeout(() => {
          dl.innerHTML =
            'Try Again <i class="bi bi-send-fill"></i>';
        }, 4000);

        return;
      }

      // ID is valid and they haven't registered yet, so save their info
      store_info(studentData);

    } else {
      // The ID wasn't found in the official database
      msg = "Student ID not found";

      dl.innerHTML ='<a class="text-red-400 text-lg">' + msg + '</a>';

      setTimeout(() => {
        dl.innerHTML =
          'Try Again <i class="bi bi-send-fill"></i>';
      }, 4000);
    }

  });
}










function store_info(studentData) {
    // Keep showing the loader while saving
  let saveBTN = dl;
    dl.innerHTML="<div class='loader1'></div>";
    
    // Insert the new student record into the database
  supabaseClient
    .from('registered_students')
    .insert([
      {
        student_id: studentData.Identity,
        name: studentData.Name,
        surname: studentData.Surname,
        program: studentData.Pg,
        exam_board: studentData.Board,
        level: studentData.Level,
        email_address: studentData.Email,
        phone: studentData.Phone,
        district: studentData.District,
        city: studentData.City,
        guardian_name: studentData.G_name,
        guardian_email: studentData.G_email,
        guardian_phone: studentData.G_phone,
        password: studentData.Pass
      }
    ])
    .then((response) => {

  // Handle unique constraint violation (duplicate entry)
  if (response.error?.code === "23505") {
    dl.innerHTML =
      'Student already registered <i class="bi bi-exclamation-circle-fill text-red-500"></i>';

  } else if (response.error) {
    // General database error
    dl.innerHTML =
      'Submission failed <i class="bi bi-x-circle-fill text-red-500"></i>';

  } else {
    // Success! Now we need to set up their courses automatically
    dl.innerHTML =
      'Registration successful <i class="bi bi-check-circle-fill text-green-500 text-2xl"></i>';
      
      let maximum;

      // Determine how many courses they need based on their program
      if(studentData.Pg == "P001"){
        maximum =4; 
      }else if(studentData.Pg == "P002"){
        maximum =4;
      }else if(studentData.Pg == "P003"){
        maximum =4;
      }else if(studentData.Pg == "P004"){
        maximum =4;
      }else if(studentData.Pg == "P005"){
        maximum =4;
      }else if(studentData.Pg == "P006"){
        maximum =4;
      }else if(studentData.Pg == "P007"){
        maximum =4;
      }else if(studentData.Pg == "P008"){
        maximum =4;
      }else if(studentData.Pg == "P009"){
        maximum =4;
      }else if(studentData.Pg == "P010"){
        maximum =4;
      }else if(studentData.Pg == "P011"){
        maximum =4;
      }else if(studentData.Pg == "P012"){
        maximum =12;
      }else{
        maximum =4;
      }

            // Loop through and create the course entries for this student
              let units = 0;
              let success = 0;

              while(units < 4){
                  units += 1;
                  let lev = 'c00' + units;

                  supabaseClient
                  .from('Student_Courses')
                  .insert([
                      {
                          student_id: studentData.Identity,
                          course_id: lev,
                          level: studentData.Level
                      }
                  ])
                  .then((UNITS) => {

                      if(UNITS.error){
                          dl.innerHTML ='Data not saved: ' + UNITS.error.message;
                      } else {
                          success++;

                          if(success === 5){
                              dl.innerHTML ='All courses saved successfully';
                          }
                      }

                  });
              }
          // End of course logging

    // Reset the button after a delay
    setTimeout(() => {
      dl.innerHTML =
        'Submit Application <i class="bi bi-send-fill"></i>';
    }, 10000);

  }

});
}











function signin(){

  const loginData = {
    ST_ID: document.getElementById("st_id").value.trim(),
    ST_PWD: document.getElementById("st_pwd").value
  };

  if(!loginData.ST_ID || !loginData.ST_PWD){
    return;
  }

  document.getElementById("signin_btn").innerHTML =
    "<div class='loader1'></div>";

  // Look for the student in the database using their ID
  supabaseClient
    .from('registered_students')
    .select('student_id,password')
    .eq('student_id', loginData.ST_ID)

    .then(async (response) => {

      if(response.error){
        // show error if db fails to respond
        return;
      }

      // If no user found with that ID
      if(response.data.length === 0){

        document.getElementById("signin_btn").innerHTML =
          'Invalid details <i class="bi bi-exclamation-circle-fill text-red-500"></i>';

        return;
      }

      const user = response.data[0];

      // Compare the password entered with the one in the database
      if(user.password !== loginData.ST_PWD){

        document.getElementById("signin_btn").innerHTML =
          'Incorrect password <i class="bi bi-exclamation-circle-fill text-red-500"></i>';

        return;
      }

      // Create a unique token to keep them logged in
      const tokenID =
        "STU-" + Date.now() + "-" + Math.floor(Math.random()*1000000);

      // Save this session token to the database
      supabaseClient
        .from('login_sessions')
        .insert([
          {
            student: loginData.ST_ID,
            token: tokenID
          }
        ])

        .then((sessionResponse) => {

          if(sessionResponse.error){
            document.getElementById("signin_btn").innerHTML =
            'Try Again<i class="bi bi-exclamation text-red-500 text-xl"></i>';
            return;
          }

          // Also save the token to the browser's session storage
          sessionStorage.setItem("session_token", tokenID);

          document.getElementById("signin_btn").innerHTML =
            '<i class="bi bi-check-circle-fill text-green-500 text-4xl"></i>';
            
          // Run the access check
            allow();

        });

    });

}











window.onload = () => {
    // When the page loads, check if they should be allowed in
    allow();
    veri(); //checks if application are open

};











function allow(){
  // Get the token we stored earlier
  key = sessionStorage.getItem("session_token");
    const view = document.getElementById("view");

  // Show a loading spinner immediately
  view.innerHTML = `
    <div class='grid place-items-center' style=" width:100%; height:100%;">
        <div class='loader2 h-[100px] w-[100px]'></div>
    </div>
  `;


  // Verify if this token exists in our active sessions table
  supabaseClient
    .from('login_sessions')
    .select('token')
    .eq('token', key)

    .then(async (response) => {

      if(response.error){
        view.innerHTML = `
            <div class='grid place-items-center' style=" width:100%; height:100%;">
                Poor Network<div class='loader2 h-[100px] w-[100px]'></div>
            </div>
          `;
          
        // If network error, try going to dashboard anyway after a delay
        setTimeout(()=>{
            nav('dashboard');
        },5000);

        return;
      }

      // If token not found, send them to public dashboard
      if(response.data.length === 0){
        nav('dashboard');
      }else{
        // Token is valid, let them into the student area
        nav('student_access');
        // Load their specific data
        callDATA(key);
        setTimeout(()=>{callDATA(key);},2000); //in case data load fails , try again
      }
    })

}










function callDATA(pass_key){
  
  document.getElementById('sideNAV').style.display = '';
  document.getElementById("mobile_menu").innerHTML =mobile; 
  document.getElementById('Before_links').style.display = 'none';
  document.getElementById('After_links').style.display = '';
  
  // Use the token to find out which student this is
  supabaseClient
    .from('login_sessions')
    .select('student')
    .eq('token', pass_key)

    .then(async (response) => {

      if(response.error){
        // show error if the student id was not found
      }else{

        // Now that we have the ID, get their full profile
        supabaseClient
    .from('registered_students')
    .select('*')
    .eq('student_id', response.data[0].student)

    .then(async (response) => {

      let st = response.data[0];
      let student_info = [st.student_id,st.level,st.program,st.name,st.surname];
        
        // Save info to browser session for quick access
        sessionStorage.setItem('student_info', JSON.stringify(student_info));
        
        // Get their grades
      ST(st.student_id,st.level);

      // Convert program code to readable name
      let ST_PG = "";
      
      if(st.program == "P001"){
        ST_PG = "Public Health";
      }else if(st.program == "P002"){
        ST_PG = "Business Studies";
      }else if(st.program == "P003"){
        ST_PG = "Tailoring";
      }else if(st.program == "P004"){
        ST_PG = "Agro Business";
      }else if(st.program == "P005"){
        ST_PG = "Hotel Management";
      }else if(st.program == "P006"){
        ST_PG = "Computer Engineering";
      }else if(st.program == "P007"){
        ST_PG = "Community Development";
      }else if(st.program == "P008"){
        ST_PG = "HIV & AIDS Management";
      }else if(st.program == "P009"){
        ST_PG = "Nutrition & Food Security";
      }else if(st.program == "P010"){
        ST_PG = "Human Resource Management";
      }else if(st.program == "P011"){
        ST_PG = "Comp Science & Cyber Security";
      }else{
        ST_PG = "Unavailable";
      }

      if(response.error){
        // show error msg if no data found
      }else{
        // Update the dashboard UI with their info
        document.getElementById('db_st_name').innerHTML=st.name;
        document.getElementById('db_st_PROFILEname').innerHTML=st.name+' '+st.surname;
        document.getElementById('db_st_PROFILEid').innerHTML=st.student_id;
        document.getElementById('db_st_id').innerHTML=st.student_id;
        document.getElementById('db_st_PROFILEprogram').innerHTML=ST_PG;
        document.getElementById('db_st_program').innerHTML=ST_PG;
        document.getElementById('db_st_board').innerHTML=st.exam_board;
        document.getElementById('db_st_level').innerHTML=st.level;
        document.getElementById('db_st_email').innerHTML=st.email_address;
        document.getElementById('db_st_phone').innerHTML='0'+st.phone;
        
      }
    })

      }
    })

}










function ST(courses, STlevel) {

  // all courses for this student at their current level
  supabaseClient
    .from('Student_Courses')
    .select('*')
    .eq('student_id', courses)
    .eq('level', STlevel)
    .then((resp) => {

      if (resp.error) {
        //show error if theres a db error
        return;
      }

      if (!resp.data || resp.data.length === 0) {
        // show error if no data found
        return;
      }

      let output = "";
      let totalGrades = 0;
      let validCourseCount = 0;

      resp.data.forEach((st_details) => {

        const courseName = st_details.course_name;

        // Only count courses that actually have a name
        const isValidCourse = courseName !== null && courseName !== '';

        let grade = st_details.grades;

        // If grade is missing, treat it as 0 for calculation
        const numericGrade =
          (grade === null || grade === '' || grade === undefined)
            ? 0
            : Number(grade);

        if (isValidCourse) {
          totalGrades += numericGrade;
          validCourseCount++;
        }

        let displayGrade = numericGrade;

        // Determine the text status (Pass/Fail)
        let status;

        if (!isValidCourse) {
          status = `
            <span class="text-gray-400 font-semibold">
              Invalid Course
            </span>
          `;
        } else if (grade === null || grade === '') {
          status = `
            <span class="text-orange-500 font-semibold">
              Not Graded
            </span>
          `;
        } else if (numericGrade < 40) {
          status = `
            <span class="text-red-500 font-semibold">
              FAIL
            </span>
          `;
        } else {
          status = `
            <span class="text-green-500 font-semibold">
              PASS
            </span>
          `;
        }
        
        // Handle name display
        let nm;
        if(courseName == null || courseName == ''){
          nm = 'Not Graded';
        }else{
          nm = courseName;
        }

        // Build the HTML for the course card
        output += `
          <div class="border border-gray-200 rounded-xl p-4 my-2 hover:bg-gray-50 transition relative">

            <div class="wrapper hover:text-gray/500 bi bi-lock-fill text-2xl text-gray-200 border-none absolute inset-0 bg-white z-10 grid place-items-center rounded-xl">
              <b class='text-lg'>locked</b>
            </div>

            <div class="flex items-center justify-between">

              <div>
                <h3 class="font-semibold text-gray-800">
                  ${nm}
                </h3>

                <p class="text-sm text-gray-500">
                  Marks: ${displayGrade}%
                </p>
              </div>

              <div>
                ${status}
              </div>

            </div>

          </div>
        `;
      });

    
      // Calculate the average
      let tt = validCourseCount > 0
        ? totalGrades / validCourseCount
        : 0;

      // Convert average score to a performance label
      let per;

      if (tt >= 80) {
        per = "Excellent";
      } else if (tt >= 50) {
        per = "Credit";
      } else if (tt >= 40) {
        per = "Moderate";
      } else if (tt >= 30) {
        per = "Poor";
      } else {
        per = "Very Poor";
      }

      // Update the UI with stats
      document.getElementById('st_perfomance').innerHTML = output;
      document.getElementById('st_ttaverage').innerHTML = tt.toFixed(1) + "%";
      document.getElementById('st_ttrecords').innerHTML = validCourseCount;
      document.getElementById('st_per').innerHTML = per;

      // Fetch total number of courses (including all levels)
      supabaseClient
        .from('Student_Courses')
        .select('*')
        .eq('student_id', courses)
        .then((cos) => {
          document.getElementById('all_courses').innerHTML = cos.data.length;
        });

    });
}










// Library Section
function loadBooks() {
  // Get student info from session to filter books
  let student_info = JSON.parse(sessionStorage.getItem('student_info'));
  let level_taken = student_info[1];
  let pg_taken = student_info[2];

    const container = document.getElementById('bookContainer');
    container.innerHTML = '';

    // Look for books matching their level and program
    supabaseClient
        .from('uploads')
        .select('*')
        .eq('level', level_taken)
        .eq('pg', pg_taken)
        .then(({ data, error }) => {

            if (error) {
                //callback
                return;
            }

            // If books are found, generate a card for each
            if(data.length>0){
              data.forEach(book => {

                // Get the download link from Supabase storage
                const url = supabaseClient
                    .storage
                    .from('books')
                    .getPublicUrl(book.path)
                    .data.publicUrl;
                    
                    // Pick a random color for the book cover
                    let colors =["red","green","blue","yellow","pink","purple","orange","gray","rose","violet","indigo"];
                    let any = Math.floor(Math.random()*10);

                container.innerHTML += `
    <div onclick="openPdf('${url}')"
        class="animate-[fadeIn_0.8s_ease-in-out] bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
        
        <div class="h-32 bg-gradient-to-br from-${colors[any]}-500 to-${colors[any]}-700 flex items-center justify-center">
            <i class="bi bi-file-earmark-pdf text-white text-4xl opacity-80 group-hover:scale-110 transition-transform"></i>
        </div>

        <div class="p-5 text-center">
            <h3 class="font-bold text-slate-800">${book.title}</h3>
            <p class="text-lg text-slate-400 mt-1">
                ${book.level}
            </p>
        </div>

    </div>
`;
            });

            }else{
              // Show empty state if no books are found
              container.innerHTML = `
        <div class="col-span-full flex flex-col items-center justify-center py-16 text-center">
            
            <i class="bi bi-journal-x text-6xl text-slate-400 mb-4"></i>
            
            <h2 class="text-xl font-bold text-slate-700">
                No books found
            </h2>
            
            <p class="text-sm text-slate-400 mt-2">
                We couldn’t find any books for this program yet.
            </p>

            <button onclick="nav('library')" 
                class="mt-6 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Refresh
            </button>

        </div>`;
            }
        });

}










function openPdf(url) {
    // Set the iframe source to the book URL and show the modal
    document.getElementById('pdfFrame').src = url;
    document.getElementById('pdfViewer').classList.remove('hidden');
}

function closePdf() {
    // Clear the iframe and hide the modal
    document.getElementById('pdfFrame').src = "";
    document.getElementById('pdfViewer').classList.add('hidden');
}













function updatePic() {
    let dt = JSON.parse(sessionStorage.getItem('student_info'));
    if (!dt) return;

    const fileInput = document.getElementById('profile_pic');
    let btn = event.target;
    
    // Check if a file was selected
    if (!fileInput.files || !fileInput.files[0]) {
        // No picture selected, maybe they're just updating other fields
        btn.innerHTML ="No picture selected";
        return;
    }

    const pic = fileInput.files[0];

    // Validate file type
    if (!pic.type.match(/image\/(jpeg|jpg|png|gif|webp)/)) {
        btn.innerHTML ="Please select a valid image.";
        return;
    }
   
    if (pic.size > 2 * 1024 * 1024) {
      btn.innerHTML = '<i class="bi bi-exclamation-triangle animate-[fadeIn_0.8s_ease-in-out] text-orange-500"> Too Large Max 2mb</i>';
        
        setTimeout(()=>{
          btn.innerHTML = originalText;
        },3000);
        return;
    }

    // Create a unique file name using student ID
    const fileExt = pic.name.split('.').pop();
    const fileName = `${dt[0]}_profile.${fileExt}`;

    // Show loading state
 
   
    btn.innerHTML = '<i class="bi bi-spinner animate-spin animate-[fadeIn_0.8s_ease-in-out] text-orange-500"> Uploading...</i>';
                        
    btn.disabled = true;

    supabaseClient
        .storage
        .from('profile')
        .upload(fileName, pic, {
            cacheControl: '3600',
            upsert: true
        })
        .then(res => {

            if (res.error) {
                console.error(res.error);
                btn.innerHTML = originalText;
                btn.disabled = false;
                return;
            }

            // Get the public URL directly (no need to query DB again)
            const { data: urlData } = supabaseClient.storage.from('profile').getPublicUrl(res.data.path);
            const imgUrl = urlData.publicUrl;

            // Update database with the path
            supabaseClient
                .from('registered_students')
                .update({ pic: res.data.path })
                .eq('student_id', dt[0])
                .then(pp => {

                    if (pp.error) {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    } else {
                        // Update images on screen directly!
                        const pix1 = document.getElementById('pix1');
                        const pix2 = document.getElementById('pix2');
                        
                        if (pix1) pix1.src = imgUrl;
                        if (pix2) pix2.src = imgUrl;

                        // Add cache buster to force reload
                        const timestampedUrl = imgUrl + '?t=' + Date.now();
                        if (pix1) pix1.src = timestampedUrl;
                        if (pix2) pix2.src = timestampedUrl;
                        
                        btn.innerHTML = `<i class="bi bi-check-circle-fill text-green-500"></i><span class="ml-1">Updated</span>`;
                        
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    }

                });

        })
        .catch(err => {
            btn.innerHTML = '<i class="bi bi-exclamation-triangle animate-[fadeIn_0.8s_ease-in-out] text-red-500"> Upload failed. Please try again.</i>';
            btn.innerHTML = originalText;
            btn.disabled = false;
        });
}










function show_pic() {
  loadNotification();
    let dt = JSON.parse(sessionStorage.getItem('student_info'));
    if (dt == null) return;

    const studentId = dt[0];

    supabaseClient
        .from('registered_students')
        .select('pic')
        .eq('student_id', studentId)
        .single()
        .then(({ data, error }) => {
            if (error) {
                console.error("DB Error:", error.message);
                return;
            }

            if (!data || !data.pic) {
                console.log("No profile picture in database");
                return;
            }

            const filePath = typeof data.pic === "object" ? data.pic.path : data.pic;
            const { data: urlData } = supabaseClient.storage.from('profile').getPublicUrl(filePath);
            
            // Add cache buster to avoid cached images
            const imgUrl = urlData.publicUrl + '?t=' + Date.now();
            
            const pix1 = document.getElementById('pix1');
            const pix2 = document.getElementById('pix2');
            
            if (pix1) pix1.src = imgUrl;
            if (pix2) pix2.src = imgUrl;
            
            console.log("Profile picture loaded:", !!pix1 || !!pix2);
        })
        .catch(err => console.error("Promise error:", err));
}










let old_txt="";
function update_inf(col) {
    let s_info = JSON.parse(sessionStorage.getItem('student_info'));
    let val = document.getElementById(`${col}1`).value;
    let old = document.getElementById(`${col}2`);
    old_txt = old.innerHTML; 
    

    if(val == ''){
      old.innerHTML = "<i class='bi bi-hand-index-thumb' style='transform: rotate(270deg); display:inline-block;'></i> <b class='text-red-500'>Field is Empty</b>";
      setTimeout(()=>{old.innerHTML = old_txt;},2000);
      return
    }
    old.innerHTML = "Updating...";
    supabaseClient
        .from('registered_students')
        .update({ [col]: val })
        .eq('student_id', s_info[0])
        .select()
        .single()
        .then(({ data, error }) => {
            if (error) {
              old.innerHTML = "<b class='text-red-500'>Fail</b>";
              setTimeout(()=>{old.innerHTML = old_txt;},2000);
                return;
            }

              old.innerHTML = "<b class='text-green-500'>Success</b>";
              setTimeout(()=>{old.innerHTML = old_txt;},2000);
        });
}










function loadNotification() {

    const dt = JSON.parse(sessionStorage.getItem('student_info'));
    if (!dt) return;

    const STPG = dt[2];

    const dashboardZone = document.getElementById('station1');
    const replyZone = document.getElementById('zex');

    supabaseClient
        .from('notification')
        .select('*')
        .in('target', [STPG, 'all', dt[0]])
        .order('created_at', { ascending: false })
        .then(({ data, error }) => {

            if (error) {
                console.error(error);
                return;
            }

            let dashboardHTML = '';
            let replyHTML = '';

            if (!data || data.length === 0) {

                if (dashboardZone) {
                    dashboardZone.innerHTML = `
                        <div class="text-center text-neutral-500 py-8">
                            No notifications available.
                        </div>
                    `;
                }

                if (replyZone) {
                    replyZone.innerHTML = `
                        <div class="text-center text-neutral-500 py-8">
                            No replies available.
                        </div>
                    `;
                }

                return;
            }

            data.forEach((tail) => {

                const formatted = new Date(tail.created_at)
                    .toLocaleString('en-GB', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    });

                // PERSONAL REPLY
                if (tail.target === dt[0]) {

                    replyHTML += `
                    <div class="group bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all mb-4">

                        <div class="flex justify-between items-start mb-3">
                            <span class="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold uppercase">
                                ${tail.priority}
                            </span>

                            <span class="text-xs text-slate-400">
                                ${formatted}
                            </span>
                        </div>

                        <h3 class="font-bold text-slate-800 mb-2">
                            ${tail.title}
                        </h3>

                        ${tail.inquiry ? `
                        <div class="bg-slate-50 rounded-xl p-3 mb-3 text-sm">
                            ${tail.inquiry}
                        </div>` : ''}

                        <p class="text-sm text-slate-600">
                            <span class="font-medium">Reply:</span>
                            ${tail.message}
                        </p>

                    </div>`;
                }

                // GENERAL NOTIFICATION
                else {

                    dashboardHTML += `
                    <div class="group bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all mb-4">

                        <div class="flex justify-between items-start mb-3">
                            <span class="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold uppercase">
                                ${tail.priority}
                            </span>

                            <span class="text-xs text-slate-400">
                                ${formatted}
                            </span>
                        </div>

                        <h3 class="font-bold text-slate-800 mb-2">
                            ${tail.title}
                        </h3>

                        <p class="text-sm text-slate-600">
                            ${tail.message}
                        </p>

                    </div>`;
                }

            });

            if (dashboardZone) {
                dashboardZone.innerHTML = dashboardHTML || `
                    <div class="text-center text-neutral-500 py-8">
                        No announcements available.
                    </div>
                `;
            }

            if (replyZone) {
                replyZone.innerHTML = replyHTML || `
                    <div class="text-center text-neutral-500 py-8">
                        No personal replies available.
                    </div>
                `;
            }

        });
}











function veri(){
  supabaseClient
  .from('system_settings')
  .select('*')
  .then(({ data, error }) => {

    if (error) {
      console.error(error);
      return;
    }

    const examValue2 = data?.[0]?.apply;
        
        
    if (examValue2 == true) {
      notice();
    }else{
      alert('notice: '+examValue2);
    }
  })
}












function notice() {

  const popup = document.createElement("div");

  popup.className = `
    fixed bottom-5 right-5 z-50
    max-w-sm
    bg-white/95 backdrop-blur
    text-slate-800
    border border-indigo-200
    shadow-2xl
    rounded-2xl
    p-4
    cursor-pointer
    hover:scale-110
    transition
    duration-300
  `;
  popup.setAttribute("onclick","nav('apply')");

  popup.innerHTML = `
    <div class="flex items-center gap-2 mb-2">
        <i class="bi bi-megaphone-fill text-indigo-600"></i>
        <span class="text-xs font-bold uppercase tracking-wide text-indigo-700">
            Admissions Open
        </span>
    </div>

    <p class="text-sm text-slate-600">
        Apply now for the ${new Date().getFullYear()} intake. Limited seats available.
    </p>
  `;

  document.body.appendChild(popup);

  // animation (just for entrance + exit feel)
  popup.animate(
    [
      { transform: "translateX(120%)", opacity: 0 },
      { transform: "translateX(0)", opacity: 1 }
    ],
    {
      duration: 600,
      easing: "ease-out",
      fill: "forwards"
    }
  );











  let timer;

  function startCloseTimer() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      const out = popup.animate(
        [
          { transform: "translateX(0)", opacity: 1 },
          { transform: "translateX(120%)", opacity: 0 }
        ],
        {
          duration: 500,
          easing: "ease-in",
          fill: "forwards"
        }
      );

      out.onfinish = () => popup.remove();

    }, 12000); // 12 seconds visible
  }

  popup.addEventListener("mouseenter", () => {
    clearTimeout(timer); // pause countdown
  });

  popup.addEventListener("mouseleave", () => {
    startCloseTimer(); // restart countdown
  });

  startCloseTimer();
};



function exam_registration(){
  let sd0 = document.getElementById("s_exam_id").value;
  let sd1 = document.getElementById("s_exam_level").value;
  let sd2 = document.getElementById("s_exam_pg").value;
  let sd3 = document.getElementById("s_exam_name").value;
  let sd4 = document.getElementById("s_exam_surname").value;

  document.getElementById("call").innerHTML ='<a class="text-lg text-orange-500 animate-[fadeIn_0.8s_ease-in-out]">Sending...<a>';
  supabaseClient
        .from('Exam_Registration')
        .insert([{
          student_id:sd0,
          exam_level:sd1,
          exam_pg:sd2,
          exam_name:sd3,
          exam_surname:sd4
        }])
        .then(({ data, error }) => {
          if(error){
            return
          }
          document.getElementById("call").innerHTML ='<a class="text-lg text-green-500 animate-[fadeIn_0.8s_ease-in-out]">Registered successfully<a>';
        });


}











function applyNOW() {
  let apply_s1 = document.getElementById("apply_name").value;
  let apply_s2 = document.getElementById("apply_surname").value;
  let apply_s3 = document.getElementById("apply_email").value;
  let apply_s4 = document.getElementById("apply_phone").value;
  let apply_s5 = document.getElementById("apply_program").value;
  let app_btn = document.getElementById("apply_btn");

  if (
    apply_s1.trim() === "" ||
    apply_s2.trim() === "" ||
    apply_s3.trim() === "" ||
    apply_s4.trim() === "" ||
    apply_s5.trim() === ""
  ) {
    app_btn.innerHTML =
      '<i class="bi bi-exclamation-circle text-orange-500"> Fill all fields</i>';
    return;
  }

  app_btn.innerHTML =
    '<i class="bi bi-spinner text-orange-500"> Sending...</i>';

  supabaseClient
    .from('Application_Requests')
    .select('id')
    .eq('apply_email', apply_s3)
    .eq('apply_phone', apply_s4)
    .then(({ data, error }) => {

      if (error) {
        app_btn.innerHTML =
          '<i class="bi bi-x-circle text-red-500"> Oops Try Again</i>';
        return;
      }

      if (data.length > 0) {
        app_btn.innerHTML =
          '<i class="bi bi-exclamation-triangle text-orange-500"> Application Already Submitted</i>';
        return;
      }

      // Insert if no match found
      supabaseClient
        .from('Application_Requests')
        .insert([{
          apply_name: apply_s1,
          apply_surname: apply_s2,
          apply_email: apply_s3,
          apply_phone: apply_s4,
          apply_program: apply_s5
        }])
        .then(({ error }) => {

          if (error) {
            app_btn.innerHTML =
              '<i class="bi bi-x-circle text-red-500"> Oops Try Again</i>';
            return;
          }

          app_btn.innerHTML =
            '<i class="bi bi-check-circle text-green-500"> Success</i>';
        });

    });
}











function p_pic(src) {
  const el = document.createElement('div');

  el.className = `
    fixed inset-0 z-50
    flex items-center justify-center
    bg-black/80 backdrop-blur-md
    animate-[fadeIn_0.2s_ease]
  `;











  el.onclick = (e) => {
    if (e.target === el) el.remove();
  };

  el.innerHTML = `
    <div class="relative animate-[zoomIn_0.25s_ease]">

      <button
        onclick="this.closest('.fixed').remove()"
        class="absolute -top-4 -right-4 z-10
               w-10 h-10 rounded-full
               bg-white/10 backdrop-blur
               text-white hover:bg-white/20
               transition flex items-center justify-center">
        <i class="bi bi-x-lg"></i>
      </button>

      <img
        src="${src}"
        class="
          max-w-[95vw]
          max-h-[90vh]
          object-contain
          rounded-3xl
          shadow-2xl
          border border-white/10
          hover:scale-110
          transition
          duration-300
        "
      >

    </div>
  `;

  document.body.appendChild(el);
}












function contact_admin() {

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
                        <h2 class="text-xl font-bold">Contact Administration</h2>
                        <p class="text-blue-100 text-sm mt-1">
                            Send a message to the school office.
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

                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                </label>

                <input
                    id="msg_subject"
                    type="text"
                    placeholder="Enter subject..."
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Message
                </label>

                <textarea
                    id="msg_body"
                    rows="5"
                    placeholder="Type your message here..."
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                    id='sendBTN' onclick="send_message()"
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











let sendBTN_memory=0;
function send_message() {

    let Msg_Title = document.getElementById('msg_subject').value.trim();
    let Msg_Body = document.getElementById('msg_body').value.trim();
    let sendBTN = document.getElementById('sendBTN');
    sendBTN_memory=sendBTN.innerHTML;

    let local_data = JSON.parse(sessionStorage.getItem('student_info'));

    if (!Msg_Title || !Msg_Body) {
        sendBTN.innerHTML = "Please complete all fields.";
        setTimeout(()=>{
          sendBTN.innerHTML = sendBTN_memory;
        },3000);
        return;
    }

    sendBTN.disabled = true;
    sendBTN.innerHTML = `
        <i class="bi bi-hourglass-split"></i>
        Sending...
    `;

    supabaseClient
        .from('MessagesToAdmin')
        .insert([{
            student_id: local_data[0],
            title: Msg_Title,
            message: Msg_Body,
            status:'0'
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

            sendBTN.innerHTML = `
                <i class="bi bi-check-circle-fill text-green-500"></i>
                Sent Successfully
            `;

            setTimeout(() => {
                document.querySelector('.fixed.z-50')?.remove();
            }, 1500);
        });
}












function showCAL() {
  const view = document.getElementById("view");
  view.innerHTML = `
    <div class='grid place-items-center' style=" width:100%; height:100%;">
        <div class='loader2 h-[100px] w-[100px]'></div>
    </div>
  `;

   Calendar.DayEvent.click((today)=>{
   // add a click event to a calenda
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

data.forEach(attr => {
    const [y, m, d] = attr.date.split('-').map(Number);

    Calendar.add({
        year: y,
        month: m,
        day: d,
        label: attr.label,
        labelColor: attr.color
    });


});

      document.getElementById("view").innerHTML = Calendar.show(new Date().getFullYear(), new Date().getMonth() + 1);
    });
}