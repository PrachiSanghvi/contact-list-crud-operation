import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { editContactData, openEditForm } from '../action/contactAction';
import { useFormik } from "formik";
import { contactFormSchema } from '../schemas';

// Add contact form model unsing MUI model
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// MUI model title with styling
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// Add contact form with submit events
const EditContactForm = () => {
  const dispatch = useDispatch();
    // Searched filter data
    let selectedContact = useSelector(state => state?.FetchContactDetail?.selectedData)[0];
  // Checking for edit form  popup state
  const isOpenEditForm  = useSelector(state => state?.FetchContactDetail?.isOpenEditForm);
  // Default values of contact form field

  const initialValues = {
    id: selectedContact.id,
    name: selectedContact.name,
    role: selectedContact.role,
    email: selectedContact.email,
    phone: selectedContact.phone,
    company: selectedContact.company,
    address: selectedContact.address,
    bg: selectedContact.bg
  };

  const {
    values, 
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactFormSchema,
    // Submit event
    onSubmit: (values) => {
      dispatch(editContactData(values))
      // After adding data reseting add contact form
      resetForm();
      // Closing Add contact form Model
      handleClose();
    }
  });

  // Model open state handling  
  const handleClose = () => {
    dispatch(openEditForm(false));
  };

  return (
    <div className="edit-contact-btn-wrapper">
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpenEditForm}
        fullWidth
        className='edit-contact-form-wrapper'
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Contact form
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit} className='edit-contact-form'>
          <TextField
            placeholder="Enter your name"
            label="Name"
            name="name"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
          />
         {errors?.name && touched?.name && (
            <p style={{ color: "red" }}> {errors?.name}</p>
          )}
          <TextField
            placeholder="Role"
            label="Role"
            name="role"
            variant="outlined"
            type="text"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.role}
          />
          {errors?.role && touched?.role && (
            <p style={{ color: "red" }}> {errors?.role}</p>
          )}
          <TextField
            placeholder="Email"
            label="Email"
            name="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />
          {errors?.email && touched?.email && (
            <p style={{ color: "red" }}> {errors?.email}</p>
          )}
          <TextField
            placeholder="Phone"
            label="Phone"
            name="phone"
            variant="outlined"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          {errors?.phone && touched?.phone && (
            <p style={{ color: "red" }}> {errors?.phone}</p>
          )}
          <TextField
            placeholder="Company"
            label="Company"
            name="company"
            variant="outlined"
            value={values.company}
            onChange={handleChange}
            error={errors.company}
          />
           {errors?.company && touched?.company && (
            <p style={{ color: "red" }}> {errors?.company}</p>
          )}
          <TextField
            placeholder="Address"
            label="Address"
            name="address"
            variant="outlined"
            value={values.address}
            onChange={handleChange}
            error={errors.address}
          />
          {errors?.address && touched?.address && (
            <p style={{ color: "red" }}> {errors?.address}</p>
          )}
          <Button
            type="submit"
            className='edit-contact-submit'>Submit
          </Button>
        </form>
      </BootstrapDialog>
    </div>
  )
}

export default EditContactForm
