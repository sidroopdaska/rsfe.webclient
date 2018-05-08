import * as React from 'react';
import { Row, Col } from 'reactstrap';
import './whyRevolut.scss';

export interface IWhyRevolutProps {
	data: Array<IWRColData>;
}

export interface IWRColData {
	imageSrc: any;
	imageAlt: string;
	content: JSX.Element;
}

export class WhyRevolut extends React.Component<IWhyRevolutProps, {}> {
	constructor(props: IWhyRevolutProps) {
		super(props);
	}

	public renderCols = () => {
		return this.props.data.map((d, idx) => {
			return (
				<Col sm='12' lg='4' className='col' key={idx}>
					<img src={d.imageSrc} alt={d.imageAlt} className='img' />
					{d.content}
				</Col>
			);
		});
	}

	public render() {
		if (!this.props.data || !this.props.data.length)
			return null;

		return (
			<div className='why-revolut'>
				<div className='header'>
					<h2>#why <span className='text-muted'>Revolut</span>
					</h2>
				</div>
				<Row className='row'>
					{this.renderCols()}
				</Row>
			</div>
		);
	}
}
