// Open and close modal
// Open modal
const Open = document.querySelectorAll('.js-click-button')
const Modal = document.querySelector('.js-modal')
const Close = document.querySelector('.js-modal-close')
const Modaltable = document.querySelector('.js-modal-table') 
for(let modal of Open){
        modal.addEventListener('click', function(){
                Modal.classList.add('open')
        })
}
// Close modal
    Close.addEventListener('click', function(){
                Modal.classList.remove('open')
    })

// Stop nổi bọt
        Modal.addEventListener('click', function(){
            Modal.classList.remove('open')
        })
        
        Modaltable.addEventListener('click', function(event){
                event.stopPropagation()
        })
// Button search

const ButtonSearch = document.querySelector('.js-search')
        ButtonSearch.addEventListener('click', function(){
                alert('Tao code cái nút này cho vui thôi')
        })
// Button pay
const GetModalSuccess = document.querySelector('.modal-success')
const ButtonPay = document.querySelector('.modal-pay')
        ButtonPay.addEventListener('click', function(){
                Modal.classList.remove('open')
                GetModalSuccess.classList.add('open')
                setTimeout(function(){ 
                        GetModalSuccess.classList.remove('open')        
                }, 2000);
        })

// Button Send
const GetButtonSend = document.querySelector('.button-send')
GetButtonSend.addEventListener('click', function(){
        GetModalSuccess.classList.add('open')
        setTimeout(function(){ 
                GetModalSuccess.classList.remove('open')        
        }, 2000);
})