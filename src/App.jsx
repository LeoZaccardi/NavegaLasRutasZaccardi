import NavBar from './components/NavBar';
import { Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route 
          path="*"
          element={
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <h1 style={{ fontSize: '3rem' }}>404</h1>
              <p>La página que buscás no existe 😢</p>
              <Link to="/">Volver al inicio</Link>
            </div>
          }/>
      </Routes>
    </>
  );
}

export default App;
