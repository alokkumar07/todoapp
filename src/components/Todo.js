import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Remove} from "../redux/actions/action";


const Todo = () => {
  const { User_data } = useSelector((state) => state.todoreducers);
  // console.log(User_data);

  const dispatch = useDispatch();
  const [showeye, setshoweye] = useState(false);
  const [showeyevalue, setshoweyeValue] = useState("");

  const remove =(id)=>{
   dispatch(Remove(id));
   
  }

  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {User_data.map((ele, k) => {
          return (
            <>
              <div
                className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
                key={k}
                style={{
                  background: "#dcdde1",
                  borderRadius: "3px",
                  height: "45px",
                }}
              >
                <li style={{ listStyle: "none" }}>{ele} </li>
                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                  <EditIcon style={{ color: "#3c40c6", cursor: "pointer" }} />
                  <DeleteIcon 
                  onClick={()=>remove(k)}
                  style={{ color: "red", cursor: "pointer" }} />
                  <RemoveRedEyeIcon
                    onClick={() => {
                      setshoweye(true);
                      setshoweyeValue(ele);
                    }}
                    style={{ color: "#1dd1a1", cursor: "pointer" }}
                  />
                </div>
              </div>
            </>
          );
        })}
        <Modal show={showeye}>
          <h1 className="text-center">{showeyevalue}</h1>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setshoweye(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Todo;
