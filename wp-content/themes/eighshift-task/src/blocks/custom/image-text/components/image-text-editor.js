import classnames from 'classnames';

import { ImageEditor } from '../../../components/image/components/image-editor';
import { HeadingEditor } from '../../../components/heading/components/heading-editor';
import { ParagraphEditor } from '../../../components/paragraph/components/paragraph-editor';

export const ImageTextEditor = (props) => {
  const {
    attributes: {
      blockClass,
      mediaUrl,
      mediaPosition,
      headingContent,
      headingStyleAlign,
      headingStyleColor,
      headingStyleSize,
      paragraphContent,
      paragraphStyleAlign,
      paragraphStyleColor,
      paragraphStyleSize,
    },
    actions,
  } = props;

  const blockClasses = classnames([
    `${blockClass}__position--${mediaPosition}`,
    blockClass,
  ]);

  const visualClasses = classnames([
    `${blockClass}__visual`,
  ]);

  const textualClasses = classnames([
    `${blockClass}__textual`,
  ]);

  return (
    <div className={blockClasses}>
      <div className={visualClasses}>
        <ImageEditor
          blockClass={blockClass}
          url={mediaUrl}
        />
      </div>

      <div className={`${textualClasses}`}>
        <HeadingEditor
          blockClass={blockClass}
          content={headingContent}
          onChangeContent={actions.onChangeHeadingContent}
          styleAlign={headingStyleAlign}
          styleColor={headingStyleColor}
          styleSize={headingStyleSize}
        />
        <ParagraphEditor
          blockClass={blockClass}
          content={paragraphContent}
          onChangeContent={actions.onChangeParagraphContent}
          styleAlign={paragraphStyleAlign}
          styleColor={paragraphStyleColor}
          styleSize={paragraphStyleSize}
        />
      </div>
    </div>
  );
};
