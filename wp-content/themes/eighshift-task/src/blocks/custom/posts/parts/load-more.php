<?php
/**
 * Load more button.
 *
 * @since 1.0.0
 * @package Eighshift_Task\Blocks.
 */

if ( ! isset( $pagination_query ) ) {
  $pagination_query = $wp_query;
}

if ( $pagination_query instanceof \WP_Query && $pagination_query->max_num_pages > 1 ) {
  ?>
  <button class="btn btn__color--primary btn__size--small js-load-more" data-query="<?php echo esc_attr( wp_json_encode( $pagination_query->query ) ); ?>" data-page="<?php echo esc_attr( get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1 ); ?>" data-max-pages="<?php echo esc_attr( $pagination_query->max_num_pages ); ?>" data-parent-class="<?php echo esc_attr( $parent_block_class ); ?>">
    <?php esc_html_e( 'Load More', 'eightshift-task' ); ?>
  </button>
  <?php
}
?>
