import App from '../components/App/App';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl'

const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
});

export default function RTLApp() {
    return (
        <StylesProvider jss={jss}>
            <App />
        </StylesProvider>
    );
}

