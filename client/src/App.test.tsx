// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main header banner text', () => {
  // 1. Render the App component
  render(<App />);

  // 2. Find an element with the text from your header.
  // The 'i' flag makes the text match case-insensitive.
  const bannerElement = screen.getByText(/where's your brand been?/i);

  // 3. Assert that the element is actually in the document.
  expect(bannerElement).toBeInTheDocument();
});

test('renders the login and post story buttons', () => {
  render(<App />);

  // You can also find elements by their role, which is great for accessibility.
  const loginButton = screen.getByRole('button', { name: /login with facebook/i });
  const postStoryButton = screen.getByRole('button', { name: /post your story/i });

  expect(loginButton).toBeInTheDocument();
  expect(postStoryButton).toBeInTheDocument();
});