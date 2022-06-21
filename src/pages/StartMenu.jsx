import React, {useState} from 'react';
import './startMenu.css'
import data from './dataBase.json'
import Step from "./Step";

const StartMenu = () => {
    const [startMenu, setStartMenu] = useState(true)
    const [odds, setOdds] = useState([])
    const [step, setStep] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)

    const addOdds = (newOdds) => {
        setOdds([...odds, newOdds]);
    }
    const restart = () => {
        setStep(false);
        setStartMenu(true);
    }

    return (
        <div>
            {
                startMenu && <div className='startContainer'>
                    <h1>расчет второго этапа моделирования боевого полета</h1>
                    <div className='startMenu'>
                        {data[0].titleName.map((el, id) => {
                            return (
                                <div key={id} onClick={() => {
                                    setStep(true);
                                    setStartMenu(false);
                                    setCurrentStep(id)
                                }}>{el}</div>
                            )
                        })}
                        <div onClick={()=>{console.log(odds)}}>
                            Расчет общей вероятности (количество расчитанных вероятностей : {odds.length})
                        </div>
                        <div>{odds}</div>
                    </div>
                </div>
            }
            {
                step && <Step step={currentStep} changeOdds={addOdds} restart={restart}/>

            }
        </div>
    );
};

export default StartMenu;