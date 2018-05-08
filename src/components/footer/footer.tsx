import * as React from 'react';
import { Row } from 'reactstrap';
import './footer.scss';
import { Urls } from '../../definitions/urls';

export interface IFooterProps { }

export class Footer extends React.Component<IFooterProps, {}> {
	constructor(props: IFooterProps) {
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
						If you do too, drop me a line at <a target='_blank' href={Urls.Mailto}>hey@siddharthsharma.io</a>
					</p>
				</Row>
			</div>
		);
	}
}
