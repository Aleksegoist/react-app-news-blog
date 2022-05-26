import React from 'react';

const SocialMedia = () => {
    return (
        <>
            <section className='social'>
                <div className='socBox'>
                    <i className='fa fa-facebook-f'></i>
                    <span>12,740 Likes</span>
                </div>
                <div className='socBox'>
                    <i className='fa fa-pinterest'></i>
                    <span>5,600 Fans</span>
                </div>
                <div className='socBox'>
                    <i className='fa fa-twitter'></i>
                    <span>8,700 Followers</span>
                </div>
                <div className='socBox'>
                    <i className='fa fa-instagram'></i>
                    <span>6,400 Followers</span>
                </div>
                <div className='socBox'>
                    <i className='fa fa-reddit'></i>
                    <span>9,200 Followers</span>
                </div>
                <div className='socBox'>
                    <i className='fa fa-youtube'></i>
                    <span>4,300 Subscribers</span>
                </div>
            </section>
        </>
    );
};

export default SocialMedia;
