import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, CheckboxControl } from '@wordpress/components';

export const ImageTextOptions = (props) => {
  const {
    mediaPosition,
    onChangeMediaPosition,
    includeBtn,
    onChangeIncludeBtn,
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
        <CheckboxControl
          label={__('Include button', 'eighshift-task')}
          checked={includeBtn}
          onChange={onChangeIncludeBtn}
        />
      }
    </PanelBody>
  );
};
