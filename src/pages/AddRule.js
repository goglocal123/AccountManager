import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Multiselect from 'multiselect-react-dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useInput from '../components/ShippingRule/use-input';

const courierOptions = [
  {
    id: 1,
    courierName: 'Delhivery',
  },
  { id: 2, courierName: 'Aramex' },
  { id: 3, courierName: 'DHL' },
  { id: 4, courierName: 'UPS' },
];

const AddRule = ({ orderDetails, setOrderDetails }) => {
  //   const [tableIsShown, setTableIsShown] = useState(false);

  const [options] = useState(courierOptions);

  const navigate = useNavigate();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredRule,
    isValid: enteredRuleIsValid,
    hasError: ruleInputHasError,
    valueChangeHandler: ruleChangedHandler,
    inputBlurHandler: ruleBlurHandler,
    reset: resetRuleInput,
  } = useInput((value) => value !== '');

  const {
    value: enteredCondition,
    isValid: enteredConditionIsValid,
    hasError: conditionInputHasError,
    valueChangeHandler: conditionChangedHandler,
    inputBlurHandler: conditionBlurHandler,
    reset: resetConditionInput,
  } = useInput((value) => +value >= 0.5);

  const {
    value: enteredCountry,
    valueChangeHandler: countryChangedHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountryInput,
  } = useInput((value) => value !== '');

  const {
    value: enteredSlab,
    valueChangeHandler: slabChangedHandler,
    inputBlurHandler: slabBlurHandler,
    reset: resetSlabInput,
  } = useInput((value) => value !== '');

  const notify = (seller, rule) =>
    toast.error(
      `This condition is already fulfilled for seller : ${seller} under ${rule.toUpperCase()}`
    );

  const updateOrders = (order) => {
    const existing = orderDetails.find(
      (item) =>
        item.country === order.country &&
        item.rule === order.rule &&
        item.slab === order.slab
    );

    console.log(existing);

    if (existing) {
      notify(existing.email, existing.rule);
      return;
    }

    setOrderDetails((current) => [...current, order]);
    console.log(orderDetails);

    navigate('/allOrders/shipping-rules');
  };

  let priority = 0;
  const items = [];
  const onSelectHandler = (list, item) => {
    priority += 1;
    items.push({ ...item, priority });
    console.log(items);
  };

  const onRemoveHandler = () => {
    if (priority > 0) {
      priority -= 1;
    }
    items.pop();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredEmailIsValid ||
      !enteredRuleIsValid ||
      !enteredConditionIsValid
    ) {
      return;
    }

    console.log(orderDetails);

    const newOrder = {
      email: enteredEmail,
      rule: enteredRule,
      country: enteredCountry,
      slab: enteredSlab,
      condition: `${enteredCondition} kg`,
      courier: items,
    };

    updateOrders(newOrder);

    console.log(
      enteredEmail,
      enteredRule,
      enteredCountry,
      enteredSlab,
      enteredCondition
      // enteredCourier
    );

    resetEmailInput();
    resetRuleInput();
    resetConditionInput();
    resetCountryInput();
    resetSlabInput();
    // resetCourierInput();
  };

  return (
    <div className='p-4'>
      <div className='pb-2 mb-4 font-bold text-xl border-b-2 border-primary'>
        Add Shipping Rule
      </div>
      <form
        className='p-4 w-2/3 rounded-xl shadow-main'
        onSubmit={submitHandler}
      >
        <div className='grid grid-cols-2 place-items-center gap-3'>
          <label htmlFor='sellerEmail'>Seller Email</label>
          <span>
            <input
              id='sellerEmail'
              type='email'
              className='p-2 border rounded-lg'
              placeholder='Email'
              value={enteredEmail}
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className='text-sm text-red-400'>Invalid Email</p>
            )}
          </span>

          <label htmlFor='ruleName'>Rule Name</label>
          <span>
            <input
              id='ruleName'
              type='text'
              className='p-2 border rounded-lg'
              placeholder='Rule 1'
              value={enteredRule}
              onChange={ruleChangedHandler}
              onBlur={ruleBlurHandler}
            />
            {ruleInputHasError && (
              <p className='text-sm text-red-400'>Rule must not be empty.</p>
            )}
          </span>

          <label htmlFor='country'>Select Country</label>
          <select
            name='countries'
            id='country'
            className='w-56 p-2 border rounded-lg hover:cursor-pointer'
            value={enteredCountry}
            onChange={countryChangedHandler}
            onBlur={countryBlurHandler}
          >
            <option value='none' hidden className='text-secondary '>
              Select Country
            </option>
            <option value='India'>India</option>
            <option value='USA'>USA</option>
            <option value='Australia'>Australia</option>
          </select>

          <label htmlFor='slabs'>Weight Slabs</label>
          <select
            name='slabs'
            id='slab'
            className='w-56 p-2 border rounded-lg hover:cursor-pointer'
            value={enteredSlab}
            onChange={slabChangedHandler}
            onBlur={slabBlurHandler}
          >
            <option value='none' hidden className='text-secondary '>
              Select Condition
            </option>
            <option value='Greater than equals to'>
              Greater than equals to
            </option>
            <option value='Less than equals to'>Less than equals to</option>
            <option value='Equals to'>Equals to</option>
          </select>

          <label htmlFor='condition'>Condition</label>
          <span>
            <input
              id='condition'
              type='number'
              placeholder='Weight (KG)'
              className='p-2 border rounded-lg'
              value={enteredCondition}
              onChange={conditionChangedHandler}
              onBlur={conditionBlurHandler}
            />
            {conditionInputHasError && (
              <p className='text-sm text-red-500'>
                Weight must be atleast 0.5 KG
              </p>
            )}
          </span>

          <label htmlFor='courier'>Courier Selection</label>
          <Multiselect
            options={options}
            displayValue='courierName'
            placeholder='Add priority'
            onSelect={onSelectHandler}
            onRemove={onRemoveHandler}
            className='bg-white'
            style={{
              chips: {
                fontSize: '0.9rem',
                background: '#1d1125',
                display: 'block',
              },
              inputField: {
                maxHeight: '2rem',
              },
            }}
          />
          <button
            type='submit'
            className='w-1/4 col-span-2 bg-primary  mt-8 px-4 py-2 text-white rounded-xl hover:scale-95 transition ease-in-out duration-500'
          >
            Submit
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddRule;
