import React, { useContext, useState } from "react";
import classes from "./LeftSideSec.module.css";
import SectionCard from "./SectionCard/SectionCard";
import context from "../../../../Context/Context";
import Review from "../../Review/Review";
import ReviewOverview from "../../Review/ReviewOverview/ReviewOverview";
import starAnimated from "../../../../assets/Icons/animatedStar2.gif";
import ReviewForm from "../../Review/ReviewForm/ReviewForm";
import { ToastContainer, toast } from "react-toastify";
const LeftSideSec = () => {
  const { docInfo, userReview } = useContext(context);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const userIsLoggedIn = Boolean(localStorage.getItem("userId"));

  const sectionList = [
    "services",
    "conditionsTreated",
    "surgeriesPerformed",
    "specialization",
    "professionalMemberships",
    "languagesSpoken",
  ];

  const updateReviewFormOpenState = () => {
    if (!userIsLoggedIn) {
      toast.error("You are not loggedIn!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log("toast trigger");
      return;
    }
    setIsReviewFormOpen((isOpen) => !isOpen);
    toast.success("Review Submitted successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  console.log(userReview);
  console.log("docInfo", docInfo);

  return (
    <div className={classes.LeftSideSec}>
      <div className={classes.ReviewOverview}>
        <img src={starAnimated} />
        <h1>
          Ratings and Reviews of {docInfo.name}{" "}
          <span style={{ color: "rgb(119, 115, 115)", fontWeight: "500" }}>
            ({docInfo.noOfReviews})
          </span>{" "}
        </h1>
      </div>

      <ReviewOverview
        satisfaction={docInfo.satisfiedPatients}
        overview={userReview.overview}
        updateReviewFormOpenState={updateReviewFormOpenState}
      />

      {isReviewFormOpen && (
        <ReviewForm
          updateReviewFormOpenState={updateReviewFormOpenState}
          docInfo={docInfo}
        />
      )}

      {sectionList.map((key, i) => {
        const convertedKey = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        return docInfo[key].length !== 0 ? (
          <SectionCard key={i} heading={convertedKey} data={docInfo[key]} />
        ) : null;
      })}

      <Review name={docInfo.name} noOfReviews={5} />
      <ToastContainer />
    </div>
  );
};

export default LeftSideSec;
