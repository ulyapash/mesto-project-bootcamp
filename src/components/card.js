import { cards, popupAdd, popupPhoto, cardTemplate, popupImage, popupFigurecaption, popupPhotoOverlay } from "./utils";
import { closePopup, openPopup } from "./modal";
import { deleteCard, likeCard, unlikeCard } from "./api";


export function createCard(card) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardLike = cardElement.querySelector('.card__like');
  const cardTrash = cardElement.querySelector('.card__trash');
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikes = cardElement.querySelector('.card__like-count');
  cardImage.addEventListener('click', (evt) => {
    openPopup(popupPhoto);

    popupPhotoOverlay.style.opacity = 0.9;

    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupFigurecaption.textContent = card.name;
  });
   
  cardLikes.textContent = card.likes.length;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardLike.addEventListener('click', function() {
    if (cardLike.classList.contains('card__like-active')) {
      unlikeCard(card._id)
        .then((updateCard) => {
          cardLike.classList.toggle('card__like-active');
          cardLikes.textContent = updateCard.likes.length;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      likeCard(card._id)
        .then((updateCard) => {
          cardLike.classList.toggle('card__like-active');
          cardLikes.textContent = updateCard.likes.length;
        })
        .catch((error) => {
          console.error(error);
        });
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
    cards.append(createCard(card)); 
  })
}

function removeCard(cardId, cardElement) {
  deleteCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((error) => {
      console.error(error);
    })
}