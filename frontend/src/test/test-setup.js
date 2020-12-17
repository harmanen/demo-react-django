/* eslint-disable import/no-extraneous-dependencies */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
// eslint-disable-next-line object-curly-newline
import { mount, render, shallow, configure } from 'enzyme';
import { JSDOM } from 'jsdom';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// ^ Will be deprecated when the official adapter is out!!!
// mount() will not work with React 17 and enzyme adapter for React 16
// import Adapter from 'enzyme-adapter-react-16';

const jsdom = new JSDOM(
  '<!doctype html><html><body></body></html>',
);
const { window } = jsdom;

const copyProps = (src, target) => {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
};

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

global.window = window;
global.document = window.document;

global.navigator = {
  userAgent: 'node.js',
};

global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;
copyProps(window, global);
