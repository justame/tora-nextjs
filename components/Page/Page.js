import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Page = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}

export default Page;
