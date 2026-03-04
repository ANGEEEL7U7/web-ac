import { Layout } from '@shared/components/'
import { ThemeProvider } from '@shared/providers';
import { CookiesProvider } from 'react-cookie';
import { ReactProvider } from '@shared/utils';
import { ImportProviders } from '@shared/utils/imports-providers';
import { MainPage } from './features';
import { NavigatorScrollProvider } from '@shared/providers/navigator-scroll-provider';

const providers: ReactProvider[] = [
    NavigatorScrollProvider,
    CookiesProvider,
    ThemeProvider,
];
const App = () => <ImportProviders providers={providers}>
    <Layout><MainPage /></Layout>
</ImportProviders>
export default App;