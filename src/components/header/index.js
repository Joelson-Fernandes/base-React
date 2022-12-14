import React from 'react';
import { useSelector } from 'react-redux';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './style';

export default function Header() {
  const botao = useSelector((state) => state.example.value);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/123456/fdgfg">
        <FaSignInAlt size={24} />
      </Link>
      {botao ? 'Redux' : 'Redux modificado'}
    </Nav>
  );
}
