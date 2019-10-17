<?php
/**
 * Featured image field on /posts/ route
 *
 * @since 1.0.0
 * @package Eighshift_Task\Rest\Fields
 */

namespace Eighshift_Task\Rest\Fields;

use Eightshift_Libs\Core\Service;
use Eightshift_Libs\Routes\Registrable_Field;
use Eightshift_Libs\Routes\Callable_Field;

/**
 * Class for registering feature image field for /posts/ route.
 */
class Post_Featured_Image_Field implements Service, Registrable_Field, Callable_Field {

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
      'featured_image',
      [
        'get_callback' => [ $this, 'field_callback' ],
      ]
    );
  }

  /**
   * Return featured image of current post
   *
   * @param  array  $object      Requested post.
   * @param  string $attr        'featuredImage' field.
   * @param  string $request     Full request payload.
   * @param  string $object_type Post type 'post'.
   * @return array               Image array.
   */
  public function field_callback( $object, string $attr, $request, string $object_type ) {
    $featured_image_thumb = wp_get_attachment_image_src( $object['featured_media'] );
    $featured_image       = wp_get_attachment_image_src( $object['featured_media'], 'full_width' );

    return [
      'thumbnail' => $featured_image_thumb,
      'full'      => $featured_image,
    ];
  }
}
