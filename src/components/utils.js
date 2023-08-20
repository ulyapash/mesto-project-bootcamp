export const editProfileButton = document.querySelector('.profile__edit-button')
export const popupEdit = document.querySelector('.popup-edit')
export const popupAdd = document.querySelector('.popup-add')
export const closeEditButton = document.querySelector('.popup-edit__close-button')
export const closeAddButton = document.querySelector('.popup-add__close-button')
export const formEditElement = document.querySelector('.edit-form')
export const formCreateElement = document.querySelector('.create-form')
export const nameInput = document.querySelector('.form__input_name')
export const jobInput = document.querySelector('.form__input_job')
export const addProfileButton = document.querySelector('.profile__add-button')
export const saveButton = document.querySelector('.form__save-button')
export const cards = document.querySelector('.cards')
export const createButton = document.querySelector('.form__create-button');
export const placeNameInput = document.querySelector('.form__input_place-name');
export const placeLinkInput = document.querySelector('.form__input_place-link');
export const cardTemplate = document.querySelector('#card').content;
export const popupPhoto= document.querySelector('.popup-photo');
export const popupPhotoImage = popupPhoto.querySelector('.popup-photo__image');
export const popupPhotoFigurecaption = popupPhoto.querySelector('.popup-photo__figurecaption');
export const popupPhotoClosebutton = popupPhoto.querySelector('.popup-photo__closebutton');
export const closeButtons = document.querySelectorAll('.popup__close-button')
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const popups = document.querySelectorAll('.popup');
export const popupOverlays = document.querySelectorAll('.popup__overlay');


export const initialCards = [
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


export const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass:'form__save-button_inactive',
  errorInputClass:'form__input_type_error'
}

