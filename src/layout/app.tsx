import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Header } from '../components/header/header';
import { Container } from 'reactstrap';
import { WhyRevolut } from '../components/whyRevolut/whyRevolut';
import { WhyMe } from '../components/whyMe/whyMe';
import { SiteContent } from '../definitions/siteContent';

export interface IAppProps { }

class App extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
	}

	public render() {
		return (
			<div>
				<Header />
				<Container>
					<WhyRevolut data={SiteContent.WhyRevolut} />
					<hr className='section-divider' />
					<WhyMe data={SiteContent.WhyMe} />
				</Container>
			</div>
		);
	}
}

export default hot(module)(App);
