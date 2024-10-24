import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import Box from "@mui/material/Box";
import { Autocomplete, TextField } from "@mui/material";
import icon1 from "../../assets/images/HomeImages/docIcon.png";
import icon2 from "../../assets/images/HomeImages/hospIcon.png";
import icon3 from "../../assets/images/HomeImages/services.png";
import icon4 from "../../assets/images/HomeImages/condIcon.png";
import InputAdornment from "@mui/material/InputAdornment";
import icon5 from "../../assets/images/HomeImages/surgIcon.png";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { toast } from "react-toastify";

export default function SearchBar() {
  const [Item, setItem] = useState("");

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const Search = (value) => {
    const res = data.filter((e) => e.label == value);
    setItem(res);
    console.log("res", res);
    console.log("value", value);
    console.log("data", data);
    // Karachi Zainab Malik Doctor
    console.log(localStorage.getItem("city"), res[0].label, res[0].type);
    if (!localStorage.getItem("city")) {
      toast.error("Please Select City First");
    }

    if (res[0].type !== "Speciality" && res[0].type !== "Hospital") {
      console.log("returned");
      return;
    }

    if (res[0].type === "Speciality") {
      navigate(
        `/Doctor/Speciality/${res[0].label}/${localStorage.getItem("city")}`
      );
    } else if (res[0].type === "Hospital") {
      navigate(
        `/Hospital/${localStorage.getItem("city")}/${res[0].label
          .split(" ")
          .join("-")}`
      );
    }
    // } else if (res[0].type === "Services") {
    //   navigate(`/Services/${res[0].label}/${localStorage.getItem("city")}`);
    // } else if (res[0].type === "Condition") {
    //   navigate(`/Condition/${res[0].label}/${localStorage.getItem("city")}`);
    // } else {
    //   navigate(`/Surgery/${res[0].label}/${localStorage.getItem("city")}`);
    // }
  };
  //localhost:5173/Doctor/Speciality/Cardiologist/Karachi
  useEffect(() => {
    axios
      .get("http://localhost:5000/searchBarApi")
      .then((response) => {
        console.log(response);
        const uniqueData = response.data.map((option, index) => ({
          ...option,
          key: `option-${index}`,
        }));
        setData(uniqueData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Autocomplete
      id="country-select-demo"
      className={classes.SearchBar}
      options={data}
      freeSolo
      disableClearable
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          key={option.key}
          sx={{
            borderTopLeftRadius: "20px",
            "& > img": { mr: 2, flexShrink: 0 },
          }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={
              option.type === "Doctor"
                ? icon1
                : option.type === "Hospital"
                ? icon2
                : option.type === "Services"
                ? icon3
                : option.type === "Condition"
                ? icon4
                : icon5
            }
            srcSet={
              option.type === "Doctor"
                ? icon1
                : option.type === "Hospital"
                ? icon2
                : option.type === "Services"
                ? icon3
                : option.type === "Condition"
                ? icon4
                : icon5
            }
            alt=""
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <p>{option.label}</p>
            <p>{option.type}</p>
          </div>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          onChange={(e) => {
            console.log(e.target.value);
          }}
          onSelect={(e) => {
            Search(e.target.value);
          }}
          className={classes.searchField}
          {...params}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "transparent",
              },
          }}
          placeholder="Search for doctors, hospitals, specialities, services, diseases"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  sx={{
                    color: "#042343ff",
                    fontSize: "32px",
                    marginLeft: 4,
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    console.log("search clicked");
                    Search(params.inputProps.value);
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
