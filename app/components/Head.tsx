import styles from "../page.module.css"
import dogMeme from "../../public/dog_meme.png"

export default function Head() {
    return (
        <div className={styles.head}>
            {/* it's my head */}

            <div className={styles.real_head}>
                <img className={styles.meme_img} src={dogMeme.src} alt="meme_img" />
                <span> Meme Generator</span>
            </div>
        </div>

    )
}