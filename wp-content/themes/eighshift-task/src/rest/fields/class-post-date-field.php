<?php
/**
 * Formated date field on /posts/ route
 *
 * @since 1.0.0
 * @package Eighshift_Task\Rest\Fields
 */

namespace Eighshift_Task\Rest\Fields;

use Eightshift_Libs\Core\Service;
use Eightshift_Libs\Routes\Registrable_Field;
use Eightshift_Libs\Routes\Callable_Field;

/**
 * Class for changing date field for /posts/ route.
 */
class Post_Date_Field implements Service, Registrable_Field, Callable_Field {

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
      'date_formated',
      [
        'get_callback' => [ $this, 'field_callback' ],
      ]
    );
  }

  /**
   * Return formated date in array
   *
   * @param  array  $object      Requested post.
   * @param  string $attr        'date' field.
   * @param  string $request     Full request payload.
   * @param  string $object_type Post type 'post'.
   * @return array               Formated date array.
   */
  public function field_callback( $object, string $attr, $request, string $object_type ) {
    $post_date = new \DateTime( $object['date'] );

    return $post_date->format( 'd.m.Y @ G:i' );
  }
}
