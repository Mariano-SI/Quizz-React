import React from "react";
import Quiz from '../img/quiz.svg'
import './Welcome.css'
import {userContext} from 'react'
import { QuizContext } from "../context/quiz";
import { useContext } from "react";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <button onClick={()=>dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
