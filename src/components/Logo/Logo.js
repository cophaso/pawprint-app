import React, {Component} from 'react';
import './Logo.css';
import LogoImg from '../../assets/images/pawprint-logo.png';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';


export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  }

  render() {
    return <>
      <nav className='navigationHeader'>
        {TokenService.hasAuthToken() 
            ? <Link to='/home'>
              <div className='wholeLogo'>
              <img src={LogoImg} alt='logo' />
                <div className='logo-title'>
                  <h1>PawPrint</h1>
                  <p>Dog scheduling made easy</p>
                </div>
                </div>
             </Link>
            : <Link to='/'>              
              <div className='wholeLogo'>
              <img src={LogoImg} alt='logo' />
                <div className='logo-title'>
                  <h1>PawPrint</h1>
                  <p>Dog scheduling made easy</p>
                </div>
                </div>
            </Link>
          }
      </nav>
    </>
  };
}

//     return (
//       {TokenService.hasAuthToken() 
//         ? <Link to='/home'>{' '}Go!</Link>
//         : <Link to='/'>{' '}Go!</Link>
//       }
//       <Link to='/' className='logo'>
//           <img src={LogoImg} alt='logo' />
//             <div className='logo-title'>
//               <h1>PawPrint</h1>
//               <p>Keeping up with the office pups</p>
//             </div>
//       </Link>
//     )
// }
