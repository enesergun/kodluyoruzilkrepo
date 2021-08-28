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

test("emoji ismi girince filtreleme basarılı sekilde yapılmalı", () => {
  render(<App />);
  const emojiName = document.getElementsByTagName("input");
  userEvent.type(emojiName[0], "love");
  expect(screen.getByText("Four Leaf Clover"));

});

test("emoji tiklanma basarili olmalı", () => {
  render(<App />);

  const clicked = screen.getByTestId("all-emojies").firstChild;
  document.execCommand = jest.fn();
  userEvent.click(clicked);
  expect(document.execCommand).toHaveBeenCalledWith("copy")

});