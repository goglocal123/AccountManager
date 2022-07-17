import React from "react";
import "./Sidebar.css";
import goGlocal from "../resources/goGlocal white logo.png";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
	return (
		<div id="sidebar">
			<header>
				{/* <a href="#">GoGlocal</a> */}
				<img src={goGlocal}></img>
			</header>
			<div class="nav">
				<div style={{ marginTop: "1rem" }}>
					<NavLink className="sidebarLinks" to="/profile">
						<a href="#" class="pad-max">
							<i class="fa-regular fa-user"></i>Profile
						</a>
					</NavLink>
				</div>

				<div style={{ marginTop: "1rem" }}>
					<NavLink className="sidebarLinks" to="/allSellers">
						<a href="#" class="pad-max">
							<i class="fa-solid fa-users"></i>Sellers
						</a>
					</NavLink>
				</div>

				<div style={{ marginTop: "1rem" }}>
					<NavLink className="sidebarLinks" to="/allTickets">
						<a href="#" class="pad-max">
							<i class="fa-solid fa-ticket"></i>Tickets
						</a>
					</NavLink>
				</div>
				{/* <NavLink to="/profile">
					<div style={{ marginTop: "1rem" }}>
						<a href="#" class="pad-max">
							<i class="fa-regular fa-user"></i>Profile
						</a>
					</div>
				</NavLink>

				<NavLink to="/allSellers">
					<div style={{ marginTop: "1rem" }}>
						<a href="#" class="pad-max">
							<i class="fa-solid fa-users"></i>Sellers
						</a>
					</div>
				</NavLink>

				<NavLink to="/allTickets">
					<div style={{ marginTop: "1rem" }}>
						<a href="#" class="pad-max">
							<i class="fa-solid fa-ticket"></i>Tickets
						</a>
					</div>
				</NavLink> */}
			</div>
		</div>
	);
}
