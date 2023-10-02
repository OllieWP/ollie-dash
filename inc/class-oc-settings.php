<?php

namespace oc;

class Settings {
	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of Settings.
	 *
	 * @return object
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Setting up admin fields
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_menu' ) );
		add_action( 'rest_api_init', array( $this, 'rest_api_init' ) );

		// Admin notice.
		add_action( 'admin_notices', array( $this, 'display_activation_notice' ) );
		add_action( 'wp_ajax_dismiss_theme_activation_notice', array( $this, 'dismiss_notice' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_notice_scripts' ) );
	}

	/**
	 * Display an admin notice on the Themes page
	 * @return void
	 */
	public function display_activation_notice() {
		$notice_transient = 'ollie_activation_notice';
		$current_screen   = get_current_screen();

		// Only show the notice on the theme page and if not dismissed
		if ( $current_screen && $current_screen->base === 'themes' && ! get_transient( $notice_transient ) ) {
			$title   = __( 'Welcome to the Ollie Block Theme!', 'ollie' );
			$message = sprintf( __( 'We\'ve put together a helpful <a href="%s"><b>Theme Dashboard</b></a> (Appearance → Ollie) to help you learn about Ollie, set up your theme, view the docs, and more.', 'ollie' ), esc_url( admin_url( 'themes.php?page=ollie' ) ) );

			printf(
				'<div id="ollie-activation-notice" class="notice notice-success is-dismissible"><h2 style="margin-bottom: .5em">%s</h2><p style="margin-bottom: 1em">%s</p></div>',
				esc_html( $title ),
				$message
			);
		}
	}

	/**
	 * Set a transient for the theme activation notice
	 * @return void
	 */
	public function dismiss_notice() {
		set_transient( 'ollie_activation_notice', true, YEAR_IN_SECONDS );
	}

	/**
	 * Enqueue scripts for the admin notice.
	 * @return void
	 */
	public function enqueue_notice_scripts() {
		$screen = get_current_screen();

		// Only load the script on the Themes page
		if ( $screen->base === 'themes' ) {
			wp_enqueue_script( 'ollie-activation-notice', OC_URL . '/assets/js/notice.js', array( 'jquery' ), null, true );
		}
	}

	/**
	 * Add admin menu item.
	 *
	 * @return void
	 */
	public function add_menu() {
		$settings_suffix = add_theme_page(
			__( 'Ollie', 'ollie' ),
			__( 'Ollie', 'ollie' ),
			'manage_options',
			'ollie',
			array( $this, 'render_settings' )
		);

		add_action( "admin_print_scripts-{$settings_suffix}", array( $this, 'add_settings_scripts' ) );
	}

	/**
	 * Enqueue admin settings scripts.
	 *
	 * @return void
	 */
	public function add_settings_scripts() {
		$screen = get_current_screen();

		if ( 'appearance_page_ollie' === $screen->base ) {
			wp_enqueue_media();

			wp_enqueue_script( 'ollie-onboarding-settings', OC_URL . '/build/index.js', array(
				'wp-api',
				'wp-components',
				'wp-plugins',
				'wp-edit-post',
				'wp-edit-site',
				'wp-element',
				'wp-api-fetch',
				'wp-data',
				'wp-i18n',
				'wp-block-editor'
			), OC_VERSION, true );

			$args = array(
				'version'             => OC_VERSION,
				'dashboard_link'      => esc_url( admin_url() ),
				'home_link'           => esc_url( home_url() ),
				'logo'                => OC_URL . '/assets/ollie-logo.svg',
				'onboarding_complete' => false,
			);

			// Adjust homepage display based on WP settings.
			$front = get_option( 'show_on_front' );

			if ( 'posts' === $front ) {
				$args['homepage_display'] = 'posts';
				$args['home_id']          = '';
				$args['blog_id']          = '';
			} else {
				$args['homepage_display'] = 'page';
				$args['home_id']          = get_option( 'page_on_front' );
				$args['blog_id']          = get_option( 'page_for_posts' );
			}

			wp_localize_script( 'ollie-onboarding-settings', 'ollie_options', $args );

			// Make the blocks translatable.
			if ( function_exists( 'wp_set_script_translations' ) ) {
				wp_set_script_translations( 'ollie-onboarding-settings', 'ollie-data', OC_PATH . '/languages' );
			}

			wp_enqueue_style( 'ollie-onboarding-settings-style', OC_URL . '/build/index.css', array( 'wp-components' ) );
		}
	}

	/**
	 * Render Ollie settings.
	 *
	 * @return void
	 */
	public function render_settings() {
		?>
        <div id="ollie-onboarding"></div>
		<?php
	}

	/**
	 * Set up Rest API routes.
	 *
	 * @return void
	 */
	public function rest_api_init() {
		register_rest_route( 'ollie/v1', '/settings', array(
			'methods'             => 'GET',
			'callback'            => [ $this, 'get_settings' ],
			'permission_callback' => function () {
				return current_user_can( 'manage_options' );
			},
		) );

		register_rest_route( 'ollie/v1', '/settings', array(
			'methods'             => 'POST',
			'callback'            => [ $this, 'save_settings' ],
			'permission_callback' => function () {
				return current_user_can( 'manage_options' ) && current_user_can( 'edit_theme_options' );
			},
		) );

		register_rest_route( 'ollie/v1', '/complete-onboarding', array(
			'methods'             => 'POST',
			'callback'            => [ $this, 'complete_onboarding' ],
			'permission_callback' => function () {
				return current_user_can( 'edit_theme_options' );
			},
		) );

		register_rest_route( 'ollie/v1', '/skip-onboarding', array(
			'methods'             => 'POST',
			'callback'            => [ $this, 'skip_onboarding' ],
			'permission_callback' => function () {
				return current_user_can( 'edit_theme_options' );
			},
		) );

		register_rest_route( 'ollie/v1', '/create-pages', array(
			'methods'             => 'POST',
			'callback'            => [ $this, 'create_pages' ],
			'permission_callback' => function () {
				return current_user_can( 'publish_pages' );
			},
		) );
	}

	/**
	 * Get Ollie settings via Rest API.
	 *
	 * @return false|mixed|null
	 */
	public function get_settings() {
		return get_option( 'ollie' );
	}

	/**
	 * Save settings via Rest API.
	 *
	 * @param object $request given request.
	 *
	 * @return string
	 */
	public function save_settings( $request ) {
		if ( $request->get_params() ) {
			$options = $request->get_params();
			update_option( 'ollie', $this->sanitize_options_array( $options ) );

			// Set up the homepage.
			if ( isset( $options['homepage_display'] ) ) {
				switch ( $options['homepage_display'] ) {
					case 'posts':
						// Just update the option.
						update_option( 'show_on_front', 'posts' );
						break;
					case 'page':
						// Update options for homepage + blog page.
						update_option( 'show_on_front', 'page' );
						update_option( 'page_on_front', absint( $options['home_id'] ) );
						break;
				}
			} elseif ( isset( $options['home_id'] ) ) {
				// Update options for homepage + blog page.
				update_option( 'show_on_front', 'page' );
				update_option( 'page_on_front', absint( $options['home_id'] ) );
			}

			return json_encode( [ "status" => 200, "message" => "Ok" ] );
		}

		return json_encode( [ "status" => 400, "message" => "Could not save settings" ] );
	}

	/**
	 * Finish onboarding.
	 *
	 * @param object $request given request.
	 *
	 * @return string
	 */
	public function complete_onboarding( $request ) {
		if ( $request->get_params() ) {
			$options                        = get_option( 'ollie', [] );
			$options['onboarding_complete'] = true;

			update_option( 'ollie', $options );

			return json_encode( [ "status" => 200, "message" => "Ok" ] );
		}

		return json_encode( [ "status" => 400, "message" => "There was a problem with finishing the onboarding." ] );
	}

	/**
	 * Finish onboarding.
	 *
	 * @param object $request given request.
	 *
	 * @return string
	 */
	public function skip_onboarding( $request ) {
		if ( $request->get_params() ) {
			$options = (array) get_option( 'ollie', [] );

			// Set skip onboarding to true and update.
			$options['skip_onboarding'] = true;
			update_option( 'ollie', $options );

			return json_encode( [ "status" => 200, "message" => "Ok" ] );
		}

		return json_encode( [ "status" => 400, "message" => "There was a problem skipping the onboarding." ] );
	}

	/**
	 * Create pages.
	 *
	 * @param object $request given request.
	 *
	 * @return string
	 */
	public function create_pages( $request ) {
		if ( $request->get_params() ) {
			$pages = $request->get_params();
			unset( $pages['_locale'] );
			unset( $pages['rest_route'] );

			$created_pages = Helper::create_pages( $pages );

			return json_encode( [ "status" => 200, "pages" => $created_pages, "message" => "Ok" ] );
		}

		return json_encode( [ "status" => 400, "message" => "Could not create pages." ] );
	}

	/**
	 * Sanitize options array before saving to database.
	 *
	 * @param array $options User-submitted options.
	 *
	 * @return array Sanitized array of options.
	 */
	private function sanitize_options_array( array $options = [] ) {
		$sanitized_options = [];

		foreach ( $options as $key => $value ) {
			switch ( $key ) {
				case 'skip_onboarding':
					$sanitized_options[ $key ] = (bool) $value;
					break;
				case 'onboarding_complete':
					$sanitized_options[ $key ] = (bool) $value;
					break;
				default:
					$sanitized_options[ $key ] = sanitize_text_field( $value );
					break;
			}
		}

		return $sanitized_options;
	}
}
