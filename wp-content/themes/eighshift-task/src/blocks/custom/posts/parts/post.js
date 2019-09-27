export const Post = (props) => {
  const {
    title,
    excerpt,
  } = props;

  const componentClass = 'testimonial';
  const metaClass = `${componentClass}__meta`;
  const ratingClass = `${componentClass}__rating`;
  const ratingStarsClass = `${componentClass}__rating-stars`;
  const titleClass = `${componentClass}__title`;
  const excerptClass = `${componentClass}__excerpt`;
  const authorClass = `${componentClass}__author`;

  return (
    <div className={componentClass}>
      <div className={metaClass}>
        <div className={ratingClass}>
        </div>
        <div className={ratingStarsClass}>
        </div>
      </div>
      <div className={titleClass}>
        {title}
      </div>
      <div className={excerptClass}>
        {excerpt}
      </div>
      <div className={authorClass}>
      </div>
    </div>
  );
};
