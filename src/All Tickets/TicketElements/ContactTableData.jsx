import React from "react";
import "./TicketEle.css";

function ContactTableData(props) {
	return (
		<tr class="contact-card-table-row">
			<td class="contact-card-table-data" style={{ color: "#646464" }}>
				{props.name}
			</td>
			<td class="contact-card-table-data" style={{ color: "#1F2124" }}>
				{props.contact}
			</td>
			<td class="contact-card-table-data" style={{ color: "#1F2124" }}>
				{props.desig}
			</td>
		</tr>
	);
}

export default ContactTableData;
