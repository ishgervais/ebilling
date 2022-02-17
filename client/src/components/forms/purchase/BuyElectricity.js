import { useState } from 'react';
import { CreditCard, DollarSign } from 'react-feather'
import toast from 'react-hot-toast';
import { connect } from '../../../service/Api';
import Button from '../../custom/Button'

export default function BuyElectricity() {

  const [meter, setMeter] = useState({
    meterNumber: "",
    amount: 0,
  });


  function handleChange(e) {
    setMeter({...meter,[e.name]: e.value});
  }

  const submitForm = async(e)=>{
    e.preventDefault();
      await connect('tokens','POST',meter)
      .then((response)=>{
        toast.success('Electricity purchased, this is your token: ----- '+response.token+' -----')
      })
      .catch((e)=>{
        toast.error(e.stringify())
      })

    }


  return (
    <div className="buy_electricity">
      <form action="" className="text-sm space-y-5 text-gray-500"
        onSubmit={(e) => { submitForm(e) }}

      >
        <div className="form-group">
          <label htmlFor="" className="block text-gray-500">
            Meter number
          </label>

          <div className="border rounded h- p-2  flex gap-2 items-center">
            <CreditCard />

            <input
              type="text"
              name="meter"
              id=""
              className="p-1 border-none w-full focus:outline-none"
              minLength="6"
              maxLength="6"
              placeholder="Meter number"
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>

        
        </div>
        <div className="form-group">
          <label htmlFor="" className="block text-gray-500">
            Amount
          </label>

          <div className="border rounded p-2 flex gap-2 items-center">
            <DollarSign />

            <input
              type="text"
              name="amount"
              id=""
              placeholder="Amount"
              className="p-1 border-none w-full focus:outline-none"
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
        
        </div>
        <Button title="Buy" />
      </form>
    </div>
  )
}
