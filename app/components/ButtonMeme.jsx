
import styles from "../page.module.css"
export default function ButtonMeme({onClick, children}){
    
return (
<button onClick={onClick} className={styles.button}>{children}</button>

)
}

