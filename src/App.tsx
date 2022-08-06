import React, {useState} from 'react';
import './App.css';
import PlayerCard from "./components/PlayerCard";
import {PlayerModel} from "./model/player.model";

const allPlayers = [
  {
    "firstname": "Eden",
    "lastname": "Hazard",
    "goal": 93,
    "salary": 118000000,
    "devise": "$",
    "pictureURl": "https://img.a.transfermarkt.technology/portrait/big/50202-1537861483.jpg?lm=1"
  },
  {
    "firstname": "Gareth",
    "lastname": "Bale",
    "goal": 39,
    "salary": 31200000,
    "devise": "£",
    "pictureURl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Liver-RM_%282%29_%28cropped%29.jpg/280px-Liver-RM_%282%29_%28cropped%29.jpg"
  },
  {
    "firstname": "Paul",
    "lastname": "Pogba",
    "goal": 69,
    "salary": 34000000,
    "devise": "€",
    "pictureURl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Manchester_United_v_Leeds_United%2C_14_August_2021_%2823%29.jpg/220px-Manchester_United_v_Leeds_United%2C_14_August_2021_%2823%29.jpg"
  },
  {
    "firstname":"Andres",
    "lastname":"Iniesta",
    "goal":126,
    "salary":35000000,
    "devise":"$",
    "pictureURl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Andr%C3%A9s_Iniesta.jpg/250px-Andr%C3%A9s_Iniesta.jpg"
  },
  {
    "firstname":"Robert ",
    "lastname":"Lewandowski",
    "goal":134,
    "salary":23000000,
    "devise":"€",
    "pictureURl":"https://upload.wikimedia.org/wikipedia/commons/0/03/Robert_Lewandowski%2C_FC_Bayern_M%C3%BCnchen_%28by_Sven_Mandel%2C_2019-05-27%29_01.jpg"
  },
  {
    "firstname":"Mohamed",
    "lastname":"Salah",
    "goal":97,
    "salary":19730000,
    "devise":"€",
    "pictureURl":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mohamed_Salah%2C_Liverpool_FC_gegen_1._FSV_Mainz_05_%28Testspiel_23._Juli_2021%29_26.jpg/1200px-Mohamed_Salah%2C_Liverpool_FC_gegen_1._FSV_Mainz_05_%28Testspiel_23._Juli_2021%29_26.jpg"
  },
]; // mock

function App() {
  const [ players, setPlayers ] = useState<PlayerModel[]>(allPlayers)
  return (
    <div className="flex w-full h-full">
      <header className="">

      </header>
      <main className="flex flex-row flex-wrap w-full justify-center md:justify-start pl-0 md:pl-10 pt-10">
        { players.map(player => <PlayerCard key={player.pictureURl} player={player} />) }
      </main>
    </div>
  );
}

export default App;
