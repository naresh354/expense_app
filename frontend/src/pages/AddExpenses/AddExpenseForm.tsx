import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker";
import validationSchema from "./Validation";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import axiosService from "network/axios";
import { useLoader } from "context/LoaderProvider";
import { toast } from "react-toastify";

function AddExpenseForm() {
  const [selectCategory, setSelectCategory] = React.useState("");
 
  const navigate = useNavigate();
  const { hideLoader, showLoader }: any = useLoader();

  const handleChange = (_event: any) => {
    setSelectCategory(_event.target.value as string);
    console.log(_event, "event");
    formik.setFieldValue("expenseCatgory", _event.target.value);
  };

  const handleFormSubmit = (values: any) => {
    // Show a loader or loading indicator
    showLoader();
    // Send a POST request using axiosService to the login endpoint
    axiosService.postSetupServiceToken("/user/expense/add", values)
      .then((res: any) => { 
        const response = res?.data;
        console.log(res, "response");
        // Check if the response indicates success
        if (response?.status) {
          // Store access token, refresh token, and user data in session storage
          toast.success(response?.message)
          // Navigate to the home page
          navigate("/expense");
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
  };

  const formik = useFormik({
    initialValues: {
      expenseCatgory: "",
      expense: "",
      date: null, // Initial date value, you may set it to a default date if needed
      amount: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit
  });

  

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl sx={{ width: "45ch", mt: 2.3 }}>
            <Typography
              sx={{
                color: "#273240",
                fontSize: "0.8rem",
                fontWeight: "700",
                mb: 1,
              }}
            >
              Expense category
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectCategory}
              size="small"
              name="expenseCatgory"
              displayEmpty
              renderValue={
                selectCategory !== ""
                  ? undefined
                  : () => (
                      <Typography
                        style={{ fontSize: "0.8rem", color: "#8d8d8d" }}
                      >
                        Expense category
                      </Typography>
                    )
              }
              // label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Food and Drinks">Food and Drinks</MenuItem>
              <MenuItem value="Shopping">Shopping</MenuItem>
              <MenuItem value="Housing">Housing</MenuItem>
              <MenuItem value="Transportation">Transportation</MenuItem>
              <MenuItem value="Vehicle">Vehicle</MenuItem>
            </Select>
            <Typography sx={{ color: "#DC3434", fontSize: "0.8rem" }}>
              {formik.errors.expenseCatgory}
            </Typography>
          </FormControl>

          <FormControl sx={{ width: "45ch", mt: 2.3 }} variant="standard">
            <Typography
              sx={{
                textAlign: "left",
                color: "#273240",
                fontSize: "0.8rem",
                mb: 1,
                fontWeight: "700",
              }}
            >
              Expense
            </Typography>
            <TextField
              name="expense"
              size="small"
              autoComplete="off"
              placeholder="Expense"
              sx={{
                "& input::placeholder": {
                  fontSize: "0.8rem",
                },
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Typography sx={{ color: "#DC3434", fontSize: "0.8rem" }}>
              {formik.errors.expense}
            </Typography>
          </FormControl>

          <FormControl sx={{ width: "45ch", mt: 2.3 }} variant="standard">
            <Typography
              sx={{
                textAlign: "left",
                color: "#273240",
                fontSize: "0.8rem",
                fontWeight: "700",
              }}
            >
              Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  defaultValue={dayjs("2022-04-17")}
                 
                  onChange={(newValue) => {
                    formik.setFieldValue("date", newValue?.toDate());
                    console.log(newValue?.toDate(), "newvalue");
                  }}
                  slotProps={{ textField: { size: "small", name: "date" } }}
                  sx={{
                    width: "45ch",
                    "& input::placeholder": {
                      fontSize: "0.8rem",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Typography sx={{ color: "#DC3434", fontSize: "0.8rem" }}>
              {formik.errors.date}
            </Typography>
          </FormControl>

          <FormControl sx={{ width: "45ch", mt: 2.3 }} variant="standard">
            <Typography
              sx={{
                textAlign: "left",
                color: "#273240",
                fontSize: "0.8rem",
                mb: 1,
                fontWeight: "700",
              }}
            >
              Amount [₹]
            </Typography>
            <TextField
              name="amount"
              size="small"
              autoComplete="off"
              placeholder="Amount"
              sx={{
                "& input::placeholder": {
                  fontSize: "0.8rem",
                },
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Typography sx={{ color: "#DC3434", fontSize: "0.8rem" }}>
              {formik.errors.amount}
            </Typography>
          </FormControl>

          <FormControl sx={{ width: "45ch", mt: 3 }} variant="standard">
            <Button
              type="submit"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#DC3434",
                width: "100%",
                "&:hover": {
                  backgroundColor: "#DC3434",
                },
              }}
            >
              SUBMIT
            </Button>
          </FormControl>
        </form>
      </Box>
    </div>
  );
}

export default AddExpenseForm;
