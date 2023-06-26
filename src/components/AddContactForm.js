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
import { addContactData } from '../action/contactAction';
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
const AddContactForm = () => {
  const dispatch = useDispatch();
  // Getting contact list data
  const contactReducerData = useSelector(state => state?.FetchContactDetail?.list)
  // Default values of contact form field
  const initialValues = {
    id: 0,
    name: "",
    role: "",
    email: "",
    phone: "",
    company: "",
    address: '',
    bg: ""
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
      // Adding id and avatar bg in add contact object
      values.id = contactReducerData.length + 1;
      values.bg = 'blue';
      // Dispatching add contact data
      dispatch(addContactData(values))
      // After adding data reseting add contact form
      resetForm();
      // Closing Add contact form Model
      handleClose();
    }
  });

  // Model open state handling
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="add-contact-btn-wrapper">
      <Button className='add-contact-btn' onClick={handleClickOpen}>
        + Add Contact
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        className='add-contact-form-wrapper'
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Contact form
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit} className='add-contact-form'>
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
            className='add-contact-submit'>Submit
          </Button>
        </form>
      </BootstrapDialog>
    </div>
  )
}

export default AddContactForm
