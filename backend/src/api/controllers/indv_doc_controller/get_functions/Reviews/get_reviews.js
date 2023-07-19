const { database } = require("../../../../../config/db_setup.js");
const { getReviewId } = require("./get_reviewId.js");
const {calcConsultTime} = require('./calc_consultTime.js');
const { calcDiagnosis } = require("./calc_diagnosis.js");
const { calcStaffBeh } = require("./calc_staffBehaviour.js");
const { getRevInfo } = require("./getReviewInfo.js");

const getReviews = async (id) => {
  const reviews = await getReviewId(id);

  const overview = {
    ConsulationTime: await calcConsultTime(id),
    Diagnosis: await calcDiagnosis(id), 
    StaffBehaviour: await calcStaffBeh(id),
    Cleanliness: "5.0"
  }

  const review = await Promise.all(reviews.map(async(rev)=>{
    return await getRevInfo(rev);
  }));

  const result = {
    overview: overview,
    reviews: review
  }

  return result;
};

module.exports = { getReviews };
