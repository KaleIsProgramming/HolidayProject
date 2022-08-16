import styled from '@emotion/styled';
import { useAppDispatch } from '../store';
import { toggleStatus } from '../store/slices';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

export const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const LogoButtonHandler = () => {
        navigate("/")
    }

    return(
        <HeaderContainer>
            <NavBarIconContainer>
                <BurgerIcon onClick={() => dispatch(toggleStatus())}>
                    <BurgerLine />
                    <BurgerLine />
                    <BurgerLine />
                </BurgerIcon>
            </NavBarIconContainer>
            <LogoContainer>
                <img src={logo} alt="logo" onClick={LogoButtonHandler} />
            </LogoContainer>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
  height: 10vh;
  width: 100vw;  
  border-bottom: 2px solid gray;
  display: flex;
`;

const NavBarIconContainer = styled.div`
    height: 100%;
    width: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const LogoContainer = styled.div`
    height: 100%;
    width: 84%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 100%;
        cursor: pointer;
    }
`;

const BurgerIcon = styled.div`
    height: 50%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`;

const BurgerLine = styled.div`
    height: 4px;
    width: 50%;
    border-radius: 6px;
    background: gray; 
    margin: 2px;
`;

