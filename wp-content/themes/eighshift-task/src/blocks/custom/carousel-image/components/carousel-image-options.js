import { __ } from '@wordpress/i18n';
import { MediaPlaceholder } from '@wordpress/editor';
import { PanelBody } from '@wordpress/components';

export const CarouselImageOptions = (props) => {
  const {
    actions: {
      onChangeMedia,
    },
  } = props;

  return (
    <PanelBody title={__('Carousel Image Settings', 'eighshift-task')}>
      {onChangeMedia &&
        <div className="components-base-control">
          <label htmlFor="media">{__('Carousel Image', 'eighshift-task')}</label>
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
