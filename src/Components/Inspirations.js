import React, { Component } from 'react';

class Inspirations extends Component {
  render() {

    if(this.props.data){
      var inspirations = this.props.data.inspirations.map(function(inspirations){
        return  <li key={inspirations.user}>
            <blockquote>
               <p>{inspirations.text}</p>
               <cite>{inspirations.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="inspirations">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Inspirations</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {inspirations}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Inspirations;
