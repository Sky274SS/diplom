import React from 'react';
import styles from './table.module.css'

const Table = (props) => {

    return (
        <div>
            {
                props.store.var===1 && <div className={styles.table}>

                    <div>S<span>ИА</span> = {props.store.Sua}</div>
                    <div>S<span>ЗРК</span> = {props.store.Szrk}</div>
                    <div>L<span>БП</span> = {props.store.Lbp}</div>
                    <div>V<span>ц</span> = {props.store.Vc}</div>
                    <div>t<span>ц</span> = {props.store.tc}</div>
                    <div>n<span>ИА</span> = {props.store.nIa.toFixed(3)}</div>
                    <div>n<span>с</span> = {props.store.nc}</div>
                    <div>N<span>ИА нав</span> = {props.store.nIaNav.toFixed(3)}</div>
                    <div>К<span>БП пр</span> = {props.store.kProt}</div>
                    <div>N<span>ИА об</span> = {props.store.nIaOb}</div>
                    <div>К<span>БП об</span> = {props.store.kOb}</div>
                    <div>К<span>об</span> = {props.store.kObNav.toFixed(3)}</div>
                    <div>Q<span>ИА нав</span> = {props.store.qIaNav}</div>

                </div>
            }
            {
                props.store.var===2 && <div className={styles.table}>
                    <div>S<span>ИА</span> = {props.store.Sua}</div>
                    <div>S<span>ЗРК</span> = {props.store.Szrk}</div>
                    <div>L<span>БП</span> = {props.store.Lbp}</div>
                    <div>V<span>ц</span> = {props.store.Vc}</div>
                    <div>t<span>ц</span> = {props.store.tc}</div>
                    <div>n<span>ИА</span> = {props.store.nIa.toFixed(3)}</div>
                    <div>n<span>с</span> = {props.store.nc}</div>
                    <div>N<span>ИА нав</span> = {props.store.nIaNav.toFixed(3)}</div>
                    <div>К<span>БП пр</span> = {props.store.kProt}</div>
                    <div>N<span>ИА об</span> = {props.store.nIaOb}</div>
                    <div>К<span>БП об</span> = {props.store.kOb}</div>
                    <div>К<span>об</span> = {props.store.kObNav.toFixed(3)}</div>
                    <div>n<span>p1</span> = {props.store.nP1}</div>
                    <div>n<span>р</span> = {props.store.nPNav.toFixed(3)}</div>
                    <div>N<span>ц</span> = {props.store.nPlane}</div>
                    <div>Р<span>обн</span> = {props.store.pObn}</div>
                    <div>Р<span>нав</span> = {props.store.pNav}</div>
                    <div>Р<span>ат</span> = {props.store.pAt}</div>
                    <div>P<span>над</span> = {props.store.pNad}</div>
                    <div>W = {props.store.w}</div>
                    <div>Р<span>м</span> = {props.store.pM}</div>
                    <div>Р<span>РЭБ</span> = {props.store.pReb}</div>
                    <div>а<span>ИА нав</span> = {props.store.aIaNav.toFixed(3)}</div>
                    <div>Q<span>ИА</span> = {props.store.qIaNav.toFixed(3)}</div>
                    <div>М<span>сб</span> = {props.store.Msb.toFixed(3)}</div>
                </div>
            }
            {
                props.store.var===3 && <div className={styles.table}>

                   <div>S<span>ЗРК</span> = {props.store.Szrk}</div>
                    <div>L<span>БП</span> = {props.store.Lbp}</div>
                    <div>V<span>ц</span> = {props.store.Vc}</div>
                    <div>t<span>ц</span> = {props.store.tc}</div>
                    <div>n<span>ц</span> = {props.store.nc}</div>
                    <div>P<span>м</span> = {props.store.Pm}</div>
                    <div>P<span>р</span> = {props.store.Pp}</div>
                    <div>n<span>р ЗРК</span> = {props.store.nPZrk.toFixed(3)}</div>
                    <div>N<span>ц</span> = {props.store.nPlane}</div>
                    <div>W<span>ц</span> = {props.store.Wn}</div>
                    <div>P<span>м1</span> = {props.store.Pm1}</div>
                    <div>P<span>р1</span> = {props.store.Pp1}</div>
                    <div>W<span>ЗУР</span> = {props.store.wZyr.toFixed(3)}</div>
                    <div>a<span>ЗРК</span> = {props.store.aZrk.toFixed(3)}</div>
                    <div>Q<span>ЗРК</span> = {props.store.qZrk.toFixed(3)}</div>

                </div>
            }
            {
                props.store.var===4 && <div className={styles.table}>

                    <div>P<span>i</span> = {props.store.Pi}</div>
                    <div>I<span>БП</span> = {props.store.Ibp}</div>
                    <div>m<span>i</span> = {props.store.mi}</div>
                    <div>A = {props.store.A}</div>
                    <div>B = {props.store.B}</div>
                    <div>η = {props.store.n}</div>
                    <div>N<span>зрк</span> = {props.store.Nzrk}</div>
                    <div>S<span>зрк</span> = {props.store.Szrk}</div>
                    <div>L<span>бп</span> = {props.store.Lbp}</div>
                    <div>V<span>ц</span> = {props.store.Vc}</div>
                    <div>t<span>цикла</span> = {props.store.tc}</div>
                    <div>n<span>ц</span> = {props.store.nc}</div>
                    <div>P<span>м</span> = {props.store.Pm}</div>
                    <div>P<span>р</span> = {props.store.Pp}</div>
                    <div>n<span>р ЗРК</span> = {props.store.nzrk.toFixed(3)}</div>
                    <div>n<span>бп</span> = {props.store.Nplane}</div>
                    <div>W<span>п</span> = {props.store.Wn}</div>
                    <div>P<span>м1</span> = {props.store.Pm1}</div>
                    <div>P<span>р1</span> = {props.store.Pp1}</div>
                    <div>W<span>ЗУР</span> = {props.store.wzyr.toFixed(3)}</div>
                    <div>a<span>ЗРК</span> = {props.store.azrk.toFixed(3)}</div>
                    <div>Q<span>ЗРК</span> = {props.store.qzrk.toFixed(3)}</div>
                    <div>М<span>сб</span> = {props.store.msb.toFixed(3)}</div>

                </div>
            }
        </div>
    );
};

export default Table;