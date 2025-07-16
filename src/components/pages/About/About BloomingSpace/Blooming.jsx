import React from 'react'
import styles from './Blooming.module.css'
import bgimg from '../../../../assets/about_images/interior-design-neoclassical-style-with-furnishings-decor-min.jpg';
function Blooming() {
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
                        We've worked with over 120 clients to transform homes, gardens, and interiors with care.<br /> Our approach blends function, beauty, and personal style.
                    </p>
                </div>
                {/* title */}
                {/* Large Title */}
                <div className={styles.largeTitleContainer}>
                    <h2 className={styles.largeTitle}>
                      About Blooming Space
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Blooming