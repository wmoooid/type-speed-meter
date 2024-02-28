import styles from './header.module.css';

export function Header() {
    return (
        <header>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.logo_wrapper}>
                        <span className={styles.logo_text}>Скорость печати</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
