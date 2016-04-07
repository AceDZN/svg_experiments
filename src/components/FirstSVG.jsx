import React, {Component} from 'react';

class FirstSVG extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    var renderSvgTag = function() { return {__html: '<svg className="viible" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 268 268"><use xlink:href="#svg_icon" /></svg>'};};
    var renderHouseIcon = function(){return{__html:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 340 340"><title>Home Icon</title><desc>A yellow house with blue windows.</desc><circle class="background-circle" cx="170" cy="170" r="162"/><path d="M146.487 131.174c-1.34-9.782-13.134-3.526-13.134-3.526-3.228-9.335-12.414-4.146-12.414-4.146-.05-12.91-12.168-7.175-12.168-7.175-2.36-12.985-19.217-13.93-25.15-5.115-4.768 7.05-.497 13.53-.497 13.53C76.05 122.61 76 131.175 76 131.175v2.507h83"/><path d="M286.487 131.174c-1.34-9.782-13.134-3.526-13.134-3.526-3.228-9.335-12.414-4.146-12.414-4.146-.05-12.91-12.167-7.175-12.167-7.175-2.36-12.985-19.217-13.93-25.15-5.115-4.768 7.05-.497 13.53-.497 13.53-7.076-2.134-7.126 6.432-7.126 6.432v2.507h83"/><rect class="chimney" x="98" y="127" width="14" height="21"/><rect class="chimney-topper" x="95" y="123" width="20" height="4"/><rect class="body" x="90" y="198" width="162" height="84"/><polygon class="roof" points="256,148 262,203 80,203 87,148 327,148"></polygon><rect class="door" x="153" y="222" width="36" height="60"/><rect class="door" x="153" y="218" width="36" height="10" rx="5" ry="5"/><rect class="door-knob" x="183" y="252" width="2" height="8"/><g class="windows" transform="translate(72 110)"><rect x="36" y="113" width="14" height="14"/><rect x="52" y="113" width="14" height="14"/><rect x="36" y="129" width="14" height="14"/><rect x="52" y="129" width="14" height="14"/><line x1="34" y1="147" x2="69" y2="147"/><rect x="130" y="113" width="14" height="14"/><rect x="146" y="113" width="14" height="14"/><rect x="130" y="129" width="14" height="14"/><rect x="146" y="129" width="14" height="14"/><line x1="128" y1="147" x2="162" y2="147"/></g><symbol id="bloom"><circle class="flower-outer" cx="228" cy="267" r="6"/><circle class="flower-inner" cx="231" cy="266" r="2"/></symbol><g class="flower" transform="scale(.8) translate(60,71)"><line x1="228" y1="267" x2="228" y2="282"/><use xlink:href="#bloom" /></g><g class="flower" transform="translate(-22, 0)"><line x1="228" y1="267" x2="228" y2="282"/><g transform="rotate(195,228,267)"><use xlink:href="#bloom" /></g></g><g class="flower" transform="translate(-93, 0)"><line x1="228" y1="267" x2="228" y2="282"/><g transform="rotate(50,228,267)"><use xlink:href="#bloom" /></g></g><g class="flower" transform="translate(-116, 0) scale(.8) translate(55,71)"><line x1="228" y1="267" x2="228" y2="282"/><use xlink:href="#bloom" /></g><text x="85" y="90">HOME</text></svg>'};};
    return (


      <div className="row">
        <div>
          <svg className="hidden" xmlns="http://www.w3.org/2000/svg" version="1.1" >
            <symbol id="svg_icon">
              <title>SVG Icon</title>
              <desc>SVG triangle icon</desc>

              <g transform="translate(45, 67) rotate(10 12.5 12.5)">
                <polygon points="7,10 12, 0 17, 10" className="triangle" />
                <polygon points="0,25 5, 15 10, 25" className="triangle" />
                <polygon points="15,25 20, 15 25, 25" className="triangle" />
              </g>
              <g transform="translate(198, 67) rotate(-10 12.5 12.5)">
                <polygon points="7,10 12, 0 17, 10" className="triangle" />
                <polygon points="0,25 5, 15 10, 25" className="triangle" />
                <polygon points="15,25 20, 15 25, 25" className="triangle" />
              </g>
              <g transform="translate(121.5, 211) rotate(-180 12.5 12.5) scale(0.6) translate(8,8)">
                <polygon points="7,10 12, 0 17, 10" className="triangle" />
                <polygon points="0,25 5, 15 10, 25" className="triangle" />
                <polygon points="15,25 20, 15 25, 25" className="triangle" />
              </g>
              <circle id="circle" cx="134" cy="134" r="130"/>
              <line id="line" x1="47" y1="198" x2="221" y2="198" />
              <polygon id="poly" points="52,190 134, 30 216, 190" />
              <text id="text" x="134" y="182" >SVG</text>
            </symbol>
          </svg>
        </div>
        <div className="col-xs-6 col-sm-3 text-center">
          <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <rect height="80" width="100" />
            <rect height="50" width="80" fill="white" x="10" y="10"/>
            <rect height="10" width="60" x="20" y="90"/>
          </svg>
        </div>
        <div className="col-xs-6 col-sm-3 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <rect
              height="100" width="70"
              fill="white" stroke="#B50000" strokeWidth="10"
              rx="5"
              x="5" y="5"
              />
            <circle cx="40" cy="105" r="3" fill="#fff" />
          </svg>
        </div>
        <div className="col-xs-6 col-sm-3 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 268 268">
            <g transform="translate(45, 67) rotate(10 12.5 12.5)">
              <polygon points="7,10 12, 0 17, 10" className="triangle" />
              <polygon points="0,25 5, 15 10, 25" className="triangle" />
              <polygon points="15,25 20, 15 25, 25" className="triangle" />
            </g>
            <g transform="translate(198, 67) rotate(-10 12.5 12.5)">
              <polygon points="7,10 12, 0 17, 10" className="triangle" />
              <polygon points="0,25 5, 15 10, 25" className="triangle" />
              <polygon points="15,25 20, 15 25, 25" className="triangle" />
            </g>
            <g transform="translate(121.5, 211) rotate(-180 12.5 12.5) scale(0.6) translate(8,8)">
              <polygon points="7,10 12, 0 17, 10" className="triangle" />
              <polygon points="0,25 5, 15 10, 25" className="triangle" />
              <polygon points="15,25 20, 15 25, 25" className="triangle" />
            </g>
            <circle id="circle" cx="134" cy="134" r="130"/>
            <line id="line" x1="47" y1="198" x2="221" y2="198" />
            <polygon id="poly" points="52,190 134, 30 216, 190" />
            <text id="text" x="134" y="182" >SVG</text>
          </svg>
        </div>
        <div className="col-xs-6 col-sm-3 text-center" dangerouslySetInnerHTML={renderSvgTag()}></div>
        <div className="col-xs-6 col-sm-3 text-center" dangerouslySetInnerHTML={renderHouseIcon()}></div>

      </div>
    )
  }
}

export default FirstSVG
