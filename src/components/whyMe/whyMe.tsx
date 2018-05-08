import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { ColumnProps } from 'reactstrap/lib/Col';
import './whyMe.scss';

export interface IWhyMeProps {
	data: Array<IWMColData>;
}

export interface IWMColData {
	heading1: string;
	heading2: string;
	imageSrc: any;
	imageAlt: string;
	content: JSX.Element;
}

export class WhyMe extends React.Component<IWhyMeProps, {}> {
	constructor(props: IWhyMeProps) {
		super(props);
	}

	public renderRows = () => {
		return this.props.data.map((d, idx) => {
			let md1: ColumnProps = null;
			let md2: ColumnProps = null;

			if (idx % 2 === 0) {
				md1 = { size: 7 };
				md2 = { size: 5 };
			} else {
				md1 = { size: 7, order: 2 };
				md2 = { size: 5, order: 1 };
			}

			return (
				<div key={idx}>
					<Row>
						<Col sm='12' md={md1}>
							<h3 className='heading'>
								{d.heading1} <span className='text-muted'>{d.heading2}</span>
							</h3>
							{d.content}
						</Col>
						<Col sm='12' md={md2} style={{ textAlign: 'center' }}>
							<img src={d.imageSrc} alt={d.imageAlt} height={120} />
						</Col>
					</Row>
					<hr className='divider' />
				</div>
			);
		});
	}

	public render() {
		if (!this.props.data || !this.props.data.length)
			return null;

		return (
			<div className='why-me'>
				<div className='title'>
					<h2>#why <span className='text-muted'>me</span></h2>
				</div>
				{this.renderRows()}
			</div>
		);
	}
}
