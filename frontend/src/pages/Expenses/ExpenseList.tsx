import React, { useState, useEffect } from "react"
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Home from "../../../public/assets/home.png";
import DeleteIcon from '@mui/icons-material/Delete';
import axiosService from "network/axios";
import { toast } from "react-toastify";

function ExpenseList() {

  const [expenseData, setExpenseData] = useState<any >([])

  const getExpenseData = () => {
    axiosService.getSetupServices("/user/expense").then(res => setExpenseData(res)).catch(err => console.log(err))
  }

  useEffect(() => {
   getExpenseData()
  }, [])


  console.log(expenseData, "expenseData");

  const deleteExpense = (id: any) => {
    axiosService.deleteService(`/user/expense/${id}`)
    .then((res: any) => { 
      const response = res?.data;
      console.log(res, "response");
      // Check if the response indicates success
      if (response?.status) {
        // Store access token, refresh token, and user data in session storage
        toast.success(response?.message)
        // Navigate to the home page
        getExpenseData();
      } else {
        // Set the failure response message
        console.log(response?.message);
      }
    })
    .catch((err: any) => {
      // Set the failure response message based on the error
      toast.error(err.response?.data?.message || err?.message)
      console.log(err.response?.data?.message || err?.message);
    })
    .finally(() => {
      hideLoader(); // Hide the loader or loading indicator
    });
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          sx={{ color: "#262A41", fontSize: "1rem", fontWeight: "700" }}
        >
          Today
        </Typography>
       <MoreHorizIcon sx={{ fontSize: "2.3rem", color: "#D2DCE8" }}></MoreHorizIcon>
      </Box>
      <Divider />
      <Box>
      {expenseData?.data?.expenseDetails?.slice(0, 5)?.map((e: any)=> (
<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>

        <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box component="img" sx={{ backgroundColor: e?.color, borderRadius: "50%", p: 1 }} src={Home}></Box>
        <Box sx={{ display:"grid", ml: 1.5 }}>
        <Typography sx={{ color: "#262A41", fontSize: "0.9rem", fontWeight: "700" }} >{e?.expenseCatgory}</Typography>
        <Typography sx={{ color: "#8d8d8d", fontSize: "0.8rem" }}>{e?.date}</Typography>
        
        </Box>
        </Box>
        <DeleteIcon onClick={() => deleteExpense(e?._id)} sx={{ cursor: "pointer", color: "#FF0000" }}></DeleteIcon>
        <Typography sx={{ color: "#273240", fontSize: "0.9rem", fontWeight: "700" }}>{e?.amount}</Typography>


      </Box> 
      ))}
      </Box>
      

      
      
    </Box>
  );
}

export default ExpenseList;
function hideLoader() {
  throw new Error("Function not implemented.");
}

