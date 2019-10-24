<?php
/**
 * The Ajax_Post_Load specific functionality.
 *
 * @since   1.0.0
 * @package Eighshift_Task\Admin_Ajax
 */

namespace Eighshift_Task\Admin_Ajax;

use Eightshift_Libs\Core\Service;

/**
 * Class Ajax_Post_Load
 *
 * Class that handles latest_posts AJAX action.
 *
 * @since 1.0.0
 */
class Ajax_Latest_Posts implements Service {

  const AJAX_LATEST_POSTS_NONCE = 'js-ajax-post-load-nonce';

  /**
   * Register all the hooks
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register() {
    add_action( 'wp_ajax_latest_posts', [ $this, 'latest_posts_callback' ] );
    add_action( 'wp_ajax_nopriv_latest_posts', [ $this, 'latest_posts_callback' ] );
  }

  /**
   * AJAX handler function that will process AJAX request
   * and return posts with their propper template.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function latest_posts_callback() {
    $output = '';

    if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), static::AJAX_LATEST_POSTS_NONCE ) ) {
      wp_send_json_error( esc_html__( 'Nonce verification error', 'eightshift-task' ), 400 );
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

      wp_send_json(
        [
          'success' => true,
          'posts' => $output,
        ],
        200
      );
    } else {
      wp_send_json_error( esc_html__( 'No Posts found', 'eightshift-task' ), 400 );
    }
  }
}
