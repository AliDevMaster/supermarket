const familyNameInput = document.querySelector(".familyName")
const topicSubInput = document.querySelector(".topicSub")
const textSub = document.querySelector(".text-sub")
const wayContactInput = document.querySelector(".wayContact")
const sendBtn = document.querySelector(".send-btn")

const modalBox = document.querySelector(".modal-box")
const modalMassage = document.querySelector(".succefuly-massage")



sendBtn.addEventListener("click" , (e) => {
    e.preventDefault()
    
    
    if(familyNameInput.value.length + 1 > 8 && topicSubInput.value.trim() !== ''){
        
        modalMassage.innerHTML = 'موفقیت امیز بود'
        modalBox.style.backgroundColor = 'green'
        modalBox.style.transform = 'translate(-15% , -220%)'
        setTimeout(() => {
            modalBox.style.transform = 'translate(110% , -220%)'
        }, 2000);
        familyNameInput.value = ''
        textSub.value = ''
        wayContactInput.value = ''
        topicSubInput.value = ''
    }else{
        modalMassage.innerHTML = 'خطا در نام خانوادگی یا موضوع'
        modalBox.style.backgroundColor = 'red'
        modalBox.style.transform = 'translate(-15% , -220%)'
        setTimeout(() => {
            modalBox.style.transform = 'translate(110% , -220%)'
        }, 2000);
    }
})

