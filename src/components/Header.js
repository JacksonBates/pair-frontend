import React from 'react';

const Header = props => {
  return (
    <p><span className='header-text pull-left'>{props.children}</span></p>
    );
};

export default Header;