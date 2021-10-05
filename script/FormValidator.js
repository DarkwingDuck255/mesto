export const objectsOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__name-error_active',
  errorClass: 'popup__error-descr'
}

// const showInputError = (error, inputElement, inputErrorClass, errorClass) => {
//   inputElement.classList.add(inputErrorClass)
//   error.textContent = inputElement.validationMessage
//   error.classList.add(errorClass)
// }

// const hideInputError = (error, inputElement, inputErrorClass, errorClass) => {
//   inputElement.classList.remove(inputErrorClass)
//   error.classList.remove(errorClass)
//   error.textContent = ""
// }

// const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
//   const error = formElement.querySelector(`.popup__${inputElement.id}-error`)
//   if (!inputElement.validity.valid) {
//     showInputError(error, inputElement, inputErrorClass, errorClass)
//   } else {
//     hideInputError(error, inputElement, inputErrorClass, errorClass)
//   }
// }

// const hasInvalidInput = (inputList) => {
//   return inputList.some(inputElement => {
//     return !inputElement.validity.valid
//   })
// }

// const disableSubmitButton = (buttonElemment, inactiveButtonClass) => {
//   buttonElemment.classList.add(inactiveButtonClass)
//   buttonElemment.disabled = true
// }


// const enableSubmitButton = (buttonElemment, inactiveButtonClass) => {
//   buttonElemment.classList.remove(inactiveButtonClass)
//   buttonElemment.disabled = false
// }


// const toggleButtonState = (formElement, inputList, submitButtonSelector, inactiveButtonClass) => {
//   const buttonElemment = formElement.querySelector(submitButtonSelector)
//   if (hasInvalidInput(inputList)) {
//     disableSubmitButton(buttonElemment, inactiveButtonClass)
//   }
//   else {
//     enableSubmitButton(buttonElemment, inactiveButtonClass)
//   }
// }

//   const setEventListners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
//     formElement.addEventListener('submit', event => {
//       event.preventDefault()
//     })


//   const inputList = Array.from(formElement.querySelectorAll(inputSelector))

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, inputErrorClass, errorClass)
//       toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass)
//     })
//   })
//   toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass)
// }

// function enableValidation(objectsOfValidation) {
//   const formList = document.querySelectorAll('.popup__form')
//   formList.forEach(formElement => {
//     setEventListners(formElement, objectsOfValidation.inputSelector, objectsOfValidation.submitButtonSelector, objectsOfValidation.inactiveButtonClass, objectsOfValidation.inputErrorClass, objectsOfValidation.errorClass)
//   })
// }




//класс

export class FormValidator {
  constructor () {
    this._formSelector = objectsOfValidation.formSelector
    this._inputSelector = objectsOfValidation.inputSelector
    this._submitButtonSelector = objectsOfValidation.submitButtonSelector
    this._inactiveButtonClass = objectsOfValidation.inactiveButtonClass
    this._inputErrorClass = objectsOfValidation.inputErrorClass
    this._errorClass = objectsOfValidation.errorClass
    
  }
  _showInputError(inputElement, error){
    inputElement.classList.add(this._inputErrorClass)
    error.textContent = inputElement.validationMessage
    error.classList.add(this._errorClass)
  }
  _hideInputError(inputElement, error){
    inputElement.classList.remove(this._inputErrorClass)
    error.classList.remove(this._errorClass)
    error.textContent = ""
  }

  _checkInputValidity(formElement, inputElement){
    const error = formElement.querySelector(`.popup__${inputElement.id}-error`)
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, error, this._inputErrorClass, this._errorClass)
    } 
    else {
      this._hideInputError(inputElement, error, this._inputErrorClass, this._errorClass)
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid
    })
  }

  _disableSubmitButton(buttonElemment){
    buttonElemment.classList.add(this._inactiveButtonClass)
    buttonElemment.disabled = true
  }

  _enableSubmitButton(buttonElemment){
    buttonElemment.classList.remove(this._inactiveButtonClass)
    buttonElemment.disabled = false
  }

  _toggleButtonState(formElement, inputList){
    const buttonElemment = formElement.querySelector(this._submitButtonSelector)
    if (this._hasInvalidInput(inputList)) {
      this._disableSubmitButton(buttonElemment, this._inactiveButtonClass)
    }
    else {
      this._enableSubmitButton(buttonElemment, this._inactiveButtonClass)
    }
  }


  _setEventListners = (formElement, errorClass) => {
    formElement.addEventListener('submit', event => {
      event.preventDefault()
    })


    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector))

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, this._inputErrorClass, errorClass)
        this._toggleButtonState(formElement, inputList, this._submitButtonSelector, this._inactiveButtonClass)
      })
    })
    this._toggleButtonState(formElement, inputList, this._submitButtonSelector, this._inactiveButtonClass)
  }

  enableValidation() {
    const formList = document.querySelectorAll('.popup__form')
    formList.forEach(formElement => {
      this._setEventListners(formElement, this._inputSelector, this._submitButtonSelector, this._inactiveButtonClass, this._inputErrorClass, this._errorClass)
    })
  }
  
}


