import React, { useState } from 'react';
import SvgColor from 'src/components/svg-color'; // Make sure the path to SvgColor is correct
import './style.css';
import Grid from '@mui/material/Unstable_Grid2';
import AppWidgetSummary from '../overview/app-widget-summary';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'; 
import Container from '@mui/material/Container';

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
        <Container>
      <div className="d-flex justify-content-center row ">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Accounts</Typography>

        <Button onClick={addAccount} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Account
        </Button>
      </Stack>
      </div>

     
   
        
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        </Container>
       
       
      
      
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
