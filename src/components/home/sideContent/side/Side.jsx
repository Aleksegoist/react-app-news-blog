import React from 'react';
import Heading from '../../../common/heading/Heading';
import SocialMedia from '../social/SocialMedia';
import './side.css';

const Side = () => {
    return (
        <>
            <Heading title='Stay Connected' />
            <SocialMedia />
            <Heading title='Subscribe' />
            <section className='subscribe'>
                <h1 className='title'>Subscribe to our New Stories</h1>
                <form action=''>
                    <input type='text' placeholder='Email...' />
                    <button>
                        <i className='fa fa-paper-plane'></i> SUBMIT
                    </button>
                </form>
            </section>
            <section className='banner'>
                <img src='./images/news_banner.jpg' alt='banner' />
            </section>
        </>
    );
};

export default Side;
