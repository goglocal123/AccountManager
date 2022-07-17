import React, { useEffect, useState } from "react";
import "./table.css";
import { NavLink } from "react-router-dom";

var axios = require("axios");
var data = "";

// Seller Data is being loaded here so that company name of the corresponding Ticket can be filled

function RowItem(prop) {
  const [seller, setSeller] = useState(null);

  var config = {
    method: "get",
    url: `https://65.0.204.216/am/sellers/${prop.sellerId}/`,
    headers: {},
    data: data,
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setSeller(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (!seller) {
    return <div>Loading .....</div>;
  }

  return (
    <tbody
      id="row-item-body"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
      }}
    >
      <tr id="list-body">
        <th scope="row ">
          <NavLink
            to={`/allTickets/ticket/${prop.id}`}
            style={{ color: "black" }}
          >
            <p class="non-img-col">{prop.id}</p>
          </NavLink>
        </th>
        <td>
          <p class="non-img-col">{prop.date}</p>
        </td>
        <td>
          <p class="non-img-col">{seller.company_name}</p>
        </td>
        <td>
          <p class="non-img-col">{prop.sellerID}</p>
        </td>
        <td>
          <p class="non-img-col">{prop.module}</p>
        </td>
        <td>
          <p class="non-img-col">{prop.details}</p>
        </td>
        <td>
          <button id="list-delete-btn">{prop.status}</button>
        </td>
        <td></td>
      </tr>
    </tbody>
  );
}

export default RowItem;
