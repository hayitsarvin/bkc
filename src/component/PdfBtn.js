import React from 'react'
import { Link } from 'react-router-dom';
// import pdf from "../../public/pdfs/BMA-401.pdf"
// const pdf =require("../pdfs/BMA-401.pdf")
import ExamplePdf from"./pdfs/BMA-401.pdf";

const PdfBtn = ({file , name}) => {


    const onButtonClick = () => {
        const pdfUrl = "https://bonyankala.runflare.run/" + file;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = name + ".pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    // <div className='btn pdf-btn' onClick={onButtonClick}>
        
    //   pdf
    // </div>
    <a href={"https://bonyankala.runflare.run/"+file} className='btn pdf-btn'>
      pdf
    </a>
  )
}

export default PdfBtn