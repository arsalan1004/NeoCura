import React, { useState } from "react";
import classes from "./ReviewForm.module.css";
import Close from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import axios from "axios";
const ReviewForm = (props) => {
  const [description, setDescription] = useState("");
  const [consultationTime, setConsultationTime] = useState(0); // date time

  const [waitTime, setWaitTime] = useState(10); // in minutes

  const [satisfaction, setSatisfaction] = useState(false);
  const [diagnosis, setDiagnosis] = useState(false);
  const [staffBehavior, setStaffBehavior] = useState(false);
  const userIsLoggedIn = Boolean(localStorage.getItem("userId"));
  /**
   * desc
   * satisfaction
   * consultationTime
   * diagnosis
   * waitTime
   * staffBehavior
   */
  console.log("docInfi", props.docInfo);
  console.log("userData", localStorage.getItem("userData"));

  console.log("description", description);
  console.log("consultationTime", consultationTime);
  console.log("waitTime", waitTime);
  console.log("satisfaction", satisfaction);
  console.log("diagnosis", diagnosis);
  console.log("staffBehavior", staffBehavior);

  const dateTimeInputHandler = (value) => {
    setConsultationTime(value);
    console.log("datetime", new Date(value));
  };

  const formatDate = (date) => {
    // Extract parts of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
    const day = String(date.getDate()).padStart(2, "0");

    // Extract hours and convert to 12-hour format
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

    // Construct the final formatted string
    return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (description === "" || consultationTime === 0 || waitTime === 0) {
      alert("Please fill all the fields Correctly");
      return;
    }

    const reviewData = {
      desc: description,
      consultTime: formatDate(new Date(consultationTime)),
      waitTime: String(waitTime),
      satisfaction: satisfaction,
      diagnosis: String(diagnosis),
      staffBehaviour: String(staffBehavior),
      docId: Number(props.docInfo.docId),
      patientId: Number(JSON.parse(localStorage.getItem("userData")).patientId),
    };

    console.log();

    console.table(reviewData);
    props.updateReviewFormOpenState(); // close the form

    try {
      const response = await axios.post(
        "http://localhost:5000/addDocReview",
        reviewData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.reviewFormModalContainer}>
      <div className={classes.reviewFormModal}>
        <div className={classes.closeButtonContainer}>
          <h2>Write a Review</h2>
          <button onClick={props.updateReviewFormOpenState}>
            <Close />
          </button>
        </div>

        <form className={classes.formContainer} onSubmit={onSubmitHandler}>
          <div className={classes.descriptionContainer}>
            <label>Describe Your Experience</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className={classes.consultationContainer}>
            <label>Consultation Time</label>
            <input
              type="datetime-local"
              id="consultation-time"
              name="consultation-time"
              value={consultationTime}
              min="2020-06-07T00:00"
              max="2025-06-14T00:00"
              onChange={(e) => dateTimeInputHandler(e.target.value)}
            />
          </div>

          <div className={classes.waittimeContainer}>
            <label>Wait Time (min)</label>
            <input
              type="number"
              value={waitTime}
              min={10}
              step={5}
              onChange={(e) => setWaitTime(e.target.value)}
            />
          </div>

          <div className={classes.checkboxContainer}>
            <div className={classes.checkboxSubContainer}>
              <label>Satisfaction</label>
              <input
                type="checkbox"
                id="checkbox"
                checked={satisfaction}
                onChange={() => setSatisfaction((s) => !s)}
              />
            </div>
          </div>

          <div className={classes.checkboxContainer}>
            <div className={classes.checkboxSubContainer}>
              <label>Diagnosis</label>
              <input
                type="checkbox"
                id="checkbox"
                checked={diagnosis}
                onChange={() => setDiagnosis((d) => !d)}
              />
            </div>
          </div>

          <div className={classes.checkboxContainer}>
            <div className={classes.checkboxSubContainer}>
              <label>Staff Behavior</label>
              <input
                type="checkbox"
                id="checkbox"
                checked={staffBehavior}
                onChange={() => setStaffBehavior((b) => !b)}
              />
            </div>
          </div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
