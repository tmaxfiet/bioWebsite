import React from 'react';
import './GoBackButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

class GoBackButton extends React.Component {
    render() {
        return (
            <div className="go-back-button">
                <FontAwesomeIcon icon={faCaretUp} size="2x" />
            </div>
        )
    }
}

export default GoBackButton;