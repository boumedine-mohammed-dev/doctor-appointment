"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import Api from "../_utils/Api";
import Link from "next/link";
export default function SearchCategories() {
    const [listOfcategories, setlistOfcategories] = useState([])
    const getCategorylist = () => {
        Api.getCategory().then((res) => {
            setlistOfcategories(res.data.data)

        })
    }
    useEffect(() => {
        getCategorylist()
    }, [])
    console.log(listOfcategories)
    return (
        <div className="flex items-center mb-10 flex-col"  >
            <h2 className="font-bold text-4xl mb-7 ">Search <span className="text-lime-600">Categories</span></h2>
            <div className="flex items-center w-full max-w-sm">
                <Input type="email" placeholder="Email" />
                <Button type="submit"> Subscribe</Button>
            </div>
            <div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-10">
                    {listOfcategories.map((c, index) => {
                        return (
                            <Link href={`/search/${c?.name}`} key={index}>
                                <div className="flex text-center flex-col items-center bg-lime-200 p-5 m-2 rounded-lg hover:scale-110 transition-all cursor-pointer"><Image src={`https://doctor-appointment-yfh5.onrender.com${c?.icon[0]?.url}`}
                                    width={70}
                                    height={70}
                                    alt={c.name} />
                                    <label>{c.name}</label>
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </div>
    );


}