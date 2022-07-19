import React from 'react';

const Zenit = (props) => {
    return (

        <div className="fighters"><h1>Расчет вероятности преодоления противодействия войсковых средств ПВО (зенитной
            артиллерии)</h1>
            <button className="button" onClick={() => {
                props.restart()
            }}>exit
            </button>
        </div>


    );
};

export default Zenit;