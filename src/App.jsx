import NavBar from './components/NavBar/NavBar';
import { Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Checkout/CheckoutForm';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*"element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
