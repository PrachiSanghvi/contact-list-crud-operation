import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { openEditForm } from '../action/contactAction';
import EditContactForm from './EditContactForm';
import '../styles/contactlist.scss';

// This Component is for particular contact data show on right side card
export default function ContactDetails() {
  const dispatch = useDispatch();
  // Checking for edit form  popup state
  const isOpenEditForm  = useSelector(state => state?.FetchContactDetail?.isOpenEditForm);
  let contactData = useSelector(state => state?.FetchContactDetail?.list);
  // Searched filter data
  let selectedContact = useSelector(state => state?.FetchContactDetail?.selectedData)[0];
  // Updated selected data getting from global store based on selected id
  let selectedContactData = contactData.filter(data => data.id === selectedContact.id)[0];
  let fullName = selectedContactData.name;
  // Getting inital name
  let arrName = fullName?.split(" ");
  // Select the first letter of the name
  let fname = fullName?.charAt(0).toUpperCase();
  // Select the first letter of the lastname
  let lname = arrName[arrName?.length - 1].charAt(0).toUpperCase();
  let initialName = fname + lname;

  const handleEditBtnClick = () => {
    dispatch(openEditForm(true));
  }
  return (
    <Card sx={{ minWidth: 400 }} className='contact-detail-wrapper'>
      <CardContent className='contact-details'>
        <Typography component="div" className='contact-main-detail'>
          <Typography>
            <Avatar className='main-avatar-icon' sx={{ bgcolor: selectedContactData.bg, fontSize: '17px' }} alt="Remy Sharp">{initialName}</Avatar>
          </Typography>
          <Typography sx={{ fontSize: 20 }} component="h4">
            <span>{selectedContactData.name}</span>
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="text.secondary">
            {selectedContactData.role}
          </Typography>
        </Typography>


        <Typography component="div" className='contact-extra-detail'>
          <Typography component="div" className='detail-wrap'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" component="span">Full name</Typography>
            <Typography sx={{ fontSize: 14 }} component="span">{selectedContactData.name}</Typography>
          </Typography>

          <Typography component="div">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" component="span">Email</Typography>
            <Typography sx={{ fontSize: 14 }} component="span">{selectedContactData.email}</Typography>
          </Typography>

          <Typography component="div">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" component="span">Phone</Typography>
            <Typography sx={{ fontSize: 14 }} component="span">{selectedContactData.phone}</Typography>
          </Typography>


          <Typography component="div">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" component="span"> Company</Typography>
            <Typography sx={{ fontSize: 14 }} component="span">{selectedContactData.company}</Typography>
          </Typography>

          <Typography component="div">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" component="span">Address</Typography>
            <Typography sx={{ fontSize: 14 }} component="span">{selectedContactData.address}</Typography>
          </Typography>
        </Typography>

      </CardContent>
      <CardActions>
        <Button className='contact-edit-btn' onClick={handleEditBtnClick}>Edit Details</Button>
      </CardActions>
      {isOpenEditForm === true && <EditContactForm/> }
    </Card>
  );
}