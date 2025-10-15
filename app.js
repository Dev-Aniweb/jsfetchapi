const API_URL = 'https://randomuser.me/api/?results=100';
const container = document.getElementById('card-container');

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const users = data.results;
    users.forEach(user => createCard(user));
  })
  .catch(err => {
    console.error('Error fetching users:', err);
    container.innerHTML = '<p>Failed to load users. Please try again later.</p>';
  });

function createCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${user.picture.medium}" alt="${user.name.first}">
    <h3>${user.name.first} ${user.name.last}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
  `;

  container.appendChild(card);
}
