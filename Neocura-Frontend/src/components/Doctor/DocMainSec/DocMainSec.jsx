import React from "react";
// import {detailInfo, FAQData } from "../../../StateData/DocData/DocData";

import DocSec from "./DocSec/DocSec";
import classes from "./DocMainSec.module.css";
// import DetailInfoSec from "./DetailInfoSec/DetailInfoSec";

const DocMainSec = ({ docData, locData }) => {
  return (
    <div className={classes.DocMainSec}>
      {console.log(docData)}
      {console.log(docData.length)}
      {docData &&
        docData.map((item, index) => {
          return docData.length > 0 ? (
            <DocSec key={index} docInfo={item} locData={locData[index]} />
          ) : (
            <h3>No Doctors Available for this Search Result.</h3>
          );
        })}
      {docData.length === 0 && (
        <h3>No Doctors Available for this Search Result.</h3>
      )}
    </div>
  );
};

export default DocMainSec;
