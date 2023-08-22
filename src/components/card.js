import { cards, popupAdd, popupPhoto, cardTemplate, placeNameInput, placeLinkInput, popupPhotoImage, popupPhotoFigurecaption } from "./utils";
import { closePopup, openPopup } from "./modal";
import { deleteCard } from "./api";

export function createCard(cardId, name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardLike = cardElement.querySelector('.card__like');
  const cardTrash = cardElement.querySelector('.card__trash');
  const cardImage = cardElement.querySelector('.card__image');

  cardImage.addEventListener('click', () => {
    openPopup(popupPhoto);
    popupPhotoImage.src = link;
    popupPhotoImage.alt = name;
    popupPhotoFigurecaption.textContent = name;
  });
  

  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector('.card__title').textContent = name;
  cardLike.addEventListener('click', function() {
    cardLike.classList.toggle('card__like-active')
  })
  cardTrash.addEventListener('click', function() {
    removeCard(cardId, cardElement);
  })

  return cardElement;
}

export function initCards(initialCards) {
  initialCards.forEach(function(card){
    cards.prepend(createCard(card._id, card.name, card.link)); 
  })
}

function removeCard(cardId, cardElement) {
  deleteCard(cardId).then(() => {
    cardElement.remove();
  })
}