import React from 'react'
import { shallow, mount } from 'enzyme'

//Components
import ColumnList from './ColumnList'

const props = {
    items: [
        {
            id: 1, 
            status: 'To Do', 
            description: '#1 task description'
        },
        {
            id: 2, 
            status: 'To Do', 
            description: '#2 task description'
        }
    ]
}

describe('[Component] ColumnList', () => {
    it('shallow renders correctly', () => {
        expect(shallow(<ColumnList {...props}/>))
    })

    it('renders a form is title is To Do', () => {
        const wrapper = mount(
            <ColumnList title='To Do'{...props} />
        )

        expect(wrapper.find('form')).toHaveLength(1)
    })

    it('calls addTask when form is submitted', () => {
        const addTask = jest.fn()//Spy
        const wrapper = mount(
            <ColumnList 
                addTask={addTask}
                title='To Do'
                {...props}
                />
        )

        wrapper.find('form').simulate('submit')
        expect(addTask).toHaveBeenCalledTimes(1)
    })

    it('maps through the currentTasks', () => {
        const wrapper = shallow(            
            <ColumnList title='To Do' {...props}/>
        )
        //Mostra a árvore do que está sendo renderizado
        //console.log(wrapper.debug())
        expect(wrapper.find('li')).toHaveLength(2)
    })

    it('calls updateTask on input change', () => {
        const updateTask = jest.fn()//Spy
        const wrapper = shallow(
            <ColumnList 
                title='To Do' 
                updateTask={updateTask}
                {...props} />
        )
        
        wrapper
            .find('input[type="checkbox"]')
            .first()
            .simulate('change', {
                target: {
                    checked: true
                }
            })
        
        expect(updateTask).toHaveBeenCalledTimes(1)
    })
})