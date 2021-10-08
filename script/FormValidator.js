export const objectsOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__name-error_active',
  errorClass: 'popup__error-descr'
}

//класс

export class FormValidator {
  constructor (data, formSelector) {
    this._inputSelector = data.inputSelector
    this._submitButtonSelector = data.submitButtonSelector
    this._inactiveButtonClass = data.inactiveButtonClass
    this._inputErrorClass = data.inputErrorClass
    this._errorClass = data.errorClass
    this._formSelector = formSelector
    this._inputList = this._formSelector.querySelectorAll(this._inputSelector)
    this._buttonElemment = this._formSelector.querySelector(this._submitButtonSelector)
    this._inputListArr = Array.from(this._inputList)
  }
  _showInputError(inputElement){
    const error = this._formSelector.querySelector(`.popup__${inputElement.id}-error`)
    inputElement.classList.add(this._inputErrorClass)
    error.textContent = inputElement.validationMessage
    error.classList.add(this._errorClass)
  }
  _hideInputError(inputElement){
    const error = this._formSelector.querySelector(`.popup__${inputElement.id}-error`)
    inputElement.classList.remove(this._inputErrorClass)
    error.classList.remove(this._errorClass)
    error.textContent = ""
  }

  _checkInputValidity(inputElement){
    
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement)
    } 
    else {
      this._hideInputError(inputElement)
    }
  }

  _hasInvalidInput() {
    return this._inputListArr.some(inputElement => {
      return !inputElement.validity.valid
    })
  }

  _disableSubmitButton(){
    this._buttonElemment.classList.add(this._inactiveButtonClass)
    this._buttonElemment.disabled = true
  }


  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
      
    });

  }

  _enableSubmitButton(){
    this._buttonElemment.classList.remove(this._inactiveButtonClass)
    this._buttonElemment.disabled = false
  }

  _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this._disableSubmitButton(this._buttonElemment, this._inactiveButtonClass)
    }
    else {
      this._enableSubmitButton(this._buttonElemment, this._inactiveButtonClass)
    }
  }


  _setEventListners = () => {
    this._formSelector.addEventListener('submit', event => {
      event.preventDefault()
    })
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState()
      })
    })
    this._toggleButtonState()
  }

  enableValidation() {
    this._setEventListners()
    }
  
}


