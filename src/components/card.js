import { cards, popupAdd, popupPhoto, cardTemplate, placeNameInput, placeLinkInput, popupPhotoImage, popupPhotoFigurecaption } from "./utils";
import { closePopup, openPopup } from "./modal";


export function createCard(name, link) {
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
    cardElement.remove()
  })

  return cardElement;
}

export function initCards(initialCards) {
  initialCards.forEach(function(card){
    cards.prepend(createCard(card.name, card.link)); 
  })
}