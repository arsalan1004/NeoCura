import React, { useEffect, useState } from "react";
import classes from "./style.module.css";
import IconButton from "../Buttons/IconButton/IconButton";
import icon from "../../assets/Icons/videoCon2.png";
import doc111 from "../../assets/images/docImgs/doc_111.png";
import doc44 from "../../assets/images/docImgs/doc44.png";
import doc33 from "../../assets/images/docImgs/doc33.png";
import { Link } from "react-router-dom";
import pat1 from "../../assets/images/pat1.avif";
import pat2 from "../../assets/images/pat2.avif";
import pat3 from "../../assets/images/pat3.avif";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DocSec = ({ data, setFresh, fresh }) => {
  const [PatData, setPatData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getPatientById/${data?.patId}`)
      .then((res) => {
        console.log(res.data.data);
        setPatData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  const DeleteBooking = () => {
    axios
      .delete(
        `http://localhost:5000/onlineBooking/deleteBooking/${data?.onlineConsultId}`
      )
      .then((res) => {
        toast.error("Appointment Deleted !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFresh(!fresh);
        console.log(res.data.data);
        // setPatData(res.data.data);
      })
      .catch((err) => {
        toast.error("Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(err);
      });
  };
  const AcceptBooking = () => {
    axios
      .get(
        `http://localhost:5000/onlineBooking/AcceptBooking/${data?.onlineConsultId}`
      )
      .then((res) => {
        toast.success("Appointment Confirmed !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFresh(!fresh);
        console.log(res.data.data);
        // setPatData(res.data.data);
      })
      .catch((err) => {
        toast.error("Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(err);
      });
  };
  console.log(data, PatData);
  return (
    <div className={classes.DocSec}>
      <div className={classes.DocSecInfo}>
        <div className={classes.Image}>
          <img
            src={
              PatData?.img == "pat1"
                ? pat1
                : PatData?.img == "pat2"
                ? pat2
                : pat3
            }
            alt="Doctor's Image"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
            gap: "60px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "22px" }}>{PatData?.name}</h1>
          </div>

          <div className={classes.ExtraInfo}>
            <div>
              <h3>Date</h3>
              <p>{data?.Date}</p>
            </div>
            <div>
              <h3>Time</h3>
              <p>{data?.Time}</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>{PatData?.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ButtonSec}>
        <IconButton
          clicked={() => {
            AcceptBooking();
          }}
          id="check"
          passedClass={classes.ProfileButton2}
        >
          Accept
        </IconButton>

        <IconButton
          clicked={() => {
            DeleteBooking();
          }}
          id="cross"
          passedClass={classes.Button3}
        >
          Reject
        </IconButton>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DocSec;
