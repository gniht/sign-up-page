
const pwWarning = document.querySelector(".pw-not-matching");
const password = document.querySelector("#pw");
const passwordConfirm = document.querySelector("#pw-confirm");

function checkPasswordMatching () {
  if(password.value === passwordConfirm.value){
    pwWarning.classList.add("invisible");
  }else{
    pwWarning.classList.remove("invisible");
  }
}

// put listener on both inputs in case user confirms prior to entering pw
password.addEventListener('input', checkPasswordMatching);
passwordConfirm.addEventListener('input', checkPasswordMatching);