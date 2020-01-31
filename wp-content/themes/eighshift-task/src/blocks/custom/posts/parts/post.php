<?php
/**
 * Template for the single post article.
 *
 * @since 1.0.0
 * @package Eighshift_Task\Blocks.
 */

namespace Eighshift_Task\Blocks;

$parent_class = $attributes['parentClass'] ?? '';
$url          = $attributes['url'] ?? '';
$title        = $attributes['title'] ?? '';
$excerpt      = $attributes['excerpt'] ?? '';
$categories   = $attributes['categories'] ?? '';
$date         = $attributes['date'] ?? '';

$featured_image = $attributes['featuredImageThumb'] ?? '';

$post_classes = "
  {$parent_class}__post
";

$img_classes = "
  {$parent_class}__post-image
";

$date_classes = "
  {$parent_class}__post-date
";

$heading_classes = "
  {$parent_class}__post-title
";

$excerpt_classes = "
  {$parent_class}__post-excerpt
";

$categories_classes = "
  {$parent_class}__post-category-list
";

$category_classes = "
  {$parent_class}__post-category
";

?>
<a href="<?php echo esc_url( $url ); ?>" class="<?php echo esc_attr( $post_classes ); ?>">

  <?php if ( ! empty( $featured_image ) ) { ?>
    <img src="<?php echo esc_url( $featured_image ); ?>" alt="" class="<?php echo esc_attr( $img_classes ); ?>">
  <?php } ?>

  <?php if ( ! empty( $date ) ) { ?>
    <p class="<?php echo esc_attr( $date_classes ); ?>">
      <?php echo esc_html( $date ); ?>
    </p>
  <?php } ?>

  <?php if ( ! empty( $title ) ) { ?>
    <h4 class="<?php echo esc_attr( $heading_classes ); ?>">
      <?php echo esc_html( $title ); ?>
    </h4>
  <?php } ?>

  <?php if ( ! empty( $excerpt ) ) { ?>
    <p class="<?php echo esc_attr( $excerpt_classes ); ?>">
      <?php echo esc_html( $excerpt ); ?>
    </p>
  <?php } ?>

  <?php
  if ( ! empty( $categories ) ) {
    ?>
    <div class="<?php echo esc_attr( $categories_classes ); ?>">
      <?php
      foreach ( $categories as $category ) {
        ?>
        <span class="<?php echo esc_attr( $category_classes ); ?>">
          <?php echo esc_html( $category->name ); ?>
        </span>
        <?php
      }
      ?>
    </div>
    <?php
  }
  ?>
</a>
