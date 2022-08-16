import styled from '@emotion/styled';
import { useAppSelector } from '../store';
import { Menu } from '.';
import { AnimatePresence } from 'framer-motion';

export const Shop = () => {
    const isOpen = useAppSelector(state => state.menuSlice.isOpen);

    return(
        <StyledRightContainer>
            <AnimatePresence>
            {isOpen &&
                <Menu />
            }
            </AnimatePresence>
        </StyledRightContainer>
    );
};

const StyledRightContainer = styled.div`
    height: 90vh;
    width: 100vw;
`;