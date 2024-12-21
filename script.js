const eye = document.querySelector(".eye")
const pass = document.querySelector(".pass")
const passBox = document.querySelector(".passBox")
const icon = document.querySelector(".icon")


eye.addEventListener("click",function(){
  
  if(eye.classList.contains("fa-eye")){
    eye.classList.remove("fa-eye")
    eye.classList.add("fa-eye-slash")
    passBox.type="text"
  }else {
    eye.classList.remove("fa-eye-slash")
    eye.classList.add("fa-eye")
    passBox.type="password"
  }
})

pass.addEventListener("click",function(){
  icon.classList.remove("hide")
  icon.classList.add("show")
  
})

document.addEventListener("click",function(e){

  if(!pass.contains(e.target)){
    icon.classList.remove("show")
    icon.classList.add("hide")
  }

})



