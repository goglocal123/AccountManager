import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";
import "./table.css";
var axios = require("axios");
var data = "";

// class="shadow p-3 mb-5 bg-white rounded "
function TableBody() {
  const [tickets, setTickets] = useState(null);

  var config = {
    method: "get",
    url: "https://65.0.204.216/am/tickets/",
    headers: {},
    data: data,
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setTickets(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  if (!tickets) return <div></div>;

  return (
    <table id="list-Table" class="table">
      <thead class="table-head-acc-manager">
        <tr>
          <th scope="col" id="list-first-item">
            <div class="addProduct-navbar-col">Ticket ID </div>
          </th>
          <th scope="col">
            <div class="addProduct-navbar-col">Date</div>
          </th>
          <th scope="col">
            <div class="addProduct-navbar-col">Company Name </div>
          </th>
          <th scope="col">
            <div class="addProduct-navbar-col">Seller ID</div>
          </th>
          <th scope="col">
            <div class="addProduct-navbar-col">Module</div>
          </th>
          <th scope="col">
            <div class="addProduct-navbar-col">Details</div>
          </th>
          <th scope="col">
            <div class="addProduct-navbar-col">Status</div>
          </th>
          <th></th>
        </tr>
      </thead>

      {tickets.map((ticket) => {
        return (
          <RowItem
            id={ticket.ticket_id}
            date={ticket.issue_date}
            sellerID={ticket.seller_id}
            module={ticket.module}
            details={ticket.description}
            status={ticket.status}
          />
        );
      })}

      {/* <RowItem id="ZS3828" date="April 1, 2022" company = "CCD" sellerID = "2789" module="General" details="How to carry On?" status="Resolved"/> */}
    </table>
  );
}

export default TableBody;
