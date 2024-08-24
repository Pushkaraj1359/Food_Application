import React from 'react'
import styles from "./TopSection.module.css"
// import Card from '../Card/Card'

const TopSection = () => {

    const searchFood = (event) => {
        const searchValue = event.target.value;
        console.log(searchValue);

    //     if(searchValue === "" ){
    //         <section className={styles.mainContainer}>
    //             <Card/>
    //         </section>
    //     }

    //     const filter = Details?.filter((Detail)=> (
    //         Detail.name.toLowerCase().includes(searchValue.toLowerCase())
    //     ))

    //     {
    //         <section className={styles.mainContainer}>
    //             <Card filterValue={filter} />
    //         </section>
    //     }
}

    return (
        <div>
            <container className={styles.maintainer}>
                <div className={styles.logo}>
                    <h1>LOGO</h1>
                </div>
                <input type="text"
                onChange={searchFood}
                className={styles.input}
                placeholder="search here"
                />
            </container>
        </div>
    )
}

export default TopSection
