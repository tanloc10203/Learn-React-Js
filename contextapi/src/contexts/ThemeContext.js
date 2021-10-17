import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isDarkTheme: false,
    lightTheme: {
      text: "#222",
      background: "#d8ddf1"
    },
    darkTheme: {
      text: "#fff",
      background: "#5c5c5c"
    }
  };

  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}