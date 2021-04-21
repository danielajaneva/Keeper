import React from "react";

function Footer(){
  const dinamicYear = new Date().getFullYear();
  return(
    <footer>
    <p>@Copyright {dinamicYear}</p>
  </footer>
  );
}

export default Footer;
