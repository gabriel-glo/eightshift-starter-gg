import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { CarouselImageEditor } from './components/carousel-image-editor';
import { CarouselImageOptions } from './components/carousel-image-options';

export const CarouselImage = (props) => {
  const {
    setAttributes,
    attributes,
  } = props;

  // Get all auto generated attribute change actions, spread them and
  // add manually defined attribute change actions/methods
  const actions = {
    ...getActions(props, manifest),
    onChangeMedia: (value) => {
      setAttributes({
        mediaId: value.id,
        mediaUrl: value.url,
      });
    },
  };

  return (
    <Fragment>
      <InspectorControls>
        <CarouselImageOptions
          actions={actions}
        />
      </InspectorControls>

      <CarouselImageEditor
        attributes={attributes}
      />
    </Fragment>
  );
};
