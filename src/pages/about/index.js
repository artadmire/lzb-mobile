import React, {useState} from 'react'
import './index.css'
import MyBottom from  '../../components/myBottom'
import matic from  '../../assets/img/matic.png'
import inch from  '../../assets/img/1inch.png'
import aave from  '../../assets/img/aave.png'
import dot from  '../../assets/img/dot.png'
import ksm from  '../../assets/img/ksm.png'
import mdx from  '../../assets/img/mdx.png'
import near from  '../../assets/img/near.png'
import plm from  '../../assets/img/plm.png'

function About() {
  const [tabKay, setTabkey] = useState('1');
  const [list] = useState([matic,inch,aave,dot,ksm,mdx,near,plm])

  function handleChange(key) {
    setTabkey(key)
  }
  return (
    <div className="my-about">
      <div className="header-top">
        <span onClick={() => handleChange('1')} className={`left ${tabKay === '1' && 'active'}`}>
          FFCAP
        </span>
        <span onClick={() => handleChange('2')} className={`right ${tabKay === '2' && 'active'}`}>
        partnerships
        </span>
      </div>
      {tabKay === '1' && <>
        <h1>ABOUT FFCAP</h1>
        <div className="contents">
        <div>
          
          <p className="title">
          About us Walk With Entrepreneurs
          </p>
          <p className="desc">
          FFCAP invests in blockchain innovation projects for and is committed to investing in long-term value in new growth areas.
  We are constantly learning and participating with entrepreneurs in the latest technologies and projects. 
        </p>
        <p className="titleW">
        Utilizing capital and solutions to help the best projects and teams grow FFCAP as a professional Token investment institution. 
        </p>
        <p className="desc">
        We were involved in investment projects since 2015 and have rich experience in how to invest and operate projects. 
  We have many partners, including operations, market, technology, exchange, economic model, business model design and other fields. 
  We can give block chain projects in different stages of development a professional and effective help on a greater degree to help the project to expand its own advantages and characteristics, guiding the project for development of long-term growth. 
        </p>
        <p className="title">A long-term value investor with an international perspective.</p>
          <p>
          FFCAP has many partners around the world. We devote all our resources to blockchain innovation and long-term value, and for working with the best blockchain teams around the world. 
      At the same time, FFCAP is looking for more excellent partners in the United States, China and Europe to discover more cutting-edge blockchain business thinking and methods.
          </p>
        </div>
      </div>
      </>}
      {
        tabKay === '2' &&  <div className="about-content">
        {
          list.map((item, index) => <img key={index} src={item}/>)
        }
        </div>
      }
      <MyBottom className="my-about-bottom"/>
    </div>
  );
}

export default About;