import React from 'react'
import styles from './SelectedWorks.module.css'
import bgimg from '../../../../assets/work_images/modern-minimalistic-interior-design-light-bright-monochrome-room-with-black-white-furniture-c-min.jpg';

function SelectedWorks() {
    return (
        <>
            {/* bg image */}
            <div className={styles.container}
                style={{
                    backgroundImage: `url(${bgimg})`,
                }}>
                {/* description */}
                <div className={styles.heroText}>
                    <p className={styles.heroTitle}>
                        Explore a curated collection of our most thoughtful and inspiring projects, each designed to elevate everyday living.
                    </p>
                </div>
                {/* title */}
                {/* Large Title */}
                <div className={styles.largeTitleContainer}>
                    <h2 className={styles.largeTitle}>
                        Selected Works
                    </h2>
                </div>
            </div>
        </>
    );
}

export default SelectedWorks