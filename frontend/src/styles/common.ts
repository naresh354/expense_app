//Customizing mui components styles json
// for all cursor pointer to app
const cursorPointer = {
  cursor: "pointer",
};
// for login,reset,forgotpassword button styling
const userButtonStyle = {
  textTransform: "none",
  background: "#A73EBC",
  ": hover": {
    background: "#A73EBC",
  },
  fontSize: "12px",

  height: "35px",
  mt: 2,
};
// for full app button styling
const appButtonStyle = {
  textTransform: "none",
  background: "#A73EBC",
  ": hover": {
    background: "#A73EBC",
  },
  fontSize: "12px",
};
// for full app form label styling
const formLabelStyle = {
  color: "formLabelColor.main",
  fontSize: "11px",
};
// for full app errror validation message label styling
const errorTextStyle = {
  color: (theme: any) => theme.palette.error.main,
  fontSize: "10px",
  textAlign: "left",
  marginBottom: "20px"
};
// for global level divider styling
const dividerStyle = {
  borderColor:
    "linear-gradient(90deg, rgba(217, 217, 217, 0.00) 0%, #D9D9D9 48.44%, rgba(217, 217, 217, 0.00) 100%)",
  p: 0.8,
};
// for all job tables header styling
const jobHeaderStyle = {
  color: "primary.main",
  fontWeight: 600,
  fontSize: "15px",
};
// for app link styling
const linkStyle = {
  color: "#484848",
  textDecoration: "none",
};
// for app cancel button styling
const CancelButtonStyle = {
  textTransform: "none",
  color: "#CECECE",
};
// for app confirm button styling
const ConfirmButtonStyle = {
  backgroundColor: "appThemeColor.main",
  textTransform: "none",
  color: "#FFFFFF",
  fontWeight: 400,
  border: "none",
  "&:hover": {
    backgroundColor: "appThemeColor.main",
  },
};

// for table pagination in mui
const paginationLabelStyle = {
  fontSize: "13px",
  color: "#484848",
  position: "absolute", // Set to absolute position
  left: 15, // Move to the left corner
  top: 0,
  margin: "10px 0",
  fontWeight: 400,
};
const paginationSelectedPropsStyle = {
  fontSize: "0.8rem",
  position: "absolute", // Set to absolute position
  left: 100, // Move to the left corner
  top: 0, // Align with the top
  margin: "8px 0",
  border: "1px solid #B8B8B8",
  marginLeft: "10px",
  backgroundColor: "inherit",
  borderRadius: "8px",
};

const actionMenuPropsStyle = {
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  mt: 1.5,
  "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 },
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    //   top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: "background.paper",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
};
export const muiCustomization = {
  cursorPointer,
  appButtonStyle,
  userButtonStyle,
  formLabelStyle,
  errorTextStyle,
  dividerStyle,
  jobHeaderStyle,
  linkStyle,
  CancelButtonStyle,
  ConfirmButtonStyle,
  paginationLabelStyle,
  paginationSelectedPropsStyle,
  actionMenuPropsStyle,
};
