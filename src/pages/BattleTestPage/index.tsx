import { Loader, useRoom, withRoom } from '@antmorelabs-packages/battle-package';
import { ViewContainer } from '@antmorelabs-packages/slide-app-package';
import React, { useEffect, useState } from 'react';
import mockData from './db';
// import { useAuth } from '../../contexts/AuthContext';

const BattleTestPage: React.FC = () => {
   // const { user } = useAuth();
   const userName = "hosan"
   const { state, handlers } = useRoom({userName});
   const [slides, setSlides] = useState(null);
   const gameId = '123';

   const { showResult, startedQuiz, bothPlayersJoined } = state;
   const data = mockData;

   useEffect(() => {
      if (gameId && data) {
         setSlides(data?.item);
      }
   }, [gameId, data]);

   const PairingScreen: React.FC = () => (
      <div
         className="flex flex-col justify-center items-center gap-2 absolute top-[50%] left-[50%] border rounded-xl px-10 py-5 bg-[#0f0c29] translate-x-[-50%] translate-y-[-50%]"
         style={{
            background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
         }}
      >
         <div>
            <p>Pairing...</p>
            <Loader type="moon" color="white" size={20} />
         </div>
         <div className="flex gap-2">
            <div className="flex items-center gap-2">
               <p className="text-3xl font-bold">{userName}</p>
            </div>
         </div>
      </div>
   );

   return (
      <>
         {slides && (
            <div className="flex flex-col items-center justify-center">
               {!bothPlayersJoined && <PairingScreen />}
               <div className='-z-20'>
                  {startedQuiz && !showResult && slides && (
                     <ViewContainer items={slides} state={state} handlers={handlers} />
                  )}
               </div>
            </div>
         )}
      </>
   );
};

export default withRoom(BattleTestPage);
// export default BattleTestPage
