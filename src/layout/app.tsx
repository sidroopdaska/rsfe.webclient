import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Container } from 'reactstrap';
import { Header, WhyRevolut, WhyMe, BackToTop, Conclusion, Timeline } from '../components/index';
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
					<hr className='section-divider' />
					<Timeline data={SiteContent.TimelineContent} />
					<Conclusion />
				</Container>
				<BackToTop />
			</div>
		);
	}
}

export default hot(module)(App);
