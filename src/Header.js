import React, { Component } from 'react';
import hero from './fahf_website_hero.png';

class Sidebar extends Component {

  state = {
    emailAddress: ''
  }

  isValidEmail = () => {
    let email = this.state.emailAddress;
    let rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rejex.test(email);
  }

  render() {

    let validEmail = this.isValidEmail();

    return (
       <header className="header">
         <div className="branding">
           <img className="branding__hero" alt="Flags and High Fives logo" src={hero} />
           <hgroup className="branding__text">
             <h1 className="branding__text__title">FLAGS AND HIGH FIVES</h1>
             <h2 className="branding__text__subtitle">A podcast retrospective</h2>
             <p className="branding__text__description">Friends and former podcasters extraordinaire, Arvin and Ben, look back on their success, shortcomings, and the ultimate downfall of their hit 2007 video game podcast. </p>
             <hr className="branding__text__separator" />
             <h3 className="branding__text__newsletter__title">Subscribe</h3>
             <p className="branding__text__newsletter__text">
               Get notified of the latest episodes and news. We promise not to spam you.
             </p>
             <form
               action="http://arvinsingla.us1.list-manage.com/subscribe/post?u=b89ca2fcacbd5d9a28518d5cd&amp;id=5443a024ee"
               method="post"
               id="mc-embedded-subscribe-form"
               name="mc-embedded-subscribe-form"
               className="branding__text__newsletter__form"
               target="_blank"
               noValidate
             >
               <input
                 type="email"
                 placeholder="Email address"
                 value={this.state.emailAddress}
                 onChange={(evt) => this.setState({emailAddress: evt.target.value})}
                 name="EMAIL"
                 className="required email"
                 id="mce-EMAIL"
               />
               <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                 <input type="text" name="b_b89ca2fcacbd5d9a28518d5cd_5443a024ee" tabIndex="-1" value="" />
               </div>
               <input
                 type="submit"
                 value="Subscribe"
                 name="subscribe"
                 id="mc-embedded-subscribe"
                 className="button"
                 disabled={!validEmail}
               />
             </form>
           </hgroup>
         </div>
       </header>
    )
  }
}

export default Sidebar;
