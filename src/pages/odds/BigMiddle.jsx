import React, {useState} from 'react';
import data from "../dataBase/inputs.json";
import Input from "../others/Input";


const BigMiddle = (props) => {

    const Pm = [0.15, 0.1, 0.1, 0.1]
    const Pp = [0.5, 0.35, 0.35, 0.3]
    const tc = [50, 50, 0.35, 0.35]
    const nc = [9, 3, 4, 3]
    const Wn = [0.85, 0.75, 0.45, 0.85]
    const Pp1 = [0.35, 0.6, 0.35, 0.35]
    const Pm1 = [0.18, 0.12, 0.12, 0.12]

    const [store, setStore] = useState({
        Szrk: undefined,
        Lbp: undefined,
        Vc: undefined,
        nPlane: undefined,
        nPZrk: undefined,
        wZyr: undefined,
        aZrk: undefined,
        qZrk: undefined,
        zrk: 0,
        var: 3
    })

    return (
        <div className='fighters'>
            <h1>Расчет вероятности преодоления противодействия ЗРК большой и средней дальности</h1>
            <div className='inputs'>
                <h3>входные данные</h3>
                {
                    data[3].map((el, id) => {
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
            <select className='select' onChange={(e) => {
                setStore(store, store.zrk = parseInt(e.target.value))

            }}>
                <option value='0'>Пэтриот</option>
                <option value='1'>Ус.Хок</option>
                <option value='2'>Иджис</option>
                <option value='3'>НАСАМС</option>
            </select>

            <button className='button' onClick={() => {
                if ((store.Szrk === undefined) || (store.Lbp === undefined) || (store.Vc === undefined) || (store.nPlane === undefined)) {
                    alert('Введены не все данные!')
                } else {

                    setStore(store, store.nPZrk = ((store.Szrk + store.Lbp) / (store.Vc * tc[store.zrk]) + 1) * nc[store.zrk] * (1 - Pm[store.zrk]) * (1 - Pp[store.zrk]))
                    setStore(store, store.wZyr = Wn[store.zrk] * (1 - Pp1[store.zrk]) * (1 - Pm1[store.zrk]))
                    setStore(store, store.aZrk = (store.nPZrk / store.nPlane) * store.wZyr)
                    setStore(store, store.qZrk = Math.exp(-store.aZrk))
                    setStore(store, store.tc = tc[store.zrk], store.Wn = Wn[store.zrk], store.Pm = Pm[store.zrk], store.Pp = Pp[store.zrk], store.nc = nc[store.zrk], store.Pp1 = Pp1[store.zrk], store.Pm1 = Pm1[store.zrk])
                    //Pm Pp tc nc Wn Pp1 Pm1
                    alert(`Вероятность преодоления ЗРК противника=${store.qZrk}`)
                    props.globalStoreChange(store)
                    props.restart();
                    props.changeOdds(store.qZrk.toFixed(3));
                }
            }}>Расчет
            </button>
            <button className='button' onClick={() => {
                props.restart();
            }}>Назад
            </button>

            <button className='button' title='для разработчика' onClick={() => {
                console.log(store)
            }}>Show Store
            </button>
        </div>
    );
};

export default BigMiddle;