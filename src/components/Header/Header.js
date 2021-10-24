import React from "react";
import "./Header.css";
import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import categories from "../../data/category";

const Header = ({
  setCategory,
  category,
  word,
  setWord,
  setMeanings,
  LightTheme,
}) => {
  const handleChange = (Language) => {
    setCategory(Language);
    setWord("");
  };
  const handleText = (text) => {
    setWord(text);
  };
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff",
      },
      //   mode: "dark",
      type: LightTheme ? "light" : "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            className="search"
            label="Search a Word"
            value={word}
            onChange={(e) => handleText(e.target.value)}
          />
          <TextField
            select
            className="select"
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
