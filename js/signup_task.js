const regex_password=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const regex_email=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;  
    
const username = document.getElementById("username");
const name_error =document.getElementById("name_error");

const email = document.getElementById("email");
const email_error=document.getElementById("email_error");

const password = document.getElementById("password");
const password_error=document.getElementById("password_error");

const password_confirm = document.getElementById("password_confirm");
const password_confirm_error=document.getElementById("password_confirm_error");

const completedMessage = document.getElementById("completedMessage")
const submit  = document.getElementById("Sign_up");


function ValidateForm(event) {
    
    var bool =true;
//user_name
    name_error.innerText='';
    if(username.value==''){
    name_error.innerText="Please enter your name";
    name_error.style.color="red";
    bool=false;
}
//email
email_error.innerText='';
if(email.value==''){
    email_error.innerText="Please enter your email";
    email_error.style.color="red";
    bool=false;
}else if(!email.value.match(regex_email)){
    email_error.innerText="email is notValid";
    email_error.style.color="red";
    bool=false;
    }

//password
password_error.innerText="";
if(password.value==""){
    password_error.innerText="Please enter your password";
    password_error.style.color="red";
    bool=false;
}
else if(!password.value.match(regex_password)){
password_error.innerText="password is notValid";
password_error.style.color="red";
bool=false;
}

//password Confirm
password_confirm_error.innerText='';
if(password_confirm.value==''){
    password_confirm_error.innerText="Please confirm password";
    password_confirm_error.style.color="red";
    bool=false;
}else if(password_confirm.value!==password.value){
    password_confirm_error.innerText="confirm password is not match";
    password_confirm_error.style.color="red";
bool=false;
}

if(bool==false){
    event.preventDefault();
}
if(bool===true){
    completedMessage.innerHTML=("done");
    event.preventDefault();
}

    // swal("Good job!", "You clicked the button!", "success");
    // let users=[];
    // let id=0;
    // let email_val = email.value;
    // let pass_val =  password.value;
    // id++;

    // let user = { "id":[id ,email_val, pass_val] };
    
    //     users.push(user);
        
        

    // Convert the array to a JSON string before storing it in local storage
    // localStorage.setItem("users[id]", JSON.stringify(users));


    
    // email_val=" ";
    // pass_val=" ";
}
function StoreData() {
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
  
    // Get existing users from localstorage, or initialize an empty array
    let existingUsers = JSON.parse(localStorage.getItem("users users[id]")) || [];
  
    let user = {
      Email: email,
      Password: Password,
    };
  
    // Add the new user to the existing array of users
    existingUsers.push(user);
  
    // Save the updated array of users to localstorage
    localStorage.setItem("users users[id]", JSON.stringify(existingUsers));
  }
    // Clear form inputs for next user
    Email = "";
    Password = "";
    
  submit.addEventListener("click", ValidateForm);





// submit.addEventListener("click", ValidateForm);

