import { Spinner } from '@wordpress/components';
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

  const post = (!posts) ? <Spinner /> : posts.map((item) => {
    return (
      <div key={item.id} className="">
        <Post
          blockClass={blockClass}
          link={item.link}
          title={item.title}
          excerpt={item.excerpt}
        />
      </div>
    );
  });

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
      <div>
        {post}
      </div>
    </div>
  );
};

// {
  //   posts && posts.map((post) => {
    //     return (
      //       <div key={post.id}>
      //         <p>{post.date}</p>
      //         <h4>{post.title}</h4>
      //         <div>
      //           {post.excerpt}
      //         </div>
      //       </div>
      //     );
      //   })
      // }
