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
      open: false,
      loggedIn: false
    };
    this.getStarted = this.getStarted.bind(this);
    this.closeStarted = this.closeStarted.bind(this);
    this.finalizeLogin = this.finalizeLogin.bind(this);
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

  finalizeLogin() {
    this.closeStarted();
    this.setState({ loggedIn: true });
  }

  render() {
    let label;
    let button;
    if(this.state.loggedIn) {
      button = '';
      label = "LOGOUT";
    } else {
      button = <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.closeStarted}
          >
          <DropDown loggedIn={this.finalizeLogin} register={this.props.register} login={this.props.login} user={this.props.user}/>
        </Popover>
      label = "GET STARTED";
    }
    return(
      <div>
        <AppBar
          title="docQeep"
          showMenuIconButton = {false}
          iconElementRight={<FlatButton onTouchTap={ this.getStarted } label={ label } />}
          style={{zIndex: 0}}
        />
        { button }
      </div>
    );
  }
}

export default NavBar;
