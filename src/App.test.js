import React from 'react'
import { shallow, mount } from 'enzyme'

//Components
import App from './App'

describe('[Component] App', () => {
  global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn()
  }

  it('shallow render correctly', () => {
    expect(shallow(<App />))
  })

  it('mounts correctly', () => {
    expect(mount(<App />))
  })

  it('create a new task', () => {
    const wrapper = mount(<App />)
    expect(wrapper.state().items.length).toEqual(0)

    wrapper.find('form input').instance().value = 'new Task description'
    wrapper.find('form').simulate('submit')

    expect(wrapper.state().items.length).toEqual(1)
  })

  it('updates a new task', () => {
    const wrapper = mount(<App />)

    wrapper
      .setState({
        items: [
          { id: 1, description: '#1 task description', status: 'To Do'}
        ]
      })
      .find('input[type="checkbox"]')
      .simulate('change', {
        target: {
          checked: true
        }
      })

      expect(wrapper.state().items[0].status).toEqual('Done')
  })
})