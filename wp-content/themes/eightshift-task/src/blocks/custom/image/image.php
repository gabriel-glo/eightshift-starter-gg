<?php
/**
 * Template for the Image Block view.
 *
 * @since 1.0.0
 * @package Eightshift_Task\Blocks.
 */

namespace Eightshift_Task\Blocks;

$this->render_block_view(
  '/components/image/image.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'id' => $attributes['mediaId'] ?? '',
    'size' => $attributes['mediaSize'] ?? '',
  ]
);
