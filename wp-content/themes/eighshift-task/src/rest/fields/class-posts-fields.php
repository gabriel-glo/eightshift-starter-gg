<?php
/**
 * REST Field on /posts/ route
 *
 * @since 1.0.0
 * @package Eighshift_Task\Rest\Fields
 */

namespace Eighshift_Task\Rest\Fields;

use Eightshift_Libs\Core\Service;
use Eightshift_Libs\Routes\Registrable_Field;

/**
 * Class for registering and changine REST fields for /posts/ route.
 */
class Posts_Fields implements Service, Registrable_Field {

  /**
   * Hook registration
   *
   * @since 1.0.0
   */
  public function register() : void {
    add_action( 'rest_api_init', [ $this, 'register_field' ] );
  }

  /**
   * Register fields
   */
  public function register_field() : void {
    register_rest_field(
      'post',
      'featuredImage',
      [
        'get_callback' => [ $this, 'featured_image_callback' ],
      ]
    );

    register_rest_field(
      'post',
      'categories',
      [
        'get_callback' => [ $this, 'category_names_callback' ],
      ]
    );

    register_rest_field(
      'post',
      'date',
      [
        'get_callback' => [ $this, 'date_format_callback' ],
      ]
    );
  }

  /**
   * Return featured image of current post
   *
   * @param  array $post Requested post.
   * @return array       Image array.
   */
  public function featured_image_callback( array $post ) {
    $featured_image_thumb = wp_get_attachment_image_src( $post['featured_media'] );
    $featured_image       = wp_get_attachment_image_src( $post['featured_media'], 'full_width' );

    return [
      'thumbnail' => $featured_image_thumb,
      'full'      => $featured_image,
    ];
  }

  /**
   * [category_names_callback description].
   *
   * @param array $post [description].
   */
  public function category_names_callback( array $post ) {
    $category_terms = get_the_terms( $post['id'], 'category' );

    if ( ! $category_terms ) {
      return;
    }

    $category_names = array_map(
      function( $category_term ) {
        return [
          'id'   => $category_term->term_id,
          'name' => $category_term->name,
          'slug' => $category_term->slug,
        ];
      },
      $category_terms
    );

    return $category_names;
  }

  /**
   * [category_names_callback description].
   *
   * @param array $post [description].
   */
  public function date_format_callback( array $post ) {
    $post_date = new \DateTime( $post['date'] );

    return [
      'default' => $post['date'],
      'formated' => $post_date->format( 'd.m.Y @ G:i' ),
    ];
  }
}
