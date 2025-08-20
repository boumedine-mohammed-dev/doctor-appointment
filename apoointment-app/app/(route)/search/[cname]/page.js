import React from 'react'
import Categoriesdoctor from '../_components/Categoriesdoctor'
function page({ params }) {
    return (
        <div>
            <Categoriesdoctor c={params.cname} />
        </div>
    )
}

export default page
