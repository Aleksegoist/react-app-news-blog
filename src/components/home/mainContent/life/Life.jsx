import React from 'react';
import Slider from 'react-slick/lib/slider';
import { lifestyle } from '../../../../dummyData';
import Heading from '../../../common/heading/Heading';
import './life.css';

const Life = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <>
            <section className='popularPost life'>
                <Heading title='Life Style' />
                <div className='content'>
                    <Slider {...settings}>
                        {lifestyle.map((val) => {
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

export default Life;
