import styles from './type-tester.module.css';
import TypeTester from './type-tester';
import getQuote from '../../api/getQuote';

export default async function TypeTesterWrapper() {
    const { data, error } = await getQuote();

    return (
        <section className={styles.section}>
            <div className='container'>
                {data !== null ? <TypeTester text={data.quoteText} /> : <p style={{ color: 'red' }}>Ошибка при загрузке данных: {String(error)}</p>}
            </div>
        </section>
    );
}
