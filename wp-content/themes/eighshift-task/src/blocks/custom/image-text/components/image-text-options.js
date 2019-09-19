import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

export const ImageTextOptions = (props) => {
  const {
    attributes: {
      mediaPosition,
      includeBtn,
    },
    actions: {
      onChangeMediaPosition,
      onChangeIncludeBtn,
    },
  } = props;

  return (
    <PanelBody title={__('Image Text Settings', 'eighshift-task')}>
      {mediaPosition &&
        <SelectControl
          label={__('Image Position', 'eighshift-task')}
          value={mediaPosition}
          options={[
            { label: __('Left', 'eighshift-task'), value: 'left' },
            { label: __('Right', 'eighshift-task'), value: 'right' },
          ]}
          onChange={onChangeMediaPosition}
        />
      }

      {onChangeIncludeBtn &&
        <ToggleControl
          label={__('Include button', 'eighshift-task')}
          checked={includeBtn}
          onChange={onChangeIncludeBtn}
        />
      }
    </PanelBody>
  );
};
