"use client";
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import Api from '@/app/_utils/Api'
import DoctorDetails from '../_components/DoctorDetails'
import Doctoruggestions from '../_components/DoctorGgestion'
function page({ params }) {
    const actualParams = use(params);
    const [doctor, setDoctor] = useState([])
    const getDoctorById = () => {
        Api.getDetalisDoctor(actualParams.id).then(res => {
            setDoctor(res.data.data)
        })
    }
    useEffect(() => {
        getDoctorById()

    }, [])
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='p-5 md:px-20'>
            <h2 className='font-bold text-[22px]'>Details</h2>

            <div className='grid md:grid-cols-4 grid-cols-1'>

                <div className=' col-span-3 '>
                    <DoctorDetails doctor={doctor} />
                </div>

                <div>
                    <Doctoruggestions />
                </div>
            </div>
        </div>
    )
}
export default page