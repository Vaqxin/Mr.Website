import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/layouts/mainLayout.jsx';
import Content from '/client/components/content.jsx';
import Footer from '/client/components/footer.jsx';
import Navbar from '/client/components/navbar.jsx';


FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
      navbar: <Navbar/>,
      content: <Content name="Myron"/>,
      footer: <Footer/>
    });
  }
});
