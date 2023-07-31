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

editProfileButton.addEventListener('click', () => openPopup(popupEdit));
closeEditButton.addEventListener('click', () => closePopup(popupEdit)) ;


addProfileButton.addEventListener('click',() => openPopup(popupAdd));
closeAddButton.addEventListener('click', () => closePopup(popupAdd));




function handleFormSubmit(evt) {
  evt.preventDefault(); 

  document.querySelector('.profile__name').textContent = nameInput.value;
  document.querySelector('.profile__description').textContent = jobInput.value;
  closePopup(popupEdit);
}

formEditElement.addEventListener('submit', handleFormSubmit); 

function handleCreateCard(evt) {
  evt.preventDefault(); 

  cards.prepend(createCard(placeNameInput.value, placeLinkInput.value));
  closePopup(popupAdd);
}

formCreateElement.addEventListener('submit', handleCreateCard);


 


function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardLike = cardElement.querySelector('.card__like');
  const cardTrash = cardElement.querySelector('.card__trash');

  cardElement.querySelector('.card__image').addEventListener('click', () => {
    openPopup(popupPhoto);
    popupPhotoImage.src = link;
    popupPhotoImage.alt = name;
    popupPhotoFigurecaption.textContent = name;
    popupPhotoClosebutton.addEventListener('click', () => closePopup(popupPhoto));
  });
  

  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
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



const popupPhoto= document.querySelector('.popup-photo');
const popupPhotoImage = popupPhoto.querySelector('.popup-photo__image');
const popupPhotoFigurecaption = popupPhoto.querySelector('.popup-photo__figurecaption');
const popupPhotoClosebutton = popupPhoto.querySelector('.popup-photo__closebutton');







