const page = document.querySelector('.main')
const popupEdit = page.querySelector('.popup')
const popupCloseButton = page.querySelector('.popup__close-button')
const popupOpenButton = page.querySelector('.profile__edit')
const profileNameDef = document.querySelector('.profile__name')
const profileJobDef = document.querySelector('.profile__description')
const profileForm = document.querySelector('.popup__content')
const profileName = document.querySelector('#name')
const profileJob = document.querySelector('#job')

const popupVisible = function() {
    popupEdit.classList.add('popup_open')
    profileName.value = profileNameDef.textContent
    profileJob.value = profileJobDef.textContent
}

const popupInvisible = function() {
    popupEdit.classList.remove('popup_open')
}



/*const submit = document.querySelector('.popup__submit')*/

const profileEdit = function(evt) {
    evt.preventDefault()
    profileNameDef.textContent = profileName.value
    profileJobDef.textContent = profileJob.value
    popupInvisible()
}


popupOpenButton.addEventListener('click', popupVisible)
popupCloseButton.addEventListener('click', popupInvisible)
profileForm.addEventListener('submit', profileEdit)