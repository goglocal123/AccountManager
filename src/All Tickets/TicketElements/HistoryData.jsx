import React from 'react'
import "./TicketEle.css"

function HistoryData(props) {
  return (
    <tr class="contact-card-table-row">
			<td class="contact-card-table-data" style={{ color: "#646464" }}>
				{props.date}
			</td>
			<td class="contact-card-table-data" style={{ color: "#1F2124" }}>
				{props.action}
			</td>
			<td class="contact-card-table-data" style={{ color: "#1F2124" }}>
				{props.comment}
			</td>
		</tr>
  )
}

export default HistoryData