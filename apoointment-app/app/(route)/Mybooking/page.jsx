"use client"
import { useState, useEffect } from 'react'
import Api from '@/app/_utils/Api'
import Mybooking from './_component/Mybooking'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

function page() {
    const [bookinglist, setbookinglist] = useState([]);
    const { user } = useKindeBrowserClient()
    const getMybooking = () => {
        Api.getmybooking(user?.email).then((res) => {
            setbookinglist(res.data.data)
        })
    }
    useEffect(() => {
        getMybooking();
    }, [user])
    const BookingFilterpast = bookinglist.filter((e) => {
        return (e?.date <= new Date().toLocaleDateString())
    })
    const BookingFilterupcoming = bookinglist.filter((e) => {
        return (e?.date > new Date().toLocaleDateString())
    })
    return (
        <div>
            <div>
                <Tabs defaultValue="UpComing">
                    <TabsList className="w-full mt-8">
                        <TabsTrigger value="UpComing" >UpComing</TabsTrigger>
                        <TabsTrigger value="Past">Past</TabsTrigger>
                    </TabsList>
                    <TabsContent value="UpComing" className="mt-5"><Mybooking filter={BookingFilterupcoming} /></TabsContent>
                    <TabsContent value="Past" className="mt-5" ><Mybooking filter={BookingFilterpast} /></TabsContent>
                </Tabs></div>
        </div >
    )
}
export default page
