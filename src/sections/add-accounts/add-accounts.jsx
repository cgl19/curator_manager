import React, { useState } from 'react';
import SvgColor from 'src/components/svg-color'; // Make sure the path to SvgColor is correct
import './style.css';

const AddAccounts = () => {
  const [addAccountVisible, setAccountVisible] = useState(false);

  const addAccount = async () => {
    setAccountVisible(true);
  };

  const closeModal = () => {
    setAccountVisible(false);
  };

  const icon = (name) => (
    <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: '30px', height: '30px' }} />
  );

  return (
    <>
      <div className="example">
        hello test
      </div>
      <div className="d-flex justify-content-center row bg-info">
        <div className="col-12 d-flex justify-content-center">
          <button onClick={addAccount} className="addAccount">
            {icon('ic_add_accounts')}
          </button>
        </div>
      </div>
      <div>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-sm-6 col-md-6 mb-3 accountCard">
            1
          </div>
          <div className="col-12 col-sm-6 col-md-6 mb-3 accountCard">
            2
          </div>
          <div className="col-12 col-sm-6 col-md-6 mb-3 accountCard">
            3
          </div>
          <div className="col-12 col-sm-6 col-md-6 mb-3 accountCard">
            4
          </div>
        </div>
      </div>
      
      {addAccountVisible && (
        <div className="modal">
          <div className="modalContent">
            <span
              className="close"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2>Add Account</h2>
            <ul className="ul">
              <li className="li d-flex flex-direction-row justify-content-start align-items-center">
                <p>{icon('ic_facebook_group')}</p>
                <p>Add FaceBook Group</p>
              </li>
              <li className="li d-flex flex-direction-row justify-content-start align-items-center">
                <p>{icon('ic_facebook_page')}</p>
                <p>Add FaceBook Page</p>
              </li>
              <li className="li d-flex flex-direction-row justify-content-start align-items-center">
                <p>{icon('ic_linkedin')}</p>
                <p>Add LinkedIn Account</p>
              </li>
              <li className="li d-flex flex-direction-row justify-content-start align-items-center">
                <p>{icon('ic_instagram')}</p>
                <p>Add Instagram Account</p>
              </li>
              <li className="li d-flex flex-direction-row justify-content-start align-items-center">
                <p>{icon('ic_youtube')}</p>
                <p>Add Youtube Account</p>
              </li>
              <li className="li d-flex flex-direction-row justify-content-start align-items-center">
                <p>{icon('ic_twitter')}</p>
                <p>Add Twitter Account</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AddAccounts;
