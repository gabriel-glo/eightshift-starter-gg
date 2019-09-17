<?php
/**
 * Display footer content
 *
 * @package Eighshift_Task\Views\Footer
 *
 * @since 1.0.0
 */

use Eighshift_Task\Admin\Menu\Menu;
use Eighshift_Task\Manifest\Manifest;

$footer_menu      = new Menu();
$blog_name        = get_bloginfo( 'name' );
$blog_description = get_bloginfo( 'description' );
$footer_logo_info = $blog_name . ' - ' . $blog_description;
$logo_img         = apply_filters( Manifest::MANIFEST_ITEM_FILTER_NAME, 'logo.svg' );
?>

<footer class="footer">
  <div class="footer__container">
    <div class="footer__inner">
      <div class="footer__part footer__logo-nav-wrap">
        <a class="footer__logo-link" href="<?php echo esc_url( home_url() ); ?>" title="<?php echo esc_attr( $blog_name ); ?>">
          <img class="footer__logo-img" src="<?php echo esc_url( $logo_img ); ?>" title="<?php echo esc_attr( $footer_logo_info ); ?>" alt="<?php echo esc_attr( $footer_logo_info ); ?>" />
        </a>

        <?php echo esc_html( $footer_menu->bem_menu( 'footer_main_nav', 'footer-navigation' ) ); ?>
      </div>

      <div class="footer__part">
        <p class='footer__tag-line'>
          <?php echo esc_html( date( 'Y' ) . '. ' . $blog_description ); ?>
        </p>
      </div>
    </div>
  </div>
</footer>
