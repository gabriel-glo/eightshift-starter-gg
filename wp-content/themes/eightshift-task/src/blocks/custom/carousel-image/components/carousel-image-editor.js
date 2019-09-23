import classnames from 'classnames';

export const CarouselImageEditor = (props) => {
  const {
    attributes: {
      blockClass,
      mediaUrl,
    },
  } = props;

  const imageClass = classnames([
    `${blockClass}__img`,
  ]);

  return (
    <div className={blockClass}>
      <img className={imageClass} src={mediaUrl} alt="" />
    </div>
  );
};
