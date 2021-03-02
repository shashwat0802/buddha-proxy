import React from 'react';
import Navbar from '../component/Navbar';
import PurchaseBtn from '../component/PurchaseBtn';
import '../styles/Datacenter.css';
const Datacenter = () => {
  return (
    <>
      <Navbar />
      <PurchaseBtn />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-3">
            <div className="datacenter-bg p-3">
              <div
                className="price-wrapper  p-3 font-weight-bolder d-flex justify-content-center text-white"
                style={{
                  width: '60px',
                  borderRadius: '5px',
                  backgroundColor: '#6926FF',
                }}
              >
                <h4 className="">20</h4>
              </div>
              <h3 className=" my-4 font-weight-bolder">$10.50</h3>
              <p
                style={{ fontSize: '11.5px' }}
                className=" mb-4 font-weight-bold"
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
                  50
                </h4>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$10.50</h3>
              <p
                style={{ fontSize: '11.5px', color: '#85859A' }}
                className=" mb-4 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <button
                className=" border-0  px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
                  backgroundColor: '#FEF4AD ',
                  color: '#6926FF',
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
                  100
                </h4>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$10.50</h3>
              <p
                style={{ fontSize: '11.5px', color: '#85859A' }}
                className=" mb-4 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <button
                className=" border-0  px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
                  backgroundColor: '#FEF4AD ',
                  color: '#6926FF',
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
                  250
                </h4>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$10.50</h3>
              <p
                style={{ fontSize: '11.5px', color: '#85859A' }}
                className=" mb-4 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <button
                className=" border-0  px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
                  backgroundColor: '#FEF4AD ',
                  color: '#6926FF',
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

export default Datacenter;
