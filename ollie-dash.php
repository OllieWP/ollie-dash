<?php
/**
 * Plugin Name:       Ollie Dash
 * Plugin URI:        https://olliewp-com/ollie-dash
 * Description:       A companion plugin for the Ollie theme.
 * Version:           0.5
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
define( 'OD_VERSION', '0.5' );

// GitHub Updater.
require OD_PATH . '/inc/plugin-update-checker/plugin-update-checker.php';

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$update_checker = PucFactory::buildUpdateChecker(
	'https://github.com/OllieWP/ollie-dash/',
	__FILE__,
	'ollie-dash'
);

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

		require_once( OD_PATH . '/inc/class-od-settings.php' );
		require_once( OD_PATH . '/inc/class-od-helper.php' );

		od\Settings::get_instance();
		od\Helper::get_instance();
	}
}

