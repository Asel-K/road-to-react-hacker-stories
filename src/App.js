import React from 'react'

// const title = 'React'

function getTitle(title){
  return title
}

function App() {
  return (
    <div>
      <h1>Hello World {getTitle('World')}</h1>

      <label htmlFor='search'>Search:</label>
      <input id='search' type="text" />
    </div>
  )
}

export default App