import  Popup  from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { formSubmit }) {
        super(popupSelector)
        this._formSubmit = formSubmit
        this._fromSelector = this._popup.querySelector('.popup__form')
        this._buttonSelector = this._popup.querySelector('.popup__submit')
    }

    _getInputValues() {
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'))
        this._inputValue = {}
        this._inputList.forEach(input => {
            this._inputValue[input.name] = input.value
        });
        return this._inputValue
    }

    close() {
        this._fromSelector.reset()
        super.close()
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._formSubmit(this._getInputValues())
        })
    }

    savingUx(loading) {
        if(loading === true) {
            this._buttonSelector.textContent = 'Сохранение...'
        }
        else {
            this._buttonSelector.textContent = 'Сохранить'
        }
    }
}