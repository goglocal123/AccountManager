import React, { useEffect, useState } from 'react';

import Breadcrumb from '../components/Breadcrumb';

import SearchOrder from '../components/Order/SearchOrder';
import Header from '../UI/Header/Header';

const time = new Date().toLocaleString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const orders = [
  {
    id: 1,
    order_id: 'ABZ3923722',
    timestamp: time,
    seller_contact: 'abc@abc.com',
    product_details: {
      name: 'Bat',
      quantity: 1,
      sku: 'OPP',
    },
    payment_details: {
      type: 'Prepaid',
      total: '100 USD',
    },
    customer_details: {
      name: 'Lorem',
      email: 'test@test.com',
      phone: '9897123456',
    },
    pickup_address: 'lorem ipsum dolor sit',
    shipping_details: {
      courier: 'Aramex',
      AWB: 'df435fd',
      EDD: '15/03/2022',
    },
    status: 'Assigned',
    action: 'Label',
  },
  {
    id: 2,
    order_id: 'ABZ3923722',
    timestamp: time,
    seller_contact: 'abc@def.com',
    product_details: {
      name: 'Bat',
      quantity: 1,
      sku: 'OPP',
    },
    payment_details: {
      type: 'Prepaid',
      total: '100 USD',
    },
    customer_details: {
      name: 'Lorem',
      email: 'test@test.com',
      phone: '9897123456',
    },
    pickup_address: 'lorem ipsum',
    shipping_details: {
      courier: 'Aramex',
      AWB: 'df435fd',
      EDD: '15/03/2022',
    },
    status: 'Assigned',
    action: 'Label',
  },
  {
    id: 3,
    order_id: 'ABZ3923722',
    timestamp: time,
    seller_contact: 'lorem@abc.com',
    product_details: {
      name: 'Bat',
      quantity: 1,
      sku: 'OPP',
    },
    payment_details: {
      type: 'Prepaid',
      total: '100 USD',
    },
    customer_details: {
      name: 'Lorem',
      email: 'test@test.com',
      phone: '9897123456',
    },
    pickup_address: 'lorem ipsum',
    shipping_details: {
      courier: 'Delhivery',
      AWB: 'da435ff',
      EDD: '16/03/2022',
    },
    status: 'Pending',
    action: 'Label',
  },
];

const AllOrders = () => {
  const [displayedOrders, setDisplayedOrders] = useState([]);
  const [emailQuery, setEmailQuery] = useState('');
  const [orderQuery, setOrderQuery] = useState('');
  const [assignedFilter, setAssignedFilter] = useState(false);
  const [pendingFilter, setPendingFilter] = useState(false);

  const mdTableHeaderClass =
    'md:hidden mb-1 font-bold underline underline-offset-1 decoration-secondary decoration-2';

  const checkQueries = (order) => {
    if (emailQuery === '' && orderQuery === '') return order;
    else if (
      emailQuery === '' &&
      order.shipping_details.AWB.toLowerCase().includes(orderQuery)
    )
      return order;
    else if (order.seller_contact.includes(emailQuery) && orderQuery === '') {
      return order;
    }
  };

  useEffect(() => {
    // if (pendingFilter) {
    //   setDisplayedOrders(orders.filter((order) => order.status === 'Pending'));
    //   // console.log(displayedOrders);
    // } else
    if (assignedFilter) {
      setDisplayedOrders(orders.filter((order) => order.status === 'Assigned'));
      // console.log(displayedOrders);
    } else {
      setDisplayedOrders(orders.filter((order) => order.status === 'Pending'));
      // setDisplayedOrders(orders);
    }
  }, [assignedFilter, pendingFilter]);

  return (
    <section className='p-4'>
      <Header title='All Orders' />

      <Breadcrumb levelOne='Orders' />

      <SearchOrder
        setEmailQuery={setEmailQuery}
        setOrderQuery={setOrderQuery}
        assignedFilter={assignedFilter}
        setAssignedFilter={setAssignedFilter}
        pendingFilter={pendingFilter}
        setPendingFilter={setPendingFilter}
      />

      <div className='p-2 mt-4 hidden md:grid grid-cols-9 bg-primary text-white text-center items-center rounded-tl-xl rounded-tr-xl'>
        <div className='ml-3'>Order Details</div>
        <div className='ml-8'>Seller Email/No.</div>
        <div className='ml-8'>Product Details</div>
        <div className='ml-8'>Payment Details</div>
        <div className='ml-8'>Customer Details</div>
        <div className='ml-8'>Pickup Address</div>
        <div className='ml-10'>Shipping Details</div>
        <div className='ml-12'>Status</div>
        <div className='ml-4'>Action</div>
      </div>

      {displayedOrders
        .filter((order) => checkQueries(order))
        .map((order) => (
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-9 w-full text-center text-sm lg:items-center shadow-main mb-3 py-2 px-1 rounded-xl'>
            <div>
              <div className={mdTableHeaderClass}>Order Details</div>
              <p className='mb-1 ml-4'>ID&nbsp;:&nbsp;{order.order_id}</p>
              <p className='ml-2 whitespace-nowrap'>{order.timestamp}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Seller Email/No.</div>
              <p className='lg:ml-8'>{order.seller_contact}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Product Details</div>
              <p className='lg:ml-9'>Name:&nbsp;{order.product_details.name}</p>
              <p className='lg:ml-9'>Qty: {order.product_details.quantity}</p>
              <p className='lg:ml-9'>SKU: {order.product_details.sku}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Payment Details</div>
              <p className='lg:ml-8'>{order.payment_details.type}</p>
              <p className='lg:ml-8'>{order.payment_details.total}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Customer Details</div>

              <p className='lg:ml-6'>{order.customer_details.name}</p>
              <p className='lg:ml-6'>{order.customer_details.email}</p>
              <p className='lg:ml-8'>{order.customer_details.phone}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Pickup Address</div>
              <p className='lg:ml-6'>{order.pickup_address}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Shipping Details</div>
              <p className='lg:ml-6'>{order.shipping_details.courier}</p>
              <p className='lg:ml-6'>
                AWB&nbsp;:&nbsp;{order.shipping_details.AWB}
              </p>
              <p className='lg:ml-5'>
                EDD&nbsp;:&nbsp;{order.shipping_details.EDD}
              </p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Status</div>
              <p className='lg:ml-10'>{order.status}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Action</div>
              <p>{order.action}</p>
            </div>
          </div>
        ))}
    </section>
  );
};

export default AllOrders;

/* <table className='mt-6 table-auto w-full'>
        <thead className=' border-separate  font-bold text-primary bg-secondary text-left'>
          <tr>
            <th className='p-4 rounded-tl-xl '>Order Details</th>
            <th>Seller Email/No.</th>
            <th>Product Details</th>
            <th>Payment Details</th>
            <th>Customer Details</th>
            <th>Pickup Address</th>
            <th>Shipping Details</th>
            <th>Status</th>
            <th className='pr-2 rounded-tr-xl'> Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedOrders
            .filter((order) => checkQueries(order))
            .map((order) => (
              <>
                <tr
                  key={order.id}
                  className=' text-primary shadow-main rounded-xl'
                >
                  <td style={{ padding: '3rem 0.5rem' }}>
                    
                    <p>ID : {order.order_id}</p>
                    <p>{order.timestamp}</p>
                  
                  </td>
                  <td>{order.seller_contact}</td>
                  <td className='pt-4 grid grid-cols-1 gap-2'>
                    <p>Name: {order.product_details.name}</p>
                    <p>Qty: {order.product_details.quantity}</p>
                    <p>SKU: {order.product_details.sku}</p>
                  </td>
                  <td>
                    <p>{order.payment_details.type}</p>
                    <p>{order.payment_details.total}</p>
                  </td>
                  <td className='pt-4 grid grid-cols-1 gap-2'>
                    <p>{order.customer_details.name}</p>
                    <p>{order.customer_details.email}</p>
                    <p>{order.customer_details.phone}</p>
                  </td>
                  <td>{order.pickup_address}</td>
                  <td className=' grid grid-cols-1 gap-2'>
                    <p>{order.shipping_details.courier}</p>
                    <p>AWB: {order.shipping_details.AWB}</p>
                    <p>EDD: {order.shipping_details.EDD}</p>
                  </td>
                  <td>{order.status}</td>
                  <td>{order.action}</td>
                </tr>
                <tr className='h-3'>
                  <td></td>
                </tr>
              </>
            ))}
        </tbody>
      </table> */
