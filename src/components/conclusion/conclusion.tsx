import * as React from 'react';
import { Row } from 'reactstrap';
import './conclusion.scss';
import { Urls, SiteContent } from '../../definitions';

export interface IConclusionProps { }

export class Conclusion extends React.Component<IConclusionProps, {}> {
	constructor(props: IConclusionProps) {
		super(props);
	}

	public render() {
		return (
			<div>
				<Row className='justify-content-center'>
					<h4>I believe we make a <span className='font-weight-bold conclusion'>perfect match</span> Revolut!</h4>
				</Row>
				<Row className='justify-content-center'>
					<p>
						If you do too, drop me a line at <a target='_blank' href={Urls.Mailto}>{SiteContent.EmailId}</a>
					</p>
				</Row>
			</div>
		);
	}
}
