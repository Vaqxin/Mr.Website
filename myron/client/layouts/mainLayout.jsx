import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default MainLayout = ({navbar, content, footer}) => (
  <div>
    <MuiThemeProvider muiTheme={lightMuiTheme}>
       <main>
           {navbar}
           {content}
           {footer}
       </main>
   </MuiThemeProvider>
  </div>
);
