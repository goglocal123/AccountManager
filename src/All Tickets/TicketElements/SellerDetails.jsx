import React, { useEffect, useState } from "react";

var axios = require('axios');
var data = '';



function SellerDetails(prop) {

	var config = {
		method: 'get',
		url: `https://65.0.204.216/am/sellers/${prop.sellerId}/`,
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
	}, [])

	if (!seller) {
		return (
			<div>
				Loading......
			</div>
		)
	}

	return (
		<div id="Seller-detials-box">
			<div id="detail-Heading">
				<div style={{ padding: "0.8rem" }}>
					<span style={{ opacity: "1", fontWeight: "500" }}>
						Seller Details{" "}
					</span>{" "}
				</div>
			</div>

			<div style={{ margin: "auto 2% 2% 2%" }}>
				<div style={{ display: "flex", justifyContent: "left" }}>
					<p class="label-heads">
						Company Name : <span class="lable-content">{seller.company_name}</span>
					</p>
					<p class="label-heads">
						Company Representative :{" "}
						<span class="lable-content">{prop.compRep}</span>
					</p>
					<p class="label-heads">
						Company e-mail : <span class="lable-content">{seller.company_mail}</span>
					</p>
				</div>

				<div class="label-heads" style={{ paddingBottom: "1%" }}>
					Comapny Contact : <span class="lable-content">{prop.mobile}</span>
				</div>
			</div>
		</div>
	);
}

export default SellerDetails;
