import { openPopup, imagePopup, imagePopupImage, imagePopupDescription } from './script.js'
export class Card {
    constructor(data) {
        this._cardName = data.name
        this._cardLink = data.link
        this._templateSelector = '#cards-template'
    }
    _getTemplate() {
            const cardElement = document
            
              .querySelector(this._templateSelector)
              .content
              .querySelector('.element')
              .cloneNode(true)
        
            return cardElement
      } 

    getCard() {
        
        this._someImage = this._getTemplate()
        this._setEventListeners()
        this._someImage.querySelector('.element__image').alt = this._cardName
        this._someImage.querySelector('.element__image').src = this._cardLink
        this._someImage.querySelector('.element__text').textContent = this._cardName

        return this._someImage
    }

    _openCardImagePopup() {
        
        openPopup(imagePopup)
        imagePopupImage.src = this._cardLink
        imagePopupImage.alt = this._cardName
        imagePopupDescription.textContent = this._cardName
    }

    _likeCard(evt) {
        evt.target.classList.toggle('element__like-active')
    }

    _deleteCard(evt) {
        evt.target.closest('.element').remove()
    }

    _setEventListeners() {
        this._someImage.querySelector('.element__image').addEventListener('click', () => {
            this._openCardImagePopup()
        })
        this._someImage.querySelector('.element__like').addEventListener('click', this._likeCard)
        this._someImage.querySelector('.element__delete').addEventListener('click', this._deleteCard)
    }
}