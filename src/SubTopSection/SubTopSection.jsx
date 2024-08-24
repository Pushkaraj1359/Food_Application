import React from 'react'
import styles from "./SubTopSection.module.css"

const SubTopSection = () => {
    return (
        <div>
            <div className={styles.SubContainer}>
                <button className={styles.btn}>All</button>
                <button className={styles.btn}>BreakFast</button>
                <button className={styles.btn}>Lunch</button>
                <button className={styles.btn}>Dinner</button>
            </div>
        </div>
    )
}

export default SubTopSection
