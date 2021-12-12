import {useState} from "react"
import TelaInicial from "./components/TelaInicial/index";
import FlashCards from "./components/FlashCards/index";
import TelaFinal from "./components/TelaFinal/index";

export default function App() { 
   


    return (
        <>
           <TelaInicial />           
           <FlashCards />
           <TelaFinal />
           
            {/* <div className="flashCardVirado">
               
                <div className="container">
                    <div className="flashcardVerso">
                        
                </div>
            </div> */}
            
        </>
    );
}