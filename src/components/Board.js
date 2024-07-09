import React , {useState} from "react";
import Square from "./Square";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import './Board.css';

function Board(){
    const [squares, setSquares]=useState(Array(9).fill(null));
    const [isXNext,setIsXNext]=useState(true);

    const handleClick=(index)=>{
        if(calculateWinner(squares) || squares[index]) return;

        const newSquares=squares.slice();
        newSquares[index]=isXNext? 'X' : '0';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };
    const renderSquare=(index)=>{
        return <Square value={square[index]} onClick={()=>handleClick(index)} />;
    };

    const winner=calculateNewValueWinner(squares);
    let status;
    if(winner){
        status=`Winner : ${winner}`;
    }
    else if(squares.every(square=>square!==null)){
        status=`It\'s a tie`;
    }
    else{
        status=`Next player: $(isXNext ? 'X' : '0')`;
    }

    return(
        <div>
            <div className="status">{status}</div>
            <div className="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
            <button className="reset" onClick={()=>setSquares(Array(9).fill(null))}>Reset</button>
        </div>
    );
}

function Winner(squares){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Board;