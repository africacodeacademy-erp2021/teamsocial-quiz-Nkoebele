import React, {useState} from 'react';
import Categories from './Categories';


interface GameProps{
    score: number;
    player: string;
    questions: number,
    imageUrl: string;
    results: string;
}

const EndScreen: React.FC<GameProps> = ({ score, player, questions, imageUrl, results }) => {

    const[showCategories, setShowCategories] = useState(false);

    const[showEndScreen, setShowEndScreen] = useState(true)
    
   const restartGame = ()=>{
        setShowCategories(true)
        setShowEndScreen(false)

    }

    return (
<>
{showEndScreen ?
         <div className="EndScreen" 
          style={{background: `url(${imageUrl})`, backgroundRepeat: 'no-repeat',
          position: 'revert',
          marginLeft: '400px',
          marginRight: '400px',
          height: '35rem',
          backgroundSize: 'cover'
          
          }}>
    

    

<h1 style={{marginTop: '50px', color: 'white'}}>Game Finished</h1>
<h3 style={{color: 'white'}}>{player} {results} </h3>

<h4 style={{marginTop: '50px', color: 'white'}} >{score} / {questions}{""}</h4> 
<br/>

<button onClick={restartGame } className="btn btn-primary medium " >Restart Game</button>

</div> :null
}
{showCategories ? <Categories name = {player} />:null}

</>


    )

}


export default EndScreen

    





