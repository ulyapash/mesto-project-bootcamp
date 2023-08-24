import './pages/index.css';
import { openPopup, closePopup } from "./components/modal";
import { editProfileButton, addProfileButton, popupEdit, popupAdd, popupAvatar, profileName, profileDescription, formCreateElement, formEditElement, config, nameInput, jobInput, profilePhoto, placeNameInput, avatarInput, cards, avatarEditButton, formAvatarElement, placeLinkInput, profileAvatar, saveButton } from "./components/utils";
import { enableValidation, disableButton } from "./components/validate";
import { initCards, createCard } from './components/card';
import { addCard, getCards, getUserData, updateUserData, updateAvatar } from './components/api';

Promise.all([getUserData(), getCards()])
  .then((values) => {
    const userData = values[0];
    const cards = values[1];

    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profilePhoto.src = userData.avatar;
    localStorage.setItem('id', userData._id);

    initCards(cards);
  })
  .catch((error) => {
    console.error(error);
  });

formCreateElement.addEventListener('submit', handleCreateCard);
formEditElement.addEventListener('submit', handleProfileFormSubmit); 
formAvatarElement.addEventListener('submit', handleProfileAvatarSubmit);

editProfileButton.addEventListener('click', () => {
  openPopup(popupEdit);

  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

addProfileButton.addEventListener('click',() => openPopup(popupAdd));

avatarEditButton.addEventListener('click', () => openPopup(popupAvatar));

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 

  evt.submitter.textContent = 'Сохранение...';


  updateUserData(nameInput.value, jobInput.value)
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      closePopup(popupEdit);

      evt.submitter.textContent = 'Сохранить';
    });
}

function handleCreateCard(evt) {
  evt.preventDefault();
  
  evt.submitter.textContent = 'Сохранение...';
  
  addCard(placeNameInput.value, placeLinkInput.value)
    .then((card) => {
      cards.prepend(createCard(card));
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
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

  updateAvatar(avatarInput.value)
    .then((data) => {
        profilePhoto.src = data.avatar;
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      closePopup(popupAvatar);
      evt.target.reset();

      disableButton(evt.submitter, config);
      evt.submitter.textContent = 'Сохранить';
    })
}

