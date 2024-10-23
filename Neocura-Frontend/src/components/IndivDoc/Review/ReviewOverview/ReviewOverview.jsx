import React from "react";
import classes from "./ReviewOverview.module.css";
import star from "../../../../assets/Icons/star.png";
import Button from "../../../../UI/Buttons/SimpleButton/Button";

/**
 * @props (overview, satisfaction, updateReviewFormOpenState)
 * @returns
 */

const ReviewOverview = (props) => {
  const userType = localStorage.getItem("userType");

  const scrollToReview = () => {
    const reviewSec = document.getElementById("review-section");
    reviewSec.scrollIntoView({ behavior: "smooth" });
  };

  console.log(props.overview);
  console.log("docInfo in ReviewOverview", props.docInfo);

  return (
    <div className={classes.ReviewOverviewSec}>
      <div className={classes.ReviewOverview}>
        <div className={classes.Overview}>
          <ul>
            {Object.entries(props.overview).map(([key, value]) => (
              <li>
                {value} <img src={star} />{" "}
                <span className={classes.Key}>{key}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.Satisfaction}>
          <p>Satisfaction Rate of Patients</p>
          <div>{props.satisfaction}%</div>
        </div>
      </div>

      <div className={classes.buttonContainer}>
        {userType !== "doctor" && (
          <Button
            text="Write Review"
            clicked={props.updateReviewFormOpenState}
          />
        )}
        <Button text="View Patient Reviews" clicked={scrollToReview} />
      </div>
    </div>
  );
};
export default ReviewOverview;
