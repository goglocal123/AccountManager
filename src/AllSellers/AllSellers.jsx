import React from "react";
import Heading from "../Heading/Heading";
import AccNavbar from "../AccManager Navbar/AccNavbar";
import "./allSellers.css";
import AllSellersTableBody from "./Table/AllSellersTableBody";

function AllSellers() {
	return (
		<div>
			<div class="above-navbar">
				<span class="section-heading"> All Sellers </span>
				<Heading />
			</div>

			<AccNavbar title="Home / All Sellers" />

			<div style={{display:"flex", justifyContent:"left", alignItems:"center"}}>
				<div style={{width:"100%"}}>
					<div class="search-form">
						<i class="fa fa-search" style={{ marginLeft: "2%" }}></i>
						<input
							type="text"
							class="form-control form-input"
							placeholder="Search by Seller"
						/>
					</div>
				</div>
                
				<div class="dropdown" style={{width:"15%"}}>
					<button
						class="btn sortBy-btn"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<span style={{ width: "100%" }}>Sort by</span>
						<i class="fa-solid fa-caret-down"></i>
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item" href="#">
							Action
						</a>
						<a class="dropdown-item" href="#">
							Another action
						</a>
						<a class="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>

            <AllSellersTableBody />
		</div>
	);
}

export default AllSellers;
