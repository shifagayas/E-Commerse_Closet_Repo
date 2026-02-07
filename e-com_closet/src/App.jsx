import './App.css'
import Navbarcomponent from './Components/NavBar'
import Menu from './Components/Menu'
import Pagination from './Components/Pagination'
import Footer from './Components/Footer'
// import LandingPage from './Pages/LandingPage'
// import ProductListPage from './Pages/ProductListPage'
import Products from './Pages/Products'
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <>
      <Navbarcomponent/>   
      <Menu/>
      {/* <LandingPage/> */}
      {/* <ProductListPage/> */}
      <Products/>
      <Pagination/>
      <Footer/>
       </>
  )
}

export default App
