import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSelectedData } from '../action/contactAction';
import  '../styles/contactlist.scss';

// Contact list showing of tabular form using MUI table
export default function ContactList() {
  const dispatch = useDispatch();
  // Contact list data
  const contactData = useSelector(state => state?.FetchContactDetail?.list)
  // Searched filter data
  const searchedData = useSelector(state => state?.FetchContactDetail?.searchedData)
  // Selected contact data
  const contactSelectedData = useSelector(state => state?.FetchContactDetail?.selectedData)
  // Searched value for checking data
  const searchedValue = useSelector(state => state?.FetchContactDetail?.searchedValue)
  const [selected, setSelected] = React.useState(contactSelectedData);
  const [visibleRows, setVisibleRows] = React.useState([]);

  
  useEffect(() => {
    // Checking for searched data, if have any searched match found
    //  then will show search data otherwise show contact Data
    let rowsOnMount = searchedValue !== '' ? searchedData : contactData;
    setVisibleRows(rowsOnMount); 
  }, [contactData,searchedData,visibleRows]);

  const handleClick = (event, name) => {
    // on select of particular contact list field store that in state for showing right side cart
    let newSelected = contactData.filter(data => data.name === name)
    setSelected(newSelected);
    dispatch(getSelectedData(newSelected))
  };

  const getInitialName = (fullName) => {
      // Getting inital name
      let arrName = fullName?.split(" ");
      // Select the first letter of the name
      let fname = fullName?.charAt(0).toUpperCase();
      // Select the first letter of the lastname
      let lname = arrName[arrName.length - 1].charAt(0).toUpperCase();
      let initialName = fname + lname;
    return initialName;
  }

  // on selecting particular column selecting(checkmark) it.
  const isSelected = (name) => selected?.[0].name === name ? true : false;

  // Header colums data
  const columns = [
    { id: 1, label: '+', minWidth: 50 },
    { id: 2, label: 'Basic info', minWidth: 100 },
    { id: 3, label: '', minWidth: 10 },
    {
      id: 4,
      label: 'Company',
      minWidth: 50
    }
  ];

  console.log("visibleRows",visibleRows);
  console.log("contactData",contactData);
  return (
    <Box sx={{ width: '100%' }} className='contact-list-table-wrapper'>
      <Paper sx={{ width: '100%', mb: 2, boxShadow: 'none' }}>
        <TableContainer className='contact-list-table'>
          <Table
            sx={{ minWidth: 600 }}
            aria-labelledby="tableTitle"
          >
            <TableHead className='contact-list-header'>
              <TableRow>
                {columns.map((column,i) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                    className={`header-column-${i}`}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className='contact-list-body'>
              {visibleRows.length > 0
                ? visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const initialName = getInitialName(row.name);
        
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell className='avatar-icon-wrapper'>
                          <Avatar className='avatar-icon' sx={{ bgcolor: row.bg,fontSize: '15px' }} alt="Remy Sharp">{initialName}</Avatar>
                        </TableCell>
                        <TableCell className='contact-detail' id={labelId}> {row.name}<div className='contact-email'>{row.email}</div></TableCell>
                        <TableCell className='contact-company'>{row.company}</TableCell>
                      </TableRow>
                    );
                  })
                : <TableRow><TableCell style={{ width: "100%" }}>No Record found</TableCell></TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}