import styled from "@emotion/styled"
import { Contact, Header } from '../components';

export const ContactPage = () => {

    return(
        <StyledContactPage>
            <Header />
            <Contact />
        </StyledContactPage>
    )
}

const StyledContactPage = styled.div`
    height: 90vh;
    width: 100vw;
`;