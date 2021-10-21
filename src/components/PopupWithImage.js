import Popup from "./Popup.js";
// import {imageElement, imageElementDescr} from './script.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._link = this._popupSelector.querySelector('.image-popup__image')
        this._name = this._popupSelector.querySelector('.image-popup__description')
    }

    open(link, name) {
        // const popupImage = this._popupSelector.querySelector('.image-popup__image')
        this._link.src = link
        this._link.alt = name
        this._name.textContent = name
        
        // this._popupSelector.querySelector('.image-popup__description').textContent = name
        super.open()
    }
}