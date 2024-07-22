import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { GENERATE_DATA } from '../constans';

import s from '../style/qrCodeGeneratore.module.scss';

import '../style/import.scss'


export const QrCodeGeneratore = () => {
    const [inputValue, setValue] = useState('');
    const [isShowQrCode, setIsShowQrCode] = useState('');
    
    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, inputValue])
        );

        setIsShowQrCode(inputValue);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value); 
        setIsShowQrCode('');
    };

    return (
        <div className={s.qrCodeBlock}>
            {isShowQrCode !== '' && <QRCodeSVG value={isShowQrCode} />}

            <div className={s.inputBtnBlock}>
                <input 
                    onChange={onChangeHandler}
                    value={inputValue} 
                    type="text"
                    className="input" 
                    placeholder="Введите текст"
                />
                <button
                    className={s.btn}
                    type="button"
                    onClick={onClickHandler}>
                    Сгенерировать QR
                </button>
            </div>
        </div>
    );
};