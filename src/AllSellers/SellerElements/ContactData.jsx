import React from 'react'
import "./SellerEle.css"

function ContactData(props) {
	return (
		<tr class="contact-card-table-row">
			<td class="contact-card-table-data" style={{ color: "#646464" }}>
				{props.name}
			</td>
			<td class="contact-card-table-data" style={{ color: "#1F2124" }}>
				{props.desig}
			</td>
			<td class="contact-card-table-data" style={{ color: "#1F2124" }}>
				{props.mobile}
			</td>
			<td class="contact-card-table-data" style={{ color: "#1F2124" }}>
				{props.email}
			</td>
			<td class="contact-card-table-data" style={{ color: "#1F2124" }}>
				{props.notes}
			</td>
		</tr>
	)
}

export default ContactData