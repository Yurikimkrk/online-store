import React, {useContext} from 'react'
import {Button, Container, Nav, Navbar} from "react-bootstrap"
import {NavLink, useHistory} from 'react-router-dom'
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/constants'
import {Context} from "../index"
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()
  return (
    <Navbar bg="dark" variant="info">
      <Container>
        <NavLink style={{color: 'white', fontSize: '1.2rem', textDecoration: 'none'}}
                 to={SHOP_ROUTE}>Total Store</NavLink>
        {user.isAuth ?
          <Nav className="ms-auto">
            <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
            <Button variant={"outline-light"} className="ms-3"
                    onClick={() => {
                      user.setIsAuth(false)
                      history.push(LOGIN_ROUTE)
                    }}>Выйти</Button>
          </Nav>
          :
          <Nav className="ms-auto">
            <Button variant={"outline-light"}
                    onClick={() => {
                      user.setIsAuth(true)
                      history.push(LOGIN_ROUTE)
                    }}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
})

export default NavBar