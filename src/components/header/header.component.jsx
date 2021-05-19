import React from "react";
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = ({currentUser, hiddenCartDropdown}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    : <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>

            }
            <CartIcon/>
        </div>
        {
            hiddenCartDropdown ? null : <CartDropdown/>

        }
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden: hiddenCartDropdown}}) => ({
    currentUser,
    hiddenCartDropdown
})

export default connect(mapStateToProps)(Header);