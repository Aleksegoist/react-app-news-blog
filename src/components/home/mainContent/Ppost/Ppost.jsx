import React from 'react';
import { ppost } from '../../../../dummyData';
import Heading from '../../../common/heading/Heading';
import Slider from 'react-slick';
import './ppost.css';

const Ppost = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className='popularPost'>
                <Heading title='Popular Posts' />
                <div className='content'>
                    <Slider {...settings}>
                        {ppost.map((val) => {
                            return (
                                <div className='items'>
                                    <div className='box shadow'>
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

export default Ppost;
