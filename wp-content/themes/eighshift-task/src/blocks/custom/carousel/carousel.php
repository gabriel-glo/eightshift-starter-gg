<?php
/**
 * Template for Carousel.
 *
 * @since 1.0.0
 * @package Eighshift_Task\Blocks
 */

namespace Eighshift_Task\Blocks;

$block_class    = $attributes['blockClass'] ?? '';
$block_js_class = $attributes['blockJsClass'] ?? '';

$block_classes = "
  {$block_class}
  {$block_js_class}
";

?>
<div class="<?php echo esc_attr( $block_classes ); ?>">
  <div class="swiper-wrapper">
    <?php echo wp_kses_post( $inner_block_content ); ?>
  </div>
</div>
