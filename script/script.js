const page = document.querySelector('.main')
const popupEdit = page.querySelector('.popup')
const popupCloseButton = page.querySelector('.popup__close-button')
const popupOpenButton = page.querySelector('.profile__edit')
const profileNameDef = document.querySelector('.profile__name')
const profileJobDef = document.querySelector('.profile__description')
const profileForm = document.querySelector('.popup__content')
const profileName = document.querySelector('#name')
const profileJob = document.querySelector('#job')
const imagePopup = document.querySelector('.image-popup')
const imagePopupImage = imagePopup.querySelector('.image-popup__image')
const imagePopupCloseButton = imagePopup.querySelector('.image-popup__close-button')
const imagePopupDescription = imagePopup.querySelector('.image-popup__description')


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
const cardElementBlock = document.querySelector('.elements')
const cardDeleteButton = cardTemplateElement.querySelector('.element__delete')

function createCard(name, link) {
    const cardsGridElement = cardTemplateElement.querySelector('.element').cloneNode(true)
    cardsGridElement.querySelector('.element__text').textContent = name;
    const cardElementImgSrc = cardsGridElement.querySelector('.element__image')
    cardElementImgSrc.src = link
    cardElementImgSrc.alt = name; 


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
    // Слушатель кнопки удаления карточки
    function setEventListner() {
        cardsGridElement.querySelector('.element__delete').addEventListener('click', deleteCard)
    }
    
    //слушатель клика по карточке

    cardElementImgSrc.addEventListener('click', () => {
        cardImagePopupFunction(link, name)
    })


    return cardsGridElement
    
}
// слушатель клика по закрытию попапа картинки
imagePopupCloseButton.addEventListener('click', () => {
    closePopup(imagePopup)
})


initialCards.forEach(function(element) {
    cardElementBlock.append(createCard(element.name, element.link))
});


//попап

const setPopupVisible = function () {
    openPopup(popupEdit)
    profileName.value = profileNameDef.textContent
    profileJob.value = profileJobDef.textContent
}

const setPopupInvisible = function () {
    closePopup(popupEdit)
}


const profileEdit = function (evt) {
    evt.preventDefault()
    profileNameDef.textContent = profileName.value
    profileJobDef.textContent = profileJob.value
    setPopupInvisible()
}


popupOpenButton.addEventListener('click', setPopupVisible)
popupCloseButton.addEventListener('click', setPopupInvisible)
profileForm.addEventListener('submit', profileEdit)


// Попап добавления новой карточки

const addCardButton = document.querySelector('.profile__add')
const addCardPopup = document.querySelector('#add-image-popup')
const addCardPopupCloseButton = document.querySelector('#add-card-close')
const addCardLinkValue = document.querySelector('#new-card-link')
const addCardNameTextValue = document.querySelector('#new-card-title')


const addCardFunction = function () {
    openPopup(addCardPopup)
}

const addCardFunctionClose = function () {
    closePopup(addCardPopup)
}

addCardButton.addEventListener('click', addCardFunction)
addCardPopupCloseButton.addEventListener('click', addCardFunctionClose)


//Добавление новой карточки

const cardNameTitle = document.querySelector('.element__text')
const cardImageSrc = document.querySelector('.element__image')
const newImageForm = document.querySelector('#new-image-form')

const addingNewCard = function(evt) {
    evt.preventDefault()
    const name = addCardNameTextValue.value
    const link = addCardLinkValue.value
    cardElementBlock.prepend(createCard(name, link))
    addCardFunctionClose()
    addCardNameTextValue.value = ""
    addCardLinkValue.value = ""
}

newImageForm.addEventListener('submit', addingNewCard)

//Функция удаления карточки

function deleteCard(event) {
    const card = event.target.closest('.element');
    card.remove();
  }

  function cardLikeActive(event) {
    const like = event.target.closest('.element__like')
    like.toggle('.element__like-active')
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
}

//функция закрытия ЛЮБОГО попапа
const closePopup = function(popup) {
    popup.classList.remove('popup_open')
}