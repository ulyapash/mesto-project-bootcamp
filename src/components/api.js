const AUTHORIZATION = 'd0f4581c-dee3-45f2-bae1-af1ee0aa9c39';
const BASE_URL = 'https://mesto.nomoreparties.co/v1/wbf-cohort-11';

export function getUserData() {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: AUTHORIZATION,
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

export function updateUserData(name, about) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      AUTHORIZATION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
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

export function addCard(name, link) {
  return fetch(`${BASE_URL}/cards`, {
    method: 'POST',
    headers: {
      AUTHORIZATION,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      link: link
    })
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
