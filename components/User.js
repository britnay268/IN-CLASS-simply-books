/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function User() {
  const { user } = useAuth();
  // console.warn(user);
  return (
    <>
      <img src={user.photoURL} />
      <h3>{user.displayName}</h3>
      <p>{user.email}</p>
      <p>{user.metadata.lastSignInTime}</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signOut}>Sign Out</Button>
    </>
  );
}
