import './pages/index.css';
import { openPopup, closePopup } from "./components/modal";
import { editProfileButton, addProfileButton, popupEdit, popupAdd, popupAvatar, profileName, profileDescription, formCreateElement, formEditElement, config, nameInput, jobInput, profilePhoto, placeNameInput, avatarInput, cards, avatarEditButton, formAvatarElement, placeLinkInput, profileAvatar, saveButton } from "./components/utils";
import { enableValidation, disableButton } from "./components/validate";
import { initCards, createCard } from './components/card';
import { addCard, getCards, getUserData, updateUserData, updateAvatar } from './components/api';

getUserData().then(((data) => {
  profileName.textContent = data.name;
  profileDescription.textContent = data.about;
  profilePhoto.src = data.avatar;
  localStorage.setItem('id', data._id);
}));

getCards().then((cards) => {
  initCards(cards);
})

formCreateElement.addEventListener('submit', handleCreateCard);
formEditElement.addEventListener('submit', handleProfileFormSubmit); 
formAvatarElement.addEventListener('submit', handleProfileAvatarSubmit);

editProfileButton.addEventListener('click', () => {
  openPopup(popupEdit)
});

addProfileButton.addEventListener('click',() => openPopup(popupAdd));

avatarEditButton.addEventListener('click', () => openPopup(popupAvatar));

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 

  evt.submitter.textContent = 'Сохранение...';


  updateUserData(nameInput.value, jobInput.value).then((data) => {
    profileName.textContent = data.name;
    profileDescription.textContent = data.about;

    closePopup(popupEdit);

    evt.submitter.textContent = 'Сохранить';
  });
}

function handleCreateCard(evt) {
  evt.preventDefault();
  
  evt.submitter.textContent = 'Сохранение...';
  
  addCard(placeNameInput.value, placeLinkInput.value).then((card) => {
    cards.prepend(createCard(card));
    closePopup(popupAdd);
    evt.target.reset();
    
    disableButton(evt.submitter, config);
    evt.submitter.textContent = 'Создать';
  });
}

enableValidation(config);

function handleProfileAvatarSubmit(evt) {
  evt.preventDefault();

  evt.submitter.textContent = 'Сохранение...';

  updateAvatar(avatarInput.value).then((data) => {
      profilePhoto.src = data.avatar;
      closePopup(popupAvatar);
      evt.target.reset();

      disableButton(evt.submitter, config);
      evt.submitter.textContent = 'Сохранить';
  })
}

