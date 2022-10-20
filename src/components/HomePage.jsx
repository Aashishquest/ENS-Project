import React from 'react'

export const HomePage = () => {
  return (
    <>
    <section id='section1'>
        <div className="container">
            <div className="main">
                <h2>Ethereum Name Service (ENS) Lookup</h2>
                <div className='main1'>
                <input type="text" placeholder='Search ENS name or address'/>
                <i class="fa fa-search iconclass"></i>
                </div>
                <p className='para'>Search ENS name or address</p>
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
                        nick.eth
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Registrant:
                        </td>
                        <td>
                        0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5
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
