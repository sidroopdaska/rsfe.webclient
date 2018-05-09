import * as React from 'react';
import * as $ from 'jquery';
import './backToTop.scss';

export interface IBackToTopProps { }

export class BackToTop extends React.Component<IBackToTopProps, {}> {
	constructor(props: IBackToTopProps) {
		super(props);
	}

	public componentDidMount() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});

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
			<a id='back-to-top'
				href='javascript:void()'
				className='btn btn-lg back-to-top'
				role='button'
				title='Click to return on the top page'
				data-placement='left'
			>
				<span className='fa fa-chevron-up text-white'></span>
			</a>
		);
	}
}
