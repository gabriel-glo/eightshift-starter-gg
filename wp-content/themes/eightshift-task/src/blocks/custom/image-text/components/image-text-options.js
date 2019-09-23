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
    <PanelBody title={__('Image Text Settings', 'eightshift-task')}>
      {mediaPosition &&
        <SelectControl
          label={__('Image Position', 'eightshift-task')}
          value={mediaPosition}
          options={[
            { label: __('Left', 'eightshift-task'), value: 'left' },
            { label: __('Right', 'eightshift-task'), value: 'right' },
          ]}
          onChange={onChangeMediaPosition}
        />
      }

      {onChangeIncludeBtn &&
        <ToggleControl
          label={__('Include button', 'eightshift-task')}
          checked={includeBtn}
          onChange={onChangeIncludeBtn}
        />
      }
    </PanelBody>
  );
};
