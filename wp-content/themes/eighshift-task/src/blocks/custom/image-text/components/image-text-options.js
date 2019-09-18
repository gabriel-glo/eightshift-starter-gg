import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

export const ImageTextOptions = (props) => {
  const {
    mediaPosition,
    onChangeMediaPosition,
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
    </PanelBody>
  );
};
