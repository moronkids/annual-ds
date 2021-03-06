import { withRouter } from "next/router";
import React, { useContext, createContext, useState } from "react";

//Context
export const AppContext = createContext(null);

//Provider
export const AppWrapper = ({ children }) => {
  const [device, setDevice] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [inputmode, setInputMode] = useState(false);
  const [activePages, setActivePages] = useState(null);
  const [sidebar, setSideBar] = useState(false);
  const [query, setQuery] = useState(null);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  React.useEffect(() => {}, []);

  //
  const values = {
    activeSection,
    setActiveSection,
    scroll,
    setScroll,
    device,
    setDevice,
    toggle,
    setToggle,
    searchBar,
    setSearchBar,
    inputmode,
    setInputMode,
    query,
    setQuery,
    sidebar,
    setSideBar,
  };

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }
  return context;
}
// useAppContext.getInitialProps = async ({ ctx }) => {
//   let isMobileView = (ctx.req
//     ? ctx.req.headers["user-agent"]
//     : navigator.userAgent
//   ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
//   //Returning the isMobileView as a prop to the component for further use.
//   return {
//     isMobileView: Boolean(isMobileView),
//   };
// };

export default useAppContext;
