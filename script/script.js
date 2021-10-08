const page = document.querySelector('.main')
const profileEditPopup = page.querySelector('#profile-popup')
const profileEditPopupCloseButton = page.querySelector('#profile-popup-close-button')
const profilePopupOpenButton = page.querySelector('.profile__edit')
const profileNameElement = document.querySelector('.profile__name')
const profileJobDef = document.querySelector('.profile__description')
const profileForm = document.querySelector('.popup__content')
const profileNameInput = document.querySelector('#name')
const profileJobInput = document.querySelector('#job')
export const imagePopup = document.querySelector('.image-popup')
export const imagePopupImage = imagePopup.querySelector('.image-popup__image')
const imagePopupCloseButton = imagePopup.querySelector('.image-popup__close-button')
export const imagePopupDescription = imagePopup.querySelector('.image-popup__description')
const addCardButton = document.querySelector('.profile__add')
const addCardPopup = document.querySelector('#add-image-popup')
const addCardPopupCloseButton = document.querySelector('#add-card-close')
const addCardLinkInput = document.querySelector('#new-card-link')
const addCardNameTextInput = document.querySelector('#new-card-title')
const addCardForm = document.querySelector('#new-image-form')
const cardTemplateElement = document.querySelector('.elements-template').content
const cardElementContainer = document.querySelector('.elements')
const imageElement = document.querySelector('.element__image')
export const cardTemplateSelector = '#cards-template'
const cardLikeButton = document.querySelector('.element__like')
const buttonElement = addCardForm.querySelector('.popup__submit')
// кнопка удаления
const cardDeleteButton = document.querySelector('.element__delete')

//Карточки при загрузке страницы

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


// слушатель клика по закрытию попапа картинки
imagePopupCloseButton.addEventListener('click', () => {
    closePopup(imagePopup)
    
})

//попап Профиля

const openProfilePopupHandler = function () {
    openPopup(profileEditPopup)
    profileNameInput.value = profileNameElement.textContent
    profileJobInput.value = profileJobDef.textContent
    profileEditValidate.resetValidation()
}

const closeProfilePopupHandler = function () {
    closePopup(profileEditPopup)
}

const editProfileHandler = function (evt) {
    evt.preventDefault()
    profileNameElement.textContent = profileNameInput.value
    profileJobDef.textContent = profileJobInput.value
    closePopup(profileEditPopup)
    
}


profilePopupOpenButton.addEventListener('click', openProfilePopupHandler)
profileEditPopupCloseButton.addEventListener('click', closeProfilePopupHandler)
profileForm.addEventListener('submit', editProfileHandler)


// // открытие попапа добавления новой карточки

const openAddCardPopupHandler = function () {
    openPopup(addCardPopup)
    addCardPopupValidate.resetValidation()
}

const closeAddCardPopupHandler = function () {
    closePopup(addCardPopup)
}

// //функция открытия ЛЮБОГО попапа

export const openPopup = function(popup) {
    popup.classList.add('popup_open')
    popup.addEventListener('click', closePopupByClickOnOverlayHandler)
    document.addEventListener('keydown', closeByEscapeHandler)
}

//функция закрытия ЛЮБОГО попапа
const closePopup = function(popup) {
    popup.classList.remove('popup_open')
    popup.removeEventListener('click', closePopupByClickOnOverlayHandler)
    document.removeEventListener('keydown', closeByEscapeHandler)
    addCardLinkInput.value = ''
    addCardNameTextInput.value = ''
}

function closePopupByClickOnOverlayHandler(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target)
        addCardLinkInput.value = ''
        addCardNameTextInput.value = ''
    }    
}

function closeByEscapeHandler(evt) {
    if(evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_open'))
    }
}

// слушатели открытия и закрытия попапов
addCardButton.addEventListener('click', openAddCardPopupHandler)
addCardPopupCloseButton.addEventListener('click', () => {
closeAddCardPopupHandler()
addCardLinkInput.value = ''
addCardNameTextInput.value = ''

})


function createCard(card) {
    const newCard = new Card (card, '#cards-template')
    return newCard.getCard()
  }



buttonElement.addEventListener('click', function(event) { 
    event.preventDefault()
    const newCard = {
        link: addCardLinkInput.value,
        name: addCardNameTextInput.value
    }
    createCard(newCard)
    cardElementContainer.prepend(createCard(newCard))
    closePopup(addCardPopup)
    addCardLinkInput.value = ''
    addCardNameTextInput.value = ''
  })

// отображение карточек
initialCards.forEach((card) => {
    // createCard(newCard)
    // const cardElement = card.getCard()
    cardElementContainer.prepend(createCard(card))
})

// вызов функции валидации

const profileEditValidate = new FormValidator(objectsOfValidation, profileEditPopup)
profileEditValidate.enableValidation()
const addCardPopupValidate = new FormValidator(objectsOfValidation, addCardPopup)
addCardPopupValidate.enableValidation()

import { Card } from "./Card.js"
import { FormValidator, objectsOfValidation } from './FormValidator.js'