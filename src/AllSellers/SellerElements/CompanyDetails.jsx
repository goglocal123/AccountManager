import React from 'react'
import KYCStatus from './KYCStatus'
import "./SellerEle.css"

// For  KYC status, the status takes in value "done" and "not-done". So if staus is done the display is green else red
function CompanyDetails(props) {

    function getStatus(level) {
        if (props.kyc >= level)
            return "done";

        return "not-done";
    }

    return (
        <div id="Ticket-detials-box">
            <div id="detail-Heading">
                <div style={{ padding: "0.8rem" }}>
                    <span style={{ opacity: "1", fontWeight: "500" }}>
                        Company Details{" "}
                    </span>{" "}
                </div>
            </div>

            <div style={{ margin: "auto 2% 2% 2%" }}>
                <div style={{ display: "flex", justifyContent: "left" }}>
                    <p class="label-heads">Company Name : <span class="lable-content">{props.compName}</span></p>
                    <p class="label-heads">Comapany Address : <span class="lable-content">{props.compaddr}</span></p>
                </div>

                <div style={{ display: "flex", justifyContent: "left" }}>
                    <p class="label-heads">Company Category : <span class="lable-content">{props.category}</span></p>
                    <p class="label-heads">Website URL : <span class="lable-content">{props.web}</span></p>
                </div>

                <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                    <p class="kyc">KYC Status : </p>
                    <KYCStatus status={getStatus(1)} level="Level 1" />
                    <KYCStatus status={getStatus(2)} level="Level 2" />
                    <KYCStatus status={getStatus(3)} level="Level 3" />
                </div>

                <div style={{ display: "flex", justifyContent: "left" }}>
                    <p class="label-heads">Mobile : <span class="lable-content">{props.mob}</span></p>
                </div>

                <div style={{ display: "flex", justifyContent: "left" }}>
                    <p class="label-heads">Email : <span class="lable-content">{props.email}</span></p>
                </div>

                <div style={{ display: "flex", justifyContent: "left" }}>
                    <p class="label-heads">Date of Onboarding : <span class="lable-content">{props.date}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails