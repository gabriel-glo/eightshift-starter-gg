<?php
/**
 * Template for the Link Block view.
 *
 * @since 1.0.0
 * @package Eightshift_Task\Blocks.
 */

namespace Eightshift_Task\Blocks;

$this->render_block_view(
  '/components/link/link.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'title' => $attributes['title'] ?? '',
    'url' => $attributes['url'] ?? '',
    'styleColor' => $attributes['styleColor'] ?? '',
  ]
);
