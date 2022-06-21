import React from 'react';
import './step.css'
import Fighters from "./odds/Fighters";

const Step = (props) => {
    return (
        <div>
            {props.step === 0 &&
                <div>
                    <Fighters changeOdds={props.changeOdds} restart={props.restart}/>
                </div>
            }
            {props.step === 1 &&
                <div>
                    <h1>Расчет вероятности преодоления противодействия ЗРК большой и средней дальности</h1>
                </div>
            }
            {props.step === 2 &&
                <div>
                    <h1>Расчет вероятности преодоления противодействия войсковых средств ПВО</h1>
                </div>
            }
        </div>
    );
};

export default Step;