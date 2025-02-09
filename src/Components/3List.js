import React from 'react'

export default function List()
{
    const BirthDayBoys=[{id:1,value:"Deepak"},{id:2,value:"Hariharan"}]
    const display=BirthDayBoys.map((boys)=>{return <li key={boys.id}>{boys.value}</li>
    return(
        <div>
            <ol>{dispaly}</ol>
        </div>
    )

}