

export const page = document.querySelector('.main')
export const profileEditPopup = page.querySelector('#profile-popup')
export const profileEditPopupCloseButton = page.querySelector('#profile-popup-close-button')
export const profileNameElement = document.querySelector('.profile__name')
export const cardElementContainer = document.querySelector('.elements')
export const imagePopup = document.querySelector('.image-popup')
export const profileJobDef = document.querySelector('.profile__description')
export const addCardPopup = document.querySelector('#add-image-popup')
export const addCardButton = document.querySelector('.profile__add')
export const profileNameInput = document.querySelector('#name')
export const profileJobInput = document.querySelector('#job')
export const confirmationPopupSelector = document.querySelector('#confirmation-popup')
export const avatarEditButton = document.querySelector('.profile__avatar-edit-button')
export const avatarPopupElement = document.querySelector('#avatar-popup')
export const avatarEditForm = document.querySelector('#update-avatar')
export const avatarImage = document.querySelector('.profile__avatar')
export const profilePopupOpenButton = page.querySelector('.profile__edit')
//---------------------



// export const profileForm = document.querySelector('.popup__content')



// export const imagePopupImage = imagePopup.querySelector('.image-popup__image')
// export const imagePopupCloseButton = imagePopup.querySelector('.image-popup__close-button')
// export const imagePopupDescription = imagePopup.querySelector('.image-popup__description')


// export const addCardPopupCloseButton = document.querySelector('#add-card-close')
// export const addCardLinkInput = document.querySelector('#new-card-link')
// export const addCardNameTextInput = document.querySelector('#new-card-title')
// export const addCardForm = document.querySelector('#new-image-form')
// export const cardTemplateElement = document.querySelector('.elements-template').content

// export const imageElement = document.querySelector('.element__image')
// export const imageElementDescr = document.querySelector('.element__text')
// // export const cardTemplateSelector = '#cards-template'
// export const cardLikeButton = document.querySelector('.element__like')
// export const buttonElement = addCardForm.querySelector('.popup__submit')
// // ???????????? ????????????????
// export const cardDeleteButton = document.querySelector('.element__delete')






//???????????????? ?????? ???????????????? ????????????????

export const initialCards = [
    {
        name: '??????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: '?????????????????????? ??????????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: '??????????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: '????????????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: '???????????????????????? ??????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: '????????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];