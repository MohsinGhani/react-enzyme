import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
describe('<Home />', () => {
  it('renders component HTML', () => {
    const componentHtml = shallow(<Home />);
    expect(componentHtml.find('h1').length).toEqual(1);
    expect(componentHtml.find('input').length).toEqual(2);
    expect(componentHtml.find('p').length).toEqual(3);
  });

  it('renders component divs with className', () => {
    const componentHtml = shallow(<Home />);
    expect(componentHtml.find('div.container').length).toEqual(1);
  });

  it('renders div test-content', () => {
    const componentHtml = shallow(<Home />);
    const expectedOutput = '<p>' + 'Hello One' + '</p>' + '<p>' + 'Hello Two' + '</p>';
    const realOutput = componentHtml.find('div.test-content').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true)
  });
});

