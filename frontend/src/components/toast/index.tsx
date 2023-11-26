import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const Toast = ({primary,secondary,icon}:any) => {
  return (
    <List sx={{ padding: "0px", margin: "0px",height:"30px",backgroundColor:"#FFFFFF" }}>
      <ListItem sx={{ p: 0,height:"20px"  }}>
        <ListItemAvatar
          sx={{
            backgroundColor: "#F6F6FA",
            height: "40px",
            borderRadius: "8px",minWidth:"30px"
          }}
        >
          <img src={icon} alt="Toast" style={{width:"23px",margin:"8px 10px"}} />
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} sx={{ pl: 1, "& .MuiTypography-root": {
            fontSize: 14, fontWeight:600,color:"#484848"
          },
          "& .MuiTypography-root.MuiListItemText-secondary": {
            fontSize: 12, // Font size for secondary text
            color:"#C5C5C5",
            fontWeight:400,pt:0.5
          }, }} />
      </ListItem>
    </List>
  );
};
export default Toast;
