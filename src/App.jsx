import { Link, Route, Routes } from "react-router-dom";
import About from "./routerSample/About";
import AddProduct from "./routerSample/AddProduct";
import Contact from "./routerSample/Contact";
import Home from "./routerSample/Home";
import NotFound from "./routerSample/NotFound";
import ProductList from "./routerSample/ProductList";
import ToDoDetail from "./routerSample/ToDoDetail";
import Todos from "./routerSample/Todos";

//Bir js fonksiyonu iki düğüm dönemez! bunları sarmallaman gerek. Bu boş düğümlere fragment denir!
function App() {

  return <>
    <h1>Site Header</h1>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/todos'>Todos</Link></li>
      <li><Link to='/addproduct'>Add New Product</Link></li>
      <li><Link to='/productlist'>Products</Link></li>

    </ul>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/todos" element={<Todos/>}></Route>
      <Route path="/todos/:id" element={<ToDoDetail/>} ></Route>
      <Route path="/addproduct" element={<AddProduct/>} ></Route>
      <Route path="/productlist" element={<ProductList/>} ></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>

    <h1 style={{ position: 'fixed', bottom: 0 }}>Site Footer</h1>
  </>

}

export default App;