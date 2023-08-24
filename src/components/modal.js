import { popups, closeButtons, popupOverlays} from "./utils";

function closeByEsc(evt) {
  if (evt.code === "Escape") {
    popups.forEach(popup => closePopup(popup))
  }
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupOverlays.forEach(overlay => overlay.addEventListener('click', (evt) => closePopup(evt.target.closest('.popup'))));