import { Card } from "../components/Card.js"
import { FormValidator, objectsOfValidation } from '../components/FormValidator.js'
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import { Section } from "../components/Section.js"
import UserInfo from "../components/UserInfo.js"
import '../pages/index.css'



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
export const imageElement = document.querySelector('.element__image')
export const imageElementDescr = document.querySelector('.element__text')
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



// Отрисовка карточек по-умолчанию
const defaultCards = new Section({
    items: initialCards,
    renderer: (card) => {
        const newCard = createCard(card)
        defaultCards.addItem(newCard)
        
    }
    
    
}, cardElementContainer)
defaultCards.renderer()

// Добавление карточек

function createCard(card) {
    const aCard = new Card (card, '#cards-template', {
        handleCardClick: () => {
            imagePopupWindow.open(card.link, card.name)
        }
    })
    return aCard.getCard()
}

const imagePopupWindow = new PopupWithImage(imagePopup)

//информация о юзере на странице
const userInfo = new UserInfo({
    name: profileNameElement,
    job: profileJobDef
  })


// Попап формы профиля

const profilePopup = new PopupWithForm(profileEditPopup, {
    formSubmit: (profile) =>{
        userInfo.setUserInfo(profile)
    }
    
}) 

// Функция открытия попапа профиля и подстановка значений в форму

const profileInputValuesAndOpenPopup = () => {
    const profileInputs = userInfo.getUserInfo()
    profileNameInput.value = profileInputs.name
    profileJobInput.value = profileInputs.job
    profileEditValidate.resetValidation()
    profilePopup.open()
}


// форма добавления картинки
const cardPopupForm = new PopupWithForm(addCardPopup, {
    formSubmit: (newCard) => {
        const newCardElement = createCard(newCard)
        defaultCards.addItem(newCardElement)
    }
}) 
// Функция открытия попапа добавления картинки и подставка значений в форму
const cardPopupValuesAndOpenPopup = () => {
    addCardPopupValidate.resetValidation()
    cardPopupForm.open()
}


cardPopupForm.setEventListeners()
profilePopup.setEventListeners()
profilePopupOpenButton.addEventListener('click', profileInputValuesAndOpenPopup)
addCardButton.addEventListener('click', cardPopupValuesAndOpenPopup)
imagePopupWindow.setEventListeners()

// вызов функции валидации

const profileEditValidate = new FormValidator(objectsOfValidation, profileEditPopup)
profileEditValidate.enableValidation()
const addCardPopupValidate = new FormValidator(objectsOfValidation, addCardPopup)
addCardPopupValidate.enableValidation()





