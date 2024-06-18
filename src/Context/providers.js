'use client';
import { StoreProvider } from './ContextApi';

export default function Providers({ children }) {
	return <StoreProvider>{children}</StoreProvider>;
}
