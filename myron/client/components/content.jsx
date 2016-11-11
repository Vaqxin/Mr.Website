import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default Content = ({name}) => (
  <div>
    <FlatButton label="Home" />
    <FlatButton label="Projects" primary={true} />
    <FlatButton label="Contact" secondary={true} />
    <FlatButton label="Disabled" disabled={true} />
  </div>
);
