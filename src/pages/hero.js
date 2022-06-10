import React from 'react';

const Hero = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='aboutText'>
                    <h1 className="aboutHeader">who are we?</h1>
                        <h2 className='smallHeader'>Time Flies</h2>
                            <p>time. our lives are so long, and so short at the same time. existence is weird. momements happen, and then they end. </p>
                        <hr className='divider' />
                        <h2 className='smallHeader'>What we do</h2>
                            <p>we have handpicked some of the most well known authors of the eighteenth - twentieth century, and can send you on a trip, through time, to witness these authors creating some of their best, or worst works. </p>
                        <hr className='divider' />
                        <h2 className='smallHeader'>Why do we exist?</h2>
                            <p>we all asipre to do something with our lives. we want to be remarkable. we want to leave a mark on the world. we want to create a legacy. by going back in time to visit some of these writers, our goal is to spark the creativity in yourself so you can create bold and beautiful and cool things too.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;