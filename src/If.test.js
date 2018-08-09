import React from 'react'
import { shallow } from 'enzyme'
import If from './If'

const children = (
    <div>Hello, World!</div>
)

describe('[Component] If', () => {
    it('returns children if test is true', () => {
        const wrapper = shallow(
            <If test>
                {children}
            </If>
        )

        expect(wrapper.contains(children)).toEqual(true)
    })

    it('returns false if test is false', () => {
        const wrapper = shallow(
            <If test={false}>
                {children}
            </If>
        )

        expect(wrapper.contains(children)).toEqual(false)
    })
})