import logo from '../image/Logo.svg';
import styles from './Header.module.css';

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={logo} alt="logotipo" />
            </header>
        </div>
    );
}
