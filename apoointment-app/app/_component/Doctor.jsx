"use client"
import { useEffect, useState } from "react";
import Api from "../_utils/Api";
import Image from "next/image";
import Link from "next/link";
import BlogItem from "./Loading";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Doctor() {
    const { user, isAuthenticated, } = useKindeBrowserClient();
    const [Doctorslist, setDoctorslist] = useState([]);
    const getDocterlist = () => {
        Api.getDoctors().then((res) => {
            setDoctorslist(res.data.data)
        })
    }
    useEffect(() => {
        getDocterlist();
    }, [])
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 p-3" id="explore" >
            {Doctorslist?.length > 0 ? Doctorslist.map((doctor, index) => {
                return (
                    < Link key={index} href={`${isAuthenticated ? `/details/${doctor?.documentId}` : "/"}`}>
                        <div className="border-[1px] rounded-lg p-3 m-3">
                            <Image
                                src={`https://doctor-appointment-12ox.onrender.com${doctor?.image[0]?.url}`}
                                width={500}
                                height={200}
                                alt={doctor.name}
                                className="h-[200px] w-full object-cover"
                            />
                            <div>
                                <h2 className="bg-lime-200 text-lime-600 w-fit mt-3 rounded-full p-2 text-bold" >{doctor?.category?.name}</h2>
                                <h2 className="mt-3"><span className="text-lime-600">Name:</span>{doctor?.name}</h2>
                                <h2 className="mt-3"><span className="text-lime-600">Year Of Experience:</span>{doctor?.year_of_experience}</h2>
                                <h2 className="mt-3"><span className="text-lime-600">Adress:</span>{doctor?.address}</h2>
                                <h2 className="mt-3"><span className="text-lime-600">Phone:</span>{doctor?.phone}</h2>
                                <h2 className="mt-3 p-3 border-lime-800 border-[1px] w-fit hover:bg-lime-300 hover:scale-110 transition-all cursor-pointer">Book Now</h2>
                            </div>
                        </div>
                    </Link>


                )
            }) : <>
                {list.map((item, index) => {
                    return (
                        <BlogItem key={index} />
                    )
                })}
            </>}
        </div >
    );

}
