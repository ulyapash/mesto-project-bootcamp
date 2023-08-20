import { popups, closeButtons, popupOverlays} from "./utils";

export function openPopup(popup) {
  popup.classList.add('popup_opened')
}

export function closePopup(popup) {
  console.log(popup);
  popup.classList.remove('popup_opened')
}

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