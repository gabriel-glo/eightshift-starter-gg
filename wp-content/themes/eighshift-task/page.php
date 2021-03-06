<?php
/**
 * Display regular page
 *
 * @package Eighshift_Task
 *
 * @since 1.0.0
 */

get_header();

if ( have_posts() ) {
  while ( have_posts() ) {
    the_post();
    the_content();
  }

  require locate_template( 'src/blocks/components/google-rich-snippets/google-rich-snippets.php' );
}

get_footer();
