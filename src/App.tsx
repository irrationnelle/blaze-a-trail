import { render, screen } from '@testing-library/react'

import './App.css'

function App() {
  return (
    <div className="App">
      <span>hello world</span>
    </div>
  )
}

if (import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest

    describe('App: ', async () => {
        it('show hello world', () => {
            render(<App />)
            const hello = screen.getByText('hello world');
            expect(hello).toBeVisible();
        })
    })
}

export default App
