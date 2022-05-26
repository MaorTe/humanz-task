import * as React from 'react';
import { UsersProvider } from './users-context';

function AppProviders({ children }) {
	return <UsersProvider>{children}</UsersProvider>;
}

export { AppProviders };
