import React, {useEffect, useState} from 'react';
import styles from './startMenu.module.css'
import data from './dataBase.json'
import Step from "./Step";
import Table from "./others/Table";

const StartMenu = () => {
    const [startMenu, setStartMenu] = useState(true)
    const [odds, setOdds] = useState([])
    const [step, setStep] = useState(false)
    const [isWin, setIsWin] = useState(undefined)
    const [result, setResult] = useState(undefined)
    const [currentStep, setCurrentStep] = useState(0)
    const [globalStore, setGlobalStore] = useState([])
    const [isList, setIsList] = useState({
        0: false
    })

    const globalStoreChange = (store) => {
        console.log(store)
        setGlobalStore([...globalStore, store])
    }

    useEffect(() => {
        setResult(undefined)
    }, [globalStore])

    useEffect(() => {
        if (result >= 0.95) {
            setIsWin(true)
        } else {
            setIsWin(false)
        }
        console.log('result changed')
        console.log(result)
    }, [result])

    const addOdds = (newOdds) => {
        setOdds([...odds, newOdds]);
    }
    const restart = () => {
        setStep(false);
        setStartMenu(true);
    }

    return (
        <>
            {
                startMenu && <div className={styles.startContainer}>
                    <h1>расчет второго этапа моделирования боевого полета</h1>

                    <div className={styles.navbar}>
                        <div>
                            {data[0].titleName.map((el, id) => {
                                return (
                                    <div key={id} onClick={() => {
                                        setStep(true);
                                        setStartMenu(false);
                                        setCurrentStep(id)
                                    }}>{el}</div>
                                )
                            })}
                            <div onClick={() => {
                                if (odds.length === 0) {
                                    setResult('Не расчитано')
                                } else if (odds.length === 1) {
                                    setResult(`${odds[0]}`)

                                } else {
                                    let od = 1
                                    odds.map((e) => {
                                        od = e * od
                                    })
                                    if (od > 1) {
                                        od = 1
                                    }
                                    setResult(`Общая вероятность: ${od.toFixed(3)}`)
                                }


                            }}>
                                Расчет общей вероятности (количество расчитанных вероятностей : {odds.length})
                            </div>
                        </div>
                        {result && <div
                            className={[isWin ? styles.resultWin : styles.resultFail, styles.resultOdd].join(' ')}>Общая вероятность: {result}</div>}

                    </div>
                    <div className={styles.result}>

                        {
                            globalStore.length > 0 && globalStore.map((el, id) => {
                                return (
                                    <div
                                        className={isList[id] ? [styles.resultMenu, styles.resultMenuActive].join(' ') : styles.resultMenu}
                                        onClick={() => {
                                            let isListCopy = {...isList}
                                            if (isList[id]) {
                                                for (let i = 0; i < globalStore.length; i++) {
                                                    isListCopy[i] = false
                                                }
                                            } else {
                                                for (let i = 0; i < globalStore.length; i++) {
                                                    isListCopy[i] = false
                                                }
                                                isListCopy[id] = true
                                            }
                                            setIsList(isListCopy)
                                        }}


                                        key={id}
                                    >
                                        <div>Посмотреть результаты расчётов №{id + 1}</div>
                                        {isList[id] && <div>
                                            <Table store={globalStore[id]}/>
                                        </div>}
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            }
            {
                step &&
                <Step step={currentStep} changeOdds={addOdds} restart={restart} globalStoreChange={globalStoreChange}/>

            }
            <button
                className="button"
                onClick={() => {
                    console.log(globalStore)

                }}
            >show global store
            </button>

        </>
    );
};

export default StartMenu;