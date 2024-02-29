import styles from './footer.module.css';

export function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className={styles.wrapper}>
                    <a href='https://github.com/wmoooid' className={styles.text}>
                        github.com/wmoooid
                    </a>
                </div>
            </div>
        </footer>
    );
}
