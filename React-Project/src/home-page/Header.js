import React from 'react';

function Header(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5' > 
                        <a href='/'><img  className="logo" src='./logo.png' alt='logo here'/></a>
                    </div>
                    <div className='col-md-7 mt-5 subtitle' > Find your dream house with us!</div>
                    <a href="/signup"> SignUp </a> <a href="/login"> Login </a>
                </div>
            </div>
        </div>
    );
}

export default Header;