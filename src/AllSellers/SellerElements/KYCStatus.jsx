import React from 'react'
import "./SellerEle.css"
import { useState } from "react";

function KYCStatus(prop) {
  
  var flag = 0;
  
  if(prop.status === "done")
    flag = 1;

  return (
    <div id="kyc-indicator" class="kycStatus-div" style={{backgroundColor: flag===0?"#E42B2B":"#5EAA22"}}>
        <p>{prop.level}</p>
    </div>
  )
  
}

export default KYCStatus