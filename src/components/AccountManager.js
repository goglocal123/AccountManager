import React, { useState } from 'react';
import Profile from '../pages/Profile';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import AllTickets from '../pages/AllTickets';
import AllSellers from '../pages/AllSellers';
import SellerDetails from '../pages/SellerDetails';
import TicketDetails from '../pages/TicketDetails';
import AllOrders from '../pages/AllOrders';
import ShippingRuleForm from '../pages/ShippingRuleForm';
import AccessControl from '../pages/AccessControl';
import AddRule from '../pages/AddRule';
import MobileNavbar from '../UI/MobileNavbar/MobileNavbar';
import TradeCompliance from '../pages/TradeCompliance';
import HSNClassification from '../pages/HSNClassification';
import Catalogue from '../pages/Catalogue';
import UploadForm from './Catalogue/UploadForm';
import NewCatalogue from '../pages/NewCatalogue';
import NewCatalogueForm from './NewCatalogue/NewCatalogueForm';

const AccountManager = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [catalogItems, setCatalogItems] = useState([]);

  return (
    <section className='sm:flex'>
      <div className='hidden sm:block sm:w-1/5'>
        <Sidebar />
      </div>
      <div className='block sm:hidden'>
        <MobileNavbar />
      </div>

      <main className='w-full sm:w-4/5'>
        <Routes>
          <Route exact path='/access-control' element={<AccessControl />} />

          <Route exact path='/tax-engine' element={<TradeCompliance />} />

          <Route
            exact
            path='/HSN-classification'
            element={<HSNClassification />}
          />

          {/* <Route exact path='/profile' element={<Profile />} /> */}

          <Route exact path='/allSellers' element={<AllSellers />} />

          <Route
            exact
            path='/allSellers/:sellerId'
            element={<SellerDetails />}
          />

          <Route exact path='/allOrders' element={<AllOrders />} />

          <Route
            exact
            path='/allOrders/shipping-rules/add-rule'
            element={
              <AddRule
                orderDetails={orderDetails}
                setOrderDetails={setOrderDetails}
              />
            }
          />

          <Route
            exact
            path='/allOrders/shipping-rules'
            element={<ShippingRuleForm orderDetails={orderDetails} />}
          />

          <Route exact path='/catalogue' element={<Catalogue />} />

          <Route
            exact
            path='/new-catalogue'
            element={<NewCatalogue catalogItems={catalogItems} />}
          />

          <Route
            exact
            path='/new-catalogue-form'
            element={<NewCatalogueForm setCatalogItems={setCatalogItems} />}
          />

          <Route exact path='/catalogue/upload' element={<UploadForm />} />

          <Route exact path='/allTickets' element={<AllTickets />} />

          <Route
            exact
            path='/allTickets/:ticketId'
            element={<TicketDetails />}
          />
        </Routes>
      </main>
    </section>
  );
};

export default AccountManager;
