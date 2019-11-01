/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
  // axios.get('https://api.github.com/users/cstewart94')
  // .then(response => {
  //   console.log(response);
  //   myCard(response);
  //   cards.appendChild(myCard(response.data));
  // })
  // .catch(error => {
  //   console.log('The data was not returned', error);
  // })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const allCards = document.querySelector('.cards');

axios.get('https://api.github.com/users/cstewart94')
.then(response => {
  console.log(response);
  const newCards = myCard(response.data);
  allCards.appendChild(newCards);
})
.catch(error => {
  console.log('The data was not returned', error);
})


function myCard(gitUrl){
  const newCard = document.createElement('div');
  const newImage = document.createElement('img');
  const hideContainer = document.createElement('div');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUsername = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const profileLink = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  newCard.appendChild(newImage);
  newCard.appendChild(hideContainer);
  hideContainer.appendChild(cardName);
  hideContainer.appendChild(cardUsername);
  hideContainer.appendChild(cardLocation);
  hideContainer.appendChild(cardProfile);
  hideContainer.appendChild(cardFollowers);
  hideContainer.appendChild(cardFollowing);
  hideContainer.appendChild(cardBio);
  //cardProfile.appendChild(profileLink);

  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');
  hideContainer.classList.add('panel-content');
  profileLink.setAttribute('href', gitUrl.html_url)

  newImage.src = gitUrl.avatar_url;
  cardName.textContent = gitUrl.name;
  cardUsername.textContent = gitUrl.login;
  cardLocation.textContent = `Location: ${gitUrl.location}`;
  cardProfile.textContent = 'Profile:';
  cardProfile.appendChild(profileLink);
  profileLink.textContent = gitUrl.html_url;
  cardFollowers.textContent = `Followers: ${gitUrl.followers}`;
  cardFollowing.textContent = `Following: ${gitUrl.following}`;
  cardBio.textContent = gitUrl.bio;
  
  newImage.addEventListener('mouseenter', () => {
    //1. toggle the hide-button on BOTH buttons
    hideContainer.classList.toggle('toggle-on');
    newCard.classList.toggle('toggle-big');
  })
  newImage.addEventListener('mouseleave', () => {
    hideContainer.classList.toggle('toggle-on');
    newCard.classList.toggle('toggle-big');
  })

  return newCard;
}


const followersArray = ['squashgray', 'lyndsiWilliams', 'ArianaShackelford', 'spencer-mcguire', 'NickAlicaya', 'MarFan', 'bseverino', 'phil-mac', 'leachcoding', 'WalterTheCodeGuy', 'crutledgedev', 'msearles25', 'ryankayne', 'RobertDGordon', 'Courtland-Bourgeois'];
followersArray.forEach(e => {
  axios.get(`https://api.github.com/users/${e}`).then(response => {
    console.log(response.data);
    allCards.appendChild(myCard(response.data));
  })
  .catch(error => {
    console.log('The data was not returned', error);
  })
})
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/