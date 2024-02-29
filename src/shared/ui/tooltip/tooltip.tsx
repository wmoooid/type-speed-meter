import styles from './tooltip.module.css';

type TooltipProps = {
    name: string;
    value: string;
};

export default function Tooltip({ name, value }: TooltipProps) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.name}>{name}</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
}
