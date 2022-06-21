import React, {useState} from 'react';
import Input from "../others/Input";
import data from "../dataBase/inputs.json"

const Fighters = (props) => {
    //////////////////////////////////////////////
    const pObn = [0.35, 0.64, 0.85, 0.91]
    const pNav = [0.3, 0.69, 0.85, 0.94]
    const pAt = [0.36, 0.75, 0.94, 0.96]
    const pNad = 0.95
    const pM = [0.3, 0.4, 0.22, 0.32]
    const pReb = [0.98, 0.96, 0.62, 0.53]
    const w = 0.8
    const [store, setStore] = useState({
        nc: 0,
        Sua: 0,
        Szrk: 0,
        Lbp: 0,
        Vc: 0,
        tc: 0,
        nIa: 0,
        kOb: 0,
        kProt: 0,
        nP1: 0,
        hPol: 0,
        fighterIndex: 0,
        nPNav: 0,
        nPlane: 0,
        nIaNav: 0,
        kObNav: 0,
        aIaNav: 0,
        qIaNav: 0
    })
    //////////////////////////////////////////////
    const [isFighters, setIsFighters] = useState(false)
    return (
        <div className='fighters'>
            <h1>Расчет вероятности преодоления истребителей противника</h1>
            <div>
                <div className='fightersOneContainer'>
                    <h2>Расчет числа наводимых истребителей</h2>
                    <div className='inputs'>
                        <h3>входные данные</h3>
                        {
                            data[0].map((el, id) => {
                                return (
                                    <Input
                                        inputName={el.inputName}
                                        subInputName={el.subInputName}
                                        placeholder={el.placeholder}
                                        storeChange={(value) => {
                                            let storeCopy = {...store}
                                            storeCopy[`${el.storeName}`] = value
                                            return setStore(storeCopy)
                                        }}
                                        store={store[`${el.storeName}`]}
                                        key={id}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div className='fightersOneContainer'>
                <h2>Расчет вероятности преодоления истребителей противника</h2>
                <div className='inputs'>
                    <h3>входные данные</h3>
                    {
                        data[1].map((el, id) => {
                            return (
                                <Input
                                    inputName={el.inputName}
                                    subInputName={el.subInputName}
                                    placeholder={el.placeholder}
                                    storeChange={(value) => {
                                        let storeCopy = {...store}
                                        storeCopy[`${el.storeName}`] = value
                                        return setStore(storeCopy)
                                    }}
                                    store={store[`${el.storeName}`]}
                                    key={id}
                                />
                            )
                        })
                    }

                </div>
            </div>
            <button className='button' onClick={() => {
                setStore(store, store.nIaNav = (((store.Sua - store.Szrk + store.Lbp) / (store.Vc * store.tc)) + 1) * store.nc)
                setStore(store, store.kObNav = (store.nIa * store.kOb) / (store.nIaNav * store.kProt))
                alert(`Коеффициент обеспечения наведения= ${store.kObNav}`)
                if (store.kObNav >= 1) {
                    setStore(store, store.qIaNav = 1)
                    alert(`Вероятность преодоления истребителей противника= ${store.qIaNav}`)
                    props.restart();
                    props.changeOdds(store.qIaNav);
                } else {
                    setIsFighters(true)
                }

                console.log(store)

            }}>Расчет
            </button>
            {isFighters && <div className='fightersOneContainer'>
                <h2>Дополнительные расчеты</h2>
                <div className='inputs'>
                    <h3>входные данные</h3>
                    {
                        data[2].map((el, id) => {
                            return (
                                <Input
                                    inputName={el.inputName}
                                    subInputName={el.subInputName}
                                    placeholder={el.placeholder}
                                    storeChange={(value) => {
                                        let storeCopy = {...store}
                                        storeCopy[`${el.storeName}`] = value
                                        return setStore(storeCopy)
                                    }}
                                    store={store[`${el.storeName}`]}
                                    key={id}
                                />
                            )
                        })
                    }
                </div>
                <button className='button' onClick={() => {

                    if (store.hPol >= 0 && store.hPol < 400) {
                        setStore(store, store.fighterIndex = 0)
                    } else if (store.hPol >= 400 && store.hPol < 1000) {
                        setStore(store, store.fighterIndex = 1)
                    } else if (store.hPol >= 1000 && store.hPol <= 5000) {
                        setStore(store, store.fighterIndex = 2)
                    } else {
                        setStore(store, store.fighterIndex = 3)
                    }
                    console.log(store.fighterIndex)
                    console.log(store)
                    setStore(store, store.nPNav = store.nIaNav * store.nP1 * (1 - store.kObNav))
                    setStore(store, store.aIaNav = ((store.nIaNav / store.nPlane) * pObn[store.fighterIndex] * pNav[store.fighterIndex] * pAt[store.fighterIndex] * pNad) * (w * (1 - pM[store.fighterIndex]) * (1 - pReb[store.fighterIndex])))
                    setStore(store, store.qIaNav = Math.exp(-store.aIaNav))
                    alert(`Вероятность преодоления истребителей противника=${store.qIaNav}`)
                    props.restart();
                    props.changeOdds(store.qIaNav);
                }}>Расчет
                </button>
            </div>
            }


            <button className='button' onClick={() => {
                props.restart();
            }}>Назад
            </button>

        </div>
    );
};

export default Fighters;