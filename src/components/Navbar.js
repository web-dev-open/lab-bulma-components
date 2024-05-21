import './Navbar.css'
import CoolButton from './CoolButton';
function Navbar()
{
   return (

    <div className="nav">
        <div className='left'>
            <div class="navbar-brand">
               <a class="navbar-item" href="https://bulma.io">
                   <img src="https://bulma.io/assets/images/bulma-banner.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
               </a>
            </div>
            <div className='links'>
               <a href='https://bulma.io/'>Home</a>
            </div>
        </div>

        <div className='right'>
          <CoolButton isSuccess>Log In</CoolButton>
          <CoolButton isInfo>Sign Up</CoolButton>
        </div>
    </div>
   );
}
export default Navbar;