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
const cardTemplateSelector = '#cards-template'
const cardLikeButton = document.querySelector('.element__like')
const buttonElement = addCardForm.querySelector('.popup__submit')
// кнопка удаления
const cardDeleteButton = document.querySelector('.element__delete')

console.log(imageElement)
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




// function createCard(name, link) {
//     const cardsGridElement = cardTemplateElement.querySelector('.element').cloneNode(true)
//     cardsGridElement.querySelector('.element__text').textContent = name;
//     const cardElementImg = cardsGridElement.querySelector('.element__image')
//     cardElementImg.src = link
//     cardElementImg.alt = name; 


    // кнопка лайка
    // const cardLikeButton = cardsGridElement.querySelector('.element__like')
    // кнопка удаления
    // const cardDeleteButton = cardsGridElement.querySelector('.element__delete')

    // слушатель на кнопку
    // cardDeleteButton.addEventListener('click',(evt) =>{
    //     evt.target.closest('.element').remove()
    // })
    // cardLikeButton.addEventListener('click', (evt) => {
    //     evt.target.classList.toggle('element__like-active')
    // })
    
    // //слушатель клика по карточке

    // cardElementImg.addEventListener('click', () => {
    //     openCardImagePopup(link, name)
    // })


//     return cardsGridElement
    
// }
// слушатель клика по закрытию попапа картинки
imagePopupCloseButton.addEventListener('click', () => {
    closePopup(imagePopup)
})


// initialCards.forEach(function(element) {
//     cardElementContainer.append(createCard(element.name, element.link))
// });


//попап Профиля

const openProfilePopupHandler = function () {
    openPopup(profileEditPopup)
    profileNameInput.value = profileNameElement.textContent
    profileJobInput.value = profileJobDef.textContent
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
}

const closeAddCardPopupHandler = function () {
    closePopup(addCardPopup)
}


// //Добавление новой карточки

// const addingNewCardHandler = function(evt) {
//     evt.preventDefault()
//     const name = addCardNameTextInput.value
//     const link = addCardLinkInput.value
//     cardElementContainer.prepend(createCard(name, link))
//     closePopup(addCardPopup)

//     const buttonElement = addCardForm.querySelector('.popup__submit')
//     disableSubmitButton(buttonElement, 'popup__submit_inactive')

//     addCardNameTextInput.value = ""
//     addCardLinkInput.value = ""
// }

// функция открытия попапа с картинкой 

// const openCardImagePopup = function (link, name) {
//     openPopup(imagePopup)
//     imagePopupImage.src = link
//     imagePopupImage.alt = name
//     imagePopupDescription.textContent = name
// }


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
}

function closePopupByClickOnOverlayHandler(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target)
    }    
}

function closeByEscapeHandler(evt) {
    if(evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_open'))
    }
}

// слушатель добавления новой карточки

// addCardForm.addEventListener('submit', addingNewCardHandler)
// слушатели открытия и закрытия попапов
addCardButton.addEventListener('click', openAddCardPopupHandler)
addCardPopupCloseButton.addEventListener('click', closeAddCardPopupHandler)


// Классы


//Карточки
// class Card {
//     constructor(data) {
//         this._cardName = data.name
//         this._cardLink = data.link
//         this._templateSelector = '#cards-template'
//     }
//     _getTemplate() {
//             const cardElement = document
            
//               .querySelector(this._templateSelector)
//               .content
//               .querySelector('.element')
//               .cloneNode(true)
        
//             return cardElement
//       } 

//     getCard() {
        
//         this._someImage = this._getTemplate()
//         this._setEventListeners()
//         this._someImage.querySelector('.element__image').alt = this._cardName
//         this._someImage.querySelector('.element__image').src = this._cardLink
//         this._someImage.querySelector('.element__text').textContent = this._cardName

//         return this._someImage
//     }

//     _openCardImagePopup() {
//         openPopup(imagePopup)
//         imagePopupImage.src = this._cardLink
//         imagePopupImage.alt = this._cardName
//         imagePopupDescription.textContent = this._cardName
//     }

//     _likeCard(evt) {
//         evt.target.classList.toggle('element__like-active')
//     }

//     _deleteCard(evt) {
//         evt.target.closest('.element').remove()
//     }

//     _setEventListeners() {
//         this._someImage.querySelector('.element__image').addEventListener('click', () => {
//             this._openCardImagePopup()
//         })
//         this._someImage.querySelector('.element__like').addEventListener('click', this._likeCard)
//         this._someImage.querySelector('.element__delete').addEventListener('click', this._deleteCard)
//     }
// }

function renderCard(card) { 
    cardElementContainer.prepend(card);
}

buttonElement.addEventListener('click', function(event) { 
    event.preventDefault(); 
    const card = new Card(
        {name: addCardNameTextInput.value, 
        link: addCardLinkInput.value}, 
        '#cards-template'); 
    renderCard(card.getCard()); 
    closePopup(addCardPopup); 
  });

// отображение карточек
initialCards.forEach((cardItem) => {
    const card = new Card(cardItem)
    const cardElement = card.getCard()
    document.querySelector('.elements').append(cardElement)
})

// вызов функции валидации
// enableValidation();

new FormValidator(objectsOfValidation, '#profile-popup').enableValidation();
new FormValidator(objectsOfValidation, '#add-image-popup').enableValidation();


import { Card } from "./Card.js"
import { FormValidator, objectsOfValidation } from './FormValidator.js'