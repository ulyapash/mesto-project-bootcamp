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
 

function showError(inputElement, errorElement) {
  errorElement.textContent =  inputElement.validationMessage; 
  inputElement.classList.add('form__input_type_error')
};

function hideError(inputElement, errorElement) {
  errorElement.textContent =  inputElement.validationMessage; 
  inputElement.classList.remove('form__input_type_error')
  
}; 


function checkInputValidity(inputElement, formElement){
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!isInputValid){
    showError(inputElement, errorElement )
  } else {
    hideError(inputElement, errorElement)
  }
}

function disableButton(buttonElement){
  buttonElement.disabled =  "disabled";
  buttonElement.classList.add('form__save-button_inactive')
}

function enableButton(buttonElement){
  buttonElement.disabled =  "false";
  buttonElement.classList.remove('form__save-button_inactive')
}

function toggleButtonState(buttonElement, isActive){
  if(!isActive) {
    disableButton(buttonElement)
  }else{
    enableButton(buttonElement)
  }
}



function setEventListener(formElement){
  const inputList = formElement.querySelectorAll('.form__input'); 
  const submitbuttonElement = formElement.querySelector('.form__save-button');

  toggleButtonState(submitbuttonElement, false);
  [...inputList].forEach(function(inputElement){
    inputElement.addEventListener('input', () =>{ 
      checkInputValidity(inputElement, formElement);
      toggleButtonState(submitbuttonElement, formElement.checkValidity());
    })
  })
  formElement.addEventListener("submit", (evt) => {
     evt.preventDefault()
  })
}

function enableValidation() {
  const formList = document.querySelectorAll('.form');
  [...formList].forEach(function(formElement){
    setEventListener(formElement)
  })
}

enableValidation()





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








