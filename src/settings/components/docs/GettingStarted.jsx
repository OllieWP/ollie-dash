const {__} = wp.i18n;
import {Video} from "../partials/Video";

function GettingStarted() {
    return (
        <section>
			<h2 id="getting-started">
				{__('Getting Started with Ollie', 'ollie-dash')}
			</h2>

			<ul>
				<li>
					<p>
						{__('View a live demo of the Ollie theme.', 'ollie-dash')}{' '}
						<a href="https://demo.olliewp.com/">{__('View Ollie Demo', 'ollie-dash')}</a>
					</p>
				</li>
				<li>
					<p>
						{__('Download the Ollie theme zip to install on your WordPress site.', 'ollie-dash')}{' '}
						<a href="https://github.com/OllieWP/ollie/releases/latest/download/ollie.zip">
							{__('Download Ollie Theme', 'ollie-dash')}
						</a>
					</p>
				</li>
			</ul>

			<p>
				{__(
					'There are a few ways to install Ollie on your WordPress website. The easiest way is to install it from within your WordPress admin. Go to',
					'ollie-dash'
				)}{' '}
				<strong>{__('Appearance → Themes → Add New', 'ollie-dash')}</strong>{__(' and search for Ollie.', 'ollie-dash')}
			</p>

			<p>
				{__(
					'You can also install Ollie manually by downloading the theme and uploading it to your WordPress site. You can download Ollie for free at',
					'ollie-dash'
				)}{' '}
				<a href="https://olliewp.com">{__('OllieWP.com', 'ollie-dash')}</a>{__(' and also via the', 'ollie-dash')}{' '}
				<a href="https://github.com/OllieWP/ollie">{__('GitHub repository', 'ollie-dash')}</a>.
			</p>

			<h3 id="ollie-dashboard">
				{__('Ollie Theme Dashboard', 'ollie-dash')}
			</h3>

			<Video
				title={__('Intro to Ollie', 'ollie-dash')}
				tagline={__('Learn about the Ollie dashboard and the Ollie setup wizard.', 'ollie-dash')}
				videoId={'JZ1EgDaDAH0'}
			/>

			<p>
				{__(
					'Once you activate the Ollie theme, you will see a pop-up guiding you to the Ollie theme dashboard. You can also get to the dashboard by visiting',
					'ollie-dash'
				)}{' '}
				<strong>{__('Appearance → Ollie', 'ollie-dash')}</strong>
				{__(
					'. This dashboard is a one-stop hub for all the resources we’ve included with the Ollie theme. Here, you’ll find a Welcome page with helpful links, Ollie docs, the Ollie theme setup wizard, and the video library.',
					'ollie-dash'
				)}
			</p>

			<h3 id="theme-setup-wizard">
				{__('Theme Setup Wizard', 'ollie-dash')}
			</h3>

			<Video
				title={__('Ollie Setup Wizard', 'ollie-dash')}
				tagline={__('Set up your site with a few clicks with the Ollie Setup Wizard.', 'ollie-dash')}
				videoId={'OiO4gNDY0VQ'}
			/>

			<p>
				{__(
					'Whenever you set up a new WordPress site, there’s always a dozen different tasks that you have to complete while jumping around the WordPress admin. Creating pages, designing layouts, setting up your brand assets, and a whole bunch of other stuff.',
					'ollie-dash'
				)}
			</p>

			<p>
				{__(
					'Well, you don’t have to do that anymore! The Ollie theme Setup wizard is a one-of-a-kind onboarding experience that automates all of those pesky tasks and handles them in one streamlined experience.',
					'ollie-dash'
				)}
			</p>

			<p>
				{__(
					'The setup wizard will help you change common settings, set up your logo and brand colors, and automatically create pixel-perfect pages for you with just a few clicks. The setup wizard isn’t just for new sites. You can use the wizard to quickly generate pages on existing sites as well.',
					'ollie-dash'
				)}
			</p>

			<p>
				{__(
					'From your WordPress dashboard, you can find the Ollie setup wizard by going to',
					'ollie-dash'
				)}{' '}
				<strong>{__('Appearance → Ollie → Theme Setup', 'ollie-dash')}</strong>
				{__(
					', or by following the pop-up upon theme activation.',
					'ollie-dash'
				)}
			</p>
		</section>

    )
}
export default GettingStarted;
