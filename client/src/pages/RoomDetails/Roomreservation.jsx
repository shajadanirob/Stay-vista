/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import Calender from "./Calender";
import { useState } from "react";


const Roomreservation = ({roomData}) => {
   
    // totalDays * price
    // const totalDays = parseInt(
    //     formatDistance(new Date(roomData?.to) , new Date(roomData?.from)).split(' ')[0]
    // )
    // console.log(totalDays)

     // price calculation
    // const totalPrice = totalDays * roomData?.price;
    // const [value,setValue] = useState({
    //     startDate : new Date(roomData?.from),
    //     endDate : new Date(roomData?.to),
    //     key:'selection'
    // })
    // console.log(value)
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-bold">
                    $ {roomData?.price}
                    <div className="font-light text-neutral-600">night</div>

                </div>
                <hr />
            </div>
            <hr />
            <div className="flex justify-center items-center">
            <Calender/>
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>${roomData?.price}</div>
            </div>
        </div>
    );
};

export default Roomreservation;