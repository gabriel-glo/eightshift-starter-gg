import { InnerBlocks } from '@wordpress/editor';

export const CarouselEditor = (props) => {
  console.log(props.attributes);
  const {
    attributes: {
      blockClass,
      blockJsClass,
      allowedBlocks,
    },
  } = props;

  return (
    <InnerBlocks
      allowedBlocks={allowedBlocks}
    />
  );
};
