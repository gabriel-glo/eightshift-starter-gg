import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

export const HeadingOptions = (props) => {
  const {
    styleColor,
    onChangeStyleColor,
    styleSize,
    onChangeStyleSize,
  } = props;

  return (
    <PanelBody title={__('Heading Details', 'eightshift-task')}>

      {styleColor &&
        <SelectControl
          label={__('Heading Color', 'eightshift-task')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift-task'), value: 'default' },
            { label: __('Primary', 'eightshift-task'), value: 'primary' },
          ]}
          onChange={onChangeStyleColor}
        />
      }

      {styleSize &&
        <SelectControl
          label={__('Heading Size', 'eightshift-task')}
          value={styleSize}
          options={[
            { label: __('Small', 'eightshift-task'), value: 'small' },
            { label: __('Default', 'eightshift-task'), value: 'default' },
            { label: __('Big', 'eightshift-task'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

    </PanelBody>
  );
};
