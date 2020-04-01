import React from 'react';
import ReactDOM from 'react-dom';
import StoreProvider from '../store';

export function testComponent(name, jsx, store) {
  it(`renders ${name} with ${JSON.stringify(store)} without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<StoreProvider {...store}>{jsx}</StoreProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
}
