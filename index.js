let user = [];
let hasError;
function getErrors(id) {
  hasError=true;
  let errorFields = document.getElementById(id);
  errorFields.classList.remove("hidden");
  errorFields.classList.add("visible");
}
function checkUser() {
 
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let age = document.getElementById("age");
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let nameInp = name.value;
  let surnameInp = surname.value;
  let ageInp = age.value;
  let usernameInp = username.value;
  let passwordInp = password.value;
  let checkBox = document.getElementById("checkbox");
  if (!nameInp || !surnameInp || !ageInp || !usernameInp || !passwordInp) {
    getErrors("fields");
  } 
  else if (usernameInp.length < 3) {
    getErrors("usernameLength");
  } else if (ageInp <= 18) {
    getErrors("ageValidation");
  } else if (passwordInp.length < 6 && passwordInp.search(/[A-Z]/) < 1) {
    getErrors("passwordValidation");
  } else if (!checkBox.checked) {
    getErrors("checkboxError");
  } else {
    if(hasError=false){
      errorFields.classList.remove("visible");
      errorFields.classList.add("hidden");
    }
    user.push(`name: ${nameInp}, surname:${surnameInp}`);
    name.value = " ";
    surname.value = " ";
    age.value=" ";
    username.value=" ";
    password.value=" ";
    checkBox.checked=false;
  }
} 
let userList = document.getElementById("users");
  function getUser() {
    getErrors("modal")
        // let modal = document.getElementById("modal");
        // modal.classList.remove("hidden");
        // modal.classList.add("visible");
        user.forEach((el) => {
          let li = document.createElement("li");
          let liText = document.createTextNode(
            `name:${el.name}, surname: ${el.surname}`
          );
          li.appendChild(liText);
          userList.appendChild(li);
        });
      }
  function passFunc(){
    if(password.type=="password"){
      password.type="text"
    }else {
      password.type="password"
    }
  }