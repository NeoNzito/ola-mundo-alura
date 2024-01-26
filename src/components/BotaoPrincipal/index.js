import styles from "./BotaoPrincipal.module.css"

const BotaoPrincipal = ({ children, size, to }) => {
    return (
        <button 
            className={`
                ${styles.botaoPrincipal}
                ${styles[size]}
            `}
        >
            {children}</button>
    )
}

export default BotaoPrincipal