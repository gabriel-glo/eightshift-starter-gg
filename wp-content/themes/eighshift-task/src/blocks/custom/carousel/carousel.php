<?php
/**
 * Template for Carousel.
 *
 * @since 1.0.0
 * @package Eighshift_Task\Blocks
 */

namespace Eighshift_Task\Blocks;

use Eighshift_Task\Manifest\Manifest;

$arrow_left  = apply_filters( Manifest::MANIFEST_ITEM_FILTER_NAME, 'arrow-left.svg' );
$arrow_right = apply_filters( Manifest::MANIFEST_ITEM_FILTER_NAME, 'arrow-right.svg' );

$block_class    = $attributes['blockClass'] ?? '';
$block_js_class = $attributes['blockJsClass'] ?? '';

$block_classes = "
  {$block_class}
  {$block_js_class}
";

$navigation_class = "{$block_class}__navigation";
$pagination_class = "
  {$block_js_class}-pagination
  {$block_class}__pagination
";

$prev_class = "
  {$block_class}__arrow
  {$block_class}__arrow--prev
  {$block_js_class}-prev
";

$next_class = "
  {$block_class}__arrow
  {$block_class}__arrow--next
  {$block_js_class}-next
";

?>
<div class="<?php echo esc_attr( $block_classes ); ?>">
  <div class="swiper-wrapper">
    <?php echo wp_kses_post( $inner_block_content ); ?>
  </div>

 <div class="<?php echo esc_attr( $navigation_class ); ?>">
   <div class="<?php echo esc_attr( $prev_class ); ?>">
     <img src="<?php echo esc_url( $arrow_left ); ?>" alt="">
   </div>
   <div class="<?php echo esc_attr( $next_class ); ?>">
     <img src="<?php echo esc_url( $arrow_right ); ?>" alt="">
   </div>

   <div class="<?php echo esc_attr( $pagination_class ); ?>"></div>
 </div>
</div>
