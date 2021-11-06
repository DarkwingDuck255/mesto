import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupConfirmForm = this._popup.querySelector('#delete-card-from-srv')
    }

    // getCardId() {
    //     return this._id
    // }

    onSubmit(doesSomething) {
        this._doesSomething = doesSomething
    }
    

    setEventListeners() {
        super.setEventListeners()
        this._popupConfirmForm.addEventListener('submit', (evt) =>{
            evt.preventDefault()
            this._doesSomething()
        })
    }
}