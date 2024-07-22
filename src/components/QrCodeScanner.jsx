import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

import {SCAN_DATA} from '../constans';

import s from '../style/qrCodeScanner.module.scss'


export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };

    return (
        <div className={s.block}>
            <Scanner 
                onScan={scanHandler}
                //  
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={{
                    container: {width: 350}
                }}
            />
            <div className={s.qrCodeValue}>
                {scanned}
            </div>
        </div>
    )
};