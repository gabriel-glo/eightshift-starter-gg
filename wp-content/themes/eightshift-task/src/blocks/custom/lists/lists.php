<?php
/**
 * Template for the Lists Block view.
 *
 * @since 1.0.0
 * @package Eightshift_Task\Blocks.
 */

namespace Eightshift_Task\Blocks;

$this->render_block_view(
  '/components/lists/lists.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'content' => $attributes['content'] ?? '',
    'ordered' => $attributes['ordered'] ?? '',
  ]
);
