export class Card {
    constructor(data, cardTemplateSelector, {handleCardClick}) {
        this._cardLink = data.link
        this._cardName = data.name
        
        this._templateSelector = cardTemplateSelector
        this._handleCardClick = handleCardClick
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
        
        this._someCard = this._getTemplate()
        
        this._someCard.querySelector('.element__image').src = this._cardLink
        this._someCard.querySelector('.element__image').alt = this._cardName
        this._someCard.querySelector('.element__text').textContent = this._cardName
        this._setEventListeners()
        return this._someCard
    }

    _likeCard(evt) {
        evt.target.classList.toggle('element__like-active')
    }

    _deleteCard(evt) {
        evt.target.closest('.element').remove()
    }

    _setEventListeners() {
        this._someCard.querySelector('.element__like').addEventListener('click', this._likeCard)
        this._someCard.querySelector('.element__delete').addEventListener('click', this._deleteCard)
        this._someCard.querySelector('.element__image').addEventListener('click', this._handleCardClick);
    }
}