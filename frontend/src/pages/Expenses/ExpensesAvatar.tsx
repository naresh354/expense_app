import Avatar1 from "../../../public/assets/avatar1.png"
import Avatar2 from "../../../public/assets/avatar2.png"
import Avatar3 from "../../../public/assets/avatar3.png"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ExpensesAvatar() {
  return (
    <div>
      <div className="avatar-group">

        <div className="avatar">
          <img src={Avatar1} />
        </div>

        <div className="avatar">
          <img src={Avatar2}/>
        </div>

        <div className="avatar">
          <img src={Avatar3} />
        </div>

        <div className="avatar">
        <AddCircleOutlineIcon sx={{ fontSize: "2.3rem", color: "#D2DCE8", ml: 1.2 }}></AddCircleOutlineIcon>
        </div>

      </div>
    </div>
  );
}

export default ExpensesAvatar;
