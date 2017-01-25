import React from 'react';
import {Link} from 'react-router';

const Menu = ({ user }) => {
  return(
    <ul id="slide-out" class="side-nav fixed">
      <li>
        <div className="nav_head valign-wrapper">
          <h5 className="valign"><i class="material-icons">content_paste</i>docQeep</h5>
        </div>
      </li>
      <li><a class="subheader">User Management</a></li>
      <li className="center-align">Hi! {user.user.firstName + " " + user.user.lastName }</li>
      <li>
        <Link to="/edit_profile" className="waves-effect">
          <i class="material-icons">account_box</i>Edit Profile
        </Link>
        <Link to="/create_role" className="waves-effect">
          <i class="material-icons">add_box</i>Create Role
        </Link>
        <Link to="/view_users" className="waves-effect">
          <i class="material-icons">group_work</i>View Users
        </Link>
      </li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Documents</a></li>
      <li>
        <Link to="/create_document" className="waves-effect">
          <i class="material-icons">note_add</i>Create Documents
        </Link>
        <Link to="/create_document" className="waves-effect">
          <i class="material-icons">folder_open</i>View All
        </Link>
        <Link to="/create_document" className="waves-effect">
          <i class="material-icons">cloud</i>My Documents
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
