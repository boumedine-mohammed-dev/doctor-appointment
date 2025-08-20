import React from 'react'
import Categorieslist from './_components/Categorieslist'
function layout({ children }) {
    return (
        <div className='grid grid-cols-4 '>
            <div className='col-span-1 w-full h-screen mt-5 '>
                <Categorieslist />
            </div>
            <div className='col-span-3'>
                {children}
            </div>
        </div>
    )
}

export default layout
