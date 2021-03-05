import React from 'react';
import Navbar from '../component/Navbar';
import '../styles/Dashboard.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
const Dashboard = () => {
  const percentage = 2.4;
  const value = 80;
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-flex mt-5 mb-3 ">
              <div className="purple-bg d-flex justify-content-between p-4 align-items-center ">
                <CircularProgressbar
                  value={value}
                  text={`${percentage} GB`}
                  className="w-50 mr-3"
                  styles={buildStyles({
                    // Text size
                    textSize: '16px',

                    // Colors
                    pathColor: `#FEF4AD`,
                    textColor: '#fff',
                    trailColor: '#783CFF',
                    backgroundColor: 'transparent',
                  })}
                />

                {/* <div className="d-flex justify-content-center align-items-center data-circle ">
                  <h6 className="text-white font-weight-normal my-0">2.4 GB</h6>
                </div> */}
                <div className="text-white ">
                  <h6 className="font-weight-normal">Total Data Usage</h6>
                  <h5 className="font-weight-normal">
                    2.4 of 8{' '}
                    <span style={{ color: 'rgba(255,255,255,0.53)' }}>GB</span>
                  </h5>
                  <h6 className="font-weight-normal">Data Usage Today</h6>
                  <h5 className="font-weight-normal">
                    0
                    <span style={{ color: 'rgba(255,255,255,0.53)' }}> GB</span>
                  </h5>
                </div>
              </div>

              <div className="yellow-bg ml-3 d-flex justify-content-center align-items-start flex-column p-4">
                <h5 className="font-weight-normal mb-4">
                  Purchase <br /> Proxies
                </h5>
                <button
                  className=" border-0 bg-white  px-4 btn py-1"
                  style={{ borderRadius: '25px', fontSize: '15px' }}
                >
                  View Plans
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#1B1B22',
                borderRadius: '8px',
              }}
              className="w-100 "
            >
              <table className="custom-table text-center w-100 h-100">
                <thead>
                  <tr style={{ borderBottom: '1px solid #30303B' }}>
                    <th className="py-3 ">Type</th>
                    <th>Amount</th>
                    <th>Date Purchased</th>
                    <th>Expiration</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr>
                    <td className="py-3">Residential</td>
                    <td>4 GB</td>
                    <td>Feb 20, 2021</td>
                    <td>Mar 20, 2021</td>
                    <td>
                      <p className="my-0 status-active w-75 mx-auto px-2 py-1">
                        Active
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Residential</td>
                    <td>4 GB</td>
                    <td>Feb 20, 2021</td>
                    <td>Mar 20, 2021</td>
                    <td>
                      <p className="my-0 status-inactive w-75 mx-auto px-2 py-1">
                        Expired
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Residential</td>
                    <td>4 GB</td>
                    <td>Feb 20, 2021</td>
                    <td>Mar 20, 2021</td>
                    <td>
                      <p className="my-0 status-inactive w-75 mx-auto px-2 py-1">
                        Expired
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Residential</td>
                    <td>4 GB</td>
                    <td>Feb 20, 2021</td>
                    <td>Mar 20, 2021</td>
                    <td>
                      <p className="my-0 status-inactive w-75 mx-auto px-2 py-1">
                        Expired
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Residential</td>
                    <td>4 GB</td>
                    <td>Feb 20, 2021</td>
                    <td>Mar 20, 2021</td>
                    <td>
                      <p className="my-0 status-inactive w-75 mx-auto px-2 py-1">
                        Expired
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* right side */}
          <div className="col-12 col-md-6">
            <div
              style={{
                backgroundColor: '#23232D',
                marginTop: '3.85rem',
                borderRadius: '8px 8px 0 0 ',
              }}
              className="px-4 py-3"
            >
              <button className="active-btn border-0 px-3  py-1 mr-3">
                Residential
              </button>
              <button className="inactive-btn px-3  py-1">Datacenter</button>
              <div className="d-flex justify-content-between my-3">
                <div className="custom-select mr-2">
                  <select name="" id="" className="w-100 h-100 border-0">
                    <option value="">Proxy Type</option>
                  </select>
                </div>
                <div className="custom-select ml-2">
                  <select name="" id="" className="w-100 h-100 border-0">
                    <option value="">Location</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <input type="number" className="custom-select" />
                <button
                  className="generate-btn px-2 py-1 text-white w-100 ml-4"
                  style={{ fontSize: '13px' }}
                >
                  Generate Proxies
                </button>
              </div>
            </div>
            <div
              className="scrollable p-4 "
              style={{
                backgroundColor: '#1B1B22',
                borderRadius: '0 0 8px 8px',
              }}
            >
              <p className="mb-1   w-50 text-white ">
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
                28.253.6347.5685:fhujfhjkerfjksfk:fb839hfierhfu
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
