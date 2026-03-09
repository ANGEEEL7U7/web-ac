import { CookiesProvider } from 'react-cookie';
import { AppProvider, DarkModeProvider, NavigatorScrollProvider, ReactProvider } from '@shared/providers';
import { MainPage } from '@features/MainPage';

const providers: ReactProvider[] = [
    NavigatorScrollProvider,
    CookiesProvider,
    DarkModeProvider,
];
const App = () => <AppProvider providers={providers}>
    <MainPage />
</AppProvider>
export default App;