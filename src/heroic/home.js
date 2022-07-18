import React from 'react'
import Nav from './nav';
import Header from './header';
import Content from './content'
import Footer from './footer'
class Home extends React.Component{
    render(){
        return (
            <div>
            <Nav/>
            <Header/>
            <Content/>
            <Footer/>
            </div>
          
           
        )
    }
    
}
export default Home;