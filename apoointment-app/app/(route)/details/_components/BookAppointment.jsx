"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState, useEffect, use } from "react"
import { toast } from "sonner"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import Api from "@/app/_utils/Api"
function BookAppointment({ doctor }) {
    const [date, setDate] = useState(new Date());
    const [time, settime] = useState([]);
    const [disabledbtn, setdisbledbtn] = useState(false);
    const [selecttime, setselecttime] = useState("");
    const { user } = useKindeBrowserClient()
    const gettime = () => {
        const newtime = [];
        for (let i = 10; i <= 12; i++) {
            newtime.push({ time: i + ":00 PM" });
            newtime.push({ time: i + ":30 PM" })
        }
        for (let i = 1; i <= 5; i++) {
            newtime.push({ time: i + ":00 PM" });
            newtime.push({ time: i + ":30 PM" })
        }
        settime(newtime);
    }
    useEffect(() => {
        gettime();
    }, [])
    const PastDay = (date) => {
        return date < new Date()
    }
    const Booking = () => {
        const data = {
            data: {
                userName: user.family_name + " " + user.given_name,
                email: user.email,
                date: date.toLocaleDateString(),
                time: selecttime,
                doctor: doctor.documentId,
            },
        };
        setdisbledbtn(true);
        Api.bookAppointment(data).then(
            (res) => {
                if (res) {
                    toast("Your booking has been successfully completed.")
                    setdisbledbtn(false)
                }
                else {
                    toast("Your booking has been Failed")
                }
            }
        )
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Book Appointment</Button>
            </DialogTrigger>
            <DialogContent >
                <DialogTitle />
                <div className="grid grid-cols-1 md:grid-cols-2" >
                    <div className="flex sm::mt-5" >
                        <Calendar
                            mode="single"
                            disabled={PastDay}
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-5">
                        {time.map((e, index) => {
                            return (
                                <h2 onClick={() => {
                                    setselecttime(e.time)
                                }} className={` ${e.time == selecttime && "bg-lime-300"}  hover:bg-lime-300 hover:text-lime-800 cursor-pointer rounded-full text-center  items-center `} key={index}> {e.time} </h2>
                            )
                        })}
                    </div>
                </div>
                <div ><Button className="w-full" onClick={Booking} disabled={!(date && selecttime) || disabledbtn}>Book Appointment</Button></div>
            </DialogContent>
        </Dialog>
    )
}
export default BookAppointment