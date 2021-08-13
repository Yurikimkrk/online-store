import React, {useState} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {NavLink, useLocation} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/constants'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container className='d-flex justify-content-center align-items-center'
               style={{height: window.innerHeight - 54}}>
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control placeholder='Введите e-mail' className='mt-4'/>
          <Form.Control placeholder='Введите пароль' className='mt-3'/>
          <div className='d-flex justify-content-around mt-3'>
            {isLogin ? <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink></div>
              :<div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>}
            {isLogin ? <Button variant={'outline-success'} style={{width: 100}} className='align-self-end'>Войти</Button>
              : <Button variant={'outline-primary'} style={{width: 150}} className='align-self-end'>Регистрация</Button>}
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth