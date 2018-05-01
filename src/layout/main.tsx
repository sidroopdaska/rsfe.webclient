import * as React from 'react';

export interface IMainProps { }

export class Main extends React.Component<IMainProps, {}> {
	constructor(props: IMainProps) {
		super(props);
	}

	public render() {
		return (
				<div>Hello</div>
			);
	}
}
