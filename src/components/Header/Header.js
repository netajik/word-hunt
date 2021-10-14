import React from 'react'
import "./Header.css";
import { TextField,createTheme, ThemeProvider, MenuItem } from '@material-ui/core';

function Header() {

    const darkTheme = createTheme({
        palette: {
          primary: {
              main: '#fff'
          },
          mode: 'dark',
        },
      });

    return (
        <div className="header">
            <span className="title">Word Hunt</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}> 
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <TextField
                        select
                        label="Language"
                    >
                        <MenuItem >
                        </MenuItem>
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
