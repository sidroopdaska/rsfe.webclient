import * as React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './header.scss';
import { Urls } from '../definitions/urls';
let meEdited = require('../assets/me-edited.png');

export interface IHeaderProps {

}

export class Header extends React.Component<IHeaderProps, {}> {
	constructor(props: IHeaderProps) {
		super(props);
	}

	public render() {
		return (
			<Jumbotron fluid className='intro'>
				<Container fluid>
					<Row>
						<Col lg='6' md={{ order: 2 }} className='text-center img'>
							<img src={meEdited} alt='Thumbnail' />
						</Col>
						<Col lg='6' md={{ order: 1 }} className='desc'>
							<h1 className='display-4'>
								Hello! My name is <a href={Urls.PersonalWebsite}>Siddharth Sharma</a>
							</h1>
							<p className='lead'>I would like to help Revolut become the best challenger bank as a Senior Frontend Developer</p>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		);
	}
}
