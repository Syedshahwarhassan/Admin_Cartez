import React, { useEffect, useState } from 'react'
import { getDatabase, ref,onValue } from 'firebase/database'
import { app } from '../Firebase'

const Contact = () => {
    const recipient = 'recipient@example.com';
    const subject = 'Your subject here';
    const body = 'Your body text here';
    const [contact,setContact]=useState();
const db=getDatabase(app);
const REF=ref(db,'contact/')
useEffect(()=>{
    onValue(REF,(snapshot)=>{
        const data=snapshot.val();
    setContact(data)
    })
},[]);

const reply=(key)=>{
console.log(key)
}



  return (
    <div>
{
    contact && (
        <div>
            {
                Object.entries(contact).map(([key,c])=>{
                 
return(
    <div key={key}>
    <div className="Contact-conatiner">
          <div className="Contact-detail">
<img src={c.image} alt="" />
<div className="Contact-detail-text"><h4>{c.Name}</h4>
<h5>{c.Email}</h5>
<h6>{c.Msg}</h6>

</div>
          </div>
          <div className="Contact-btn">
          <a href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>Send Email</a>
           
          </div>
        </div>
    </div>
)
                })
            }
        </div>
    )
}
    </div>
  )
}

export default Contact