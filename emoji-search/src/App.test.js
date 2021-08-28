import React from 'react';
import ReactDOM from "react-dom";
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import Header from './Header';
import App from './App'
import EmojiResults from './EmojiResults'
import EmojiResultRow from './EmojiResultRow'


test("header basarili sekilde render edilmeli", () => {
  render(<Header />);
})

test("emojiler basarili sekilde render edilmeli", () => {
  render(<App />);
  const emojiWrapper = screen.getByTestId("all-emojies");
  expect(emojiWrapper.childNodes.length).toEqual(20);
});

