"use client"
import { useState, useEffect } from "react"
import Api from "@/app/_utils/Api"
import Image from "next/image"
import Link from "next/link"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import React from 'react'
function Categorieslist() {
    const [listOfcategories, setlistOfcategories] = useState([])
    const getCategorylist = () => {
        Api.getCategory().then((res) => {
            setlistOfcategories(res.data.data)

        })
    }
    useEffect(() => {
        getCategorylist()
    }, [])
    return (
        <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {listOfcategories.map((c, index) => {
                        return (

                            <CommandItem key={index} >
                                <Link className='mt-3 cursor-pointer flex gap-3' href={`/search/${c.name}`}>
                                    <Image src={`http://localhost:1337${c?.icon[0]?.url}`}
                                        width={30}
                                        height={30}
                                        alt={c.name} />
                                    <label className="cursor-pointer">{c.name}</label>
                                </Link>
                            </CommandItem>

                        );
                    })}
                </CommandGroup>

            </CommandList>
        </Command>
    )
}

export default Categorieslist
