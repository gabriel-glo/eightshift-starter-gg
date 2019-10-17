<?php
/**
 * Template for the Example Block view.
 *
 * @since 1.0.0
 * @package Eighshift_Task\Blocks.
 */

namespace Eighshift_Task\Blocks;

$block_class    = $attributes['blockClass'] ?? '';
$block_js_class = $attributes['blockJsClass'] ?? '';
$post_number    = $attributes['postNumber'] ?? 4;

$wrapper_classes = "
  {$block_class}__wrap
";

$listing_classes = "
  {$block_class}__listing
  {$block_js_class}
";

?>
<div class="<?php echo esc_attr( $block_class ); ?>">
  <?php
  $this->render_block_view(
    '/components/heading/heading.php',
    [
      'blockClass' => $block_class,
      'content' => $attributes['headingContent'] ?? '',
      'level' => $attributes['headingLevel'] ?? '',
      'styleAlign' => $attributes['headingStyleAlign'] ?? '',
      'styleColor' => $attributes['headingStyleColor'] ?? '',
      'styleSize' => $attributes['headingStyleSize'] ?? '',
    ]
  );

  $posts_query = new \WP_Query(
    [
      'post_type' => 'post',
      'posts_per_page' => $post_number,
    ]
  );

  $post_list = $posts_query->posts;
  ?>
  <div class="<?php echo esc_attr( $wrapper_classes ); ?>">
    <?php
    if ( ! empty( $post_list ) ) {
      ?>
      <div class="<?php echo esc_attr( $listing_classes ); ?>" data-post-number="<?php echo esc_attr( $post_number ); ?>">
        <?php
        foreach ( $post_list as $single_post ) {
          $single_post_date = new \DateTime( $single_post->post_date );
          $attachment_id    = get_post_thumbnail_id( $single_post->ID );

          $this->render_block_view(
            '/custom/posts/parts/post.php',
            [
              'parentClass'        => $block_class,
              'url'                => get_the_permalink( $single_post->ID ),
              'title'              => $single_post->post_title,
              'excerpt'            => $single_post->post_excerpt,
              'featuredImageThumb' => wp_get_attachment_image_src( $attachment_id, 'thumbnail' )[0],
              'categories'         => get_the_terms( $single_post->ID, 'category' ),
              'date'               => $single_post_date->format( 'd.m.Y @ G:i' ),
            ]
          );
        }
        ?>
      </div>
      <?php
    }

    $pagination_query   = $posts_query;
    $parent_block_class = $block_class;

    wp_reset_postdata();

    $this->render_block_view(
      '/custom/posts/parts/load-more.php',
      [
        'paginationQuery' => $pagination_query,
        'parentClass'     => $parent_block_class,
      ]
    );

    wp_nonce_field( 'js-ajax-post-load-nonce', 'ajax-post-load-nonce' );
    ?>
  </div>
</div>
