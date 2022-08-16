import styled from "@emotion/styled";
import { useAppSelector } from "../store";
import { Menu } from '.';
import { AnimatePresence } from 'framer-motion';

export const Contact = () => {
    const isOpen = useAppSelector(state => state.menuSlice.isOpen);
    return(
        <StyledContact>
            <AnimatePresence>
            {isOpen &&
                <Menu />
            }
            </AnimatePresence>
            <ContactContainer>
                <Header>
                    <h1>Send <span>us</span></h1>
                    <h2>a message</h2>  
                </Header>
                <TextAreaContainer>
                    <textarea placeholder="Insert your message" />
                </TextAreaContainer>
                <ButtonContainer>
                    <button>Send</button>
                </ButtonContainer>
                
            </ContactContainer>
        </StyledContact>
    );
};

const StyledContact = styled.div`
    height: 90vh;
    width: 100vw;  
`;
 
const ContactContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
`;

const Header = styled.div`
    width: calc(35% - 10px);
    height: 20%;

    h1 {
        color: gray;
    }

    span {
        color: black;
    }

    h1, h2 {
        font-size: 3rem;
        font-weight: 800;
    }
`;

const TextAreaContainer = styled.div`
    width: 35%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    textarea {
        height: calc(100% - 10px);
        width: calc(100% - 10px);
        padding: 8px;
        border: 2px solid gray;
        border-radius: 10px;
        color: gray;
        resize: none;
    }
`;

const ButtonContainer = styled.div`
    width: 35%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        height: 100%;
        width: calc(100% - 10px);
        border: 2px solid gray;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: 800;
        background: white;
        color: gray;
    }
`;
