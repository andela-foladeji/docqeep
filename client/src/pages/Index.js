import React, {Component} from 'react';
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green600, green800} from 'material-ui/styles/colors';

import NavBar from '../components/presentational/NavBar';
import { DocActions, UserActions } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    doc: state.doc
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userDetails) => dispatch(UserActions.register(userDetails)),
    login: (loginDetails) => dispatch(UserActions.login(loginDetails)),
    createDoc: (docDetails) => dispatch(DocActions.createDocument(docDetails)),
    getDoc: () => dispatch(DocActions.getDocuments()),
    getADocument: (docId) => dispatch(DocActions.getADocument(docId))
  };
};

class Index extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#6BBD6E',
        primary2Color: green800,
        linkColor: green600
      }
    });
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section>
          <NavBar register={this.props.register} login={this.props.login} user={this.props.user} />
          { React.cloneElement(this.props.children, {user: this.props.user, createDoc: this.props.createDoc, doc: this.props.doc, getDoc: this.props.getDoc, getADocument: this.props.getADocument}) }
        </section>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);