import React, { useState } from 'react';
import Page from '../Page/Page';
import Search from '../Search/Search';
import Container from '@material-ui/core/Container';
import Stage from '../Stage/Stage';
import StagesMenu from '../StagesMenu/StagesMenu';

const App = () => {
    const [parasha, setParasha] = useState("");
    const [stage, setStage] = useState(0);
    const onParashaChange = (e, value) => {
        setParasha(value);
    };

    const onStageChange = (value) => {
        setStage(value);
    };

    return (
        <Page>
            <Container dir="rtl">
                <div className="search">
                    <Search onChange={onParashaChange} />
                </div>
                <div>
                    <StagesMenu onChange={onStageChange} />
                </div>
                <div>
                    <Stage parasha={parasha} stage={stage} />
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