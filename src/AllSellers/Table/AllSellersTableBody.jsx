import React, { useEffect, useState } from 'react'
import "./allSellersTable.css";
import SellerItem from './SellerItem';
import {NavLink} from 'react-router-dom';

var axios = require('axios');
var data = '';


function AllSellersTableBody() {

  var config = {
    method: 'get',
    url: 'https://65.0.204.216/am/sellers/',
    headers: { },
    data : data
  };
  
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setSeller(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  
  if(!seller)
  {
    return (<div>

    </div>);
  }

  return (
    <table id="list-Table" class="table">
    <thead class="table-head-acc-manager">
        <tr>
            <th scope="col" id="list-first-item"><div class="addProduct-navbar-col">Seller ID </div></th>
            
            <th scope="col"><div class="addProduct-navbar-col">Company Name </div></th>
            <th scope="col"><div class="addProduct-navbar-col" >Category</div></th>
            <th scope="col"><div class="addProduct-navbar-col">Pending Tickets</div></th>
            <th scope="col"><div class="addProduct-navbar-col">Account Manager</div></th>
            <th></th>
        </tr>
    </thead>

    {seller.map(item => (
      
      <SellerItem id={item.seller_id} company={item.company_name} category={item.company_category} pending = "4763" accManger="Shubh Gupta"/>
    ))}


    {/* <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/>
    <SellerItem id="ZS28238" company="Publicis" category="General" pending="4780371" accManger="K. Raghuram"/> */}
    </table>
  )
}

export default AllSellersTableBody