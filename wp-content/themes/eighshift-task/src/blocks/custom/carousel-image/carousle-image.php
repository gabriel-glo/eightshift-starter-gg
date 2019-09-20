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

$media = \wp_get_attachment_image(
  $attributes['id'],
  'full',
  '',
  [ 'class' => $image_class ]
);
?>

<div class="<?php echo esc_attr( $slide_class ); ?>">
  <?php echo wp_kses_post( $media ); ?>
</div>
