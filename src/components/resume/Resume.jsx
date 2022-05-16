import React, { useContext } from "react";
import { myContext } from "../Global";
import { jsPDF } from "jspdf";
import location from "../resume/location.png";
import phone from "../resume/phone-call.png";
import mail from "../resume/mail.png";
import mortarboard from "../resume/mortarboard.png";
import Suitcase from "../resume/suitcase.png";
import Twitter from "../resume/twitter.png";
import Website from "../resume/world-wide-web.png";
import Linkedin from "../resume/linkedin.png";
import Skills from "../resume/skills.png";
import "../resume/Resumce.scss";
import html2canvas from "html2canvas";
const Resume = () => {
  let { details, work, edu, skills } = useContext(myContext);

  let createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };
  return (
    <div>
      <button id="john" onClick={createPDF}>
        Download
      </button>
      <div className="main-body" id="pdf">
        <header className=".resumeheader">
          <div className="initials">
            <h2>
              {details.fname} {details.sname}
            </h2>
            <h3>{details.prof}</h3>
          </div>

          <ul className="gear">
            <span className="flow">
              <li id="location">
                <h5>
                  <span>
                    <img src={location} alt="" width={20} height={20} />
                  </span>{" "}
                  {details.city},{details.country}
                </h5>
              </li>
              <li id="phone">
                <h5>
                  <span>
                    <img src={phone} alt="" width={20} height={20} />
                  </span>
                  {details.phone}
                </h5>
              </li>
            </span>
            <span className="flow">
              <li id="email">
                <h5>
                  <span>
                    <img src={mail} alt="" width={20} height={20} />
                  </span>
                  {details.email}
                </h5>
              </li>
              <li className="handle">
                <h5>
                  <span
                    style={{
                      visibility:
                        details.socialwebsite !== "" ? "visible" : "hidden",
                    }}
                  >
                    <img
                      src={
                        details.socialwebsite == "Twitter"
                          ? Twitter
                          : details.socialwebsite == "LinkedIn"
                          ? Linkedin
                          : details.socialwebsite == "Website"
                          ? Website
                          : ""
                      }
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                  {details.socialLink}
                </h5>
              </li>
            </span>
          </ul>
        </header>
        <body>
          <div>
            <div className="objective">
              <h3>Objective</h3>
              {work.objective}
            </div>
            <div className="skillshare">
              <h2>
                <span id="manure">
                  <img src={Skills} alt="skills" width={30} height={30} />
                </span>
                Skills
              </h2>
              <ul>
                <li>{skills}</li>
              </ul>
            </div>
            <div className="workHistory skillshare">
              <h2>
                <span id="manure">
                  <img src={Suitcase} alt="skills" width={20} height={20} />
                </span>
                Work History
              </h2>
              <ul>
                <li>
                  <div>
                    <h2 style={{color:'black'}}>{details.prof}</h2>
                    <p>{work.employer}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edu skillshare">
              <h2>
                <span id="manure">
                  <img src={mortarboard} alt="skills" width={30} height={30} />
                </span>{" "}
                Education
              </h2>
              <ul>
                <li>
                  <h5>
                    {edu.Degree}: {edu.fofStudy}
                  </h5>
                  <p>
                    {edu.schoolname}-{edu.schoolLocation}
                  </p>
                  <p>
                    {edu.Gradstart}-{edu.GradEnd}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Resume;
