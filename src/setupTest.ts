import '@testing-library/jest-dom'

const originalWarn = console.error.bind(console.error)

beforeAll(() => {
    console.error = (msg) =>
        !msg.toString().includes('ReactDOM.render is no longer supported') &&
        originalWarn(msg)
})
afterAll(() => {
    console.error = originalWarn
})
