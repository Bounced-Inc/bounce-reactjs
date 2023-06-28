import '../../styles/globals.css';
import type {AppProps} from 'next/app';
import { GroupProvider } from '@/contexts/GroupContext';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <GroupProvider>
            <Component {...pageProps} />
        </GroupProvider>
    )
}

export default MyApp;
