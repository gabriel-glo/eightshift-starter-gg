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
    <PanelBody title={__('Posts Settings', 'eightshift-task')}>
      {
        postNumber &&
        <RangeControl
          label={__('Number of posts to load', 'eightshift-task')}
          value={postNumber}
          onChange={onChangePostNumber}
          initialPosition={postNumber}
          min={1}
          max={20}
        />
      }
    </PanelBody>
  );
};
