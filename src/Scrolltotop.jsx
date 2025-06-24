import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Scrolltotoplink = ({ to, className, children }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}>
      {children}
    </Link>
  )
}

export default Scrolltotoplink;
