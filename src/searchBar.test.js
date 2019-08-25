import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './searchBar.js';
configure({ adapter: new Adapter() })

describe('<SearchBar />', () => {
  const props = {
    fetchCityData: jest.fn(),
    defaultCity: "london,uk"
  };

  // const {classes, getShallow} = initShallow(CreateEditFilterDialog, props);

  // beforeEach(() => {
  //   props.onClose.mockClear();
  //   props.onSubmit.mockClear();
  //   props.onCloseDialog.mockClear();
  // });

  // it('renders properly', () => {
  //   const wrapper = getShallow();
  //   expect(wrapper).toMatchSnapshot();
  // });

  it('create works', () => {
    const component = shallow(<SearchBar />);

    expect(component).toBeDefined();
  });
  // it('calls create and sets this.submitLabel in constructor', () => {
  //   const wrapper = getShallow();
  //   const instance = wrapper.instance();

  //   //Check submitLabel in constructor
  //   expect(instance.submitLabel).toBe('Create');

  //   instance.onClickCreate();
  //   expect(props.onCloseDialog).toHaveBeenCalled();
  // });


  // it('closes the dialog', () => {
  //   const wrapper = getShallow();
  //   const instance = wrapper.instance();

  //   instance.onClickCancel();
  //   expect(props.onCloseDialog).toHaveBeenCalled();
  // });

  // it(`onChangeName updates filterName in state`, () => {
  //   const wrapper = getShallow();
  //   const instance = wrapper.instance();

  //   const mockedEvent = {
  //     target: {
  //       value: 'hello world'
  //     }
  //   };

  //   let textFieldNode = wrapper.find(classes.textField);
  //   textFieldNode.simulate('change', mockedEvent);

  //   expect(instance.state.filterName).toBe(mockedEvent.target.value);
  // });

  // it(`componentDidUpdate updates filterName in state depending on presetFilterName`, () => {
  //   const wrapper = getShallow();
  //   const instance = wrapper.instance();
  //   let spy = jest.spyOn(instance, 'componentDidUpdate');

  //   wrapper.setProps({presetFilterName: "new"});
  //   wrapper.update();

  //   expect(spy).toHaveBeenCalled();
  //   expect(instance.state.filterName).toBe('new');
  //})
});