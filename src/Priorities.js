import React from 'react'

function Priorities({ data }) {
  return data.map(priority => <Priority data={priority} key={priority.title} />)
}

function Priority({ data, className }) {
  const { title, present, future } = data

  return (
    <div className="mb-4">
      <h3>{title}</h3>
      <h4>Současnost</h4>
      <p>{present}</p>
      <h4>Budoucnost</h4>
      <p>{future}</p>
    </div>
  )
}

export default Priorities
