import { __ } from '@wordpress/i18n';
import { MediaPlaceholder } from '@wordpress/editor';
import { PanelBody } from '@wordpress/components';

export const ImageOptions = (props) => {
  const {
    onChangeMedia,
  } = props;

  return (
    <PanelBody title={__('Image Settings', 'eighshift-task')}>
      {onChangeMedia &&
        <div className="components-base-control">
          <label htmlFor="media">{__('Image', 'eighshift-task')}</label>
          <MediaPlaceholder
            icon="format-image"
            onSelect={onChangeMedia}
            accept={'image/*'}
            allowedTypes={['image', 'application/json']}
          />
        </div>
      }
    </PanelBody>
  );
};
