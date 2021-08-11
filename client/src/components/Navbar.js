import React, {useContext} from 'react'
import {Button, Container, Nav, Navbar} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {SHOP_ROUTE} from "../utils/constants"
import {Context} from "../index"
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="info">
      <Container>
        <NavLink style={{color: 'white', fontSize: '1.2rem', textDecoration: 'none'}}
                 to={SHOP_ROUTE}>Total Store</NavLink>
        {user.isAuth ?
          <Nav className="ms-auto">
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"} className="ms-3"
                    onClick={() => user.setIsAuth(false)}>Выйти</Button>
          </Nav>
          :
          <Nav className="ms-auto">
            <Button variant={"outline-light"}
                    onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
})

export default NavBar