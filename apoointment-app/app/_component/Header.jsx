"use client";
import Link from "next/link";
import Image from "next/image";
import AccountMenuCustom from "./sidebar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { use } from "react";
export default function Header() {
    const Menu = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Explore", path: "#explore" },
        { id: 3, name: "Contact Us", path: "#contactus" },
    ]
    const { user, isAuthenticated, } = useKindeBrowserClient();

    console.log(user);

    return (
        <div className="flex items-center justify-between p-3 shadow-sm">
            <div className="flex items-center gap-10">
                <Image src={"/assets/imag/logo.png"}
                    width={100}
                    alt="logo"
                    height={100} />
                <ul className="md:flex gap-8 hidden">
                    {Menu.map((item, index) => {
                        return (
                            <Link href={item.path} key={item.id}>
                                <li className="hover:text-lime-600 cursor-pointer hover:scale-105" >{item.name}</li>
                            </Link>
                        )
                    })}
                </ul></div>
            {isAuthenticated ?
                (
                    <div><AccountMenuCustom user={user} /></div>) : <LoginLink><Button className="cursor-pointer" >Get Started</Button></LoginLink>
            }
        </div >
    );
}
