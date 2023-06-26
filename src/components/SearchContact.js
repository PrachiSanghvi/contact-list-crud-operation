import React, { useEffect, useRef, useState } from 'react'
import { TextField,InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedData, getSearchedValue } from '../action/contactAction';

// On search filtering data from contact list and showing whatever data match
const SearchContact = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  const contactData = useSelector(state => state?.FetchContactDetail?.list)
  const isMounted = useRef(false);
  const timeRef = useRef(null);

  useEffect(() => {
    if(!isMounted.current) {
      isMounted.current = true;
      return;
    }
    // Using Debouncing effect for search data after 1 second delay for minimize unwanted api call
    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      let resultData = [];
      if(search !== '') {
        resultData = contactData.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
      }
      dispatch(getSearchedData(resultData))
      dispatch(getSearchedValue(search))
    }, 1000);
  }, [search])

  return (
    <div className='contact-search'>
      <TextField
        id="search"
        type="search"
        placeholder='Search contacts'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ width: 280 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          style: {
            borderRadius: "50px",
            height: '40px',
            background: '#f2f2f2'
          }
        }}
      />
    </div>
  )
}

export default SearchContact