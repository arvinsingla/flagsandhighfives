import React, { Component } from 'react';
import itunes from './itunes-badge.png';
import googleplay from './google-badge.png';
import rss from './rss-badge.png';

class Sidebar extends Component {
  render() {
    return (
       <aside className="sidebar">
         <section className="social">
           <ul>
             <li><a href="https://www.instagram.com/flagsandhighfives/" target="_BLANK" title="Instagram" alt="Instagram" className='instagram'>Instagram</a></li>
             <li><a href="https://twitter.com/fahfpodcast" target="_BLANK" className="twitter" title="Twitter" alt="Twitter">Twitter</a></li>
             <li><a href="https://www.facebook.com/FAHFpodcast/" target="_BLANK" className="facebook" alt="facebook" title="facebook">Facebook</a></li>
           </ul>
         </section>
         <section className="services">
           <ul>
             <li>
               <a href="https://itunes.apple.com/ca/podcast/flags-and-high-fives-a-podcast-retrospective/id1218051476" target="_BLANK" title="iTunes" alt="iTunes" className='itunes'>
                 <img src={itunes} alt="Subscribe on iTunes" />
               </a>
             </li>
             <li>
               <a href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Iaeedrwhbsquvbpo3adkxm6mpay?t%3DFlags_and_High_Fives:_A_podcast_retrospective%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16" target="_BLANK" title="iTunes" alt="iTunes" className='itunes'>
                 <img src={googleplay} alt="Subscribe on Google Play Music" />
               </a>
             </li>
             <li>
               <a href="http://feeds.soundcloud.com/users/soundcloud:users:290085134/sounds.rss" target="_BLANK" title="RSS" alt="RSS" className='rss'>
                 <img src={rss} alt="Subscribe via RSS" />
               </a>
             </li>
           </ul>
        </section>
      </aside>
    )
  }
}

export default Sidebar;
