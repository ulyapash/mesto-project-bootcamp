import './pages/index.css';
import { openPopup, closePopup } from "./components/modal";
import { editProfileButton, addProfileButton, popupEdit, popupAdd, profileName, profileDescription, formCreateElement, formEditElement, config, nameInput, jobInput, profilePhoto, placeNameInput, placeLinkInput, cards } from "./components/utils";
import { enableValidation, disableButton } from "./components/validate";
import { initCards, createCard } from './components/card';
import { addCard, getCards, getUserData, updateUserData } from './components/api';

getUserData().then(((data) => {
  profileName.textContent = data.name;
  profileDescription.textContent = data.about;
  profilePhoto.textContent = data.avatar;
}));

getCards().then((cards) => {
  initCards(cards);
})

formCreateElement.addEventListener('submit', handleCreateCard);
formEditElement.addEventListener('submit', handleProfileFormSubmit); 

editProfileButton.addEventListener('click', () => {
  openPopup(popupEdit)
});

addProfileButton.addEventListener('click',() => openPopup(popupAdd));

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 

  updateUserData(nameInput.value, jobInput.value).then((data) => {
    profileName.textContent = data.name;
    profileDescription.textContent = data.about;
  });

  closePopup(popupEdit);
}

function handleCreateCard(evt) {
  evt.preventDefault();
  addCard(placeNameInput.value, placeLinkInput.value).then((data) => {
    cards.prepend(createCard(data.name, data.link));
    closePopup(popupAdd);
    evt.target.reset();
    disableButton(evt.submitter, config);
  });
}

enableValidation(config);