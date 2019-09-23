<?php
/**
 * Template for the Button Block view.
 *
 * @since 1.0.0
 * @package Eightshift_Task\Blocks.
 */

namespace Eightshift_Task\Blocks;

$this->render_block_view(
  '/components/button/button.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'title' => $attributes['title'] ?? '',
    'url' => $attributes['url'] ?? '',
    'styleColor' => $attributes['styleColor'] ?? '',
    'styleSize' => $attributes['styleSize'] ?? '',
    'styleSizeWidth' => $attributes['styleSizeWidth'] ?? '',
  ]
);
