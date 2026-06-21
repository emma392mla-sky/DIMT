const SUPABASE_URL = "https://iiaokjspxfaabgmrkbat.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpYW9ranNweGZhYWJnbXJrYmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NjIzNjQsImV4cCI6MjA5NTEzODM2NH0.OBj4K3SPTrm6K1ozV8nY2o5MTXPk_96f_BTgIxLB_8o";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    let BTN_memory=0;
async function login() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const BTN = document.getElementById('loginBtn');
    BTN_memory=BTN.innerHTML;
    BTN.innerHTML="Please wait...";
    BTN.disabled=true;

    const { error } =
        await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

    if (error) {
    BTN.innerHTML = "Login failed";
    BTN.disabled = true;

    setTimeout(() => {
        BTN.innerHTML = BTN_memory;
        BTN.disabled = false;
    }, 2000);

    return;
}

    location.href = "Admin_Dashboard.html";
    localStorage.setItem('card',0); // force to land on dashboard card
}