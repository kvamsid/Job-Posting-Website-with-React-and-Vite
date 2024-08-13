import React from 'react'

const App = () => {

  const name = 'Vamsi';
  const x = 10;
  const y = 100;
  const names = ['Brad', 'joe', 'mary'];
  const admin = true;
  const customStyling = { color: 'green', fontSize: '24px' };
  return (
    <div>
      <div className='text-5xl'>App</div>
      <p style={customStyling}>Hello World this is {name} and {x} plus {y} = {x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {admin ? <h1>Admin is here</h1> : <h3> just a random user</h3>}
    </div>
  )
}

export default App