import * as React from 'react';
import { IWRColData } from '../components/whyRevolut/whyRevolut';
import { IWMColData } from '../components/whyMe/whyMe';
import { Urls } from './urls';
import { ITimelineBlock } from '../components/timeline/timeline';

/**
 * Class to hold all the Site relevant content.
 */
export class SiteContent {
	public static WhyRevolut: Array<IWRColData> = [
		{
			imageAlt: 'Wheel Image',
			imageSrc: require('../assets/bank-building.svg'),
			content:
				<p>
					Your <span className='lead font-weight-bold'>mission</span> to deliver seamless digital financial services
					and bring about a radical transformation in the banking industry perfectly aligns with my personal goals.
				</p>
		},
		{
			imageAlt: 'Leader Image',
			imageSrc: require('../assets/leader-img.svg'),
			content:
				<p>
					I believe in the <span className='lead font-weight-bold'>vision</span> and <span className='lead font-weight-bold'>leadership</span> capabilities of <span className='lead font-weight-bold'>Vlad Yatsenko</span> &amp; <span className='lead font-weight-bold'>Nickolay Storonsky</span>, who
					have proven themselves since Revolut's inception in 2015 as being able to successfully identify market gaps early on
					and create true customer value. They have a talent for building teams that execute successfully on a global level, and I would like to
					be a part of that ensemble and contribute to its goal.
			</p>
		},
		{
			imageAlt: 'World Image',
			imageSrc: require('../assets/world-img.svg'),
			content:
				<p>
					Well, <span className='lead font-weight-bold'>I'm selfish!</span> I have worked with different technologies over
					the past two years ranging from Embedded Systems to Full stack Web Development. But working for Revolut's Technology division
					is a different kind of beast. Creating seamless and truly cost effective financial services that have the potential to bring about a
					paradigm shift in how we manage money is both exciting and scary. Mostly exciting though. By working for Revolut,
					I’ll directly improve my life along with the lives of millions of others. Everybody wins!
				</p>
		}
	];

	public static WhyMe: Array<IWMColData> = [
		{
			heading1: 'Passionate about Front-End Development',
			heading2: null,
			imageAlt: 'Number 1',
			imageSrc: require('../assets/why-me-1.svg'),
			content:
				<p>
					A chance encounter with this new technology (React.js &amp; Redux) spurred into what has now become an <span className='font-weight-bold'>all-consuming interest</span> in Front-End development.
					No one asked me to learn new skills and develop <a href={Urls.ResumeLink} target='_blank'>experiences</a> for this field.
					And certainly, no one asked me to change careers from Electronics development to Full Stack Web Development. What's keeping me going is the  <span className='font-weight-bold'>sheer desire</span> to
					develop simple, intuitive and scalable mobile first products.
		</p>
		},
		{
			heading1: 'Habit of embracing risk.',
			heading2: 'Saying "yes!" to building careers in cutting edge fields.',
			imageAlt: 'Number 2',
			imageSrc: require('../assets/why-me-2.svg'),
			content:
				<p>
					I’ve always been motivated by innovation and disrupting markets. I think there is a real <span className='font-weight-bold'>thrill</span> that comes with
					jumping into a new industry, helping it to grow, and making things better.
					Be it my leap from Electronics to Mobile application development and now to Front-End development,
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
				You will see me spend a good chunk of my time reading technology books or research papers, prototyping and testing different ideas to deconstruct the internals of things.
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
					new tools or processes that can promote this. A recent example of this is when I created a module for loading React components with dynamic imports.
					This enabled a 30% reduction in the initial load for the current project.
				</p>
		}
	];

	public static TimelineContent: Array<ITimelineBlock> = [
		{
			heading: 'Inception',
			imageAlt: null,
			imageSrc: require('../assets/timeline-code-img.svg'),
			content:
				<div>
					<p>
						My interest in Web development sparked when I decided to develop a <a href={Urls.PersonalWebsite} target='_blank'>personal website</a> in Dec, 2015. I searched for a technology that would allow me to develop
						a cross platform app and came across Angular and the Ionic framework in the process. I enjoyed the experience so much that
						I decided to apply for full-time web development role at Microsoft 3 months later. <br /><br />
						PS: Since then I have migrated my <a href={Urls.PersonalWebsite} target='_blank'>personal website</a> to Jekyll.
					</p>
				</div>,
			date: 'May 2016'
		},
		{
			heading: 'Office 365 - Account Management Portal',
			imageAlt: null,
			imageSrc: require('../assets/timeline-code-img.svg'),
			content:
				<div>
					<p>
						During my time with this team, I was involved in the redesign of the Office Subscription and Perpetual management portal. Key contributions include:
						<br /><br />
						&#8226; First to introduce a new Front-End tech stack (React.js/Redux/Webpack) across Office 365, Dublin <br />
						&#8226; Transformed the legacy website (Asp.NET MVC) into a Progressive Web Application using the aforementioned stack <br />
						&#8226; Improved Page Load performance by 85% which resulted in a 30% increase in customer traffic <br />
						&#8226; Implemented a custom lightweight Router, client-side telemetry framework and multiple-tab state synchronisation <br />
						&#8226; Analysed user feedback &amp; A/B tested features which resulted in 4.5% increase in subscription renewal rates and 40% increase in user satisfaction <br />
					</p>
				</div>,
			date: 'May 2016'
		},
		{
			heading: 'Microsoft 365',
			imageAlt: null,
			imageSrc: require('../assets/timeline-code-img.svg'),
			content:
				<div>
					<p>
						Currently working on a cross organisational effort to deliver a high scale cloud solution that will help enterprises remove blockers, 
						accelerate deployments of Office builds and view real-time insights on health of their asset. Key contributions include:	<br /><br />
						&#8226; Presently setting up the UX and Service-side Automation framework<br/>
						&#8226; Lead a virtual team of 3 developers to develop the E2E experiences for Office assets related features<br />
						&#8226; Piloted and shipped critical tooling that has unblocked large Tier 1 enterprises (over 800 downloads and 130 unique enterprises) in the space of Office Addin and Macro compatibility<br />
						&#8226; Developed a module for asynchronously loading React components with dynamic imports. This enabled a 30% reduction in the initial load for the current project, and it’s also being widely adopted by teams in Office 365<br />
					</p>
				</div>,
			date: 'Jun 2017'
		},
		{
			heading: 'Next steps...',
			imageAlt: null,
			imageSrc: require('../assets/timeline-search-img.svg'),
			content:
				<div>
					<p>
						As next steps, I aim to introduce Apollo, GraphQL and Storybook in my current team.
					</p>
					<p>
						<strong>More importantly</strong>, I'm now looking to <strong>join Revolut</strong> as it provides me the most opportunity for learning and growth by working alongside world-class Product Developers.
						And, also because I believe the team can benefit from the experience I have built so far.
					</p>
				</div>,
			date: 'May, 2018'
		}
	];

	public static EmailId = 'hey@siddharthsharma.io';
	public static OnlineHandle = 'sidroopdaska';
}
