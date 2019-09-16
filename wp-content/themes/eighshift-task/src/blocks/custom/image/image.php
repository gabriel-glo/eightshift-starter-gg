<?php
/**
 * Template for the Image Block view.
 *
 * @since 1.0.0
 * @package Eighshift_Task\Blocks.
 */

namespace Eighshift_Task\Blocks;

$this->render_block_view(
  '/components/image/image.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'id' => $attributes['mediaId'] ?? '',
    'size' => $attributes['mediaSize'] ?? '',
  ]
);
