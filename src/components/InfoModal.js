import React from 'react';
import { Modal } from 'react-bootstrap';
import AppModalHeader from './AppModalHeader';

const InfoModal = props => {
  return (
    <Modal show={props.showInfo} onHide={props.close}>
      <AppModalHeader title="About" />
      <Modal.Body>
        <p>This pair noticeboard in intended only for use by FCC Forum participants - it doesn't work without a valid forum account.</p>
        <p>This is meant to enable FCC members to pair up on projects and advertise their availability to other FCC members.</p>
        <h3>How To Use:</h3>
        <ol>
          <li>Click the add bottom at the bottom of the screen</li>
          <li>On the dialogue screen that pops up you'll be presented with a range of options, these are outlined below:</li>
            <ul>
              <li>Forum Username: Use the same handle you use on the forum so that people can see who is advertising their time</li>
              <li>Length of time available: How much time you actually have to pair in hours, so if you have an hour to spare enter it as 01:00</li>
              <li>Preferred Pairing Technology: What would you like to use to pair and share screens</li>
              <li>Other: This field doesn't currently work and is being looked at</li>
              <li>Interests: This can be what you are interesting in covering while pairing as well as any other interests</li>

            </ul>
            <li>As a minimum fill out the forum username, length of time available and preferred technology</li>
            <li>Once you have filled out the required fields click submit and wait for someone to respond to your advert</li>
        </ol>
        <h3>Get in touch</h3>
        <p>Any questions or if you want to collaborate on this then get in touch via <a href="https://forum.freecodecamp.com/users/jacksonbates">JacksonBates</a> on the forum</p>
        <p></p>
      </Modal.Body>
    </Modal>
    );
};

export default InfoModal;
