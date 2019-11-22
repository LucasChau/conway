import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../Utils';
import Grid from './index';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
});

describe('Grid Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                onClickCell: () => {},
                cells:{
                    1: {
                        alive: true,
                        red: 241,
                        green: 212,
                        blue: 123
                    },
                    2: {
                        alive: true,
                        red: 241,
                        green: 212,
                        blue: 123
                    },
                }
            };
            const propsErrors = checkProps(Grid, expectedProps);

            expect(propsErrors).toBeUndefined();
        });
    });
    
    describe('Renders with no cells', () => {        
        let wrapper;
        beforeEach(() => {
            const props = {
                onClickCell: () => {},
                cells:{
                }
            }
            wrapper = shallow(<Grid {...props}/>)
        });

        it('Should Render a loadingComponent', () => {
            const loading = findByTestAtrr(wrapper, 'loadingComponent');
            expect(loading.length).toBe(1);
        });
    });
    
    describe('Renders with cells', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                onClickCell: () => {},
                cells:{
                    1: {
                        alive: true,
                        red: 241,
                        green: 212,
                        blue: 123
                    },
                    2: {
                        alive: true,
                        red: 241,
                        green: 212,
                        blue: 123
                    },
                    3: {
                        alive: true,
                        red: 241,
                        green: 212,
                        blue: 123
                    },
                    4: {
                        alive: true,
                        red: 241,
                        green: 212,
                        blue: 123
                    },
                }
            }
            wrapper = shallow(<Grid {...props}/>)
        });

        it('Should Render 4 cells', () => {
            const loading = findByTestAtrr(wrapper, 'cellComponent');
            expect(loading.length).toBe(4);
        });
    });
    

});