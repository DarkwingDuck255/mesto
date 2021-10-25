import { Card } from "../components/Card.js"
import { FormValidator, objectsOfValidation } from '../components/FormValidator.js'
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import { Section } from "../components/Section.js"
import UserInfo from "../components/UserInfo.js"
import '../pages/index.css'

import {
    profileEditPopup,
    profilePopupOpenButton,
    profileNameElement,
    initialCards,
    cardElementContainer,
    imagePopup,
    profileJobDef,
    addCardPopup,
    addCardButton,
    profileNameInput,
    profileJobInput,
    addCardLinkInput,
    addCardNameTextInput,

    } from '../utils/constants.js'



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
    formSubmit: (item) => {

        const newCard = { link: item.newCardLink, name: item.newCardTitle}
    //    createCard(item)
        defaultCards.addItem(createCard(newCard))
        // const newCardElement = {
            
        //     link: addCardLinkInput.value,
        //     name: addCardNameTextInput.value,
        // }
        // defaultCards.addItem(createCard(newCardElement))
        console.log(item)
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





