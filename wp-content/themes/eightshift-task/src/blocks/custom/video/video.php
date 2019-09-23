<?php
/**
 * Template for the Video Block view.
 *
 * @since 1.0.0
 * @package Eightshift_Task\Blocks.
 */

namespace Eightshift_Task\Blocks;

$this->render_block_view(
  '/components/video/video.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'url' => $attributes['mediaUrl'] ?? '',
  ]
);
