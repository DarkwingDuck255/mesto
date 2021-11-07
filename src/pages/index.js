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
    confirmationPopupSelector,
    avatarEditButton,
    avatarPopupElement,
    avatarEditForm,
    avatarImage

    } from '../utils/constants.js'

import Api from "../components/Api.js"
import PopupWithConfirmation from "../components/PopupWithConfirmation.js"
// import { acosh } from "core-js/core/number"
//------------------------API
const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-29",
    headers: {
        authorization: "3496b6e0-46b4-4aa2-b181-96ef25d2619c",
        "content-type": "application/json"
    }
})



// --------------------------- Отрисовка карточек по-умолчанию
api.getInitialCards()
    .then((data) => {
        defaultCards.renderer(data)
    })
    .catch((err) => {
        console.log(`Ошибка загрузки карточек ->${err.status}`)
    })


const defaultCards = new Section({
    items: initialCards,
    renderer: (card) => {
        const newCard = createCard(card)
        defaultCards.addItem(newCard)
        
    }
}, cardElementContainer)



// ----------------------------------Добавление карточек

function createCard(card) {
    const aCard = new Card (
        card,
        userId,
        '#cards-template', {
        handleCardClick: () => {
            imagePopupWindow.open(card.link, card.name)
        },
        deleteOnClick: () => {
            confirmationPopup.onSubmit(() => {
                api.deleteCardFromSrv(aCard)
                .then(() => {
                    aCard.deleteCard()
                    confirmationPopup.close()
                })
                .catch((err) => {
                    console.log(err)
                    confirmationPopup.close()
                })
            })
            confirmationPopup.open()
        },
        handleLike: () => {
            if(aCard.isLiked) {
                api.deleteLike(aCard.getIdOfCard())
                .then((res) => {
                    aCard.notLiked()
                    aCard.likeCount(res.likes.length)
                    console.log(res.likes.length)
                })
            }
            else {
                api.sendLike(aCard.getIdOfCard())
                .then((res) => {
                    aCard.liked()
                    aCard.likeCount(res.likes.length)
                    console.log(res.likes.length)
                })
            }
        }
    })
    return aCard.getCard()
}

//------------------------ удаление картинки с сервера

const confirmationPopup = new PopupWithConfirmation(confirmationPopupSelector)

const imagePopupWindow = new PopupWithImage(imagePopup)

//---------------------------------информация о юзере на странице
let userId

api.getUserFromSrv()
.then((res) => {
    userInfo.setUserInfo(res)
    userInfo.setAvatar(res.avatar)
    userId = res._id
    console.log(res.avatar)
  })

const userInfo = new UserInfo({
    name: profileNameElement,
    job: profileJobDef,
    avalink: avatarImage
  })
  console.log(userInfo)


// --------------------------------Попап формы профиля

const profilePopup = new PopupWithForm(profileEditPopup, {
    formSubmit: (profile) =>{
        profilePopup.savingUx()
        api.patchProfile(profile)
        .then((res) => {
            userInfo.setUserInfo(res)
        })
        .catch((err) => {
            console.log(`ошибка отправки данных профиля на сервер ${err}`)
        })
    }
    
}) 

// ------------------------ Функция открытия попапа профиля и подстановка значений в форму

const profileInputValuesAndOpenPopup = () => {
    const profileInputs = userInfo.getUserInfo()
    profileNameInput.value = profileInputs.name
    profileJobInput.value = profileInputs.job
    profileEditValidate.resetValidation()
    profilePopup.open()
}


// ---------------------- форма добавления картинки
const cardPopupForm = new PopupWithForm(addCardPopup, {
    formSubmit: (item) => {
        cardPopupForm.savingUx()
        api.sendNewImage(item)
        .then((item) => {
            defaultCards.addItem(createCard(item))
            
        })

        .catch((err) => {
            console.log(`ошибка отправки данных карточки на сервер ${err}`)
        })
        
    }
}) 

//---------------------------- Попап изменения аватара
const avatarPopup = new PopupWithForm(avatarPopupElement, {
    formSubmit: (item) => {
        avatarPopup.savingUx()
        api.avatarUpload(item)
        .then((res) =>{
            userInfo.setAvatar(res.avatar)
            avatarPopup.close()
        })
        .catch((err) => {
            console.log(`ошибка отправки данных аватарки на сервер ${err}`)
        })
    }
})




// ------------------------------ Функция открытия попапа добавления картинки и подставка значений в форму
const cardPopupValuesAndOpenPopup = () => {
    addCardPopupValidate.resetValidation()
    cardPopupForm.open()
}


cardPopupForm.setEventListeners()
profilePopup.setEventListeners()
profilePopupOpenButton.addEventListener('click', profileInputValuesAndOpenPopup)
addCardButton.addEventListener('click', cardPopupValuesAndOpenPopup)
imagePopupWindow.setEventListeners()
confirmationPopup.setEventListeners()
avatarPopup.setEventListeners()
avatarEditButton.addEventListener('click', () => {
    avatarPopup.open()
})

// вызов функции валидации

const profileEditValidate = new FormValidator(objectsOfValidation, profileEditPopup)
profileEditValidate.enableValidation()
const addCardPopupValidate = new FormValidator(objectsOfValidation, addCardPopup)
addCardPopupValidate.enableValidation()
const avatarFormValidate = new FormValidator(objectsOfValidation, avatarEditForm)
avatarFormValidate.enableValidation()





