import React from 'react';
import './step.css'
import Fighters from "./odds/Fighters";
import BigMiddle from "./odds/BigMiddle";
import Military from "./odds/Military";
import Zenit from "./odds/Zenit";

const Step = (props) => {
    return (
        <div>
            {props.step === 0 &&
                <div>
                    <Fighters changeOdds={props.changeOdds} restart={props.restart}
                              globalStoreChange={props.globalStoreChange}/>
                </div>
            }
            {props.step === 1 &&
                <div>
                    <BigMiddle changeOdds={props.changeOdds} restart={props.restart}
                               globalStoreChange={props.globalStoreChange}/>
                </div>
            }
            {props.step === 2 &&
                <div>
                    <Military changeOdds={props.changeOdds} restart={props.restart}
                               globalStoreChange={props.globalStoreChange}/>
                </div>
            }
            {/*{props.step === 3 &&*/}
            {/*    <div>*/}
            {/*        <Zenit changeOdds={props.changeOdds} restart={props.restart}*/}
            {/*                  globalStoreChange={props.globalStoreChange}/>*/}
            {/*    </div>}*/}
        </div>
    );
};

export default Step;