
import { BrowserRouter, Outlet, Routes , Route } from 'react-router';
import './App.css'
import Header from './components/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AddProduct from './components/product/AddProduct';
import ListProducts from './components/product/ListProducts';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <h1>Ecommerce dashboard</h1>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/' element={<ListProducts />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  )
}

export default App
