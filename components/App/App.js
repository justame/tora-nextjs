import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Page from '../Page/Page';
import Search from '../Search/Search';
import Stage from '../Stage/Stage';
import StagesMenu from '../StagesMenu/StagesMenu';
import Player from '../Player/Player';
import tora from '../../consts/tora.json';

const App = () => {
  const [parasha, setParasha] = useState('');
  const [stage, setStage] = useState(0);
  const onParashaChange = (e, value) => {
    setParasha(value);
    setStage(0);
  };

  let playlist = [];

  const onStageChange = (value) => {
    setStage(value);
  };

  let stagesList = [];
  if (parasha) {
    const pasuks = tora.parasha[parasha].stages[stage];
    stagesList = Object.keys(tora.parasha[parasha].stages);
    playlist = pasuks.map((pasuk) => {
      const parashaPath = tora.parasha[parasha].parashaLink.replace(
        'parasha.htm',
        '',
      );
      return {
        image: `https://tora613.net/tora/${parashaPath}/${pasuk.image}`,
        audio: `https://tora613.net/tora/${parashaPath}${pasuk.audio}`,
        caption: parasha,
      };
    });
  }
  return (
    <Page>
      <Container dir="rtl" maxWidth="md">
        <div className="search">
          <Search onChange={onParashaChange} />
        </div>
        <div>
          <StagesMenu onChange={onStageChange} stage={stage} stagesList={stagesList} />
        </div>
        <div>
          <Player playlist={playlist} />
          {/* <Stage parasha={parasha} stage={stage} /> */}
        </div>

      </Container>

      <style jsx>
        {
                    `
            .search {
                display: flex;
                justify-content: center;
            }
            `
}

      </style>
    </Page>
  );
};

export default App;
