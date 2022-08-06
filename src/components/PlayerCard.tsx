import React from 'react';
import {PlayerModel} from "../model/player.model";
import {CashIcon, ExclamationCircleIcon} from '@heroicons/react/solid';

interface PlayerCardProps {
  player: PlayerModel
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const { firstname, lastname, goal, salary, devise, pictureURl } = player;
  return (
    <div className="w-3/4 md:w-2/5 lg:w-1/5 mb-10 mr-0 md:mr-20 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      style={{ objectFit: 'cover', objectPosition: 'top'}}
    >
      <img className="w-full rounded-t-lg h-72" src={pictureURl} alt={`${firstname} ${lastname} profile picture`}/>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {`${firstname} ${lastname}`}
        </h5>
        <p className="flex flex-row mb-3 font-normal text-gray-700 dark:text-gray-400">
          <ExclamationCircleIcon className="w-4 mr-4" /> {goal} goals
        </p>
        <p className="flex flex-row mb-3 font-normal text-gray-700 dark:text-gray-400">
          <CashIcon className="w-4 mr-4" /> {`${salary} ${devise}`}
        </p>
      </div>
    </div>
  )
}

export default PlayerCard;