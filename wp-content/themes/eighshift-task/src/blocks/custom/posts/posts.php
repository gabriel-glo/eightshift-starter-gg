<?php
/**
 * Template for the Example Block view.
 *
 * @since 1.0.0
 * @package Eightshift_Boilerplate\Blocks.
 */

namespace Eightshift_Boilerplate\Blocks;

$block_class = $attributes['blockClass'] ?? '';

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
  ?>
</div>
