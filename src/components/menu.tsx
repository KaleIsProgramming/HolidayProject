import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Slide } from '../animation';
import aboutUs from '../images/aboutUs.jpg';
import contactUs from '../images/contactUs.jpg';
import shop from '../images/shop.jpg';
import stats from '../images/statistics.jpg';

export const Menu = () => {

    return(
            <MenuContainer variants={Slide} initial="hidden" animate="show" exit="exit">
                <CardContainer>
                    <Link to='/AboutUs'>
                        <Card>
                            <p>About Us</p>
                            <img src={aboutUs} alt="aboutUsPic" />
                        </Card>
                    </Link>
                    <Link to='/'>
                        <Card>
                            <p>Shop</p>
                            <img src={shop} alt="shopPic" />
                        </Card>
                    </Link>
                    <Link to="/Statistics">
                        <Card>
                            <p>Statistics</p>
                            <img src={stats} alt="statsPic" />
                        </Card>
                    </Link>
                    <Link to='/Contact'>
                        <Card>
                            <p>Contact</p>
                            <img src={contactUs} alt="contactPic" />
                        </Card>
                    </Link>
                </CardContainer>
            </MenuContainer>
    );
};

const MenuContainer = styled(motion.div)`
    position: absolute;
    height: 90vh;
    width: 25vw;
    border-right: 2px solid gray;
    background: #f1ecec;
`;

const CardContainer = styled.div`
    height: calc(100% - 20px);
    width: 99%;
    margin: 10px 0px;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar{
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
        background: #acacac;
        border-radius: 20px;
    }
`;

const Card = styled.div`
    position: relative;
    height: 40%;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 10px 10px;
    cursor: pointer;

    img {
        height: 100%;
        width: 100%;
        filter: blur(2px);
    }

    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 5%;
        background: brown;
        color: white;
        font-size: 2rem;
        text-align: center;
        transition: 1s ease-in-out;
        z-index: 5;
    }

    &:hover {
        scale: 1.02;
        transition: 0.5s ease-in-out;
    }
`;