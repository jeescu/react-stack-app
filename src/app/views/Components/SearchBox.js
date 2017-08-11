import React from 'react';
import TextField from 'material-ui/TextField';
import { white, blue500 } from 'material-ui/styles/colors';

const SearchBox = () => {
  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17,
    },
    textField: {
      color: white,
      backgroundColor: blue500,
      borderRadius: 2,
      height: 35,
      // marginTop: 6,
    },
    inputStyle: {
      color: white,
      paddingLeft: 5,
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,
      color: white,
    },
  };

  return (
    <div style={{ float: 'right', marginTop: '-2px' }}>
      {/* <IconButton style={styles.iconButton} >
        <Search color={white} />
      </IconButton> */}
      <TextField
        hintText="Search..."
        underlineShow={false}
        fullWidth
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
      />
    </div>
  );
};

export default SearchBox;
