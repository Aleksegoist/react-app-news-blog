import React from 'react';
import { popular } from '../../../../dummyData';
import Heading from '../../../common/heading/Heading';
import Slider from 'react-slick';
import './popular.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Popular = () => {
    const settings = {
        className: 'center',
        centerMode: false,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 2,
        speed: 500,
        rows: 4,
        slidesPerRow: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <>
            <section className='popular'>
                <Heading title='Popular' />
                <Slider {...settings}>
                    {popular.map((val) => {
                        return (
                            <div className='items'>
                                <div className='box shadow'>
                                    <div className='images row'>
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
                                    <div className='text row'>
                                        <h1 className='title'>
                                            {val.title.slice(0, 40)}...
                                        </h1>
                                        <div className='date'>
                                            <i className='fa fa-calendar'></i>
                                            <label>{val.date}</label>
                                        </div>
                                        <div className='comment'>
                                            <i className='fa fa-comments'></i>
                                            <label>{val.comments}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </section>
        </>
    );
};

export default Popular;
