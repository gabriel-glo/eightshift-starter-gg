<?php
/**
 * The Admin specific functionality.
 *
 * @since   1.0.0
 * @package Eighshift_Task\Admin
 */

namespace Eighshift_Task\Admin;

use Eightshift_Libs\Core\Service;
use Eightshift_Libs\Manifest\Manifest_Data;

/**
 * Class Admin
 *
 * This class handles enqueue scripts and styles and some
 * admin facing functionality.
 *
 * @since 1.0.0
 */
class Admin implements Service {

  /**
   * Instance variable of manifest data.
   *
   * @var object
   *
   * @since 1.0.0
   */
  protected $manifest;

  /**
   * Create a new admin instance that injects manifest data for use in assets registration.
   *
   * @param Manifest_Data $manifest Inject manifest which holds data about assets from manifest.json.
   *
   * @since 1.0.0
   */
  public function __construct( Manifest_Data $manifest ) {
      $this->manifest = $manifest;
  }

  /**
   * Register all the hooks
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register() {
    add_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );
    add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );
    add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    add_filter( 'get_user_option_admin_color', [ $this, 'set_admin_color_based_on_env' ], 50 );
  }

  /**
   * Register the Stylesheets for the admin area.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function enqueue_styles() {

    // Main style file.
    \wp_register_style( ET_THEME_NAME . '-style', $this->manifest->get_assets_manifest_item( 'applicationAdmin.css' ), [], ET_THEME_VERSION );
    \wp_enqueue_style( ET_THEME_NAME . '-style' );

  }

  /**
   * Register the JavaScript for the admin area.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function enqueue_scripts() {

    // Main JavaScript file.
    \wp_register_script( ET_THEME_NAME . '-scripts', $this->manifest->get_assets_manifest_item( 'applicationAdmin.js' ), [], ET_THEME_VERSION, true );
    \wp_enqueue_script( ET_THEME_NAME . '-scripts' );

  }

  /**
   * Method that changes admin colors based on environment variable. Must have ET_ENV global variable set.
   *
   * @param string $color_scheme Color scheme string.
   * @return string              Modified color scheme.
   *
   * @since 1.0.0
   */
  public function set_admin_color_based_on_env( $color_scheme ) : string {
    if ( ! \defined( 'ET_ENV' ) ) {
      return false;
    }

    switch ( ET_ENV ) {
      case 'production':
            return 'sunrise';
      case 'staging':
            return 'blue';
      default:
            return 'fresh';
    }
  }

}
