import * as React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect, useContext } from "react";
import "../Forms/forms.scss";
import Button from "@mui/material/Button";
import {
  Stepper,
  Box,
  Step,
  StepLabel,
  Typography,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import Header from "../Header/Header";
import { myContext } from "../Global";
import { Link, useNavigate } from "react-router-dom";

function Forms() {
  const steps = ["Personal Information", "Work History", "Education", "Skills"];
  // let [visible, setVisible] = useState(false);
  let [social, setSocial] = useState(false);
  const [activeStep, setActivestep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  let { details, setDetails, work, setWork, edu, setEdu, skills, setSkills } =
    useContext(myContext);
  let navigate = useNavigate();

  let socialLink = () => {
    setSocial(!social);
  };

  let handleFname = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      fname: value,
    });
  };
  let handleSname = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      sname: value,
    });
  };

  let handleProf = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      prof: value,
    });
  };
  let handleCountry = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      country: value,
    });
  };
  let handleCity = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      city: value,
    });
  };
  let handlePhone = (e) => {
    let value = Number(e.target.value);
    setDetails({
      ...details,
      phone: value,
    });
  };

  let handleEmail = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      email: value,
    });
  };
  let handleSocialLink = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      socialLink: value,
    });
  };

  let handlesocialWebsite = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      socialwebsite: value,
    });
  };



  let handleAddress = (e) => {
    let value = e.target.value;
    setDetails({
      ...details,
      address: value,
    });
  };

  let handleObjectives = (e) => {
    let value = e.target.value;
    setWork({
      ...work,
      objective: value,
    });
  };

  let handleWorkexperience = (e) => {
    let value = e.target.value;
    setWork({
      ...work,
      workexperience: value,
    });
  };
  let handleWorkHistory = (e) => {
    let value = e.target.value;
    setWork({
      ...work,
      workHistory: value,
    });
  };
  let handleEmployer = (e) => {
    let value = e.target.value;
    setWork({
      ...work,
      employer: value,
    });
  };

  let handleSchoolName = (e) => {
    let value = e.target.value;
    setEdu({
      ...edu,
      schoolname: value,
    });
  };
  let handleSchoolLocation = (e) => {
    let value = e.target.value;
    setEdu({
      ...edu,
      schoolLocation: value,
    });
  };

  let handleDegree = (e) => {
    let value = e.target.value;
    setEdu({
      ...edu,
      Degree: value,
    });
  };

  let handlefofstudy = (e) => {
    let value = e.target.value;
    setEdu({
      ...edu,
      fofstudy: value,
    });
  };

  let Gradstart = (e) => {
    let value = e.target.value;
    setEdu({
      ...edu,
      Gradstart: value,
    });
  };
  let GradEnd = (e) => {
    let value = e.target.value;
    setEdu({
      ...edu,
      GradEnd: value,
    });
  };

  
  let handleSkills = (e) => {
    let value = e.target.value;
    setSkills(value);
  };
  console.log(details);
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = (e) => {
    if (e.target.textContent == "Finish") {
      console.log(e.target.textContent);
      navigate("/Resume");
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActivestep((prev) => prev + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActivestep((prev) => prev - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("cant skip");
    }
    setActivestep((prev) => prev + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => setActivestep(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <div className="mockup">
          {activeStep == 0 ? (
            <div className="outlook">
              <span className="hori">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  value={details.fname}
                  variant="outlined"
                  onChange={(e) => {
                    handleFname(e);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Surname"
                  value={details.sname}
                  variant="outlined"
                  onChange={(e) => {
                    handleSname(e);
                  }}
                />
              </span>
              <span className="add">
                <TextField
                  id="outlined-basic"
                  value={details.prof}
                  label="Profession"
                  variant="outlined"
                  onChange={(e) => {
                    handleProf(e);
                  }}
                />
              </span>
              <span className="hori">
                <TextField
                  id="outlined-basic"
                  label="City"
                  value={details.country}
                  variant="outlined"
                  onChange={(e) => {
                    handleCity(e);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Country"
                  value={details.country}
                  variant="outlined"
                  onChange={(e) => {
                    handleCountry(e);
                  }}
                />
              </span>
              <span className="hori">
                <TextField
                  id="outlined-basic"
                  label="Phone no"
                  variant="outlined"
                  value={details.phone}
                  onChange={(e) => {
                    handlePhone(e);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  value={details.email}
                  variant="outlined"
                  onChange={(e) => {
                    handleEmail(e);
                  }}
                />
              </span>
              <span className="add">
                <TextField
                  id="outlined-basic"
                  label="Address"
                  value={details.address}
                  variant="outlined"
                  onChange={(e) => {
                    handleAddress(e);
                  }}
                />
              </span>
              <Button onClick={socialLink}>Add Social links</Button>
              <span
                className="hori"
                style={{ visibility: social ? "visible" : "hidden" }}
              >
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Social Website
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={details.socialwebsite}
                    label="Social Website"
                    onChange={(e) => {
                      handlesocialWebsite(e);
                    }}
                  >
                    <MenuItem value="Twitter">Twitter</MenuItem>
                    <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                    <MenuItem value="Website">Website</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Social Link"
                  value={details.socialLink}
                  variant="outlined"
                  onChange={(e) => {
                    handleSocialLink(e);
                  }}
                />
              </span>
            </div>
          ) : activeStep == 1 ? (
            <div className="outlook">
              <span className="hori">
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Objective"
                    variant="outlined"
                    value={work.objective}
                    onChange={(e) => {
                      handleObjectives(e);
                    }}
                  />
                  <FormHelperText id="my-helper-text">
                    Write your goals and objectives
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Work Experience"
                    variant="outlined"
                    value={work.workexperience}
                    onChange={(e) => {
                      handleWorkexperience(e);
                    }}
                  />
                  <FormHelperText id="my-helper-text">
                    Your work experience suited for this role
                  </FormHelperText>
                </FormControl>
              </span>
              <span className="hori">
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Employer"
                    variant="outlined"
                    value={work.employer}
                    onChange={(e) => {
                      handleEmployer(e);
                    }}
                  />
                  <FormHelperText id="my-helper-text">
                    Write your achievements
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Work History"
                    variant="outlined"
                    value={work.workHistory}
                    onChange={(e) => {
                      handleWorkHistory(e);
                    }}
                  />
                  <FormHelperText id="my-helper-text">
                    Write your work history
                  </FormHelperText>
                </FormControl>
              </span>
            </div>
          ) : activeStep == 2 ? (
            <div className="outlook">
              <span className="hori">
                <TextField
                  id="outlined-basic"
                  label="School Name"
                  variant="outlined"
                  value={edu.schoolname}
                  onChange={(e) => {
                    handleSchoolName(e);
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="School location"
                  variant="outlined"
                  value={edu.schoolLocation}
                  onChange={(e) => {
                    handleSchoolLocation(e);
                  }}
                />
              </span>
              <span className="add">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Degree
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={edu.degree}
                    label="Degree"
                    onChange={(e) => {
                      handleDegree(e);
                    }}
                  >
                    <MenuItem value="High School Diploma">
                      High School Diploma
                    </MenuItem>
                    <MenuItem value="GED">GED</MenuItem>
                    <MenuItem value="Associate of Arts">
                      Associate of Arts
                    </MenuItem>
                    <MenuItem value="Associate of Science">
                      Associate of Science
                    </MenuItem>
                    <MenuItem value="Bachelor of Arts">
                      Bachelor of Arts
                    </MenuItem>
                    <MenuItem value="Bachelor of Science">
                      Bachelor of Science
                    </MenuItem>
                    <MenuItem value="BBA">BBA</MenuItem>
                    <MenuItem value="Master of Arts">Master of Arts</MenuItem>
                    <MenuItem value="Master of Science">
                      Master of Science
                    </MenuItem>
                    <MenuItem value="MBA">MBA</MenuItem>
                    <MenuItem value="J.D">J.D</MenuItem>
                    <MenuItem value="M.D">M.D</MenuItem>
                    <MenuItem value="Ph.D">Ph.D</MenuItem>
                    <MenuItem value="no degree">No degree</MenuItem>
                  </Select>
                </FormControl>
              </span>
              <span className="add">
                <TextField
                  id="outlined-basic"
                  label="Field of Study"
                  variant="outlined"
                  value={edu.fofstudy}
                  onChange={(e) => {
                    handlefofstudy(e);
                  }}
                />
              </span>
              <span className="hori">
                <TextField
                  id="outlined-basic"
                  label="Grad start"
                  
                  variant="outlined"
                  value={edu.Gradstart}
                  onChange={(e) => {
                    Gradstart(e);
                  }}
                />
                <TextField
                  id="outlined-basic"
                 
                  label="Grad End"
                  variant="outlined"
                  value={edu.GradEnd}
                  onChange={(e) => {
                    GradEnd(e);
                  }}
                />
              </span>
            </div>
          ) : activeStep == 3 ? (
            <div className="outlook">
              <span className="add">
                <TextField
                  id="outlined-basic"
                  label="Skills"
                  variant="outlined"
                  value={skills}
                  onChange={(e) => {
                    handleSkills(e);
                  }}
                />
              </span>
            </div>
          ) : (
            "loading..."
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                skip
              </Button>
            )}
            <Button onClick={(e) => handleNext(e)}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </div>
      )}
    </Box>
  );
}

export default Forms;
