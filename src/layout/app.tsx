import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Header } from '../components/header/header';
import { Container } from 'reactstrap';
import { WhyRevolut } from '../components/whyRevolut/whyRevolut';
import { WhyMe } from '../components/whyMe/whyMe';
import { BackToTop } from '../components/backToTop/backToTop';
import { SiteContent } from '../definitions/siteContent';

export interface IAppProps { }

class App extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
	}

	public backToTopOnClick = () => {
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('#back-to-top').hide();
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
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
				<BackToTop />
			</div>
		);
	}
}

export default hot(module)(App);
