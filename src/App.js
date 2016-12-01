import React, {
    Component
}
from 'react';
import {
    Button, Glyphicon, Modal
}
from 'react-bootstrap';

import './App.css';
import Campers from './Campers';

class App extends Component {

    constructor() {
        super();
        this.state = {
            campers: [],
            showModal: false,
            showInfo: false
        };

        this.close = () => {
            this.setState({
                showModal: false,
                showInfo: false
            });
        };

        this.open = () => {
            this.setState({
                showModal: true
            });
        };

        this.openInfo = () => {
            this.setState({
                showInfo: true
            });
        }
    }


    componentWillMount() {
        fetch('https://enigmatic-dawn-95873.herokuapp.com/api/v1/posts')
            .then(result => result.json())
            .then(result => this.setState({
                campers: result
            }))
            .catch(e => console.error(e));
    }

    render() {
        return ( < div className = "App" >
            < div className = "App-header" >
            < p > < span className = 'header-text pull-left' > freeCodeCamp < i className = "fa fa-free-code-camp"
            aria - hidden = "true" > < /i> Remote Pairing Noticeboard</span > < /p> < /div > < div className = 'App-body' >
            < div className = 'container' >
            < div className = 'row' > {
                this.state.campers.map((camper, i) => < div key = {
                        i
                    }
                    className = 'col-xs-12 col-md-6' > < Campers camper = {
                        camper
                    }
                    key = {
                        i
                    }
                    /></div > )
            } < /div> < /div > < Modal show = {
                this.state.showModal
            }
            onHide = {
                this.close
            } >
            < Modal.Header closeButton >
            < Modal.Title > Add your details to the board < /Modal.Title> < /Modal.Header > < Modal.Body >
            < form action = 'https://enigmatic-dawn-95873.herokuapp.com/api/v1/add'
            method = 'post' >
            < label htmlFor = 'username' > Forum username: < /label> < div className = 'input-group' > < span className = "input-group-addon"
            id = "basic-addon1" > @ < /span> < input className = 'form-control'
            name = 'username'
            id = 'username'
            type = 'text'
            aria - describedby = "basic-addon1" / >
            < /div> < label htmlFor = 'availableTime' > Length of Time Available
            for Pairing(example: 03: 00 = 3 hrs) < /label> < div className = 'input-group' > < input className = 'form-control'
            name = 'availableTime'
            id = 'availableTime'
            type = 'text'
            pattern = '\d{1,2}:\d{2}'
            aria - describedby = "basic-addon2" / >
            < span className = "input-group-addon"
            id = "basic-addon2" > HH: mm < /span> < /div > < label htmlFor = 'setup' > Preferred setup: < /label> < input className = 'form-control'
            name = 'setup'
            id = 'setup'
            type = 'text' / >
            < label htmlFor = 'interests' > Interests: < /label> < input className = 'form-control'
            name = 'interests'
            id = 'interests'
            type = 'text' / >
            < input className = 'btn btn-success modal-submit'
            type = 'submit'
            value = 'Submit' / >
            < /form> < /Modal.Body > < /Modal> < Modal show = {
            this.state.showInfo
        }
        onHide = {
                this.close
            } >
            < Modal.Header closeButton >
            < Modal.Title > About < /Modal.Title> < /Modal.Header > < Modal.Body >
            < p > This pair noticeboard in intended only
        for use by FCC Forum participants - it doesn 't work without a valid forum account.</p> < p > This was made in response to the week long < a href = '
        https: //forum.freecodecamp.com/t/computer-frontend-web-development-challenge-november-16-to-26/55986' > front end challenge < /a> organised by @P1xt.</p >
            < h1 > Technology used < /h1> < p > The front end is built with < b > React < /b > , in firm defiance of best practices, and uses an unholy mix of < b > react - bootstrap < /b > , and regular < b > Bootstrap < /b > . < /p > < p > The back end is built with < b > NodeJS < /b > , < b > Express < /b > and < b > MongoDB < /b > , with free, sandbox / hobby
        tier hosting from < b > Heroku < /b> and <b>mLab</b > . < /p> < h1 > Repos < /h
        1 > < p > The front end repo is here: < a href = 'https://github.com/jacksonbates/pair-frontend' > Front end < /a>.</p >
            < p > The back end repo is here: < a href = 'https://github.com/jacksonbates/pair-backend' > Back end < /a>.</p >
            < p > Neither have been refactored or tidied, yet... < /p> < h1 > Notes < /h
        1 > < p > I suspect I am using React all wrong - especially with the way I am dealing with form submissions, forcing redirects an refreshes all over the place.Doesn 't seem very Reacty to me...</p> < h1 > Further Development < /h1> < p > I am open to further development of this idea.Now that the project is finished in the eyes of the '
        contest ', I am open to working with any collaborators.PM me on the forum: < a href = '
        https: //forum.freecodecamp.com/users/jacksonbates' > JacksonBates < /a></p >
            < /Modal.Body> < /Modal > < /div> < div className = 'App-footer' > < Button className = 'add-button'
        bsSize = "small"
        onClick = {
                this.open
            } >
            < Glyphicon glyph = 'plus' / > Add < /Button> < Button className = 'info-button'
        bsSize = "small"
        onClick = {
                this.openInfo
            } >
            < Glyphicon glyph = 'info-sign' / > Info < /Button> < /div > < /div>
    );
}
}

export default App;
