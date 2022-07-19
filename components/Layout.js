import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div>
      <Navbar user={props.user} refreshUserProfile={props.refreshUserProfile} />
      {props.children}
      <Footer />
    </div>
  );
}
