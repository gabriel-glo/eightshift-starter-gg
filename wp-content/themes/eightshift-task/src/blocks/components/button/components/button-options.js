import { __ } from '@wordpress/i18n';
import { URLInput } from '@wordpress/editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

export const ButtonOptions = (props) => {
  const {
    url,
    onChangeUrl,
    styleSize,
    onChangeStyleSize,
    styleColor,
    onChangeStyleColor,
    styleSizeWidth,
    onChangeStyleSizeWidth,
    id,
    onChangeId,
  } = props;

  return (
    <PanelBody title={__('Button Details', 'eightshift-task')}>

      {styleColor &&
        <SelectControl
          label={__('Button Color', 'eightshift-task')}
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
          label={__('Button Size', 'eightshift-task')}
          value={styleSize}
          options={[
            { label: __('Default', 'eightshift-task'), value: 'default' },
            { label: __('Big', 'eightshift-task'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

      {styleSizeWidth &&
        <SelectControl
          label={__('Button Size Width', 'eightshift-task')}
          value={styleSizeWidth}
          options={[
            { label: __('Default', 'eightshift-task'), value: 'default' },
            { label: __('Block', 'eightshift-task'), value: 'block' },
          ]}
          onChange={onChangeStyleSizeWidth}
        />
      }

      {onChangeUrl &&
        <div>
          <label htmlFor="url">{__('Button Link', 'eightshift-task')}</label>
          <URLInput
            value={url}
            onChange={onChangeUrl}
          />
          <br />
        </div>
      }

      {onChangeId &&
        <div>
          <TextControl
            label={__('Button ID', 'eightshift-task')}
            value={id}
            onChange={onChangeId}
          />
        </div>
      }

    </PanelBody>
  );
};
