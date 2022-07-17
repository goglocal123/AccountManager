import React from "react";
import "./accNavbar.css";

function AccNavbar(prop) {
	return (
		<div class="navbox">
			<div class="navbar-title">{prop.title}</div>
		</div>
	);
}

export default AccNavbar;
