import React, { Component, createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

// export default class AuthContextProvider extends Component {
//   state = {
//     isLoggedIn: false,
//   };

//   changeAuthStatus = () => {
//     this.setState({ isLoggedIn: !this.state.isLoggedIn });
//   }

//   render() {
//     return (
//       <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}>
//         {this.props.children}
//       </AuthContext.Provider>
//     )
//   }
// }

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeAuthStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider;