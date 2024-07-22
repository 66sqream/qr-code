import { Routes, Route} from "react-router-dom";

import { QrCodeGeneratore } from './QrCodeGeneratore';
import { QrCodeScanner } from './QrCodeScanner';
import { GenerateHistory } from "./GenerateHistory";
import { ScanHistory } from "./ScanHistory";
import { Nav } from "./Nav";

import s from '../style/layout.module.scss';


export const Layout = () => {
    return (
        <div className={s.container}>
            <Nav />
            <Routes>
                <Route path="/generate" element={<QrCodeGeneratore />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
            </Routes>
        </div>
    )
};