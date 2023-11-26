import React, { useState, useEffect } from "react"
import { Box, Grid, Typography } from '@mui/material'
import ExpensesAvatar from './ExpensesAvatar'
import ExpensebarChart from './ExpenseBarChart'
import ExpenseList from './ExpenseList'
import MoneyListContainer from 'pages/MoneyList'
import axiosService from 'network/axios'

function Expense() {

 
  return (
    <Box>
        <Grid container>
            <Grid xs={7} sx={{ p: 4 }}>
               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }} > 
               <Box>
                    <Typography sx={{ color: "#262A41", fontSize: "2rem", fontWeight: "700" }}>Expenses</Typography>
                    <Typography sx={{ color: "#8d8d8d", fontSize: "0.8rem" }}>01 - 25 March, 2020</Typography>
                </Box>
                <Box>
                    <ExpensesAvatar />
                </Box>
               </Box>
               <ExpensebarChart />
               <ExpenseList/>
            </Grid>
            <Grid xs={5} sx={{  background: "#F9FAFC" }}>
               <MoneyListContainer />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Expense