import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import profImg from '../assets/displaypic.jpg';
import { BiSupport } from 'react-icons/bi';

import TicketDetail from '../components/Ticket/TicketDetail';
import SellerDetails from '../components/Ticket/SellerDetails';
import ContactCards from '../components/Ticket/ContactCards';
import TicketHistory from '../components/Ticket/TicketHistory';
import Breadcrumb from '../components/Breadcrumb';
import ActionModal from '../components/ActionModal';
import AddCommentModal from '../components/AddCommentModal';

const TicketDetails = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [commentModalIsShown, setCommentModalIsShown] = useState(false);
  const [ticket, setTicket] = useState([]);
  const { ticketId } = useParams();

  const config = {
    method: 'get',
    url: `https://65.0.204.216/am/tickets/${ticketId}/`,
    headers: {},
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axios(config);
      console.log(data);
      setTicket(data);
    };

    fetchDetails();
  }, []);

  const showActionModalHandler = () => {
    setModalIsShown(true);
  };

  const showCommentModalHandler = () => {
    setCommentModalIsShown(true);
  };

  const hideActionModalHandler = () => {
    setModalIsShown(false);
  };

  const hideCommentModalHandler = () => {
    setCommentModalIsShown(false);
  };

  return (
    <div className='p-4'>
      <header className='flex items-center justify-between text-primary'>
        <h3 className='font-semibold text-3xl'>
          Ticket ID <span className='text-2xl'>{ticketId}</span>
        </h3>
        <div className='flex items-center'>
          <BiSupport className='text-3xl' />
          <span className='mx-3 text-2xl font-semibold'>Account Manager</span>
          <div>
            <img src={profImg} className='w-6 h-6 rounded-full' alt='Manager' />
          </div>
        </div>
      </header>

      {modalIsShown && (
        <ActionModal
          onClose={hideActionModalHandler}
          showCommentModal={showCommentModalHandler}
        />
      )}

      {commentModalIsShown && (
        <AddCommentModal onClose={hideCommentModalHandler} />
      )}

      <Breadcrumb
        levelOne='Tickets'
        levelTwo={ticketId}
        ticketStatus={ticket.status}
      />

      <TicketDetail />
      <SellerDetails />
      <ContactCards />
      <TicketHistory />

      <button
        className='mt-10 p-3 bg-primary text-white w-2/5 rounded-xl'
        onClick={showActionModalHandler}
      >
        Take Action
      </button>
    </div>
  );
};

export default TicketDetails;
