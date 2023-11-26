import { Box, Grid, Typography } from '@mui/material'
import ExpensesAvatar from 'pages/Expenses/ExpensesAvatar'
import MoneyListContainer from 'pages/MoneyList'
import AddExpenseForm from './AddExpenseForm'


function AddExpense() {
  return (
    <Box>
        <Grid container>
            <Grid xs={7} sx={{ p: 4 }}>
               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }} > 
               <Box>
                    <Typography sx={{ color: "#262A41", fontSize: "2rem", fontWeight: "700" }}>Add Expense</Typography>
                    <Typography sx={{ color: "#8d8d8d" }}>01 - 25 March, 2020</Typography>
                </Box>
                <Box>
                    <ExpensesAvatar />
                   
                </Box>
               </Box>
               <AddExpenseForm />
               
            </Grid>
            <Grid xs={5} sx={{ background: "#F9FAFC" }} >
               <MoneyListContainer  />
            </Grid>
        </Grid>
    </Box>
  )
}

export default AddExpense