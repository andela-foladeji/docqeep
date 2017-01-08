import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Paper from 'material-ui/Paper'

import DropDown from './DropDown';

class NavBar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.getStarted = this.getStarted.bind(this);
    this.closeStarted = this.closeStarted.bind(this);
  }

  getStarted(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  closeStarted() {
    this.setState({
      open: false
    });
  }

  render() {
    return(
      <div>
        <AppBar
          title="docQeep"
          showMenuIconButton = {false}
          iconElementRight={<FlatButton onTouchTap={this.getStarted} label="GET STARTED" />}
        />
        <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.closeStarted}
          >
          <DropDown />
        </Popover>
      </div>
    );
  }
}

export default NavBar;
