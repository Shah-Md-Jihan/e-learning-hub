import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '450px' }}
                    src="https://t3.ftcdn.net/jpg/04/00/77/64/360_F_400776431_5JxdDYRr1mn9yISiUFMPcLtLp3zt6NA1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption style={{ backgroundColor: '#000000a1' }}>
                    <h3>A warm welcome to visit us</h3>
                    <p>To get early success, grow up your skill. We will beside you to fulfill your dream</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '450px' }}
                    src="https://thumbs.dreamstime.com/b/online-education-platform-concept-banner-header-students-using-e-learning-platform-video-laptop-graduation-cap-online-134628464.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption style={{ backgroundColor: '#000000a1' }}>
                    <h3>Want to build a strong skill?</h3>
                    <p>
                        We provide many kinds of free and premium courses. If you want you can join with us.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Slider;