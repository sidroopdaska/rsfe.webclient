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
						<Col lg='6' md={{ order: 1 }} className='desc1'>
							<h1 className='display-4'>
								Hello! My name is <a href={Urls.PersonalWebsite}>Siddharth Sharma</a>
							</h1>
							<h3>
								I would like to help <span className='highlight'>Revolut</span> reach 'Revolut' as a
							</h3>
							<h3 className='desc2'>
								<span className='highlight'>Senior Frontend Engineer</span>
								<span className='blink'>|</span>
							</h3>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		);
	}
}
