import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

// export default class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>{authContext => {
//         return (
//           <ThemeContext.Consumer >{themeContext => {
//             const { isDarkTheme, darkTheme, lightTheme } = themeContext;
//             const { isLoggedIn, changeAuthStatus } = authContext;
//             const theme = isDarkTheme ? darkTheme : lightTheme;

//             return (
// <nav style={{ background: theme.background, color: theme.text, height: "120px" }}>
//   <h2 style={{ textAlign: "center" }}>
//     Oak Academy
//   </h2>
//   <p
//     onClick={changeAuthStatus}
//     style={{ textAlign: "center", cursor: "pointer" }}
//   >
//     {isLoggedIn ? 'Logged' : 'Logged out'}
//   </p>
//   <div className="ui three buttons">
//     <button className="ui button">Override</button>
//     <button className="ui button">Contact</button>
//     <button className="ui button">Support</button>
//   </div>
// </nav>
//             )
//           }}
//           </ThemeContext.Consumer>
//         )
//       }}
//       </AuthContext.Consumer>
//     )
//   }
// }

const Navbar = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <nav style={{ background: theme.background, color: theme.text, height: "120px" }}>
      <h2 style={{ textAlign: "center" }}>
        Oak Academy
      </h2>
      <p
        onClick={changeAuthStatus}
        style={{ textAlign: "center", cursor: "pointer" }}
      >
        {isLoggedIn ? 'Logged' : 'Logged out'}
      </p>
      <div className="ui three buttons">
        <button className="ui button">Override</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  )
}

export default Navbar;
