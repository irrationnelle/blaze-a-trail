import { render, screen } from '@testing-library/react'
import {useEffect, useState} from "react";
import {interpolator, shorten, init} from 'blaze-shortener';

import './App.css'

function App() {
  const [value, setValue] =  useState('');
  const [result, setResult] =  useState('');

  const [value2, setValue2] =  useState('');
  const [result2, setResult2] =  useState('');

  useEffect(() => {
    init({
      findAll: () => {
        return []
      },
      insert: (url: {key: string, value: string}) => {
        console.log('registered: ', url);
      }
    })


  }, [])

  function handleClick() {
    const result = interpolator(value);
    setResult(result);
  }
  function handleClick2() {
    const result = shorten(value2, { shortOrigin: 'karrot-short'});
    setResult2(result);
  }

  return (
    <div className="App">
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <input value={value} onChange={(event) => {
          setValue(event.target.value);
        }} />
        <button onClick={handleClick}>interpolate</button>
      </div>

      <div style={{
        display: 'flex'
      }}>
        <span>result: </span>
        <span>{result}</span>
      </div>

      <div style={{
        marginTop: '1rem',
        display: "flex",
        flexDirection: "column"
      }}>
        <input value={value2} onChange={(event) => {
          setValue2(event.target.value);
        }} />
        <button onClick={handleClick2}>shorten</button>
        <div style={{
          display: 'flex'
        }}>
          <span>result: </span>
          <span>{result2}</span>
        </div>
      </div>


    </div>
  )
}

if (import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest

    describe('App: ', async () => {
        it('show shorten button', () => {
            render(<App />)
            const hello = screen.getByText('shorten');
            expect(hello).toBeVisible();
        })
    })
}

export default App
