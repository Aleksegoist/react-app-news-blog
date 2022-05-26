import React from 'react';
import Slider from 'react-slick/lib/slider';
import { popular } from '../../../../dummyData';
import Heading from '../../../common/heading/Heading';
import './music.css';

const Music = () => {
    const settings = {
        className: 'center',
        centerMode: false,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        dots: false,
    };
    return (
        <>
            <section className='music'>
                <Heading title='Music News' />
                <div className='content'>
                    <Slider {...settings}>
                        {popular
                            .filter((val) => val.category === 'fun')
                            .map((val) => {
                                return (
                                    <div className='items'>
                                        <div className='box shadow flexSB'>
                                            <div className='images'>
                                                <div className='img'>
                                                    <img
                                                        src={val.cover}
                                                        alt='popular'
                                                    />
                                                </div>
                                                <div className='category category1'>
                                                    <span>{val.category}</span>
                                                </div>
                                            </div>
                                            <div className='text'>
                                                <h1 className='title'>
                                                    {val.title.slice(0, 40)}...
                                                </h1>
                                                <div className='date'>
                                                    <i className='fa fa-calendar'></i>
                                                    <label>{val.date}</label>
                                                </div>
                                                <p className='desc'>
                                                    {val.desc.slice(0, 250)}...
                                                </p>
                                                <div className='comment'>
                                                    <i className='fa fa-share'></i>
                                                    <label>Share / </label>
                                                    <i className='fa fa-comments'></i>
                                                    <label>
                                                        {val.comments}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Music;
