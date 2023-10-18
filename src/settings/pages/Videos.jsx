import {
	__experimentalGrid as Grid,
	__experimentalSpacer as Spacer,
    Flex,
    FlexItem,
} from "@wordpress/components";
import {Video} from "../components/partials/Video";
import {Header} from "../components/partials/Header";

const {__} = wp.i18n;

function Videos() {
    return (
		<>
			<div className={"ollie-dash-hero"}>
                <div className="ollie-dash-container">
                    <Header />
                    <Flex className="ollie-dash-hero-content ollie-dash-video-content">
                        <FlexItem>
                            <h1>{__('Learn how to build with WordPress and Ollie', 'ollie-dash')}</h1>
                            <p>{__('WordPress is more powerful than its ever been, which means there\'s a lot to learn! The Ollie Builder Acdemy is a video tutorial series designed to help you build beautiful and blazing-fast websites with WordPress and the Ollie block theme, no page builder required.', 'ollie-dash')}</p>
                            <p>{__('This series is updated regularly, so check back often for new content! Ready to get started? Click on any of the videos below to start learning.', 'ollie-dash')}</p>
                        </FlexItem>
                        <FlexItem>
							<Video 
								title={__('Intro to Ollie', 'ollie-dash')}
								tagline={__('Learn about the Ollie dashboard and the Ollie setup wizard.', 'ollie-dash')}
								videoId={'JZ1EgDaDAH0'}
							/>
                        </FlexItem>
                    </Flex>
                </div>
            </div>
			<div className="ollie-dash-container ollie-dash-content">
				<h2 className="ollie-dash-content-intro">{__('Get Started with Ollie', 'ollie-dash')}</h2>
				<Grid columns={3} gap={8}>
					<Video 
						title={__('Ollie Setup Wizard', 'ollie-dash')}
						tagline={__('Set up your site with a few clicks with the Ollie Setup Wizard.', 'ollie-dash')}
						videoId={'OiO4gNDY0VQ'}
					/>
					<Video 
						title={__('Homepage & Blog', 'ollie-dash')}
						tagline={__('Learn a few different ways to quickly create your homepage and blog page.', 'ollie-dash')}
						videoId={'U-syrjB58j8'}
					/>
					<Video 
						title={__('What is a block theme?', 'ollie-dash')}
						tagline={__('Let\'s dig into block themes and learn about all of the powerful new features.', 'ollie-dash')}
						videoId={'D7GUoX2XU1k'}
					/>
					<Video 
						title={__('Site Editor 101', 'ollie-dash')}
						tagline={__('Learn how to fully customize the Ollie theme with the WordPress Site Editor.', 'ollie-dash')}
						videoId={'51-FInsYsGs'}
					/>
					<Video 
						title={__('Global Styles', 'ollie-dash')}
						tagline={__('Quickly and easily change your site\'s fonts, colors, and more with global styles.', 'ollie-dash')}
						videoId={'6RavZxNFy2Y'}
					/>
					<Video 
						title={__('Working with Patterns', 'ollie-dash')}
						tagline={__('Design pixel-perfect pages with the growing collection of Ollie patterns.', 'ollie-dash')}
						videoId={'w8DehSH1_PA'}
					/>
				</Grid>
				<Spacer margin={20}/>
				<h2 className="ollie-dash-content-intro">{__('Building with the Site Editor', 'ollie-dash')}</h2>
				<Grid columns={3} gap={8}>
					<Video 
						title={__('Edit Headers and Footers', 'ollie-dash')}
						tagline={__('Learn how to quickly adjust your header and footer designs with block themes.', 'ollie-dash')}
						videoId={'sp3gZha1gRY'}
					/>
					<Video 
						title={__('Design a Hero Header', 'ollie-dash')}
						tagline={__('Follow along as we design a hero header in the WordPress block editor.', 'ollie-dash')}
						videoId={'Y7JjG1PhLHc'}
					/>
					<Video 
						title={__('How To Build a Pattern', 'ollie-dash')}
						tagline={__('Designing patterns in the block editor is a breeze once you know how to use the tools.', 'ollie-dash')}
						videoId={'pWpnMD2MX7w'}
					/>
				</Grid>
			</div>
		</>
    )
}

export default Videos;
