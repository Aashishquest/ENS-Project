import { stripBasename } from '@remix-run/router';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { addressCheck } from '../helpers/RateHelper';
import { Details } from '../helpers/SearchName';

export const HomePage = () => {

    const [Error, setError] = useState("");
    const [Name, setName] = useState("");
    const [Ragistrant, setRagistrant] = useState("");
    const [inputValue, setInputValue] = useState({
        walletAdd: ""
        })
        const formdata = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputValue({ ...inputValue, [name]: value })
        }

    async function SearchAddress() {
        let status = await addressCheck(inputValue.walletAdd)

        if (status == false) {
            setError("Enter Valid Address");
        }
        else {
            SearchAdd();
        }
        }

    const SearchAdd = async (e) => {
        let detail = await Details(inputValue.walletAdd);
        let name = detail.name;
        let useraddress = detail.useraddress;
        setName(name);
        setRagistrant(useraddress);
        console.log("Name",name, useraddress)
        };

  return (
    <>
    <ToastContainer/>
    <section id='section1'>
        <div className="container">
            <div className="main">
                <h2>Ethereum Name Service (ENS) Lookup</h2>
                <div className='main1'>
                <input
                    type="text"
                    className='para'
                    placeholder="Search ENS name or address"
                    id="takeone"
                    name="walletAdd"
                    onChange={formdata}
                    value={inputValue.walletAdd}
                />
                <button onClick={SearchAddress}><i class="fa fa-search iconclass"></i></button>
                </div>
                <p className='para'>{Error}</p>
                <div className="tableview">
                <table>
                    <th>
                        <thead>
                         Overview
                        </thead>
                    </th>
                    <tbody>
                    <tr>
                        <td>
                        Reverse Record:
                        </td>
                        <td>
                        {Name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Registrant:
                        </td>
                        <td>
                        {Ragistrant}
                        </td>
                    </tr>
                    </tbody>
                    
                </table>
            </div>
            </div>
        
        </div>
    </section>
    </>
  )
}
