const AUTHORIZATION = 'd0f4581c-dee3-45f2-bae1-af1ee0aa9c39';
const BASE_URL = 'https://mesto.nomoreparties.co/v1/wbf-cohort-11';

export function getUserData() {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      AUTHORIZATION,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getCards() {
  return fetch(`${BASE_URL}/cards`, {
    headers: {
      AUTHORIZATION,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    })
}