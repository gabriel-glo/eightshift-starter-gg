<?php
/**
 * Template for the Section block.
 *
 * @since 1.0.0
 * @package Eightshift_Task\Blocks.
 */

namespace Eightshift_Task\Blocks;

$block_class = $attributes['blockClass'] ?? '';

?>

<div class="<?php echo esc_attr( $block_class ); ?>">
  <?php echo wp_kses_post( $inner_block_content ); ?>
</div>
