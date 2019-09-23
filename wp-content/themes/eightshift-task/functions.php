<?php
/**
 * Theme Name: Eightshift Task
 * Description: Test assignment for Gutenberg
 * Author: Team Eightshift
 * Author URI:
 * Version: 1.0
 * Text Domain: eightshift-task
 *
 * @package Eightshift_Task
 *
 * @since 1.0.0
 */

namespace Eightshift_Task;

/**
 * If this file is called directly, abort.
 *
 * @since 1.0.0
 */
if ( ! \defined( 'WPINC' ) ) {
  die;
}

/**
 * Global variable defining theme name generally used for naming assets handlers.
 *
 * @since 1.0.0
 */
\define( 'ET_THEME_NAME', 'eightshift-task' );

/**
 * Global variable defining theme version generally used for versioning assets handlers.
 *
 * @since 1.0.0
 */
\define( 'ET_THEME_VERSION', '1.0.0' );

/**
 * Include the autoloader so we can dynamically include the rest of the classes.
 *
 * @since 1.0.0
 */
require WP_CONTENT_DIR . '/../vendor/autoload.php';

/**
 * Begins execution of the theme.
 *
 * Since everything within the theme is registered via hooks,
 * then kicking off the theme from this point in the file does
 * not affect the page life cycle.
 *
 * @since 1.0.0
 */
( new Core\Main() )->register();
