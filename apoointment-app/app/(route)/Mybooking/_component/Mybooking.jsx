"use client"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react";
import Api from "@/app/_utils/Api";
import BlogItem from '@/app/_component/Loading';
import { toast } from "sonner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
function Mybooking({ filter }) {

    const [updatebook, setupdatebook] = useState(filter);
    const deletebooklist = (id) => {
        Api.deletebook(id).then((res) => {
            const newbooking = updatebook.filter((e) => {
                return e.documentId != id;
            })
            if (res) {
                toast("Your booking has been successfully deleted..")
            }
            else {
                toast("Your booking has been Failed delete")
            }
            setupdatebook(newbooking);
        })
    }
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div>
            <div>
                {updatebook?.map((book, index) => {
                    return (
                        <div key={index} className=" block md:flex border-[1px] p-5 mt-5">
                            <div className="flex  " >
                                <div><Image src={`https://doctor-appointment-yfh5.onrender.com${book?.doctor?.image[0]?.url}`} width={200} height={200} alt="photo" className="rounded-full w-[180px] md:w-[200px] h-[150px] mr-30" /></div>
                                <div className="flex flex-col justify-center" >
                                    <h2 className="mt-3 text-[13px] md:text-[16px]" ><span className="bg-lime-300 p-1 rounded-full" >Name:</span>{book?.doctor?.name}</h2>
                                    <h2 className="mt-3 text-[13px] md:text-[16px]" ><span className="bg-lime-300 p-1 rounded-full" >Address:</span>{book?.doctor?.address}</h2>
                                    <h2 className="mt-3 text-[13px] md:text-[16px]" ><span className="bg-lime-300 p-1 rounded-full" >Phone:</span>{book?.doctor?.phone}</h2>
                                    <h2 className="mt-3 text-[13px] md:text-[16px]" ><span className="bg-lime-300 p-1 rounded-full" >Date And Time:</span> {book?.date},{book?.time} </h2>
                                </div>
                            </div>
                            <div className="flex md:flex-col mt-6 md:mt-0 justify-center ml-40" ><AlertDialog>
                                <AlertDialogTrigger><h2 className="hover:bg-red-700 p-2 rounded-full bg-lime-300 cursor-pointer scale-105 transition-all">Delete Appointment</h2></AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your Booking and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="cursor-pointer scale-105 transition-all" >Cancel</AlertDialogCancel>
                                        <AlertDialogAction className="hover:bg-red-700 cursor-pointer scale-105 transition-all" onClick={() => { deletebooklist(book.documentId); }} >Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog> </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Mybooking
