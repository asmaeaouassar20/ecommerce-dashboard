
import { BrowserRouter, Outlet, Routes , Route } from 'react-router';
import './App.css'
import Header from './components/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Protected from './components/product/Protected';
import ListProducts from './components/product/ListProducts';
import AddProduct from './components/product/AddProduct';
import UpdateProduct from './components/product/UpdateProduct';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <h1>Ecommerce dashboard</h1>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add' element={<Protected Composant={AddProduct} />} />
          <Route path='/update/:id' element={<Protected Composant={UpdateProduct} />} />
          <Route path='/' element={<Protected Composant={ListProducts} />} />          
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  )
}

export default App
