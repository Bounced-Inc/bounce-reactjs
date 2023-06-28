import '../../styles/globals.css';
import type {AppProps} from 'next/app';
import { GroupContextProvider } from '@/contexts/GroupContext';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <GroupContextProvider>
            <Component {...pageProps} />
        </GroupContextProvider>
    )
}

export default MyApp;
