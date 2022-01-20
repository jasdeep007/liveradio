import { Component, OnDestroy, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
declare var $: any;

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    script.setAttribute('liveradio', 'liveradio');
    const myNode = document.getElementById("script");
    if (myNode != null) myNode.innerHTML = '';
    this.renderer.appendChild(document.getElementById("script"), script);
    return script;
  }

  ngOnInit() {
    $('header').hide();
    $('footer').hide();
    let h: number = 0;
    let r = setInterval(function () {
      h = h + 1;
      $('.element-radiojar').hide();
      $('.element-share-share').hide();
      if (h == 40) {
        clearInterval(r);
      }
    }, 500);
    // this.renderExternalScript('https://embed.radio.co/player/2746d82.js').onload = () => {
    //   console.log('Player loaded');
    //   // do something with this library
    //   document.getElementsByTagName("iframe")[0].style.display = "flex";
    // }  
  }
  ngOnDestroy() {
    // // remove iframe if any
    // document.getElementsByTagName("iframe")[0].remove();
    // document.querySelectorAll('script[liveradio=liveradio]')[0].remove();
    // document.querySelectorAll('iframe').forEach(
    //   function(elem){
    //     if(elem.parentNode != null)
    //       elem.parentNode.removeChild(elem);
    // });
  }

}
