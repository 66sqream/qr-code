import { Link } from "react-router-dom";
import s from '../style/nav.module.scss';

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <Link className={s.link} to="/generate">Генерировать QR-CODE</Link>
            <Link className={s.link} to="/scan">Сканировать QR-CODE</Link>
            <Link className={s.link} to="/generateHistory">История генерирования</Link>
            <Link className={s.link} to="/scanHistory">История сканирования</Link>
        </nav>
    );
};