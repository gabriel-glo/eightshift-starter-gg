import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';

export const PostsOptions = (props) => {
  const {
    attributes: {
      postNumber,
    },
    actions: {
      onChangePostNumber,
    },
  } = props;

  return (
    <PanelBody title={__('Posts Settings', 'eightshift-blocks')}>
      <RangeControl
        label="Number of posts to load"
        value={postNumber}
        onChange={onChangePostNumber}
        initialPosition={postNumber}
        min={1}
        max={20}
      />
    </PanelBody>
  );
};
