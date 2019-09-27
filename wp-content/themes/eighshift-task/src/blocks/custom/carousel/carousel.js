import { Fragment } from '@wordpress/element';

import { CarouselEditor } from './components/carousel-editor';

export const Carousel = (props) => {
  const {
    attributes,
  } = props;

  return (
    <Fragment>
      <CarouselEditor
        attributes={attributes}
      />
    </Fragment>
  );
};
