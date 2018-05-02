import * as React from 'react';
import { hot } from 'react-hot-loader';

export interface IAppProps { }

class App extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
	}

	public render() {
		return (
			<div>why so serious</div>
		);
	}
}

export default hot(module)(App);
