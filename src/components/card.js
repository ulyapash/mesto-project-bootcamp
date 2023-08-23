import { cards, popupAdd, popupPhoto, cardTemplate, popupPhotoImage, popupPhotoFigurecaption } from "./utils";
import { closePopup, openPopup } from "./modal";
import { deleteCard, likeCard, unlikeCard } from "./api";


export function createCard(card) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardLike = cardElement.querySelector('.card__like');
  const cardTrash = cardElement.querySelector('.card__trash');
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikes = cardElement.querySelector('.card__like-count');
  cardImage.addEventListener('click', () => {
    openPopup(popupPhoto);
    popupPhotoImage.src = card.link;
    popupPhotoImage.alt = card.name;
    popupPhotoFigurecaption.textContent = card.name;
  });
   
  cardLikes.textContent = card.likes.length;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardLike.addEventListener('click', function() {
    if (cardLike.classList.contains('card__like-active')) {
      unlikeCard(card._id).then((updateCard) => {
        cardLike.classList.toggle('card__like-active');
        cardLikes.textContent = updateCard.likes.length;
      })
    } else {
      likeCard(cardId).then((updateCard) => {
        cardLike.classList.toggle('card__like-active');
        cardLikes.textContent = updateCard.likes.length;
      })
    }
  })

  if (card.owner._id === localStorage.getItem('id')) {
    cardTrash.addEventListener('click', function() {
      removeCard(card._id, cardElement);
    })
  }
  else {
    cardTrash.remove();
  }

  return cardElement;
}

export function initCards(initialCards) {
  initialCards.forEach(function(card){
    cards.prepend(createCard(card)); 
  })
}

function removeCard(cardId, cardElement) {
  deleteCard(cardId).then(() => {
    cardElement.remove();
  })
}