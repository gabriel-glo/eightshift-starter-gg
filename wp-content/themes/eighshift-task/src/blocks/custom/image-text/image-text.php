<?php
/**
 * Template for the Image Text Block view.
 *
 * @since 1.0.0
 * @package Eighshift_Task\Blocks.
 */

namespace Eighshift_Task\Blocks;

$block_class    = $attributes['blockClass'] ?? '';
$media_position = $attributes['mediaPosition'] ?? '';

$block_classes = "
  {$block_class}__position--{$media_position}
  $block_class
";

$visual_classes = "
  {$block_class}__visual
";

$textual_classes = "
  {$block_class}__textual
";
?>
<div class="<?php echo esc_attr( $block_classes ); ?>">
  <div class="<?php echo esc_attr( $visual_classes ); ?>">
    <?php
    $this->render_block_view(
      '/components/image/image.php',
      [
        'blockClass' => $block_class,
        'id' => $attributes['mediaId'] ?? '',
        'size' => $attributes['mediaSize'] ?? '',
      ]
    );
    ?>
  </div>
  <div class="<?php echo esc_attr( $textual_classes ); ?>">
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

    $this->render_block_view(
      '/components/paragraph/paragraph.php',
      [
        'blockClass' => $block_class,
        'content' => $attributes['paragraphContent'] ?? '',
        'styleAlign' => $attributes['paragraphStyleAlign'] ?? '',
        'styleColor' => $attributes['paragraphStyleColor'] ?? '',
        'styleSize' => $attributes['paragraphStyleSize'] ?? '',
      ]
    );
    ?>
  </div>
</div>
