console.log('hi');
const page = document.querySelector('.main')
const popupEdit = page.querySelector('.popup')
const popupCloseButton = page.querySelector('.popup__close-button')
const popupOpenButton = page.querySelector('.profile__edit')

console.log({popupEdit, popupCloseButton, popupOpenButton})

const popupVisible = function() {
    popupEdit.classList.add('popup_open')
}

const popupInvisible = function() {
    popupEdit.classList.remove('popup_open')
}
popupOpenButton.addEventListener('click', popupVisible)
popupCloseButton.addEventListener('click', popupInvisible)

const profileNameDef = document.querySelector('.profile__name')
const profileJobDef = document.querySelector('.profile__description')
const profileForm = document.querySelector('.popup__content')
const profileName = document.querySelector('.popup__name')
const profileJob = document.querySelector('.popup__description')
/*const submit = document.querySelector('.popup__submit')*/

const profileEdit = function(evt) {
    evt.preventDefault()
    profileNameDef.textContent = profileName.value
    profileJobDef.textContent = profileJob.value
    popupInvisible()
}



profileForm.addEventListener('submit', profileEdit)