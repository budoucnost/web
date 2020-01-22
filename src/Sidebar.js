import React from 'react'

import SubscribstionForm from './SubscriptionForm'

function Sidebar() {
  return (
    <>
      <h2 className="pl-2">Přidejte se k nám!</h2>
      <SubscribstionForm />

      <hr className="my-4" />

      <h2 className="pl-2">Přispějte nám</h2>
      <p className="pl-2">
        Za námi žádní oligarchové nestojí a na Budoucnost se musíme složit mezi
        sebou. Přispějte nám finančně na transparentní účet{' '}
        <b>2101754492/2010</b>
      </p>
    </>
  )
}

export default Sidebar
