$(document).ready(function(){
    $('#buspage').click(function(){
           var Timeline = new TimelineMax()
           var nextbutton = $('.screen-home__bus-page')
           var screenBottom = $('.screen-bottom');
                        Timeline 
                       .to('.screen-home__inside-wave', '0.3', {width: 52, height: 52 })
                       .to('.screen-home__inside-wave', '0.3', {opacity: 0, onComplete: clkAnimComplete})
                       function clkAnimComplete() {
                           // .to('.screen-home__inside-wave', '0.3', {width: 100, height: 100 })
                           Timeline .to('.screen-home__recent-search', 0.1, {scale: 0.9, y: 5, opacity:0, ease: Power2.easeIn}, '0')
                           Timeline .to('#formdetail', 0.1, {scale: 0.9, y: 5, opacity:0, ease: Power2.easeIn})
                           Timeline .to('.screen-bottom', 0.1, {opacity: 0}, '0')
                           Timeline .to(nextbutton, 1, {rotation: 720, scale: 0.4, borderWidth: 0, ease: Expo.easeOut})
                           Timeline .to('.screen-home__bus-arrow-wrap', 1, {scale: 0, opacity: 0, ease: Expo.easeOut}, '0')
                           Timeline .to('.line', 0.6, {width: 0}, '0.6')
                           Timeline .to('.screen-home__submit-wrap', 0.6, {width: 375, height: 90, x: -15, y: -409, ease: Expo.easeOut })
                           Timeline .to(nextbutton, 0.6, {scale: 1, width: 375, height: 90, borderRadius: 0, ease: Expo.easeOut, onStart: visibleBox})
                           Timeline .to(screenBottom, 0.1, {opacity: 1})
                           Timeline .to('.screen-bus', 0, {opacity:1})
                           Timeline .to('.screen-home', 0.6, {opacity: 0})
                           Timeline .to('.screen-home', 0, {display: 'none'})
                           function visibleBox() {
                            Timeline.staggerTo('.screen-bus__travels-col', 0.4, {opacity: 1, y: 0, ease: Expo.easeIn}, '0.1'); 
                               console.log('start');
                           } 
                       }
        });
     
   var TimelineWaveAnim = new TimelineMax({repeat: -1});
        TimelineWaveAnim
                 .to('.screen-home__inside-wave', 0.8, {width: '100%', height: '100%'});
   });