import { GENERATE_DATA } from '../constans';
import { QRCodeSVG } from 'qrcode.react';


export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    
    return (
        <div>
        {data.map((text)=> (
            <div className="qrLink">
                <p key={text} >
                    {text}
                </p>
                <QRCodeSVG value={text} />
            </div>
        ))}            
    </div>
    );
};

