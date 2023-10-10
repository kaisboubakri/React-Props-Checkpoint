// players.js
import image1 from './assets/photo1.jpg';
import image2 from './assets/photo2.jpg';
import image3 from './assets/photo3.jpg';
import image4 from './assets/photo4.jpg';

const players = [
    {
      name: "Cristiano Ronaldo ",
      age: 38,
      team: "Al Nassr FC",
      jerseyNumber: 7,
      nationality: "Portugal",
      imageURL: <img src={image1} alt='...'/>,
    },
    {
      name: "Zidane",
      age: 48,
      team: "Retired",
      jerseyNumber: 5,
      nationality: "France",
      imageURL: <img src={image2} alt='...'/>,
    },
    {
      name: "Sergio Ramos",
      age: 37,
      team: "Sevilla",
      jerseyNumber: 4,
      nationality: "Spain",
      imageURL: <img src={image3} alt='...'/>,
    },
    {
      name: "Iker cassillas",
      age: 45,
      team: "Retired",
      jerseyNumber: 1,
      nationality: "Spain",
      imageURL: <img src={image4} alt='...'/>,
    },
  ];
  
  export default players;
  