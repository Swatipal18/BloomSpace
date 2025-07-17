import React from 'react'
import SelectedWorks from './SelectedWorks/SelectedWorks'
import Gallery from './Gallery/Gallery'

function Work() {
    return (
        <div>
            {/* Selected Works */}
            <SelectedWorks/>
            {/* gallery */}
            <Gallery />
        </div>
    )
}

export default Work