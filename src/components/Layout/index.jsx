//import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({children}) => {
  return(
    <>
      <NavBar/>
      <div style={{margin:"20px"}}>
        {children}
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Layout;