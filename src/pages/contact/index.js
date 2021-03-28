import React from 'react'
import './index.css'
import a from '../../assets/img/twitter@2x.png'
import b from '../../assets/img/discord@2x.png'
import c from '../../assets/img/medium@2x.png'
import d from '../../assets/img/telegram@2x.png'
import wei1 from '../../assets/img/位图@2x.png'
import wei2 from '../../assets/img/位图@2x(1).png'

function Contact() {
  return (
    <div className="Contact">
      <div className="card">
        <img src={wei1}/>
        <p>Contact By App</p>
        <div className="icons">
          <p><img src={a}/></p>
          <p><img src={b}/></p>
          <p><img src={c}/></p>
          <p><img src={d}/></p>
        </div>
      </div>
      <div className="card">
        <img src={wei2}/>
        <p>Contact By Email</p>
        <span>contact@ffcap.com</span>
      </div>
    </div>
  );
}

export default Contact;