import React from 'react';
const PurchaseBtn = () => {
  return (
    <div
      className="w-25 my-5 mx-auto purchase-btn-wrapper d-flex justify-content-stretch "
      style={{ backgroundColor: '#1B1B22', borderRadius: '25px' }}
    >
      <button
        className={`${
          window.location.pathname === '/purchase'
            ? 'active-btn'
            : 'inactive-btn'
        } border-0 px-3 py-2 font-weight-bolder`}
        onClick={() => {
          window.location.href = '/purchase';
        }}
        style={{ width: '33.33%', fontSize: '13px' }}
      >
        Residential
      </button>
      <button
        className={`${
          window.location.pathname === '/purchase/datacenter'
            ? 'active-btn'
            : 'inactive-btn'
        } border-0 px-3 py-2 font-weight-bolder`}
        onClick={() => {
          window.location.href = '/purchase/datacenter';
        }}
        style={{ width: '33.33%', fontSize: '13px' }}
      >
        Datacenter
      </button>
      <button
        className={`${
          window.location.pathname === '/purchase/bulk'
            ? 'active-btn'
            : 'inactive-btn'
        } border-0 px-3 py-2 font-weight-bolder`}
        onClick={() => {
          window.location.href = '/purchase/bulk';
        }}
        style={{ width: '33.33%', fontSize: '13px' }}
      >
        Bulk DC
      </button>
    </div>
  );
};

export default PurchaseBtn;
