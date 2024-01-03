import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user/UserContext";
import CartIcon from "../cartComponents/cartIcon/CartIcon";
import CartDropdown from "../cartComponents/cartDropdown/CartDropdown";
import CartContext from "../../context/cart/CartContext";



const Navigation = () => {
    const { infoUser, signOut, authStatus, verifyToken } = useContext(UserContext)

    const { isCartOpen } = useContext(CartContext)

    const [userName, setUserName] = useState("No conectado")

    console.log(infoUser)
    useEffect(() => {
        const getInfoUser = async () => {
            await verifyToken()
            setUserName(infoUser.name)
        }
        getInfoUser()
    }, [userName])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand as={NavLink} to='/' className="ms-3">
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/catalogo">Catalogo</Nav.Link>
                        <Nav.Link as={NavLink} to="/checkout">Checkout</Nav.Link>
                        <Nav.Link as={NavLink} to="/products/:id">Producto</Nav.Link>
                        {authStatus &&
                            <NavDropdown title={userName}>
                                <NavDropdown.Item as={NavLink} to="/users">My Profile</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/user/options">Options</NavDropdown.Item> //!donde saco esto!!
                            </NavDropdown>}
                    </Nav>
                    <Nav>
                        {authStatus ? <Button onClick={signOut} className="me-3">Logout</Button> : <Nav.Link className="me-3" as={NavLink} to="/auth">Login</Nav.Link>}
                        <CartIcon />
                        {isCartOpen && <CartDropdown />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Navigation