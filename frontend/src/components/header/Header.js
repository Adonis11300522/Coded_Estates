import { Badge, Button, Container, Image, Nav, Navbar, Modal, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Logo from "../../assets/images/Logo.svg";
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../configs/ThemeProvider";
import { THEME_TYPE } from "../../configs/Constants";
import { DefaultBtn, PrimaryBtn, SecondPrimaryBtn } from "../button/Buttons";
import { AiOutlineClose } from "react-icons/ai";
import Wallet1 from '../../assets/images/wallet/keplr.png';
import Wallet2 from '../../assets/images/wallet/leap.png';
import Wallet3 from '../../assets/images/wallet/coin.png';
import Wallet4 from '../../assets/images/wallet/faicon.png';
import { store } from "../../configs/Store";

export default function Header() {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const [connected, setConnected, updateConnected] = store.useState('Connected');
    const [walletModalShow, setWalletModalShow, updateWalletModalShow] = store.useState("WalletModalShow");
    const [header, setHeader, updateHeader] = store.useState('Header');

    const [show, setShow] = useState(false);

    const handleClose = () => {
      // setShow(false);
      setWalletModalShow(walletModalShow => {
        walletModalShow = false;
        return walletModalShow;
      });
    }
    const handleShow = () => {
      // setShow(true);
      setWalletModalShow(walletModalShow => {
        walletModalShow = true;
        return walletModalShow;
      });
    }

    const connectWallet = () => {
      setConnected(connected => {
        connected = true;
        return connected;
      });
      handleClose();
    }

    const disConnectWallet = () => {
      setConnected(connected => {
        connected = false;
        return connected;
      });
    }

    const handleThemeChange = (e) => {
        if(themeMode.theme === THEME_TYPE.LIGHT) {
            setThemeMode({theme : THEME_TYPE.DARK});
        }
        else {
            setThemeMode({theme : THEME_TYPE.LIGHT});
        }
    }
  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="lg">
        <Container fluid className="py-2">
          <Navbar.Brand>
            <Link to="/">
              <Image src={Logo} width="120" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            {header == "BUY" ? (
              <NavLink to="/buy" className="nav-link fw-bold active"onClick={() => setHeader('BUY')}>
                Buy / Sell
              </NavLink>
              ) : (
                <NavLink to="/buy" className="nav-link fw-bold" onClick={() => setHeader('BUY')}>
                Buy / Sell
               </NavLink>
              )}
             
              {header == "RENT" ? (
                <NavLink to="/rent" className="nav-link fw-bold active"onClick={() => setHeader('RENT')}>
                  Rent
                </NavLink>
                ) : (
                  <NavLink to="/rent" className="nav-link fw-bold" onClick={() => setHeader('RENT')}>
                    Rent
                  </NavLink>
                )
              }                
                
              {!connected ? ("") : (
                <span>
                  {header == "DASHBOARD" ? (
                    <NavLink to="/dashboard/overview" className="nav-link fw-bold active" onClick={() => setHeader('DASHBOARD')}>
                      Dashboard
                    </NavLink>
                  ) : (
                    <NavLink to="/dashboard/overview" className="nav-link fw-bold" onClick={() => setHeader('DASHBOARD')}>
                      Dashboard
                    </NavLink>
                  )}
                  
                </span>
                
              )}
             
              {/* <Link to="/about" className="nav-link fw-bold">
                About Us
              </Link> */}
              {/* <NavLink to="" className="nav-link fw-bold">
                <FaRegBell/><Badge pill bg="danger"></Badge>
              </NavLink>
              <NavLink className="nav-link fw-bold" onClick={handleThemeChange}>
                <FaRegMoon/>{connected}
              </NavLink> */}
              {!connected ? (
                <Button className="round-btn" onClick={handleShow}>Connect Wallet</Button>              
              ) : (
                <Dropdown>
                  <Dropdown.Toggle className="bg-purple border-purple rounded-5"  id="dropdown-basic">
                  0xbf4fa...079f
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-red">
                    <Dropdown.Item className="bg-red text-white" onClick={disConnectWallet}>Disconnect Wallet</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={walletModalShow} onHide={handleClose} centered>        
        <Modal.Body>
          <div className="text-end"><AiOutlineClose onClick={handleClose}/></div>
          <div className="fs-4 text-center fw-semibold mb-3">Connect Wallet</div>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2" onClick={connectWallet}><Image src={Wallet1} className="me-3"/><span className="fw-bold text-dark-purple">Keplr</span></Button>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2"><Image src={Wallet2} className="me-3"/><span className="fw-bold text-dark-purple">Leap</span></Button>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2"><Image src={Wallet3} className="me-3"/><span className="fw-bold text-dark-purple">Coin98</span></Button>
          <Button className="w-100 text-start bg-white rounded-5 border-gray my-2"><Image src={Wallet4} className="me-3"/><span className="fw-bold text-dark-purple">Faicon</span></Button>
        </Modal.Body>        
      </Modal>
    </div>
  );
}
