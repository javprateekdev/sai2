import React from "react";
import Date from "./Date";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styled } from "@mui/material";
import "./style.css";

const StyledCal = styled(CalendarMonthIcon)`
  font-size: 40px;
  color: #ca5202f6;
  margin-top: 1px;
`;
const Sidebar = () => {
  return (
    <>
      <div
        style={{
          height: "50vh",
          float: "right",
          padding: '2px',
        }}
      >
        <div style={{marginTop: "10px",border: '1.5px solid #dd5200',paddingRight: '0px',paddingLeft: '0px',borderRadius: '25px',width: "100%"}}>
          <div>
          <h2
            style={{ marginTop: "30px", fontSize: "20px", marginLeft: "0px" ,textAlign: "center"}}
          >
            For Booking Bhajans <br/> Fill in the details
          </h2>
        </div>

        <div style={{ display: "flex", marginTop: "20px",alignContent:"center", marginLeft: "30px" }}>
          <div>
             <Date /> 
          </div>
          <div>
          <StyledCal />
          </div>
        </div>
        <div style={{marginLeft: "30px",alignContent:"center"}}>
          <div>
          <input
            placeholder="Enter Name"
            style={{
              height: "30px",
              width: "200px",
              border: "1px solid #ca5202f6",
              fontSize: "14px",
              marginTop: "10px",
              borderRadius: "50px",
              padding: '15px',
            }}
          />
          </div>
          <div>
          <input
            placeholder="Enter PhoneNumber"
            style={{
              height: "30px",
              width: "200px",
              border: "1px solid #ca5202f6",
              fontSize: "14px",
              marginTop: "10px",
              borderRadius: "50px",
              padding: '15px',
            }}
          />
          </div>
          <div>
          <input
            placeholder="Enter Email id"
            style={{
              height: "30px",
              width: "200px",
              border: "1px solid #ca5202f6",
              fontSize: "14px",
              marginTop: "10px",
              borderRadius: "50px",
              padding: '15px',
            }}
          />
          </div>
          <button
            style={{
              height: "30px",
              width: "100px",
              fontSize: "20px",
              background: "#ca5202f6",
              color: "white",
              marginTop: "10px",
              marginLeft: "50px",
              borderRadius: "15px",
              marginBottom:"10px"
            }}
          >
            Submit
          </button>
          </div>
        </div>
      
        <div style={{ marginTop: "15px", fontSize: "18px",textAlign:"center",fontWeight:600,marginLeft: "-40px" }}>Upcoming Bhajans</div>
   
          <div className="c">
<div className="card-home">
  <span>Bhajan 1</span>
  <span>Bhajan 2</span>
  <span>Bhajan 3</span>
  <span>Bhajan 4</span>
  <span>Bhajan 5</span>
  <span>Bhajan 6</span>
  <span>Bhajan 7</span>
  <span>Bhajan 8</span>
</div>
</div>
      </div>
     
      <div></div>
    </>
  );
};

export default Sidebar;
