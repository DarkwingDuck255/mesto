const objectsOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__name-error_active',
  errorClass: 'popup__error-descr'
}
const showInputError = (formSelector, inputSelector, inputErrorClass, errorElement, errorClass) => {
  const error = formSelector.querySelector(`.popup__${inputSelector.id}-error`);
  inputSelector.classList.add('popup__name-error_active')
  error.textContent = inputSelector.validationMessage
  error.classList.add('popup__error-descr')
}

const hideInputError = (formSelector, inputSelector, errorElement, inputErrorClass, errorClass) => {
  const error = formSelector.querySelector(`.popup__${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__name-error_active')
  error.classList.remove('popup__error-descr')
  error.textContent= ''
}

const checkInputValidity = (formSelector, inputSelector, inputErrorClass, errorClass) => {
  
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputErrorClass, errorClass)
  } else {
    hideInputError(formSelector, inputSelector, inputErrorClass,  errorClass)
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputSelector => {
    return !inputSelector.validity.valid
  })
}

const hasNoInputValues = function (inputList) {
  return inputList.every(inputElement => {
    return inputElement.value.length === 0
  })
}

const disableSubmitButton = (buttonElemment) => {
  buttonElemment.classList.add('popup__submit_inactive')
  buttonElemment.disabled = true
}


const enableSubmitButton = (buttonElemment) => {
  buttonElemment.classList.remove('popup__submit_inactive')
  buttonElemment.disabled = false
}


const toggleButtonState = (formSelector, inputList, submitButtonSelector, inactiveButtonClass) => {
  const buttonElemment = formSelector.querySelector('.popup__submit')
  if (hasInvalidInput(inputList) || hasNoInputValues(inputList)) {
    disableSubmitButton(buttonElemment, inactiveButtonClass)
  }
  else {
    enableSubmitButton(buttonElemment, inactiveButtonClass)
  }
}

const setEventListners = (formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {

  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'))
  toggleButtonState(formSelector, inputList, submitButtonSelector, inactiveButtonClass)
  inputList.forEach((inputElement) => {
    const addCardPopup = document.querySelector('#add-image-popup')
    addCardPopup.addEventListener('click', () => {
        toggleButtonState(formSelector, inputList, submitButtonSelector, inactiveButtonClass)
    })
    inputElement.addEventListener('input', () => {
      const errorElement = formSelector.querySelector('.popup__name-error')
      checkInputValidity(formSelector, inputElement, errorElement, inputErrorClass, errorClass)
      toggleButtonState(formSelector, inputList, submitButtonSelector, inactiveButtonClass)

    })
  })
}

function enableValidation(formSelector, submitButtonSelector,inputErrorClass, inputSelector, errorClass, inactiveButtonClass) {
  const formList = document.querySelectorAll('.popup__form')
  formList.forEach(formSelector => {
    setEventListners(formSelector, submitButtonSelector, inputErrorClass, inputSelector, errorClass, inactiveButtonClass)
  })
}

// вызов функции валидации
enableValidation(objectsOfValidation);
