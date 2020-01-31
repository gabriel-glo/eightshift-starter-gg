<?php
/**
 * Categories field on /posts/ route
 *
 * @since 1.0.0
 * @package Eighshift_Task\Rest\Fields
 */

namespace Eighshift_Task\Rest\Fields;

use Eightshift_Libs\Core\Service;
use Eightshift_Libs\Routes\Registrable_Field;
use Eightshift_Libs\Routes\Callable_Field;

/**
 * Class for changine categories field for /posts/ route.
 */
class Post_Categories_Field implements Service, Registrable_Field, Callable_Field {

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
      'category_names',
      [
        'get_callback' => [ $this, 'field_callback' ],
      ]
    );
  }

  /**
   * Return array of post categories with category id, name and slug.
   *
   * @param  array  $object      Requested post.
   * @param  string $attr        'categories' field.
   * @param  string $request     Full request payload.
   * @param  string $object_type Post type 'post'.
   * @return array               Categories array.
   */
  public function field_callback( $object, string $attr, $request, string $object_type ) {
    $category_terms = get_the_terms( $object['id'], 'category' );

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
}
