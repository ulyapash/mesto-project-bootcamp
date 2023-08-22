const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-11',
  headers: {
    authorization: 'd0f4581c-dee3-45f2-bae1-af1ee0aa9c39',
    'Content-Type': 'application/json'
  }
}

export function getUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
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
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
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
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
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
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
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

export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
}
