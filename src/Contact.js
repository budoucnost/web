import React from 'react'

function Contact() {
  return (
    <>
      <h1 className="sr-only">Kontakt</h1>
      <h2>E-mail</h2>
      <p className="lead">
        <a href="mailto:info@volim-budoucnost.cz">info@volim-budoucnost.cz</a>
      </p>

      <h2>Telefon</h2>
      <p className="lead">
        <b>Filip Hausknecht:</b> <a href="tel:+420603241874">604 241 874</a>
        <br />
        <b>Vendula Couvreur:</b> <a href="tel:+420739509674">739 509 674</a>
      </p>

      <h2>Přípravný výbor</h2>
      <ul>
        <li>Vendula Couvreur, Ostrava</li>
        <li>Filip Hausknecht, Praha</li>
        <li>Petra Jelínková, Praha</li>
        <li>Petr Kužel, Praha</li>
        <li>Martin Mátl, Brno</li>
        <li>Magdalena Michlová, Ostrava</li>
        <li>Kateřina Nyklová, Ostrava</li>
        <li>Vít Strobach, Praha</li>
      </ul>
    </>
  )
}

export default Contact
