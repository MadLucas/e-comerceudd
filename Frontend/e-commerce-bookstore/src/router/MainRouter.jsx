import {Route, Routes} from 'react-router-dom';
import CheckOut from '../pages/Checkout/CheckOut';
import Registro from '../pages/Registro/Registro';
import Login from '../pages/Login/Login';
import Perfil from '../pages/Perfil/Perfil';
import Producto from '../pages/Producto/Producto';
import Catalogo from '../pages/Catalogo/Catologo';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Home from '../pages/Home/Home'

export const MainRouter = () =>{
    return(
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/chechout" element ={<CheckOut/>}/>
            <Route path="/registro" element ={<Registro/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/perfil" element ={<Perfil/>}/>
            <Route path="/producto" element ={<Producto/>}/>
            <Route path="/catalogo" element ={<Catalogo/>}/>
            <Route path="/*" element={<PageNotFound/>}/>

        </Routes>
    )
}