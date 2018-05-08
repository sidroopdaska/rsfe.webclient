import * as React from 'react';
import { IWRColData } from '../components/whyRevolut/whyRevolut';
import { IWMColData } from '../components/whyMe/whyMe';
import { Urls } from './urls';
import { ITimelinkBlock } from '../components/timeline/timeline';

export class SiteContent {
	public static WhyRevolut: Array<IWRColData> = [
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
					I believe in the <span className='lead font-weight-bold'>vision</span> and <span className='lead font-weight-bold'>leadership</span> capabilities of <span className='lead font-weight-bold'>Stan Boland</span>, who
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
					the past two years ranging from Embedded Systems to Full stack Web Development. But working for Revolut's Deep Learning team
					is a different kind of beast. Creating truly autonomous vehicles that have the potential to bring about a
					paradigm shift in how we commute is both exciting and scary. Mostly exciting though. By working for Revolut,
					I’ll directly improve my life along with the lives of millions of others. Everybody wins!
				</p>
		}
	];

	public static WhyMe: Array<IWMColData> = [
		{
			heading1: 'Passionate about Self-Driving Cars',
			heading2: null,
			imageAlt: 'Number 1',
			imageSrc: require('../assets/why-me-1.svg'),
			content:
				<p>
					A chance encounter with this new technology spurred into what has now become an <span className='font-weight-bold'>all-consuming interest</span> in autonomous vehicles.
					No one asked me to learn new skills and develop <a href={Urls.SDCGithub} target='_blank'>experiences</a> for this field.
					And certainly, no one asked me to sign away most of my weekends and time after work for the
					9-month long Self-Driving Car course at Udacity. What's keeping me going is the  <span className='font-weight-bold'>sheer desire</span> to work on Self-Driving Cars!
		</p>
		},
		{
			heading1: 'Habit of embracing risk.',
			heading2: 'Saying "yes!" to building careers in cutting edge fields.',
			imageAlt: 'Number 2',
			imageSrc: require('../assets/why-me-2.svg'),
			content:
				<p>
					I’ve always been motivated by innovation and disrupting markets. I think there is a real <span className='font-weight-bold'>thrill</span>
					that comes with jumping into a new industry, helping it to grow, and making things better.
					Be it my leap from Electronics to Frontend development and now to Self-Driving cars,
					I have a willingness to say <span className='font-weight-bold'>“yes!”</span> to new opportunities,
					and a commitment to lifelong learning.
				</p>
		},
		{
			heading1: 'Incessant knack to understand things.',
			heading2: null,
			imageAlt: 'Number 3',
			imageSrc: require('../assets/why-me-3.svg'),
			content:
				<p>I love to code (heck, even this website was developed with <a href={Urls.WhyRevolutGithubRepo} target='_blank'>code</a>).
				But equally importantly, I have this innate desire to develop a strong understanding for how things works and why.
				You will see me spend good chunk of my time reading research papers, prototyping and testing different ideas to deconstruct the internals of things.
			</p>
		},

		{
			heading1: 'Willingness to bring about a change.',
			heading2: 'Improve existing processes.',
			imageAlt: 'Number 4',
			imageSrc: require('../assets/why-me-4.svg'),
			content:
				<p>
					My interest in software stems from its ability to facilitate rapid Time to Market, thus
					creating business value. As a result, I'm always on the look out to develop or leverage
					new tools or processes that can promote this. A recent example of this is when I introduced
					new frontend pipeline at work that improved the Page Load performance by 85% and developer time by 90%.
				</p>
		}
	];

	public static TimelineContent: Array<ITimelinkBlock> = [
		{
			heading: 'Inception',
			imageAlt: null,
			imageSrc: require('../assets/timeline-duck-img.svg'),
			content:
				<div>
					<p>
						My interest in Self-Driving Cars sparked when one of my colleagues at Microsoft, Ireland showed me a Youtube video
						of <a href='https://www.youtube.com/watch?v=b0B6S2Ca75Q' target='_blank'>Ducky Town</a>, an advanced autonomy project at MIT. I was so captivated by the outcome of the project that I
						decided to recreate it a month later at our local Hackathon.
					</p>
					<a href='https://github.com/sidroopdaska/SelfDrivingRCCar' className='read-more' target='_blank'>Self Driving RC Car</a>
				</div>,
			date: 'Jun 2017'
		},
		{
			heading: 'Inception',
			imageAlt: null,
			imageSrc: require('../assets/timeline-duck-img.svg'),
			content:
				<div>
					<p>
						My interest in Self-Driving Cars sparked when one of my colleagues at Microsoft, Ireland showed me a Youtube video
						of <a href='https://www.youtube.com/watch?v=b0B6S2Ca75Q' target='_blank'>Ducky Town</a>, an advanced autonomy project at MIT. I was so captivated by the outcome of the project that I
						decided to recreate it a month later at our local Hackathon.
					</p>
					<a href='https://github.com/sidroopdaska/SelfDrivingRCCar' className='read-more' target='_blank'>Self Driving RC Car</a>
				</div>,
			date: 'Jun 2017'
		},
		{
			heading: 'Inception',
			imageAlt: null,
			imageSrc: require('../assets/timeline-duck-img.svg'),
			content:
				<div>
					<p>
						My interest in Self-Driving Cars sparked when one of my colleagues at Microsoft, Ireland showed me a Youtube video
						of <a href='https://www.youtube.com/watch?v=b0B6S2Ca75Q' target='_blank'>Ducky Town</a>, an advanced autonomy project at MIT. I was so captivated by the outcome of the project that I
						decided to recreate it a month later at our local Hackathon.
					</p>
					<a href='https://github.com/sidroopdaska/SelfDrivingRCCar' className='read-more' target='_blank'>Self Driving RC Car</a>
				</div>,
			date: 'Jun 2017'
		}
	];
}
