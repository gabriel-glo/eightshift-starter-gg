import { Fragment } from '@wordpress/element';
import { InspectorControls, BlockControls } from '@wordpress/editor';

import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { ImageTextEditor } from './components/image-text-editor';
import { ImageTextOptions } from './components/image-text-options';

import { ImageOptions } from '../../components/image/components/image-options';
import { HeadingOptions } from '../../components/heading/components/heading-options';
import { ParagraphOptions } from '../../components/paragraph/components/paragraph-options';

import { HeadingToolbar } from '../../components/heading/components/heading-toolbar';
import { ParagraphToolbar } from '../../components/paragraph/components/paragraph-toolbar';

export const ImageText = (props) => {
  const {
    setAttributes,
    attributes: {
      mediaPosition,
      headingStyleColor,
      headingStyleSize,
      paragraphStyleColor,
      paragraphStyleSize,
      headingStyleAlign,
      headingLevel,
      paragraphStyleAlign,
    },
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
        <ImageTextOptions
          mediaPosition={mediaPosition}
          onChangeMediaPosition={actions.onChangeMediaPosition}
        />
        <ImageOptions
          onChangeMedia={actions.onChangeMedia}
        />
        <HeadingOptions
          styleColor={headingStyleColor}
          onChangeStyleColor={actions.onChangeHeadingStyleColor}
          styleSize={headingStyleSize}
          onChangeStyleSize={actions.onChangeHeadingStyleSize}
        />
        <ParagraphOptions
          styleColor={paragraphStyleColor}
          onChangeStyleColor={actions.onChangeParagraphStyleColor}
          styleSize={paragraphStyleSize}
          onChangeStyleSize={actions.onChangeParagraphStyleSize}
        />
      </InspectorControls>
      <BlockControls>
        <HeadingToolbar
          level={headingLevel}
          onChangeLevel={actions.onChangeHeadingLevel}
          styleAlign={headingStyleAlign}
          onChangeStyleAlign={actions.onChangeHeadingStyleAlign}
        />
        <ParagraphToolbar
          styleAlign={paragraphStyleAlign}
          onChangeStyleAlign={actions.onChangeParagraphStyleAlign}
        />
      </BlockControls>
      <ImageTextEditor
        attributes={props.attributes}
        actions={actions}
      />
    </Fragment>
  );
};
