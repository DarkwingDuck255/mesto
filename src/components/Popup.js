export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose)
        this._popupSelector.classList.add('popup_open')
    }

    close() {
        
        this._popupSelector.classList.remove('popup_open')
        document.removeEventListener('keydown', this._handleEscClose)

    }

    _handleEscClose = (evt) => {
        if(evt.key === 'Escape') {
            this.close()
        }
    }

    setEventListeners() {
        this._popupSelector.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
                this.close()
            }
        })
    }

}