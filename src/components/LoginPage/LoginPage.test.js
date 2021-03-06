import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LoginPage from './LoginPage'

Enzyme.configure({ adapter: new Adapter() })

describe('LoginPage', () => {
  it('should show components as text', () => {
    const wrapper = shallow(<LoginPage />)
    const component = wrapper.find('div')
    expect(component.text()).toBe('<LoginBox /><UserList />')
  })
})



describe('Function fetchUsers', () => {
  it('Test fetchUsers', async function() {
      const res = await fetch('http://localhost:3000/api/user')
      const data = await res.json()
      console.warn(data)
      expect(data[0]._id).toEqual('5d14ab0c2451d633f44f7e3a')
      expect(data[0].name).toEqual('Gustavo Guelber')
      expect(data[0].email).toEqual('gguelber@yahoo.com.br')
  })
})

describe('Function handleClickLogin', () => {
  it('Test handleClickLogin', async () => {
      const email = 'gguelber@yahoo.com.br'
      const password = '123456'
      const res = await fetch('http://localhost:3000/api/user/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
  
        const data = await res.json()
        console.warn(data)
      localStorage.setItem('token', data)
      expect(data).toEqual(localStorage.getItem('token'))
  }, 30000)
})

