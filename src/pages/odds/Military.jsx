import React, {useState} from 'react';
import data from "../dataBase/inputs.json";
import Input from "../others/Input";

const Military = (props) => {

    const tc = [12, 14, 11, 14, 14]
    const Pp = [0.2, 0.2, 0.35, 0.2, 0.18]
    const Pm = [0.12, 0.15, 0.2, 0.15, 0.25]
    const Wn = [0.5, 0.6, 0.5, 0.6, 0.9]
    const Pp1 = [0.68, 0.45, 0.5, 0.45, 0.68]
    const Pm1 = [0.2, 0.4, 0.45, 0.4, 0.2]

    const [store, setStore] = useState({
        nc: 1,
        Pi: undefined,
        Ibp: undefined,
        mi: undefined,
        A: undefined,
        B: undefined,
        Szrk: undefined,
        Lbp: undefined,
        Vc: undefined,
        n: undefined,
        Nplane: undefined,
        mil: 0,
        var: 4
    })

    return (

            <div className='fighters'>
                <h1>Расчет вероятности преодоления противодействия войсковых средств ПВО (малой дальности)</h1>
                <div className='inputs'>
                    <h3>входные данные</h3>
                    {
                        data[4].map((el, id) => {
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
                    setStore(store, store.mil = parseInt(e.target.value))

                }}>
                    <option value='0'>Стингер</option>
                    <option value='1'>Роланд-2</option>
                    <option value='2'>Си Спарроу</option>
                    <option value='3'>Рапира-2000</option>
                    <option value='3'>Старстрик</option>
                </select>


            <button className="button" onClick={() => {
                if ((store.Szrk === undefined) || (store.Lbp === undefined) || (store.Vc === undefined) || (store.A === undefined) || (store.B === undefined) || (store.Ibp === undefined) || (store.mi === undefined) || (store.Pi === undefined) || (store.Nplane === undefined)) {
                    alert('Введены не все данные!')
                } else {
                    setStore(store, store.Nzrk = (((2 * store.Pi) + store.Ibp) * (store.mi / (store.A * store.B))) * (1 - store.n))
                    setStore(store, store.nzrk = (((store.Nzrk * (store.Szrk + store.Lbp)) / (store.Vc * tc[store.mil])) + 1) * store.nc * (1 - Pp[store.mil]) * (1 - Pm[store.mil]))
                    setStore(store,store.wzyr = Wn[store.mil] * (1 - Pp1[store.mil]) * (1 - Pm1[store.mil]))
                    setStore(store, store.azrk = (store.nzrk / store.Nplane)*store.wzyr)
                    setStore(store, store.qzrk = Math.exp(-store.azrk))
                    setStore(store, store.msb = store.Nplane * (1 - store.qzrk))
                    setStore(store, store.tc = tc[store.mil], store.Pp = Pp[store.mil], store.Pm = Pm[store.mil], store.Wn = Wn[store.mil], store.Pm1 = Pm1[store.mil], store.Pp1 = Pp1[store.mil])
                    //tc Pp Pm Wn Pp1 Pm1
                    alert(`Вероятность преодоления войсковых средств ПВО=${store.qzrk}`)
                    props.globalStoreChange(store)
                    props.restart();
                    props.changeOdds(store.qzrk.toFixed(3));
                }
            }}>Расчет
            </button>

            <button className="button" onClick={() => {
                props.restart()
            }}>exit
            </button>
            <button className="button" onClick={() => {
                console.log(store)
            }}>store
            </button>

        </div>
    );
};

export default Military;