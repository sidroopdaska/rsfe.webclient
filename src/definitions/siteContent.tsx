import * as React from 'react';
import { IWRColData } from '../components/whyRevolut/whyRevolut';

export class SiteContent {
	public static whyRevolut: Array<IWRColData> = [
		{
			imageAlt: 'Wheel Image',
			imageSrc: require('../assets/wheel-img.svg'),
			content:
				<p>
					Your <span className='lead font-weight-bold'>mission</span> to deliver truly intelligent autonomous
					vehicles (i.e. Level 5 autonomy) and bring about a radical transformation in the automotive
					industry perfectly aligns with my personal goals.
				</p>
		},
		{
			imageAlt: 'Leader Image',
			imageSrc: require('../assets/leader-img.svg'),
			content:
				<p>
					I believe in the <span className='lead font-weight-bold'>vision</span> and <span className='lead font-weight-bold'>leadership</span>
					capabilities of <span className='lead font-weight-bold'>Stan Boland</span>, who
					as a veteran serial enterpreneur, has proved himself time and again as being able to successfully identify market gaps early on
					and create true customer value. He has a talent for building teams that execute successfully on a global level, and I would like to
					be a part of that ensemble and contribute to its goal.
			</p>
		},
		{
			imageAlt: 'World Image',
			imageSrc: require('../assets/world-img.svg'),
			content:
				<p>
					Well, <span className='lead font-weight-bold'>I'm selfish!</span> I have worked with different technologies over
					the past two years ranging from Embedded Systems to Full stack Web Development. But working for Five.ai's Deep Learning team
					is a different kind of beast. Creating truly autonomous vehicles that have the potential to bring about a
					paradigm shift in how we commute is both exciting and scary. Mostly exciting though. By working for Five.ai,
					I’ll directly improve my life along with the lives of millions of others. Everybody wins!
				</p>
		}
	];
}
