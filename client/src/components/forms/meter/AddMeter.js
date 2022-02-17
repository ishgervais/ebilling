import { CreditCard } from 'react-feather'
import Button from '../../custom/Button'
export default function AddMeter() {
  

    return (
        <div className="">
     
                    <form className="my-5 text-sm">
                        <div className="form-group">
                            <label htmlFor="" className="block text-gray-500">
                                Meter Num
                            </label>
                            <div className="border rounded p-2 flex gap-2 items-center">
                                <CreditCard />

                                <input
                                    type="text"
                                    id="meternum"
                                    className="p-1 border-none w-full focus:ring-0"
                                    name="meternum"
                                    minLength="6"
                                    maxLength="6"
                                />
                               
                            </div>
                    
                        </div>

                        <Button title="Add" />
                        </form>
               
        </div>
    )
}
