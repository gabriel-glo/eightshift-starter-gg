<?php
/**
 * Template for the Carousel Image Component.
 *
 * @since 1.0.0
 * @package Eighshift_Task\Blocks.
 */

namespace Eighshift_Task\Blocks;

$block_class = $attributes['blockClass'] ?? '';

$slide_class = "
  {$block_class}
  swiper-slide
";

$image_class = "{$block_class}__img";

$media_url = \wp_get_attachment_image_src( $attributes['mediaId'], 'full' );
?>

<div class="<?php echo esc_attr( $slide_class ); ?>">
  <img src="<?php echo esc_url( $media_url[0] ); ?>" alt="" class="<?php echo esc_attr( $image_class ); ?>">
</div>
