import React, { useState } from "react";
import AddCommentModal from "./AddCommentModal";
import $ from 'jquery'

var axios = require('axios');
var data = '{\r\n    "ticket_id": "t123",\r\n    "module": "Logistics",\r\n    "issue_date": "2022-06-21",\r\n    "title": "Schedule Pickup",\r\n    "description": "Order ID X has been scheduled to be picked up from B",\r\n    "attachments": "",\r\n    "status": "Resolved",\r\n    "seller_id": "s123",\r\n    "company_rep_name": "Shubh",\r\n    "company_rep_mobile": "12341241"\r\n  }';



function TakeActionModal(prop) {

	console.log("Ticket Id is " + prop.id);
	function resolve() {

		console.log("Resolve done");

		//  var data = '{\r\n    "ticket_id": "t123",\r\n    "module": "Logistics",\r\n    "issue_date": "2022-06-21",\r\n    "title": "Schedule Pickup",\r\n    "description": "Order ID X has been scheduled to be picked up from B",\r\n    "attachments": "",\r\n    "status": "Resolved",\r\n    "seller_id": "s123",\r\n    "company_rep_name": "Shubh",\r\n    "company_rep_mobile": "12341241"\r\n  }';
		// var data = '{\r\n    "ticket_id": "t123",\r\n    "status": "Resol"\r\n  }';

		var data = '{\r\n    "ticket_id": `${prop.id}`,\r\n    "status": "Resolved"\r\n  }';

		var config = {
			method: "put",
			url: `https://65.0.204.216/am/tickets/update/${prop.id}/`,
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	const [smodal, setModal] = useState(1);

	function showclick() {
		setModal(2);
	}

	if (smodal == 1) {
		return (
			<div
				class="modal fade"
				id="takeAction-pop"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"

			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-body">
							<div style={{ display: "flex", justifyContent: "center" }}>
								<p>Take Action</p>
							</div>
							<div style={{ margin: "3% auto", display: "flex", justifyContent: "center" }}>
								<button class="take-action-btn" style={{ width: "50%", background: "#646464", border: "1px solid #646464", borderRadius: "16px" }} data-dismiss="modal" onClick={resolve}>Mark As Resolved</button>
							</div>
							<div style={{ margin: "3% auto", display: "flex", justifyContent: "center" }}>
								<button class="take-action-btn" style={{ width: "50%", background: "white", color: "black", border: "1px solid #646464", borderRadius: "16px" }} data-toggle="modal" data-target="#addComment-pop" onClick={showclick}>Add Comment</button>
								<AddCommentModal />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}


	return (<AddCommentModal />)


}


export default TakeActionModal;
