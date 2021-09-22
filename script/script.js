const page = document.querySelector('.main')
const profileEditPopup = page.querySelector('#profile-popup')
const profileEditPopupCloseButton = page.querySelector('.popup__close-button')
const profilePopupOpenButton = page.querySelector('.profile__edit')
const profileNameElement = document.querySelector('.profile__name')
const profileJobDef = document.querySelector('.profile__description')
const profileForm = document.querySelector('.popup__content')
const profileNameInput = document.querySelector('#name')
const profileJobInput = document.querySelector('#job')
const imagePopup = document.querySelector('.image-popup')
const imagePopupImage = imagePopup.querySelector('.image-popup__image')
const imagePopupCloseButton = imagePopup.querySelector('.image-popup__close-button')
const imagePopupDescription = imagePopup.querySelector('.image-popup__description')
const addCardButton = document.querySelector('.profile__add')
const addCardPopup = document.querySelector('#add-image-popup')
const addCardPopupCloseButton = document.querySelector('#add-card-close')
const addCardLinkInput = document.querySelector('#new-card-link')
const addCardNameTextInput = document.querySelector('#new-card-title')
const addCardForm = document.querySelector('#new-image-form')


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


const cardTemplateElement = document.querySelector('.elements-template').content;
const cardElementContainer = document.querySelector('.elements')

function createCard(name, link) {
    const cardsGridElement = cardTemplateElement.querySelector('.element').cloneNode(true)
    cardsGridElement.querySelector('.element__text').textContent = name;
    const cardElementImg = cardsGridElement.querySelector('.element__image')
    cardElementImg.src = link
    cardElementImg.alt = name; 


    // кнопка лайка
    const cardLikeButton = cardsGridElement.querySelector('.element__like')
    // кнопка удаления
    const cardDeleteButton = cardsGridElement.querySelector('.element__delete')

    // слушатель на кнопку
    cardDeleteButton.addEventListener('click',(evt) =>{
        evt.target.closest('.element').remove()
    })
    cardLikeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like-active')
    })
    
    //слушатель клика по карточке

    cardElementImg.addEventListener('click', () => {
        cardImagePopupFunction(link, name)
    })


    return cardsGridElement
    
}
// слушатель клика по закрытию попапа картинки
imagePopupCloseButton.addEventListener('click', () => {
    closePopup(imagePopup)
})


initialCards.forEach(function(element) {
    cardElementContainer.append(createCard(element.name, element.link))
});


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


// открытие попапа добавления новой карточки

const openAddCardPopupHandler = function () {
    openPopup(addCardPopup)
}

const closeAddCardPopupHandler = function () {
    closePopup(addCardPopup)
}

//Добавление новой карточки

const addingNewCardHandler = function(evt) {
    evt.preventDefault()
    const name = addCardNameTextInput.value
    const link = addCardLinkInput.value
    cardElementContainer.prepend(createCard(name, link))
    closePopup(addCardPopup)

    const buttonElement = addCardForm.querySelector('.popup__submit')
    disableSubmitButton(buttonElement, 'popup__submit_inactive')

    addCardNameTextInput.value = ""
    addCardLinkInput.value = ""
}

// функция открытия попапа с картинкой 

const cardImagePopupFunction = function (link, name) {
    openPopup(imagePopup)
    imagePopupImage.src = link
    imagePopupImage.alt = name
    imagePopupDescription.textContent = name
}


//функция открытия ЛЮБОГО попапа

const openPopup = function(popup) {
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
// Слушатель валидности инпутов для изменения статуса кнопки


// addCardButton.addEventListener('click', () => {
//     const formSelector = document.querySelector('#new-image-form')
//     const submitButtonSelector = formSelector.querySelector('.popup__submit')
//     const inactiveButtonClass = formSelector.querySelector('popup__submit_inactive')
//     formSelector.reset()
//     const inputList = Array.from(formSelector.querySelectorAll(objectsOfValidation.inputSelector))
//     toggleButtonState(formSelector, inputList, submitButtonSelector, inactiveButtonClass)
// })

// слушатель добавления новой карточки

addCardForm.addEventListener('submit', addingNewCardHandler)
// слушатели открытия и закрытия попапов
addCardButton.addEventListener('click', openAddCardPopupHandler)
addCardPopupCloseButton.addEventListener('click', closeAddCardPopupHandler)