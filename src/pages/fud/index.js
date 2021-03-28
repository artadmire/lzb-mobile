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


function Fud() {
  const [list] = useState([matic,inch,aave,dot,ksm,mdx,near,plm])
  return (
    <div className="Fud">
        <div className="content">
        {
          list.map((item, index) => <img key={index} src={item}/>)
        }
        </div>
      <MyBottom className="Fud-bottom"/>
    </div>
  );
}

export default Fud;