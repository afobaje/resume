import React from "react";
import jsPDF from "jspdf";
import Forms from "../Forms/Forms";
import "../Header/header.scss";
import { Link } from "react-router-dom";
import Resume from "../resume/Resume";
import ReactDOMServer from 'react-dom/server';
import { renderToString } from "react-dom/server";
const Header = () => {
 
  // let createPDF = () => {
  //   const sting = renderToString(<Resume />);
  //   let pdf = new jsPDF();
  //   pdf.fromHTML(sting);
  //   pdf.save("resume");
  // };

  let pdf=new jsPDF();
  let createPDF=()=>{
    const Foo='foo'
    pdf.html(ReactDOMServer.renderToStaticMarkup(<Resume/>),{
      callback:()=>{
        pdf.save('resme.pdf');
      }
    })    
  }
  return (
    <header className="head">
      <nav>
        <div className="logo">
          <h3>
            <Link to="/" id="palat">
              RESM
            </Link>
          </h3>
        </div>
        <ul id="hdul">
          <li>CONTACT US</li>
          <li>ABOUT US</li>

          <li className="resume">
            <Link to="/Forms" id="russia">
              CREATE RESUME
            </Link>
          </li>
          {/* <li>
          <button className="resume" onClick={createPDF}>
            DOWNLOAD RESUME
          </button>
          </li>
          <li className="resume">DOWNLOAD RESUME</li> */}
        </ul>
        {/* <span className="download">
          <button>DOWNLOAD RESUME</button>
        </span> */}
      </nav>
    </header>
  );
};

export default Header;
