
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