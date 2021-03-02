import React from 'react';
import Navbar from '../component/Navbar';
import PurchaseBtn from '../component/PurchaseBtn';
const Bulk = () => {
  return (
    <>
      <Navbar />
      <PurchaseBtn />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-3">
            <div
              className=" p-3"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #292934',
                borderRadius: '5px',
                height: '400px',
              }}
            >
              <div
                className="  p-3 font-weight-bolder d-flex justify-content-center  flex-column"
                style={{
                  width: '100px',
                  borderRadius: '5px',
                  backgroundColor: '#1B1B22',
                }}
              >
                <h5 className="my-0" style={{ color: '#FEF4AD' }}>
                  Daily
                </h5>
                <p
                  className=" my-0"
                  style={{ fontSize: '13px', color: '#85859A' }}
                >
                  1000
                </p>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$1000</h3>
              <p
                style={{ fontSize: '11.5px', color: '#85859A' }}
                className=" mb-2 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <img
                src={require('../img/countries.svg').default}
                alt=""
                className="mb-4 mt-3 mx-auto"
                style={{ width: '95%' }}
              />
              <button
                className="bg-white border-0 bg-white px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
                  color: '#6926FF',
                }}
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
                height: '400px',
              }}
            >
              <div
                className="pice-wrapper  p-3 font-weight-bolder d-flex justify-content-center  flex-column"
                style={{
                  width: '100px',
                  borderRadius: '5px',
                  backgroundColor: '#1B1B22',
                }}
              >
                <h5 className="my-0" style={{ color: '#FEF4AD' }}>
                  Weekly
                </h5>
                <p
                  className=" my-0"
                  style={{ fontSize: '13px', color: '#85859A' }}
                >
                  1000
                </p>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$1000</h3>
              <p
                style={{ fontSize: '11.5px', color: '#85859A' }}
                className=" mb-2 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <img
                src={require('../img/countries.svg').default}
                alt=""
                className="mb-4 mt-3 mx-auto"
                style={{ width: '95%' }}
              />
              <button
                className="bg-white border-0 bg-white px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
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
                height: '400px',
              }}
            >
              <div
                className="pice-wrapper  p-3 font-weight-bolder d-flex justify-content-center  flex-column"
                style={{
                  width: '100px',
                  borderRadius: '5px',
                  backgroundColor: '#1B1B22',
                }}
              >
                <h5 className="my-0" style={{ color: '#FEF4AD' }}>
                  Monthly
                </h5>
                <p
                  className=" my-0"
                  style={{ fontSize: '13px', color: '#85859A' }}
                >
                  1000
                </p>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$1000</h3>
              <p
                style={{ fontSize: '11.5px', color: '#85859A' }}
                className=" mb-2 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <img
                src={require('../img/countries.svg').default}
                alt=""
                className="mb-4 mt-3 mx-auto"
                style={{ width: '95%' }}
              />
              <button
                className="bg-white border-0 bg-white px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
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
                height: '400px',
              }}
            >
              <div
                className="pice-wrapper  p-3 font-weight-bolder d-flex justify-content-center  flex-column "
                style={{
                  width: '100px',
                  borderRadius: '5px',
                  backgroundColor: '#1B1B22',
                }}
              >
                <h5 className="my-0" style={{ color: '#FEF4AD' }}>
                  Yearly
                </h5>
                <p
                  className=" my-0"
                  style={{ fontSize: '13px', color: '#85859A' }}
                >
                  1000
                </p>
              </div>
              <h3 className="text-white my-4 font-weight-bolder">$1000</h3>
              <p
                style={{ fontSize: '11.5px', color: '#85859A' }}
                className=" mb-2 font-weight-bold"
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore <br /> dolore
                magna aliqua.
              </p>
              <img
                src={require('../img/countries.svg').default}
                alt=""
                className="mb-4 mt-3 mx-auto"
                style={{ width: '95%' }}
              />
              <button
                className="bg-white border-0 bg-white px-5 btn py-2 w-100 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '13px',
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

export default Bulk;
