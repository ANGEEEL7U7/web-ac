import { Layout } from '@shared/components/'
import '@shared/styles/theme.css'
import { ThemeProvider } from '@shared/providers';
import { CookiesProvider } from 'react-cookie';
import { ReactProvider } from '@shared/utils';
import { ImportProviders } from '@shared/utils/imports-providers';
import { MainPage } from './features';

const providers: ReactProvider[] = [
    CookiesProvider,
    ThemeProvider
];
const App = () => <ImportProviders providers={providers}>
    <Layout><MainPage /></Layout>
</ImportProviders>
export default App;