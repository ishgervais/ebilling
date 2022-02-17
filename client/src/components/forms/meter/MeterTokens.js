import { useState } from 'react';
import { CreditCard } from 'react-feather'
import toast from 'react-hot-toast';
import { connect } from '../../../service/Api';
import Button from '../../custom/Button'

export default function MeterTokens() {

  const [meter, setMeter] = useState();

  function handleChange(e) {
    setMeter(e.value);
  }
  const [data,setData] = useState([]);

  const submitForm = async(e)=>{
    e.preventDefault();
      await connect('check/'+meter,'GET')
      .then((response)=>{
        setData([...data,response])
      })
      .catch((e)=>{
        toast.error(e.stringify())
      })

    }


  return (
    <div className="">
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
 
        <Button title="Search" />
      </form>

      {/* display meter tokens */}

    <div className="my-5">
{
    data.map((item, i) => {
        return(
            <div key={i}>

                    <div>Token:  <b>{item.token} </b> </div>
                    <div>Amount:  <b>{item.amount} </b> </div>
                    <div>Purchase date:  <b>{item.createdAt} </b> </div>
                    <div>Expiration date:  <b>{item.expiresAt} </b> </div>
            </div>
        )
    })
}
        
        
    </div>
    </div>
  )
}
