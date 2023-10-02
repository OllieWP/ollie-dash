const {__} = wp.i18n;

function Resources() {
    return (
		<section>
			<h2 id="resources">
				{__('Resources', 'ollie-companion')}
			</h2>

			<p>
				{__('Once you activate Ollie, it will largely behave like any other traditional WordPress theme. You can create posts and pages just like you always have. However, as a block theme, Ollie also supports powerful new features like the site editor, patterns, global styles, and more.', 'ollie-companion')}
			</p>

			<p>
				{__('A block theme is a WordPress theme with templates entirely composed of blocks so that in addition to post and page content, the block editor can also be used to edit all areas of the site — headers, footers, templates, and more.', 'ollie-companion')}
			</p>

			<hr />

			<h3 id="ollie-youtube">
				{__('Ollie YouTube Channel', 'ollie-companion')}
			</h3>

			<p dangerouslySetInnerHTML={{
				__html: sprintf(
					__('The Ollie YouTube channel hosts a growing collection of high-quality video tutorials around modern WordPress, block themes, Ollie features, and more. %s to get notified when new videos are published!', 'ollie-companion'),
					`<a href="https://www.youtube.com/@OllieWP">${__('Subscribe to the channel', 'ollie-companion')}</a>`
				)
			}} />

			<hr />

			<h3 id="developer-notes">
				{__('Developer Notes', 'ollie-companion')}
			</h3>

			<p>
				{__('The Ollie theme works out of the box, so no build steps are required. However, I have included a Composer file that is used for linting to PHP and WordPress core standards.', 'ollie-companion')}
			</p>

			<ul>
				<li>
					<p>{__('composer run lint', 'ollie-companion')}</p>
				</li>
				<li>
					<p>{__('composer run wpcs:scan', 'ollie-companion')}</p>
				</li>
				<li>
					<p>{__('composer run wpcs:fix', 'ollie-companion')}</p>
				</li>
			</ul>

			<hr />

			<h3 id="license">
				{__('License', 'ollie-companion')}
			</h3>

			<p dangerouslySetInnerHTML={{
				__html: sprintf(
					__('Ollie is licensed under the %s.', 'ollie-companion'),
					`<a href="https://www.gnu.org/licenses/gpl-3.0.html">${__('GPL-3.0 license', 'ollie-companion')}</a>`
				)
			}} />

			<hr />

			<h3 id="feedback">
				{__('Feedback', 'ollie-companion')}
			</h3>

			<p dangerouslySetInnerHTML={{
				__html: sprintf(
					__('Ollie is a new theme built on bleeding edge features in WordPress, so we\'re always looking for feedback. %s for bug reports, feature requests, or general feedback.', 'ollie-companion'),
					`<a href="https://github.com/OllieWP/ollie/issues/new/choose">${__('Please open a new issue', 'ollie-companion')}</a>`
				)
			}} />

			<hr />

			<h3 id="about-creator">
				{__('About the Creators', 'ollie-companion')}
			</h3>

			<p dangerouslySetInnerHTML={{
				__html: sprintf(
					__('Ollie was created by %s and %s, a team of code-slinging, pixel-pushing, award-winning creators from Planet Earth.', 'ollie-companion'),
					`<a href="https://mikemcalister.com">${__('Mike McAlister', 'ollie-companion')}</a>`,
					`<a href="https://patrickposner.dev">${__('Patrick Posner', 'ollie-companion')}</a>`
				)
			}} />

			<ul>
				<li>
					<p dangerouslySetInnerHTML={{
						__html: sprintf(
							__('Check out %s', 'ollie-companion'),
							`<a href="https://mikemcalister.com">${__('Mike\'s website', 'ollie-companion')}</a>`
						)
					}} />
				</li>
				<li>
					<p dangerouslySetInnerHTML={{
						__html: sprintf(
							__('Find Mike on %s', 'ollie-companion'),
							`<a href="https://twitter.com/mikemcalister">${__('Twitter', 'ollie-companion')}</a>`
						)
					}} />
				</li>
				<li>
					<p dangerouslySetInnerHTML={{
						__html: sprintf(
							__('Read Mike\'s writings at %s and %s', 'ollie-companion'),
							`<a href="https://olliewp.com">${__('Ollie', 'ollie-companion')}</a>`,
							`<a href="https://liftoffcourse.com">${__('Liftoff', 'ollie-companion')}</a>`
						)
					}} />
				</li>
			</ul>

			<ul>
				<li>
					<p dangerouslySetInnerHTML={{
						__html: sprintf(
							__('Check out %s', 'ollie-companion'),
							`<a href="https://patrickposner.dev/">${__('Patrick\'s website', 'ollie-companion')}</a>`
						)
					}} />
				</li>
				<li>
					<p dangerouslySetInnerHTML={{
						__html: sprintf(
							__('Find Patrick on %s', 'ollie-companion'),
							`<a href="https://twitter.com/patrickposner_">${__('Twitter', 'ollie-companion')}</a>`
						)
					}} />
				</li>
				<li>
					<p dangerouslySetInnerHTML={{
						__html: sprintf(
							__('Read his writings on %s and %s', 'ollie-companion'),
							`<a href="https://patrickposner.dev/blog/">${__('his website', 'ollie-companion')}</a>`,
							`<a href="https://simplystatic.com/tutorials/">${__('Simply Static', 'ollie-companion')}</a>`
						)
					}} />
				</li>
			</ul>

			<hr />

			<h3 id="support">
				{__('Support', 'ollie-companion')}
			</h3>

			<p dangerouslySetInnerHTML={{
				__html: sprintf(
					__('Got a question about the Ollie theme or want to report a bug? %s to the %s where we can track and fix the issue for you.', 'ollie-companion'),
					`<a href="https://github.com/OllieWP/ollie/issues/new/choose">${__('Submit an issue', 'ollie-companion')}</a>`,
					`<a href="https://github.com/OllieWP/ollie/">${__('Ollie GitHub repo', 'ollie-companion')}</a>`
				)
			}} />
		</section>
    )
}
export default Resources;
