import React from 'react';
import { Modal } from 'react-bootstrap';
import AppModalHeader from './AppModalHeader';

const InfoModal = props => {
  return (
    <Modal show={props.showInfo} onHide={props.close}>
      <AppModalHeader title="About" />
      <Modal.Body>
        <p>This pair noticeboard in intended only for use by FCC Forum participants - it doesn't work without a valid forum account.</p>
        <p>This was made in response to the week long <a href='https://forum.freecodecamp.com/t/computer-frontend-web-development-challenge-november-16-to-26/55986'>front end challenge</a> organised by @P1xt.</p>
        <h1>Technology used</h1>
        <p>The front end is built with <b>React</b>, in firm defiance of best practices, and uses an unholy mix of <b>react-bootstrap</b>, and regular <b>Bootstrap</b>.</p>
        <p>The back end is built with <b>NodeJS</b>, <b>Express</b> and <b>MongoDB</b>, with free, sandbox/hobby tier hosting from <b>Heroku</b> and <b>mLab</b>.</p>
        <h1>Repos</h1>
        <p>The front end repo is here: <a href='https://github.com/jacksonbates/pair-frontend'>Front end</a>.</p>
        <p>The back end repo is here: <a href='https://github.com/jacksonbates/pair-backend'>Back end</a>.</p>
        <p>Neither have been refactored or tidied, yet...</p>
        <h1>Notes</h1>
        <p>I suspect I am using React all wrong - especially with the way I am dealing with form submissions, forcing redirects an refreshes all over the place. Doesn't seem very Reacty to me...</p>
        <h1>Further Development</h1>
        <p>I am open to further development of this idea. Now that the project is finished in the eyes of the 'contest', I am open to working with any collaborators. PM me on the forum: <a href='https://forum.freecodecamp.com/users/jacksonbates'>JacksonBates</a></p>
      </Modal.Body>
    </Modal>
    );
};

export default InfoModal;