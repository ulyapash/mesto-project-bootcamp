import './pages/index.css';

const editProfileButton = document.querySelector('.profile__edit-button')
const popupEdit = document.querySelector('.popup-edit')
const popupAdd = document.querySelector('.popup-add')
const closeEditButton = document.querySelector('.popup-edit__close-button')
const closeAddButton = document.querySelector('.popup-add__close-button')
const formEditElement = document.querySelector('.edit-form')
const formCreateElement = document.querySelector('.create-form')
const nameInput = document.querySelector('.form__input_name')
const jobInput = document.querySelector('.form__input_job')
const addProfileButton = document.querySelector('.profile__add-button')
const saveButton = document.querySelector('.form__save-button')
const cards = document.querySelector('.cards')
const createButton = document.querySelector('.form__create-button');
const placeNameInput = document.querySelector('.form__input_place-name');
const placeLinkInput = document.querySelector('.form__input_place-link');
const cardTemplate = document.querySelector('#card').content;
const popupPhoto= document.querySelector('.popup-photo');
const popupPhotoImage = popupPhoto.querySelector('.popup-photo__image');
const popupPhotoFigurecaption = popupPhoto.querySelector('.popup-photo__figurecaption');
const popupPhotoClosebutton = popupPhoto.querySelector('.popup-photo__closebutton');
const closeButtons = document.querySelectorAll('.popup__close-button')
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popups = document.querySelectorAll('.popup');
const popupOverlays = document.querySelectorAll('.popup__overlay');

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

function disableButton(buttonElement, config){
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

  // toggleButtonState(submitButtonElement, false, config);
  [...inputList].forEach(function(inputElement){
    inputElement.addEventListener('input', () =>{ 
      checkInputValidity(inputElement, formElement, config);
      toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
    })
  })
  submitButtonElement.addEventListener('click', () => console.log('go'))
}

function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector  );
  [...formList].forEach(function(formElement){
    setEventListener(formElement, config)
  })
}


const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass:'form__save-button_inactive',
  errorInputClass:'form__input_type_error'
}

enableValidation(config)


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];





function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  console.log(popup);
  popup.classList.remove('popup_opened')
}


editProfileButton.addEventListener('click', () => {
  openPopup(popupEdit)
});
// closeEditButton.addEventListener('click', () => closePopup(popupEdit)) ;


addProfileButton.addEventListener('click',() => openPopup(popupAdd));
// closeAddButton.addEventListener('click', () => closePopup(popupAdd));



function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEdit);
}

formEditElement.addEventListener('submit', handleProfileFormSubmit); 

function handleCreateCard(evt) {
  evt.preventDefault(); 
  cards.prepend(createCard(placeNameInput.value, placeLinkInput.value));
  closePopup(popupAdd);
  evt.target.reset();
}

formCreateElement.addEventListener('submit', handleCreateCard);



function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardLike = cardElement.querySelector('.card__like');
  const cardTrash = cardElement.querySelector('.card__trash');
  const cardImage = cardElement.querySelector('.card__image');

  cardImage.addEventListener('click', () => {
    openPopup(popupPhoto);
    popupPhotoImage.src = link;
    popupPhotoImage.alt = name;
    popupPhotoFigurecaption.textContent = name;
    // popupPhotoClosebutton.addEventListener('click', () => closePopup(popupPhoto));
  });
  

  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector('.card__title').textContent = name;
  cardLike.addEventListener('click', function() {
    cardLike.classList.add('card__like-active')
  })
  cardTrash.addEventListener('click', function() {
    cardElement.remove()
  })

  return cardElement;
}


initialCards.forEach(function(card){
  cards.prepend(createCard(card.name, card.link)); 
})

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupOverlays.forEach(overlay => overlay.addEventListener('click', (evt) => closePopup(evt.target.closest('.popup'))));

document.addEventListener('keydown', evt => {
  if (evt.code === "Escape") {
    popups.forEach(popup => closePopup(popup))
  }
})
