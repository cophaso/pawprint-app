import React from 'react';
import './homePage.css';
import moment from 'moment';
import Logo from './Logo.png';


class HomePage extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        month: moment(),
        selected: moment().startOf('day')
      };
      
      this.previous = this.previous.bind(this);
      this.next = this.next.bind(this);
    }
    
    previous() {
      const {
        month,
      } = this.state;
  
      this.setState({
        month: month.subtract(1, 'month'),
      });
    }
  
    next() {
      const {
        month,
      } = this.state;
  
      this.setState({
        month: month.add(1,'month'),
      });
    }
    
    select(day) {
      this.setState({
        selected: day.date,
        month: day.date.clone(),
      });
    }
  
  
    render() {
      return (
        <div>
            <img src={Logo} />
            <h1>Welcome to PawPrint!</h1>
        
        <section className="calendar">
            <div className = "dogCalendar">
                <span class="title">Today's Guests</span>
                <span class="dogIcon">🐶</span>
                <span class="counter">#</span>
            </div>
        </section>

        <section>
        <h1>Buster</h1>
        <h1>Pickles</h1>
        <h1>Roger</h1>
        </section>

        </div>
      );
    }
  }
  
  
  
export default HomePage;
