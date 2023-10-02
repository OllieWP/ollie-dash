import {
    __experimentalSpacer as Spacer,
    Flex,
    FlexItem,
} from "@wordpress/components";
import DocsIntroduction from "../components/docs/Introduction";
import DocsBlockThemes from "../components/docs/BlockThemes";
import DocsResources from "../components/docs/Resources";
import GettingStarted from "../components/docs/GettingStarted";
import {useState} from "@wordpress/element";

const {__} = wp.i18n;

function Documentation() {

    const [activeItem, setActiveItem] = useState({activeItem: "introduction"});

    return (
        <Flex align="stretch" gap="0" className="ollie-settings-inner">
            <FlexItem className={"ollie-setup-sidebar"}>
                <div className="ollie-docs-nav-sticky">
                    <div className="ollie-docs-nav-overflow">
                        <h2>{__('Documentation', 'ollie-companion')}</h2>
                        <p>{__('Learn about the Ollie theme and how to build beautiful websites.', 'ollie-companion')}</p>
                        <Spacer margin={10}/>
                        <ul className={"ollie-docs-steps"}>
                            <li>
                                <p className="ollie-doc-step-title">{__('Getting Started', 'ollie-companion')}</p>
                                <ul>
                                    <li onClick={() => setActiveItem('getting-started')}
                                        className={activeItem === 'getting-started' ? 'ollie-active-doc' : ''}>
                                        <a href="#getting-started">{__('Getting Started with Ollie', 'ollie-companion')}</a>
                                    </li>
									<li onClick={() => setActiveItem('ollie-dashboard')}
                                        className={activeItem === 'ollie-dashboard' ? 'ollie-active-doc' : ''}>
                                        <a href="#ollie-dashboard">{__('Ollie Theme Dashboard', 'ollie-companion')}</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>{__('Block Themes', 'ollie-companion')}</p>
                                <ul>
                                    <li onClick={() => setActiveItem('block-theme-intro')}
                                        className={activeItem === 'block-theme-intro' ? 'ollie-active-doc' : ''}>
                                        <a href="#block-theme-intro">{__('Block Theme Intro', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('site-editor')}
                                        className={activeItem === 'site-editor' ? 'ollie-active-doc' : ''}>
                                        <a href="#site-editor">{__('Site Editor', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('patterns')}
                                        className={activeItem === 'patterns' ? 'ollie-active-doc' : ''}>
                                        <a href="#patterns">{__('Patterns', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('global-styles')}
                                        className={activeItem === 'global-styles' ? 'ollie-active-doc' : ''}>
                                        <a href="#global-styles">{__('Global Styles', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('template-parts')}
                                        className={activeItem === 'template-parts' ? 'ollie-active-doc' : ''}>
                                        <a href="#template-parts">{__('Template Parts', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('site-export')}
                                        className={activeItem === 'site-export' ? 'ollie-active-doc' : ''}>
                                        <a href="#site-export">{__('Export Your Site', 'ollie-companion')}</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>{__('Resources', 'ollie-companion')}</p>
                                <ul>
									<li onClick={() => setActiveItem('ollie-youtube')}
                                        className={activeItem === 'ollie-youtube' ? 'ollie-active-doc' : ''}>
                                        <a href="#ollie-youtube">{__('Ollie YouTube Channel', 'ollie-companion')}</a>
                                    </li>
									<li onClick={() => setActiveItem('developer-notes')}
                                        className={activeItem === 'developer-notes' ? 'ollie-active-doc' : ''}>
                                        <a href="#developer-notes">{__('Developer Notes', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('license')}
                                        className={activeItem === 'license' ? 'ollie-active-doc' : ''}>
                                        <a href="#license">{__('License', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('feedback')}
                                        className={activeItem === 'feedback' ? 'ollie-active-doc' : ''}>
                                        <a href="#feedback">{__('Feedback', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('about-creator')}
                                        className={activeItem === 'about-creator' ? 'ollie-active-doc' : ''}>
                                        <a href="#about-creator">{__('About the Creators', 'ollie-companion')}</a>
                                    </li>
                                    <li onClick={() => setActiveItem('support')}
                                        className={activeItem === 'support' ? 'ollie-active-doc' : ''}>
                                        <a href="#support">{__('Support', 'ollie-companion')}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </FlexItem>
            <FlexItem className={"ollie-setup-content ollie-setup-content-docs"}>
                <DocsIntroduction/>
				<GettingStarted/>
                <DocsBlockThemes/>
                <DocsResources/>
            </FlexItem>
        </Flex>
    )
}

export default Documentation;
