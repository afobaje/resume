import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Forms from "./Forms/Forms";
import Resume from "./resume/Resume";
export const myContext = createContext();
const Global = () => {
  let [details, setDetails] = useState({
    fname: "",
    sname: "",
    prof: "",
    city:'',
    country: "",
    phone: "",
    address: "",
    email: "",
    socialwebsite:'',
    socialLink:''
    });
  let [work, setWork] = useState({
    objective: "",
    workexperience: "",
    employer: "",
    workHistory: "",
  });
  let [edu, setEdu] = useState({
    schoolname: "",
    schoolLocation: "",
    Degree: "",
    fofStudy: "",
    Gradstart: "",
    GradEnd: "",
  });
  let [skills, setSkills] = useState("");
  return (
    <myContext.Provider
      value={{
        details,
        setDetails,
        work,
        setWork,
        edu,
        setEdu,
        skills,
        setSkills,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="Forms" element={<Forms />} />
          <Route path="Resume" element={<Resume />} />
        </Routes>
      </Router>
    </myContext.Provider>
  );
};

export default Global;
