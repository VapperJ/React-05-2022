
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AdminHome from'./pages/Admin/AdminHome';
import NavigationBar from './components/NavigationBar';
import Shops from './pages/Shops';
import ShopsSettings from './pages/Admin/ShopsSettings';
import AddProduct from './pages/Admin/AddProduct';
import Category from './pages/Admin/Category';
import NotFound from './pages/NotFound';
import ProductSettings from './pages/Admin/ProductSettings';
import ChangeProduct from './pages/Admin/ChangeProduct';

function App() {
  return (
    <div className="App">
      <NavigationBar/>  
      <Routes>
        <Route path='' exact element={<Home/>}/>
        <Route path='ostukorv' exact element={<Cart/>}/>
        <Route path='admin' exact element={<AdminHome/>}/>
        <Route path='poed' exact element={<Shops/>}/>
        <Route path='admin/halda-poode' exact element={<ShopsSettings/>}/>
        <Route path='admin/lisa-toode' exact element={<AddProduct/>}/>
        <Route path='admin/halda-kategooriaid' exact element={<Category/>}/>
        <Route path='admin/halda-tooteid' exact element={<ProductSettings />}/>
        <Route path='muuda/:productName' exact element={ <ChangeProduct/> } />
        <Route path='*' exact element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
