import * as React from 'react';
import { Urls, SiteContent } from '../../definitions';
import './footer.scss';

export interface IFooterProps { }

export class Footer extends React.Component<IFooterProps, {}> {
	constructor(props: IFooterProps) {
		super(props);
	}

	public renderSocialMediaList = () => {
		return (
			<ul className='social-media-list'>
				<li>
					<a href={Urls.Mailto} target='_blank'><i className='fa fa-envelope icon'></i> {SiteContent.EmailId}</a>
				</li>
				<li>
					<a href={SiteContent.Github} target='_blank'><i className='fa fa-github fa-lg'></i><span> {SiteContent.OnlineHandle}</span></a>
				</li>
				<li>
					<a href={SiteContent.LinkedIn} target='_blank'><i className='fa fa-linkedin-square fa-lg icon'></i><span> {SiteContent.OnlineHandle}</span></a>
				</li>
				<li>
					<a href={SiteContent.Twitter} target='_blank'><i className='fa fa-twitter fa-lg icon'></i><span> {SiteContent.OnlineHandle}</span></a>
				</li>
			</ul>
		);
	}

	public render() {
		return (
			<footer className='footer'>
				<div className='wrapper'>
					<div className='content'>
						{this.renderSocialMediaList()}
					</div>
					<div className='content'>
						<ul className='made-with'>
							<li>
								Made with <i className='fa fa-heart pulse' style={{ color: 'red' }}></i> in <span style={{ color: 'black' }}>Dublin</span>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}
