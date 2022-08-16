import styled from '@emotion/styled';
import { Shop, Header } from '../components';

export const ShopPage = () => {

    return(
        <ShopPageContainer>
            <Header />
            <Shop />
        </ShopPageContainer>
    )
}

const ShopPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;