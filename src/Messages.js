/*s a simple stateless component that simply displays 
the values of the two props. 
However, if the number of unread notifications is zero 
then we do not want to display the badge. 
First, we check if the unread prop contains a non-zero value. 
If it does, then render a div with the value, 
otherwise, render nothing. */

import React from "react";
import "./Messages.css";

export default function Messages(props) {
  const badge = props.unread ? (
    <div className="unread_count badge">{props.unread}</div>
  ) : null;
  return (
    <div className="messages">
      {props.name}
      {badge}
    </div>
  );
}
