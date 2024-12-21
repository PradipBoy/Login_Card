const eye = document.querySelector(".eye")
const pass = document.querySelector(".pass")
const passBox = document.querySelector(".passBox")
const icon = document.querySelector(".icon")


eye.addEventListener("click",function(){
  
  if( passBox.type == "password"){
    eye.classList.remove("fa-eye")
    eye.classList.add("fa-eye-slash")
    passBox.type="text"
  }else {
    eye.classList.remove("fa-eye-slash")
    eye.classList.add("fa-eye")
    passBox.type="password"
  }
})