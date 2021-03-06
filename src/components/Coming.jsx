import React, {Component} from 'react';

import './Coming.css'

class Coming extends Component {
  
  constructor(props) {
    super(props);

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var oneHour = 60*60*1000;
    var oneMinute = 60*1000;
    this.aftermath = props.countdown;

    var diffDays = Math.floor(Math.abs((Date.now() - this.aftermath.getTime())/(oneDay)));
    var diffHours = Math.floor(Math.abs((Date.now() - this.aftermath.getTime())/(oneHour))) - diffDays * 24;
    var diffMinutes = Math.floor(Math.abs((Date.now() - this.aftermath.getTime())/(oneMinute))) - diffDays * 24 * 60 - diffHours * 60;
    var diffSeconds = Math.floor(Math.abs((Date.now() - this.aftermath.getTime())/(1000))) - diffDays * 24 * 60 * 60 - diffHours * 60 * 60 - diffMinutes * 60;
    this.state = {
      days: diffDays,
      hours: diffHours,
      mins: diffMinutes,
      seconds: diffSeconds
    };
  }

  componentDidMount(){
    this.interval = setInterval(this.fixTime , 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  fixTime = () => {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var oneHour = 60*60*1000;
    var oneMinute = 60*1000;
    this.aftermath = this.props.countdown;
    var diffDays = Math.floor(Math.abs((Date.now() - this.aftermath.getTime())/(oneDay)));
    var diffHours = Math.floor(Math.abs((Date.now() - this.aftermath.getTime())/(oneHour))) - diffDays * 24;
    var diffMinutes = Math.floor(Math.abs((Date.now() - this.aftermath.getTime())/(oneMinute))) - diffDays * 24 * 60 - diffHours * 60;
    var diffSeconds = Math.floor(Math.abs((Date.now() - this.aftermath.getTime())/(1000))) - diffDays * 24 * 60 * 60 - diffHours * 60 * 60 - diffMinutes * 60;
    this.setState({
      days: diffDays,
      hours: diffHours,
      mins: diffMinutes,
      seconds: diffSeconds
    });
  }

  render() {
    return (
      <div className="mourgosiscoming container-fluid">
        <img src={'/images/mourgos-logo-white.png'} alt={'logo'}/>
        <div className="countdown container row">
          <span className="cd days col-12 col-sm-6 col-md-3">{this.state.days} <br /> Ημέρες</span>
          <span className="cd hours col-12 col-sm-6 col-md-3">{this.state.hours} <br /> Ώρες</span>
          <span className="cd minutes col-12 col-sm-6 col-md-3">{this.state.mins} <br /> Λεπτά</span>
          <span className="cd minutes col-12 col-sm-6 col-md-3">{this.state.seconds} <br />  Δευτερόλεπτα</span>
        </div>
        <span>Ο ΜΟΥΡΓΟΣ ΕΡΧΕΤΑΙ...</span>
      </div>
    );
  }
}
export default Coming;
