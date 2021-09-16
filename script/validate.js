const objectsOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__name-error_active',
  errorClass: 'popup__error-descr'
}
const showInputError = (formSelector, inputSelector, inputErrorClass, errorElement, errorClass) => {
  console.log(errorElement)
  const error = formSelector.querySelector(`.popup__${inputSelector.id}-error`);
  inputSelector.classList.add(objectsOfValidation.inputErrorClass)
  error.textContent = inputSelector.validationMessage
  error.classList.add(objectsOfValidation.errorClass)
}

const hideInputError = (formSelector, inputSelector, errorElement, inputErrorClass, errorClass) => {
  const error = formSelector.querySelector(`.popup__${inputSelector.id}-error`);
  inputSelector.classList.remove(objectsOfValidation.inputErrorClass)
  error.classList.remove(objectsOfValidation.errorClass)
  error.textContent= ''
}

const checkInputValidity = (formSelector, inputSelector, inputErrorClass, errorClass) => {
  const errorElement = formSelector.querySelector('.popup__name-error')
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputErrorClass, errorElement, errorClass)
  } else {
    hideInputError(formSelector, inputSelector, inputErrorClass, errorElement, errorClass)
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputSelector => {
    return !inputSelector.validity.valid
  })
}

const disableSubmitButton = (buttonElemment) => {
  buttonElemment.classList.add(objectsOfValidation.inactiveButtonClass)
  buttonElemment.disabled = true
}


const enableSubmitButton = (buttonElemment) => {
  buttonElemment.classList.remove(objectsOfValidation.inactiveButtonClass)
  buttonElemment.disabled = false
}

const toggleButtonState = (formSelector, inputList, submitButtonSelector, inactiveButtonClass) => {
  const buttonElemment = formSelector.querySelector(objectsOfValidation.submitButtonSelector)
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElemment, inactiveButtonClass)
  }
  else {
    enableSubmitButton(buttonElemment, inactiveButtonClass)
  }
}

// const setEventListners = (formSelector, inputSelector, submitButtonSelector, inputErrorClass, errorClass) => {
//   formSelector.addEventListener('submit', (event) =>{
//     event.preventDefault()
//   })
//   const inputList = Array.from(formSelector.querySelectorAll(inputSelector))
//   inputList.forEach(inputSelector =>{
//       inputSelector.addEventListener('input', () => {
//         checkInputValidity(formSelector, inputSelector, errorElement, inputErrorClass, errorClass)
//         toggleButtonState(formSelector, inputList, submitButtonSelector, inactiveButtonClass)
//       })
//   })
//   console.log(2)
// }

const setEventListners = (formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
  const inputList = Array.from(formSelector.querySelectorAll(objectsOfValidation.inputSelector))
  inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        const errorElement = formSelector.querySelector('.popup__name-error')
        checkInputValidity(formSelector, inputSelector, errorElement, inputErrorClass, errorClass)
        toggleButtonState(formSelector, inputList, submitButtonSelector, inactiveButtonClass)

      })
    console.log(inputList)
  })
  console.log(2)
}


// const enableValidation = (config) => {
//   const formList = document.querySelectorAll(config.formSelector)
//   formList.forEach(formSelector => {
//     setEventListners(formSelector, config.submitButtonSelector, config.inputErrorClass, config.inputSelector, config.errorClass, config.inactiveButtonClass)
//   })
//   console.log(1)
// }

function enableValidation(formSelector, submitButtonSelector,inputErrorClass, inputSelector, errorClass, inactiveButtonClass) {
  const formList = document.querySelectorAll(objectsOfValidation.formSelector)
  formList.forEach(formSelector => {
    setEventListners(formSelector, submitButtonSelector, inputErrorClass, inputSelector, errorClass, inactiveButtonClass)
  })
  console.log(1)
}

// вызов функции валидации
enableValidation(objectsOfValidation);
