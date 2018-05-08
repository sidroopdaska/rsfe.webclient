import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Header } from '../components/header';

export interface IAppProps { }

class App extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
	}

	public render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default hot(module)(App);
