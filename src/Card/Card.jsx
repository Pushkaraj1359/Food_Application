import React from 'react'
import styles from "./Card.module.css"

const Card = (props) => {
    const Details = [
        {
            photo: "",
            name : "first",
            para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum!",
            button : "Order Now"
        },
        {
            photo : "",
            name : "second",
            para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum!",
            button : "Order Now"
        },
        {
            photo : "",
            name : "three",
            para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum!",
            button : "Order Now"
        },
        {
            photo : "",
            name : "four",
            para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum!",
            button : "Order Now"
        },
        {
            photo : "",
            name : "five",
            para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum!",
            button : "Order Now"
        },
        {
            photo : "",
            name : "six",
            para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum!",
            button : "Order Now"
        },
    ]
    return (
        <div className={styles.cardWrapper}>
                {
                    Details.map((Detail,index)=>(
                        <div className={styles.card} key={index}>
                            <div className={styles.cardData}>
                                <div className={styles.img}>
                                    <img src={Detail.photo} alt="product-img" />
                                </div>
                                <div className={styles.content}>
                                    <h1>{Detail.name}</h1>
                                    <p>{Detail.para}</p>
                                    <div className="btn-card-wapper">
                                        <button className={styles.btncard}>{Detail.button}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default Card
