import React from "react";
import AccNavbar from "../AccManager Navbar/AccNavbar";
import Heading from "../Heading/Heading";
import TableBody from "../Table/TableBody";
import "./allTickets.css";

// Note: The CSS of its div are in heading.css

function AllTickets() {
	return (
		<div>
			<div class="above-navbar" >
				<span class="section-heading"> All Tickets </span>
				<Heading />
			</div>

			<AccNavbar title="Home / All Tickets" />
            <TableBody />
			<button id="export-to-excel-btn" style={{width:"25%", height:"2.5rem",fontSize:"85%", background: "#646464", borderRadius:"16px", color:"white", border:"none"}}>Export to Excel</button>
		</div>
	);
}

export default AllTickets;
