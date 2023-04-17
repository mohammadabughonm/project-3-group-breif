const regex_password=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const regex_email=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

  const email = document.getElementById("email");
  const email_error=document.getElementById("email_error");

  const password = document.getElementById("password");
  const password_error=document.getElementById("password_error");

  let name_ls = window.localStorage.getItem("users");

  const submit  = document.getElementById("Sign_in");
  let id = 0;
  function ValidateForm(event) {
    var bool =true;
//email
email_error.innerText='';
if(email.value==''){
   email_error.innerText="email is empty";
   email_error.style.color="red";
   bool=false;
}else if(!email.value.match(regex_email)){
   email_error.innerText="email is notValid";
   email_error.style.color="red";
   bool=false;
   }
  
//password
password_error.innerText='';
if(password.value==''){
   password_error.innerText="password is empty";
   password_error.style.color="red";
   bool=false;
}
else if(!password.value.match(regex_password)){
password_error.innerText="password is notValid";
password_error.style.color="red";
bool=false;
}
if(bool==false){
    event.preventDefault();
}
let users = JSON.parse(name_ls); // that parses a JSON string and converts it into a JavaScript object.
        let loggedIn = false; //  if user has logged in
        
        for (let i = 0; i < users.length; i++) {
          if (email.value === users[i].key[0] && pass.value === users[i].key[2]) {
        //    let log = document.getElementById("access_log");
        //     log.textContent = "You are logged in!";
            let s_users = [];
            let s_user = {"id": [email.value, pass.value]};
             s_users.push(s_user);
             window.sessionStorage.setItem("id", JSON.stringify(s_users));

            id++; 
            loggedIn = true; // true if user logged in
            break; 
          }
        }
        // error message if login is unsuccessful
        if (!loggedIn) { //  if user hasn't logged in
          let emailError = document.getElementById("email-error");
          let passwordError = document.getElementById("password-error");
          emailError.textContent = "Invalid email or password";
          passwordError.textContent = "Invalid email or password";
        }
  }
  submit.addEventListener("click", ValidateForm);
