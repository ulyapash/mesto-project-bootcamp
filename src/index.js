import './pages/index.css';
import { openPopup, closePopup } from "./components/modal";
import { editProfileButton, addProfileButton, popupEdit, popupAdd, profileName, profileDescription, formCreateElement, formEditElement, config, initialCards, nameInput, jobInput, profilePhoto } from "./components/utils";
import { enableValidation, disableButton } from "./components/validate";
import { initCards } from './components/card';
import { getUserData } from './components/api';

getUserData().then(((data) => {
  profileName.textContent = data.name;
  profileDescription.textContent = data.about;
  profilePhoto.textContent = data.avatar;
}));

formCreateElement.addEventListener('submit', handleCreateCard);
formEditElement.addEventListener('submit', handleProfileFormSubmit); 

editProfileButton.addEventListener('click', () => {
  openPopup(popupEdit)
});

addProfileButton.addEventListener('click',() => openPopup(popupAdd));

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleCreateCard(evt) {
  evt.preventDefault(); 
  cards.prepend(createCard(placeNameInput.value, placeLinkInput.value));
  closePopup(popupAdd);
  evt.target.reset();
  disableButton(evt.submitter, config);
}

initCards(initialCards);
enableValidation(config);