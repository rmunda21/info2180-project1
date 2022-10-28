/* Add your JavaScript to this file */

window.onload = function(){
    let form = document.getElementsByClassName("newsletter")[0].children[0].children[2]
    let inputfield = document.getElementById("email")
    let messsage = document.getElementsByClassName("newsletter")[0].children[0].children[3]
    
    form.addEventListener("submit",function(ele){
        let canSubmit = true
        canSubmit = checkEmail(inputfield)
        if (canSubmit == false){
            messsage.textContent = "Please enter a valid email address"
        }
        else{
            messsage.textContent = "Thank you!Your email address  "+inputfield.value+" has been added to our mailing list!"
        }
        ele.preventDefault()
    })
    function checkEmail(ele){
        if (ele.value == "" || ele.value.length == 0){
            return false
        }
        return true
    }
}