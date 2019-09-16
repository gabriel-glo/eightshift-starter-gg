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
    <PanelBody title={__('Button Details', 'eighshift-task')}>

      {styleColor &&
        <SelectControl
          label={__('Button Color', 'eighshift-task')}
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
          label={__('Button Size', 'eighshift-task')}
          value={styleSize}
          options={[
            { label: __('Default', 'eighshift-task'), value: 'default' },
            { label: __('Big', 'eighshift-task'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

      {styleSizeWidth &&
        <SelectControl
          label={__('Button Size Width', 'eighshift-task')}
          value={styleSizeWidth}
          options={[
            { label: __('Default', 'eighshift-task'), value: 'default' },
            { label: __('Block', 'eighshift-task'), value: 'block' },
          ]}
          onChange={onChangeStyleSizeWidth}
        />
      }

      {onChangeUrl &&
        <div>
          <label htmlFor="url">{__('Button Link', 'eighshift-task')}</label>
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
            label={__('Button ID', 'eighshift-task')}
            value={id}
            onChange={onChangeId}
          />
        </div>
      }

    </PanelBody>
  );
};
