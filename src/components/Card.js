export class Card {
    constructor(data, userId, cardTemplateSelector, {handleCardClick, deleteOnClick, handleLike} ) {
        this._cardLink = data.link
        this._cardName = data.name
        this._likes = data.likes
        this._id = data._id
        this._owner = data.owner
        this._user = userId
        this._templateSelector = cardTemplateSelector
        this._handleCardClick = handleCardClick
        this._deleteOnClick = deleteOnClick

        this._handleLike = handleLike
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
        this._someCard.querySelector('.element__like-counter').textContent = this._likes.length
        this._deleteButtonDisplay()
        this._setEventListeners()
        this._updateLikesOnPage() 
             
        return this._someCard
    }

    getIdOfCard() {
        return this._id
    }

    //-----------Лайки

    _isCardLiked() {
        // return Boolean(this._likes.find(card => card._id === this._user))
        return this._likes.some((card) =>
            card._id === this._user
        )
    }

    liked() {
        this._someCard.querySelector('.element__like').classList.add('element__like-active')
        this.isLiked = true
        
    }

    notLiked() {
        this._someCard.querySelector('.element__like').classList.remove('element__like-active')
        this.isLiked = false
    }

    likeCount(someLikes) {
        this._likes = someLikes
        this._someCard.querySelector('.element__like-counter').textContent = this._likes
    }

    _updateLikesOnPage() {
        if(this._isCardLiked()) {
            this.liked()

        }
        else {
            this.notLiked()
        }
    }

// ------------удаление карточки
    deleteCard() {
        this._someCard.remove()
        this._someCard = null
    }

    _deleteButtonDisplay() {
        if (this._user != this._owner._id) {
            this._someCard.querySelector('.element__delete').style.display = 'none'
        }
        else {
            this._someCard.querySelector('.element__delete').style.display = 'visible'
        }
    }

// --------------------- установка слушателей
    _setEventListeners() {
        this._someCard.querySelector('.element__like').addEventListener('click', this._handleLike)
        this._someCard.querySelector('.element__delete').addEventListener('click', (evt) =>{
            evt.preventDefault()
            this._deleteOnClick()
        })
        this._someCard.querySelector('.element__image').addEventListener('click', this._handleCardClick)
    }
}