import React, { useState ,useEffect} from "react";
import { Calendar } from "react-multi-date-picker"
import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker"
import "./style.css";
import { getalldata } from "./api";

const Date = () => {
    const [value, setValue] = useState()
   
   
const [arr,setarr]=useState()

const getAlldate=async()=>{
    let response= await getalldata();
    setarr(response.data.data.attributes.title)
   
   }
   useEffect(() => {
    getAlldate()
    
  }, []);

console.log(arr)
  return (
    <>

    
    <DatePicker
    weekStartDayIndex={6}
    className="bg-gray"
    format="DD MMMM YYYY"
 minDate={new DateObject().toFirstOfMonth()}
 
  mapDays={({ date,today }) => {
    
    let isWeekend = [1,2,3,4,5].includes(date.weekDay.index) 
  
    if (date.day==28 && date.monthIndex==0 && date.year==2023 || date.day==18 && date.monthIndex==1 && date.year==2023)return {
        disabled: true,
        style: { background: "red",color: "#484848",opacity: '0.75'},
        onClick: () => alert("The Date is already Booked ")
      }
     
    if (isWeekend) return {
      disabled: true,
      style: { color: "#484848",opacity: '0.50'  },
      onClick: () => alert("Bookings are only available for Saturday and Sunday")
    }
    if (!isWeekend && today<date) return {
        disabled: false,
        className: 'available',
        style: {color: "black" ,cursor:'pointer'},
       
      }
    if (today>date) return {
        disabled: true,
        style: { color: "#484848",opacity: '0.50'  },
        onClick: () => alert("Bookings are only available for Saturday and Sunday")
      }

   
   
   
  }}
  value={value}
  onChange={setValue}
  placeholder="Select Booking Date"
  style={{textAlign: "center"}}
  
/>

</>
  );
};
 export default Date;