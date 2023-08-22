function showError(inputElement, errorElement, config) {
  errorElement.textContent =  inputElement.validationMessage; 
  inputElement.classList.add(config.erroeInputClass)
};

function hideError(inputElement, errorElement, config) {
  errorElement.textContent =  inputElement.validationMessage; 
  inputElement.classList.remove(config.erroeInputClass)
  
}; 


function checkInputValidity(inputElement, formElement, config){
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!isInputValid){
    showError(inputElement, errorElement, config )
  } else {
    hideError(inputElement, errorElement, config )
  }
}

export function disableButton(buttonElement, config){
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass)
}

function enableButton(buttonElement, config){
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass)
}

function toggleButtonState(buttonElement, isActive, config ){
  if(!isActive) {
    disableButton(buttonElement, config)
  }else{
    enableButton(buttonElement, config)
  }
}

function setEventListener(formElement, config ){
  const inputList = formElement.querySelectorAll(config.inputSelector); 
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(submitButtonElement, false, config);
  inputList.forEach(function(inputElement){
    inputElement.addEventListener('input', () =>{ 
      checkInputValidity(inputElement, formElement, config);
      toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
    })
  })
  submitButtonElement.addEventListener('click', () => console.log('go'))
}

export function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector  );
  formList.forEach(function(formElement){
    setEventListener(formElement, config)
  })
}



