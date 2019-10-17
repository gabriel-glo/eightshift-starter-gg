import classnames from 'classnames';

export const Post = (props) => {
  const {
    parentClass,
    title,
    excerpt,
    featuredImageThumb,
    categories,
    date,
  } = props;

  const postClasses = classnames([
    `${parentClass}__post`,
  ]);

  const imgClasses = classnames([
    `${parentClass}__post-image`,
  ]);

  const dateClasses = classnames([
    `${parentClass}__post-date`,
  ]);

  const headingClasses = classnames([
    `${parentClass}__post-title`,
  ]);

  const excerptClasses = classnames([
    `${parentClass}__post-excerpt`,
  ]);

  const categoriesClasses = classnames([
    `${parentClass}__post-category-list`,
  ]);

  const categoryClasses = classnames([
    `${parentClass}__post-category`,
  ]);

  return (
    <div className={postClasses}>
      {
        featuredImageThumb &&
        <img src={featuredImageThumb[0]} alt="" className={imgClasses} />
      }
      {
        date &&
        <p className={dateClasses}>
          {date}
        </p>
      }
      {
        title &&
        <h4 className={headingClasses}>
          {title}
        </h4>
      }
      {
        excerpt &&
        <p className={excerptClasses}>
          {excerpt}
        </p>
      }
      {
        categories &&
        <div className={categoriesClasses}>
          {
            categories.map((category) => {
              return (
                <span key={category.id} className={categoryClasses}>
                  {category.name}
                </span>
              );
            })
          }
        </div>
      }
    </div>
  );
};
