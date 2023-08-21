import './App.css'
import SideBar from './components/SideBar/SideBar'
import Box_slide from './components/box_slide/Box_slide'
import Shop_category from './components/shop_category/Shop_category'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
    <Navbar />
      <SideBar/>
      <Box_slide/>
      <Shop_category/>
    </>
  )
}

export default App
