import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // const opacity = startOpacity ? startOpacity : 1;
  return (    
    <div className="cursive">
      <Link to={`/mantras`}><button className="btn transparent btnGreyBorder" style={{marginRight: 50}}>Mantras</button></Link>
      <Link to={`/mandalas`}><button className="btn transparent btnGreyBorder" style={{marginLeft: 50}}>Mandalas</button></Link>
    </div>
  );
};

export default Footer;
