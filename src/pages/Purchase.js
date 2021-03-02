import React from 'react';
import Navbar from '../component/Navbar';
import PurchaseBtn from '../component/PurchaseBtn';
import '../styles/Purchase.css';
const Purchase = () => {
  return (
    <>
      <Navbar />
      <PurchaseBtn />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-3">
            <div className="residential-bg p-3">
              <div
                className="pice-wrapper bg-white p-3 font-weight-bolder d-flex justify-content-center"
                style={{ width: '60px', borderRadius: '5px' }}
              >
                <h4 className="">
                  1
                  <span
                    className="font-weight-bolder"
                    style={{ fontSize: '15px' }}
                  >
                    GB
                  </span>
                </h4>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$10.50</h3>
              <p
                style={{ fontSize: '11.5px' }}
                className="text-white mb-4 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore et <br />{' '}
                dolore magna aliqua.
              </p>
              <button
                className="bg-white border-0 bg-white px-5 btn py-2 w-100 font-weight-bold"
                style={{ borderRadius: '25px', fontSize: '13px' }}
              >
                Purchase
              </button>
            </div>
          </div>
          {/* 2nd */}
          <div className="col-12 col-md-3">
            <div
              className="p-3"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #292934',
                borderRadius: '5px',
                height: '320px',
              }}
            >
              <div
                className="pice-wrapper  p-3 font-weight-bolder d-flex justify-content-center"
                style={{
                  width: '60px',
                  borderRadius: '5px',
                  backgroundColor: '#1B1B22',
                }}
              >
                <h4 className="" style={{ color: '#FEF4AD' }}>
                  3
                  <span
                    className="font-weight-bolder"
                    style={{ fontSize: '15px' }}
                  >
                    GB
                  </span>
                </h4>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$10.50</h3>
              <p
                style={{ fontSize: '11.5px' }}
                className="text-white mb-4 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <button
                className=" border-0 text-white px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
                  backgroundColor: '#6926FF ',
                }}
              >
                Purchase
              </button>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div
              className="p-3"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #292934',
                borderRadius: '5px',
                height: '320px',
              }}
            >
              <div
                className="pice-wrapper  p-3 font-weight-bolder d-flex justify-content-center"
                style={{
                  width: '60px',
                  borderRadius: '5px',
                  backgroundColor: '#1B1B22',
                }}
              >
                <h4 className="" style={{ color: '#FEF4AD' }}>
                  5
                  <span
                    className="font-weight-bolder"
                    style={{ fontSize: '15px' }}
                  >
                    GB
                  </span>
                </h4>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$10.50</h3>
              <p
                style={{ fontSize: '11.5px' }}
                className="text-white mb-4 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <button
                className=" border-0 px-5 text-white btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
                  backgroundColor: '#6926FF ',
                }}
              >
                Purchase
              </button>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div
              className="p-3"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #292934',
                borderRadius: '5px',
                height: '320px',
              }}
            >
              <div
                className="pice-wrapper  p-3 font-weight-bolder d-flex justify-content-center "
                style={{
                  width: '60px',
                  borderRadius: '5px',
                  backgroundColor: '#1B1B22',
                }}
              >
                <h4 className="" style={{ color: '#FEF4AD' }}>
                  10
                  <span
                    className="font-weight-bolder"
                    style={{ fontSize: '15px' }}
                  >
                    GB
                  </span>
                </h4>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$10.50</h3>
              <p
                style={{ fontSize: '11.5px' }}
                className="text-white mb-4 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <button
                className=" border-0 text-white px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
                  backgroundColor: '#6926FF ',
                }}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
