import React from 'react'
import styles from './CardContainer.module.css'
import Card from '../Card/Card'


const CardContainer = () => {
    
    return (
        <div>
            <section className={styles.mainContainer}>
                <Card/>
            </section>
        </div>
    )
}

export default CardContainer
