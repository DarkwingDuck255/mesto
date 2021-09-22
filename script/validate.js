const objectsOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__name-error_active',
  errorClass: 'popup__error-descr'
}

const showInputError = (error, inputElement, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass)
  error.textContent = inputElement.validationMessage
  error.classList.add(errorClass)
}

const hideInputError = (error, inputElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass)
  error.classList.remove(errorClass)
  error.textContent = ""
}

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  const error = formElement.querySelector(`.popup__${inputElement.id}-error`)
  if (!inputElement.validity.valid) {
    showInputError(error, inputElement, inputErrorClass, errorClass)
  } else {
    hideInputError(error, inputElement, inputErrorClass, errorClass)
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid
  })
}

const disableSubmitButton = (buttonElemment, inactiveButtonClass) => {
  buttonElemment.classList.add(inactiveButtonClass)
  buttonElemment.disabled = true
}


const enableSubmitButton = (buttonElemment, inactiveButtonClass) => {
  buttonElemment.classList.remove(inactiveButtonClass)
  buttonElemment.disabled = false
}


const toggleButtonState = (formElement, inputList, submitButtonSelector, inactiveButtonClass) => {
  const buttonElemment = formElement.querySelector(submitButtonSelector)
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElemment, inactiveButtonClass)
  }
  else {
    enableSubmitButton(buttonElemment, inactiveButtonClass)
  }
}

  const setEventListners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    formElement.addEventListener('submit', event => {
      event.preventDefault()
    })
  

  const inputList = Array.from(formElement.querySelectorAll(inputSelector))

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass)
      toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass)
    })
  })
  toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass)
}

function enableValidation(objectsOfValidation) {
  const formList = document.querySelectorAll('.popup__form')
  formList.forEach(formElement => {
    setEventListners(formElement, objectsOfValidation.inputSelector, objectsOfValidation.submitButtonSelector, objectsOfValidation.inactiveButtonClass, objectsOfValidation.inputErrorClass, objectsOfValidation.errorClass)
  })
}

// вызов функции валидации
enableValidation(objectsOfValidation);