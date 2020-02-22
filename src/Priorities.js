import React, { useState } from 'react'
import { Alert, ListGroup, ListGroupItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function Priorities({ data }) {
  return (
    <ListGroup>
      {data.map(priority => (
        <Priority data={priority} key={priority.title} />
      ))}
    </ListGroup>
  )
}

function Priority({ data, className }) {
  const { title, present, future } = data
  const [open, setOpen] = useState(false)

  return (
    <ListGroupItem action>
      <h3
        className="py-3"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        {open ? (
          <FontAwesomeIcon icon={faMinus} className="mr-3" />
        ) : (
          <FontAwesomeIcon icon={faPlus} className="mr-3" />
        )}

        {title}
      </h3>

      {open && (
        <>
          <Alert color="danger" style={{ height: '100%' }}>
            <h4 className="alert-heading">Současnost</h4>
            <p>{present}</p>
          </Alert>

          <Alert style={{ height: '100%' }}>
            <h4 className="alert-heading">Budoucnost</h4>
            <p>{future}</p>
          </Alert>
        </>
      )}
    </ListGroupItem>
  )
}

export default Priorities
