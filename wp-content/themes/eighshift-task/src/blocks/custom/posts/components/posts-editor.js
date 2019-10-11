import { Spinner } from '@wordpress/components';
import classnames from 'classnames';

import { HeadingEditor } from '../../../components/heading/components/heading-editor';
import { Post } from './../parts/post';

export const PostsEditor = (props) => {
  const {
    attributes: {
      blockClass,
      headingContent,
      headingLevel,
      headingStyleAlign,
      headingStyleColor,
      headingStyleSize,
      posts,
    },
    actions: {
      onChangeHeadingContent,
    },
  } = props;

  const listingClasses = classnames([
    `${blockClass}__listing`,
  ]);

  return (
    <div className={blockClass}>
      <HeadingEditor
        blockClass={blockClass}
        content={headingContent}
        onChangeContent={onChangeHeadingContent}
        level={headingLevel}
        styleAlign={headingStyleAlign}
        styleColor={headingStyleColor}
        styleSize={headingStyleSize}
      />
      {
        !posts ?
          <Spinner /> :
          <div className={listingClasses}>
            {
              posts.map((item) => {
                return (
                  <Post
                    key={item.id}
                    parentClass={blockClass}
                    title={item.title}
                    excerpt={item.excerpt}
                    categories={item.categories}
                    featuredImageThumb={item.featuredImageThumb}
                    date={item.date}
                  />
                );
              })
            }
          </div>
      }
    </div>
  );
};
