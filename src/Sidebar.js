import React from 'react'

import SubscribstionForm from './SubscriptionForm'

function Sidebar() {
  return (
    <>
      <h2 className="pl-2">Tvořte Budoucnost s námi</h2>
      <SubscribstionForm />

      <hr className="my-4" />

      <div className="jumbotron">
        <h2 className="">Přispějte nám</h2>
        <p className="lead">
          Za námi žádní oligarchové nestojí a na Budoucnost se musíme složit
          mezi sebou. Přispějte nám finančně na transparentní účet:{' '}
          <b className="font-weight-bold">2101754492/2010</b>
        </p>
      </div>
    </>
  )
}

export default Sidebar
