import React from 'react'
import './index.css'

function Contact() {
  return (
    <div className="Contact">
      <div className="card">
        <img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/weitu2x.png'/>
        <p>Contact By App</p>
        <div className="icons">
          <a target="_blank" href="https://twitter.com/FFCAP1" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/twitter%402x.png'/></a>
          <a target="_blank" href="https://discord.gg/Cas3g8bK" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/discord%402x.png'/></a>
          <a target="_blank" href="https://medium.com/@ffcap.pro" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/medium%402x.png'/></a>
          <a target="_blank" href="https://t.me/FFCAP_pro" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/telegram%402x.png'/></a>
        </div>
      </div>
      <div className="card">
        <img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/imgs/weitu2xs.png'/>
        <p>Contact By Email</p>
        <span>business@ffcap.pro</span>
      </div>
    </div>
  );
}

export default Contact;