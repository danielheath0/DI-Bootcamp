// //Exercise 1

// const getGif = () => {
//   fetch(
//     "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
//   )
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Mission failed");
//       }
//     })
//     .then((obj) => {
//       console.log(obj);
//     })
//     .catch((error) => console.log(`${error}`));
// };

// getGif()

// //Exercise 2

// const getGifSun = () => {
//   fetch(
//     "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"
//   )
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Response not ok :(");
//       }
//     })
//     .then((obj) => {
//       console.log(obj);
//     })
//     .catch((error) => console.log(`${error}`));
// };

// getGifSun();

// //Exercise 3

// const fetchStarWars = async (endpoint) => {
//   try {
//     const response = await fetch(endpoint);
//     let data = await response.json();
//     console.log(data.result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchStarWars("https://www.swapi.tech/api/starships/9/");

//Exercise 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//It will say "calling" and then two seconds later will say "resolved"