<?php
/**
 * The Ajax_Post_Load specific functionality.
 *
 * @since   1.0.0
 * @package Eighshift_Task\Admin
 */

namespace Eighshift_Task\Admin;

use Eightshift_Libs\Core\Service;

/**
 * Class Ajax_Post_Load
 *
 * Class that handles load_posts AJAX action.
 *
 * @since 1.0.0
 */
class Ajax_Post_Load implements Service {

  /**
   * Register all the hooks
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register() {
    add_action( 'wp_ajax_load_posts', [ $this, 'ajax_load_posts' ] );
    add_action( 'wp_ajax_nopriv_load_posts', [ $this, 'ajax_load_posts' ] );
  }

  /**
   * AJAX handler function that will process AJAX request
   * and return posts with their propper template.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function ajax_load_posts() {
    $output = '';

    if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'js-ajax-post-load-nonce' ) ) {
      wp_send_json_error(
        [
          'message' => 'Nonce verification error',
        ],
        400
      );
    }

    if ( ! empty( $_POST['page'] ) ) {
      $page = sanitize_text_field( wp_unslash( $_POST['page'] ) );
    }

    if ( ! empty( $_POST['query'] ) ) {
      $query = sanitize_text_field( wp_unslash( $_POST['query'] ) );
    }

    if ( ! empty( $_POST['postsNumber'] ) ) {
      $posts_number = sanitize_text_field( wp_unslash( $_POST['postsNumber'] ) );
    }

    if ( ! empty( $_POST['parentClass'] ) ) {
      $parent_class = sanitize_text_field( wp_unslash( $_POST['parentClass'] ) );
    }

    $query_args                = json_decode( stripslashes( $query ), true );
    $query_args['paged']       = $page + 1;
    $query_args['post_status'] = 'publish';

    $posts_query = new \WP_Query( $query_args );

    $post_list = $posts_query->posts;

    if ( ! empty( $post_list ) ) {
      ob_start();

      foreach ( $post_list as $single_post ) {

        $single_post_date = new \DateTime( $single_post->post_date );
        $attachment_id    = get_post_thumbnail_id( $single_post->ID );

        $attributes = [
          'parentClass'        => $parent_class,
          'url'                => get_the_permalink( $single_post->ID ),
          'title'              => $single_post->post_title,
          'excerpt'            => $single_post->post_excerpt,
          'featuredImageThumb' => wp_get_attachment_image_src( $attachment_id, 'thumbnail' )[0],
          'categories'         => get_the_terms( $single_post->ID, 'category' ),
          'date'               => $single_post_date->format( 'd.m.Y @ G:i' ),
        ];

        $article_item = locate_template( '/src/blocks/custom/posts/parts/post.php' );

        if ( ! empty( $article_item ) ) {
          include $article_item;
        }
      }

      wp_reset_postdata();

      $output = ob_get_clean();

      wp_send_json( [ 'posts' => $output ] );
    }
  }
}
