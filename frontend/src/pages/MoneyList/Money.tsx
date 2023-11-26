import { Box, Button, Typography } from "@mui/material";
import BoxImage from "../../../public/assets/box.png";
import flower from "../../../public/assets/flower.png";
import Slider from "@mui/material/Slider";
import axiosService from "network/axios";
import { useState, useEffect } from "react";

function Money() {

 
  const [expenseData, setExpenseData] = useState<any >([])

  const getExpenseData = () => {
    axiosService.getSetupServices("/user/expense").then(res => setExpenseData(res)).catch(err => console.log(err))
  }

  useEffect(() => {
   getExpenseData()
  }, [])


  return (
    <Box sx={{ p: 4 }}>
      <Typography
        sx={{ color: "#262A41", fontSize: "1rem", fontWeight: "700" }}
      >
        Where your money go?
      </Typography>

      <Box sx={{ p: 2 }}>
        {expenseData?.data?.expenseDetails?.slice(0, 5)?.map((e: any) => (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{e?.expenseCatgory}</Typography>
              <Typography>{e?.amount}</Typography>
            </Box>
            <Slider
            size="small"
              sx={{
                color: "#31BA96",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#31BA96",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#31BA96",
                },
              }}
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </>
        ))}
      </Box>

      <Box sx={{ mt: 15 }}>
        <Box
          component="img"
          src={BoxImage}
          sx={{ position: "absolute", paddingLeft: "70px", mt: "-30px" }}
        ></Box>
        <Box
          component="img"
          src={flower}
          sx={{ position: "absolute", paddingLeft: "250px", mt: "-50px" }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "#EDF0F6",
            p: 5,
            height: "250px",
            borderRadius: "15px",
          }}
        >
          <Typography
            sx={{
              color: "#273240",
              fontSize: "1rem",
              fontWeight: "700",
              mt: 5,
            }}
          >
            Save more money
          </Typography>
          <Typography sx={{ color: "#8d8d8d", fontSize: "0.9rem", mt: 1 }}>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </Typography>
          <Button
            type="submit"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#101010",
              borderRadius: "10px",
              p: 1.2,
              mt: 3,
              fontWeight: "600",
              width: "100%",
              "&:hover": {
                backgroundColor: "#101010",
              },
            }}
          >
            VIEW TIPS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Money;
