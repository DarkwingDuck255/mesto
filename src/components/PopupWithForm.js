import  Popup  from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { formSubmit }) {
        super(popupSelector)
        this._formSubmit = formSubmit
        this._fromSelector = this._popupSelector.querySelector('.popup__form')
    }

    _getInputValues() {
        this._inputList = Array.from(this._popupSelector.querySelectorAll('.popup__input'))
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
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._formSubmit(this._getInputValues())
            this.close()
        })
    }
}