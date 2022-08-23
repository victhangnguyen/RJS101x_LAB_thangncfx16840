import React from 'react'

function HelloComponent() {
  const [myname, setMyName] = React.useState('Nguyen Chi Thang')

  const data = fetch('https://jsonplaceholder.typicode.com/todos/1').then(sponse => sponse.json())

  
  return (
    <div>{myname}</div>
  )
}

export default HelloComponent