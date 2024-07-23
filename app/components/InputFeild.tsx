'use client';

import styles from "../page.module.css"
import ButtonMeme from "./ButtonMeme"
import memeData from "../../public/memeData"
import React, { useState, useEffect } from "react";

// let memeImg: any
export default function Inputfield() {

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMeme() {
          try {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes)
            const randomNum = Math.floor(Math.random() * data.data.memes.length)
            setmemes(prevmeme => ({
                ...prevmeme, memeImg: data.data.memes[randomNum].url
            }))
          } catch (error) {
            console.error("Error fetching memes:", error);
            // Handle the error here (optional)
          } 
        }

        getMeme()  
            
        }, [])


    // useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             return data
    //         })
    //         .then(data => {
    //             setAllMemes(data.data.memes)
    //             const randomNum = Math.floor(Math.random() * data.data.memes.length)
    //             setmemes(prevmeme => ({
    //             ...prevmeme, memeImg: data.data.memes[randomNum].url
    //             }))
    //             return data
    //         })

    //         .finally(() => {
    //             console.log("all finished")
    //         })
    // }, []
    // )
    
    function createRandomImg() {
            const randomNum = Math.floor(Math.random() * allMemes.length)
            let randomMeme = allMemes[randomNum]
            return randomMeme?.url
    }

    
    const [memes, setmemes] = React.useState({
        topText: "",
        bottomText: "",
        memeImg: ""
    })
    // console.log("memes.memeImg = ",memes.memeImg)

    const [showMemeText, setShowMemeText] = useState({
        topText: memes.topText,
        bottomText: memes.bottomText,
    })

    function handleClick() {
        const { topText, bottomText } = memes
        setShowMemeText({ topText, bottomText })
    }


    function handleChange(event: any) {
        const { name, value } = event.target
        setmemes(prevmeme => ({
            ...prevmeme, [name]: value
        }
        )
        )
    }

    function handleRandomImg() {
        setmemes(prevMeme => ({
            ...prevMeme,
            memeImg: createRandomImg()
        }))
      

    }

    return (
        <div className={styles.input_feild}>
            <div className={styles.text_input}>
                <input type="text" name="topText" placeholder="Top text" value={memes.topText} onChange={handleChange} />
                <input type="text" name="bottomText" placeholder="Bottom text" value={memes.bottomText} onChange={handleChange} />
            </div>
            <ButtonMeme onClick={handleClick} children={"Generate your meme"} />
            {/* onClick and children get passed to props in ButtonMeme */}
            <div className={styles.memeImgContainer}>
                <div className={styles.topText}>{showMemeText.topText}</div>
                <div className={styles.bottomText}>{showMemeText.bottomText}</div>
                {memes.memeImg && <img className={styles.memeImg} src={memes.memeImg} alt="meme" />}
            </div>
            <ButtonMeme onClick={handleRandomImg} children={"Random meme"} />
        </div>
    )
}