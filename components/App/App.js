import React, { useState } from 'react';
import Page from '../Page/Page';
import Search from '../Search/Search';
import Container from '@material-ui/core/Container';
import Stage from '../Stage/Stage';


const App = () => {
    const [parasha, setParasha] = useState("");
    const onChange = (e, value) => {
        setParasha(value);
    };
    return (
        <Page>
            <Container dir="rtl">
                <div className="search">
                    <Search onChange={onChange} />
                </div>
                <div>
                    <Stage parasha={parasha} />
                </div>

            </Container>

            <style jsx>
                {
                    `
            .search {
                display: flex;
                justify-content: center;
            }
            `}

            </style>
        </Page>)
}

export default App;