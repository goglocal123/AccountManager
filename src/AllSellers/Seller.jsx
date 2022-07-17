import React, { useEffect, useState } from "react";
import AccNavbar from "../AccManager Navbar/AccNavbar";
import Heading from "../Heading/Heading";
import CompanyDetails from "./SellerElements/CompanyDetails";
import ContactDetails from "./SellerElements/ContactDetails";
import TicketList from "./SellerElements/TicketList";
import { useParams } from 'react-router-dom';
var axios = require('axios');
var data = '';

function Seller(prop) {

	const { id } = useParams();
	// console.log(id);

	var config = {
		method: 'get',
		url: `https://65.0.204.216/am/sellers/${id}/`,
		headers: {},
		data: data
	};

	const [seller, setSeller] = useState(null);

	useEffect(() => {

		axios(config)
			.then(function (response) {
				setSeller(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});

	})


	if (!seller)
		return (
			<div>
				Please Wait ......
			</div>
		)

	return (
		<div>
			<div class="above-navbar">
				<span class="section-heading"> Seller ID {seller.seller_id} </span>
				<Heading />
			</div>

			<AccNavbar title="Home / All Sellers / Sellers" />

			<div style={{ marginTop: "5%" }}>
				<CompanyDetails compName={seller.company_name} compaddr={seller.company_address} category={seller.company_category} web={seller.website} mob={seller.contact} email={seller.company_mail} date={seller.date_of_onboarding} kyc={seller.kyc} />
			</div>
			<div style={{ marginTop: "5%" }}>
				<ContactDetails id={seller.seller_id} />
			</div>
			<div style={{ marginTop: "5%", marginBottom: "5%" }}>
				<TicketList id={seller.seller_id} />
			</div>
		</div>
	);
}

export default Seller;
