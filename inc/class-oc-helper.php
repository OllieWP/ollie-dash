<?php

namespace oc;

class Helper {
	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of Helper.
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
		add_filter( 'wp_theme_json_data_theme', array( $this, 'set_theme_styles' ) );
	}

	
	/**
	 * Create pages in WordPress.
	 *
	 * @param array $pages given list of pages.
	 *
	 * @return array
	 */
	public static function create_pages( $pages ) {
		$create_page_ids = [];

		foreach ( $pages as $page_slug ) {
			// Check if page exists.
			if ( ! get_page_by_path( $page_slug, OBJECT, [ 'page' ] ) ) {
				// Create page.
				$page_id = wp_insert_post(
					array(
						'post_author'  => 1,
						'post_title'   => 'Ollie ' . ucwords( sanitize_title( $page_slug ) ),
						'post_name'    => sanitize_title( $page_slug ),
						'post_status'  => 'publish',
						'post_content' => '<!-- wp:pattern {"slug":"page-' . sanitize_title( $page_slug ) . '"} /-->',
						'post_type'    => 'page',
					)
				);

				$create_page_ids[ $page_slug ] = $page_id;

				// Update the page template.
				update_post_meta( $page_id, '_wp_page_template', 'page-no-title' );
			}
		}

		return $create_page_ids;
	}

	/**
	 * This function modifies the theme JSON data by updating the theme's color
	 * palette and brand color.
	 *
	 * @param object $theme_json The original theme JSON data.
	 *
	 * @return object The modified theme JSON data.
	 */
	public function set_theme_styles( $theme_json ) {
		$settings    = get_option( 'ollie', [] );
		$ollie_style = json_decode( file_get_contents( get_template_directory() . '/theme.json' ) );

		if ( isset( $settings['style'] ) ) {
			
			if ( 'purple' === $settings['style'] ) {
				$ollie_style = json_decode( file_get_contents( get_template_directory() . '/theme.json' ) );
			} else {
				$ollie_style = json_decode( file_get_contents( get_template_directory() . '/styles/' . $settings['style'] . '.json' ) );
			}
		}

		$ollie_palette = $ollie_style->settings->color->palette;

		// Change brand color.
		if ( isset( $settings['brand_color'] ) && $settings['brand_color'] != '' ) {
			$ollie_palette[0]->color = wp_strip_all_tags( $settings['brand_color'] );
		}

		// Convert values for the filter.
		foreach ( $ollie_palette as $key => $value ) {
			$ollie_palette[ $key ] = (array) $value;
		}

		$new_data = array(
			'version'  => 2,
			'settings' => array(
				'color' => array(
					'palette' => $ollie_palette,
				),
			),
		);

		// Return the modified theme JSON data.
		return $theme_json->update_with( $new_data );
	}
}
