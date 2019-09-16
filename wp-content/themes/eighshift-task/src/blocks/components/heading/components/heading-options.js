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
    <PanelBody title={__('Heading Details', 'eighshift-task')}>

      {styleColor &&
        <SelectControl
          label={__('Heading Color', 'eighshift-task')}
          value={styleColor}
          options={[
            { label: __('Default', 'eighshift-task'), value: 'default' },
            { label: __('Primary', 'eighshift-task'), value: 'primary' },
          ]}
          onChange={onChangeStyleColor}
        />
      }

      {styleSize &&
        <SelectControl
          label={__('Heading Size', 'eighshift-task')}
          value={styleSize}
          options={[
            { label: __('Default', 'eighshift-task'), value: 'default' },
            { label: __('Big', 'eighshift-task'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

    </PanelBody>
  );
};
