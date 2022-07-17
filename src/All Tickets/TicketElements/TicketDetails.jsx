import React from "react";
import PdfAttachments from "./PdfAttachments";
import "./TicketEle.css";

function TicketDetails(props) {
	return (
		<div id="Ticket-detials-box">
			<div id="detail-Heading">
				<div style={{ padding: "0.8rem" }}>
					<span style={{ opacity: "1", fontWeight: "500" }}>
						Ticket Details{" "}
					</span>{" "}
					<span style={{ fontSize: "85%" }}>({props.id})</span>
				</div>
			</div>

            <div style={{margin:"auto 2% 2% 2%"}}>
                <div style={{display:"flex", justifyContent:"left"}}>
                    <p class="label-heads">Module : <span class="lable-content">{props.module}</span></p>
                    <p class="label-heads">Date : <span class="lable-content">{props.date}</span></p>
                    <p class="label-heads">Title : <span class="lable-content">{props.title}</span></p>
                </div>

                <div class="label-heads">
                    Description:
                    <p class="lable-content">
                    {props.desc}
                    </p>
                </div>

                <div style={{paddingBottom:"1%"}}>
                    <p class="label-heads">Attachments :</p>
                    <PdfAttachments />
                    <PdfAttachments />
                    <PdfAttachments />
                </div>
            </div>
		</div>
	);
}

export default TicketDetails;
