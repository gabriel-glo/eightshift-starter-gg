import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/editor';

export const CarouselEditor = (props) => {
  const {
    attributes: {
      blockClass,
      blockJsClass,
      allowedBlocks,
    },
  } = props;

  const carouselClasses = classnames([
    blockClass,
    blockJsClass,
  ]);

  return (
    <div className={carouselClasses}>
      <InnerBlocks
        allowedBlocks={allowedBlocks}
      />
    </div>
  );
};
