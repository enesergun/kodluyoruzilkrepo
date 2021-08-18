import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import Header from './Header';
import EmojiResultRow from './EmojiResultRow'

describe('emoji search app testleri', () => {
  
  beforeEach(() => {
    render(<Header />)

  });

  test("header kısmı render edilmeli", () => {
    const headerContext = screen.getByText('Emoji Search')
    expect(headerContext).toBeInTheDocument();

  });

 

});

