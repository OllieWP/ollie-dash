import {useState, useEffect, useContext} from "@wordpress/element";
import {useSelect} from "@wordpress/data";
import {
    Flex,
    FlexItem,
    RadioControl, SelectControl
} from '@wordpress/components';
import {SettingsContext} from "../../context/SettingsContext";
import HomepagePreview from "../partials/HomepagePreview"

const {__} = wp.i18n;

function Homepage() {
    const {settings, updateSetting, pageStart} = useContext(SettingsContext);
    const [homePath, setHomePath] = useState(ollie_options.home_link);
    const [homeDisplay, setHomeDisplay] = useState(ollie_options.homepage_display);
    const [fetchedPages, setFetchedPages] = useState();
    const [selectedPage, setSelectedPage] = useState(ollie_options.home_id);
    const [permalinksSet, setPermalinksSet] = useState(ollie_options.permalink_structure);

    const pages = useSelect(
        (select) => {
            const {getEntityRecords} = select('core');
            return getEntityRecords('postType', 'page', {
                per_page: -1,
                order: 'asc',
                status: 'publish'
            });
        },
        []
    );

    const getSelectablePages = () => {
        if (!fetchedPages) {
            return [];
        }

        const options = [];

        fetchedPages.map(function (page) {
            if (page.title.raw && page.title.raw !== '') {
                options.push({
                    label: page.title.raw,
                    value: page.id,
                });

            }
            return page;
        });

        return options;
    };

    useEffect(() => {
        // Set focus.
        pageStart.current.focus();

        setFetchedPages(pages);
    }, [settings, pages]);

    return (
        <section>
            <div className="ollie-setting-fields">
                <Flex className="ollie-setting-intro">
                    <FlexItem>
                        <h2 ref={pageStart}>{__('Homepage', 'ollie-companion')}</h2>
                        <p>{__('Select which page you\'d like to use as your homepage. You can use the pages we just created in the last step.', 'ollie-companion')}</p>
                    </FlexItem>
                </Flex>
                {permalinksSet &&
                    <Flex className="ollie-setting-field">
                        <FlexItem>
                            <label htmlFor="homepage-display">{__('Your homepage displays', 'ollie-companion')}</label>
                            <p>{__('Choose what kind of homepage you\'d like to start with. We\'ll help you edit it after setup.', 'ollie-companion')}</p>
                        </FlexItem>
                        <FlexItem>
                            <RadioControl
                                id="homepage-display"
                                selected={homeDisplay}
                                options={[
                                    {label: 'Your latest posts', value: 'posts'},
                                    {label: 'A custom page', value: 'page'},
                                ]}
                                onChange={(value) => {
                                    // Update settings.
                                    setHomeDisplay(value);
                                    updateSetting("homepage_display", value);

                                    // Set iframe path.
                                    if (value === 'page') {
                                        if (selectedPage) {
                                            setHomePath(ollie_options.home_link + '/' + pages.find(page => page.id === parseInt(selectedPage)).slug);
                                        } else if (ollie_options.home_id) {
                                            setHomePath(ollie_options.home_link + '/' + pages.find(page => page.id === parseInt(ollie_options.home_id)).slug);
                                        }
                                    } else {
                                        if (ollie_options.blog_id) {
                                            setHomePath(ollie_options.home_link + '/' + pages.find(page => page.id === parseInt(ollie_options.blog_id)).slug);
                                        } else {
                                            setHomePath(ollie_options.home_link);
                                        }
                                    }
                                }}
                            />
                            <Flex className="ollie-homepage-select" gap="15px">
                                {'page' === homeDisplay &&
                                    <>
                                        <div className={"page-selector"}>
                                            {pages &&
                                                <SelectControl
                                                    label={__('Select homepage', 'content-protector')}
                                                    value={selectedPage}
                                                    options={getSelectablePages()}
                                                    onChange={(value) => {
                                                        // Set page in state.
                                                        setSelectedPage(value);

                                                        // Update settings.
                                                        updateSetting("home_id", value);

                                                        // Set iframe path.
                                                        setHomePath(ollie_options.home_link + '/' + pages.find(page => page.id === parseInt(value)).slug);
                                                    }}
                                                />
                                            }
                                        </div>
                                    </>
                                }
                            </Flex>
                        </FlexItem>
                    </Flex>
                }
            </div>
            {permalinksSet ?
                <HomepagePreview iframe_path={homePath}/>
                :
                <>
                    <h3>{__('Permalink update required', 'ollie-companion')}</h3>
                    <p>{__("Please modify your permalink settings. We can't preview your homepage with plain permalinks.", 'ollie-companion')}</p>
                </>
            }
        </section>
    )
}

export default Homepage;
