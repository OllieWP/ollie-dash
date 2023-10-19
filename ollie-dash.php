<?php
/**
 * Plugin Name:       Ollie Dash
 * Plugin URI:        https://olliewp-com/ollie-dash
 * Description:       A companion plugin for the Ollie theme.
 * Version:           1.0
 * Author:            OllieWP Team
 * Author URI:        https://olliewp.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ollie-dash
 * Domain Path:       /languages
 *
 */

define( 'OD_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'OD_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'OD_VERSION', '1.0' );

// run plugin.
if ( ! function_exists( 'od_run_plugin' ) ) {
	add_action( 'plugins_loaded', 'od_run_plugin' );

	/**
	 * Run plugin
	 *
	 * @return void
	 */
	function od_run_plugin() {
		// Localize the plugin.
		$textdomain_dir = plugin_basename( dirname( __FILE__ ) ) . '/languages';
		load_plugin_textdomain( 'ollie-dash', false, $textdomain_dir );

		// Get the current theme.
		$theme = wp_get_theme();

		if( 'ollie' === $theme->template ) {
			require_once( OD_PATH . '/inc/class-od-settings.php' );
			require_once( OD_PATH . '/inc/class-od-helper.php' );

			od\Settings::get_instance();
			od\Helper::get_instance();
		} else {
			// Add admin notice.
			add_action( 'admin_notices', function () {
				$message = sprintf( __( 'The Ollie Dash plugin needs the free Ollie theme to work. View the theme and install it %s.', 'ollie-dash' ), '<a href=' . esc_url( admin_url( 'theme-install.php?search=ollie' ) ) . '>by clicking here</a>' );
				echo wp_kses_post( '<div class="notice notice-error"><p>' . $message . '</p></div>' );
			} );
		}
	}
}

