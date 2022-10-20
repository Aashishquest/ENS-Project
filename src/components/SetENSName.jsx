import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { addressCheck } from '../helpers/RateHelper';
import { setENSName } from '../helpers/SetName';
import { Details } from '../helpers/SearchName';

export const SetENSName = () => {

    const [Name, setName] = useState("");
    const [Error, setError] = useState("");
    const [Node, setNode] = useState("");
    const [Resolver, setResolver] = useState("");
    const [UserAddress, setUserAddress] = useState("");
    const [inputValue, setInputValue] = useState({
        walletAdd: ""
        })
        const formdata = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputValue({ ...inputValue, [name]: value })
        }

    const SearchAddress = async (e) => {
        let detail = await setENSName(inputValue.name , inputValue.time);
        let name = detail.name;
        let node = detail.node;
        let resolver = detail.resolver;
        let useraddress = detail.useraddress;
        setName(name);
        setUserAddress(useraddress);
        setNode(node);
        setResolver(resolver);
        console.log("Name",detail)
        };

  return (
    <>
    <ToastContainer/>
    <section id='section1'>
        <div className="container">
            <div className="main">
                <h2>Ethereum Name Service (ENS) Lookup</h2>
                <div className='main1'>
                <p>Name: </p><input
                    type="text"
                    className='para'
                    placeholder="Enter Name"
                    id="takeone"
                    name="name"
                    onChange={formdata}
                    value={inputValue.name}
                />
                 <div className='main1'>
                    <p>Time: </p><input
                        type="text"
                        className='para'
                        placeholder="Enter Timestamp"
                        id="takeone"
                        name="time"
                        onChange={formdata}
                        value={inputValue.time}
                    />
                    </div>
                <button onClick={SearchAddress}>SetENSName</button>
                </div>
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
                        Name:
                        </td>
                        <td>
                        {" "}{Name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Node:
                        </td>
                        <td>
                        {Node}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        UserAddress:
                        </td>
                        <td>
                        {UserAddress}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Resolver:
                        </td>
                        <td>
                        {Resolver}
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
