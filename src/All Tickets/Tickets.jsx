import React, { useEffect, useState } from 'react'
import AccNavbar from '../AccManager Navbar/AccNavbar'
import Heading from '../Heading/Heading'
import "./allTickets.css"
import ContactCards from './TicketElements/ContactCards'
import HistoryOfTicket from './TicketElements/HistoryOfTicket'
import SellerDetails from './TicketElements/SellerDetails'
import TicketDetails from './TicketElements/TicketDetails'
import { useParams } from 'react-router-dom'
import TakeActionModal from './TicketElements/TakeActionModal'

// Note: The CSS of its div are in heading.css

var axios = require('axios');
var data = '';



function Tickets() {

    const { id } = useParams();

    const [ticket, setTicket] = useState(null);


    var config = {
        method: 'get',
        url: `https://65.0.204.216/tickets/${id}/`,
        headers: {},
        data: data
    };

    useEffect(() => {
        axios(config)
            .then(function (response) {
                setTicket(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, [])

    if (!ticket) {
        return (
            <div>
                Loading......
            </div>
        )
    }

    return (
        <div>
            <div class="above-navbar" >
                <span class="section-heading"> Tickets </span>
                <Heading />
            </div>
            <AccNavbar title="Home / All Tickets / Ticket" />
            <div style={{ marginTop: "5%" }}>
                <TicketDetails id={ticket.ticket_id} module={ticket.module} date={ticket.issue_date} desc={ticket.description} title={ticket.title} />
            </div>
            <div style={{ marginTop: "5%" }}>
                <SellerDetails sellerId={ticket.seller_id} compRep={ticket.company_rep_name} mobile={ticket.company_rep_mobile} />
            </div>
            <div style={{ marginTop: "5%" }}>

                <ContactCards seller_id={ticket.seller_id} />

            </div>
            <div style={{ marginTop: "5%" }}>
                <HistoryOfTicket id={ticket.ticket_id} />
            </div>
            <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                <button class="take-action-btn" data-toggle="modal" data-target="#takeAction-pop">Take Action</button>
            </div>
            <TakeActionModal id={ticket.ticket_id} />
        </div>
    )
}

export default Tickets