import './pages/index.css';
import { openPopup, closePopup } from "./components/modal";
import { popups, editProfileButton, addProfileButton, popupEdit, popupAdd, profileName, profileDescription, formCreateElement, formEditElement, closeButtons, popupOverlays, config, initialCards, nameInput, jobInput } from "./components/utils";
import { enableValidation } from "./components/validate";
import { initCards, handleCreateCard } from './components/card';


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


popupOverlays.forEach(overlay => overlay.addEventListener('click', (evt) => closePopup(evt.target.closest('.popup'))));

document.addEventListener('keydown', evt => {
  if (evt.code === "Escape") {
    popups.forEach(popup => closePopup(popup))
  }
})

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


initCards(initialCards);
enableValidation(config);