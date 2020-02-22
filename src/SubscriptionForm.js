import React from 'react'

function SubscriptionForm() {
  return (
    <form
      method="post"
      action="https://hnuti-budoucnost.ecomailapp.cz/public/subscribe/5/ed07fd6b07ff0199fabc8509f995f058"
      target="_blank"
    >
      <div className="bg-primary p-2 mb-2 rounded">
        <div className="form-group">
          <label className="text-white">
            <b>Váš e-mail *</b>
          </label>
          <input
            type="email"
            className="form-control form-control-sm border-white"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label className="text-white">Telefon</label>
          <input type="text" className="form-control" name="phone" />
        </div>
        <div className="form-group">
          <label className="text-white">Jméno</label>
          <input
            type="text"
            className="form-control form-control-sm border-white"
            name="name"
          />
        </div>
        <div className="form-group">
          <label className="text-white">Příjmení</label>
          <input
            type="text"
            className="form-control form-control-sm border-white"
            name="surname"
          />
        </div>
        <div className="form-group">
          <label className="text-white">PSČ</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="zip"
          />
        </div>
      </div>
      <p className="form-text pl-2">* je povinné pole</p>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Odeslat
        </button>
      </div>
    </form>
  )
}

export default SubscriptionForm
