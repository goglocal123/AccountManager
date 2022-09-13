import React, { useState } from 'react';
import SearchRule from './SearchRule';

const AllRules = ({ orders, setModalIsShown }) => {
  const [emailQuery, setEmailQuery] = useState('');
  const [ruleQuery, setRuleQuery] = useState('');

  const mdTableHeaderClass =
    'md:hidden mb-1 font-bold underline underline-offset-1 decoration-secondary decoration-2';

  const checkQueries = (order) => {
    if (emailQuery === '' && ruleQuery === '') return order;
    else if (emailQuery === '' && order.rule.toLowerCase().includes(ruleQuery))
      return order;
    // else if (
    //   order.email.includes(emailQuery) &&
    //   order.rule.toLowerCase().includes(ruleQuery)
    // ) {
    //   return order;
    // }
    else if (order.email.includes(emailQuery) && ruleQuery === '') {
      return order;
    }
  };

  return (
    orders.length > 0 && (
      <>
        <SearchRule
          setEmailQuery={setEmailQuery}
          setRuleQuery={setRuleQuery}
          setModalIsShown={setModalIsShown}
        />

        <div className='p-2 mt-4 w-full hidden md:grid grid-cols-5 bg-primary text-white text-center items-center rounded-tl-xl rounded-tr-xl'>
          <div>Seller Email</div>
          <div>Rule Name</div>
          <div>Country</div>
          <div>Condition</div>
          <div>Courier Priority</div>
        </div>

        {orders
          .filter((order) => checkQueries(order))
          .map((order) => (
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-5 w-full text-center text-sm lg:items-center shadow-main mb-3 py-2 px-1 rounded-xl'>
              <div>
                <div className={mdTableHeaderClass}>Seller Email</div>
                <p>{order.email}</p>
              </div>

              <div>
                <div className={mdTableHeaderClass}>Rule Name</div>
                <p>{order.rule}</p>
              </div>

              <div>
                <div className={mdTableHeaderClass}>Country</div>
                <p>{order.country}</p>
              </div>

              <div>
                <div className={mdTableHeaderClass}>Condition</div>
                <div>
                  {order.slab} {order.condition}
                </div>
              </div>
              <div>
                <div className={mdTableHeaderClass}>Courier Priority</div>
                {order.courier.map((courier) => (
                  <div key={courier.id}>
                    {courier.courierName} ({courier.priority})
                  </div>
                ))}
              </div>
            </div>
          ))}
      </>
    )
  );
};

export default AllRules;
