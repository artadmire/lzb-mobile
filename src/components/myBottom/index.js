import React from 'react'
import './index.css'
import imgURL from '../../assets/img/twitter@2x.png';
import imgURL2 from '../../assets/img/discord@2x.png';
import imgURL3 from '../../assets/img/medium.png';
import imgURL4 from '../../assets/img/telegram@2x.png';
import imgURL5 from '../../assets/img/email@2x.png';


function myBottom(props) {
  const { className = ''} = props
  return (
    <div className={`myBottom ${className}`}>
      <div className="icon">
        <a target="_black" href="https://twitter.com/FFCAP1"><img src={imgURL} /></a>
        <a target="_black" href="https://discord.gg/Cas3g8bK" ><img src={imgURL2}/></a>
        <a target="_black" href="https://medium.com/@ffcap.pro"><img src={imgURL3}/></a>
        <a target="_black" href="https://t.me/FFCAP_pro"><img src={imgURL4}/></a>
        <a  href="javascript:;"><img src={imgURL5}/></a>
      </div>
      <p className="contact">business@ffcap.pro</p>
      <p className="copy">© 2021 FFCAP</p>
    </div>
  );
}

export default myBottom;