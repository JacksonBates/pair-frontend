import React from 'react';

const CamperPhoto = props => {
  return (
    <a href={'https://forum.freecodecamp.com/users/' + props.username}>
      <img className='profile-images' height="120" width="120" src={'https://forum.freecodecamp.com/user_avatar/forum.freecodecamp.com/' + props.username + '/120/202_1.png'} alt={props.username + '\'s profile image'} />
     </a>
    );
};

export default CamperPhoto;