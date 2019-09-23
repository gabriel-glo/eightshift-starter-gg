import { __ } from '@wordpress/i18n';
import { URLInput } from '@wordpress/editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export const LinkOptions = (props) => {
  const {
    url,
    onChangeUrl,
    styleColor,
    onChangeColor,
  } = props;

  return (
    <PanelBody title={__('Link Details', 'eightshift-task')}>

      {styleColor &&
        <SelectControl
          label={__('Link Color', 'eightshift-task')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift-task'), value: 'default' },
          ]}
          onChange={onChangeColor}
        />
      }

      {onChangeUrl &&
        <div>
          <label htmlFor="url">{__('Link Url', 'eightshift-task')}</label>
          <URLInput
            value={url}
            onChange={onChangeUrl}
          />
        </div>
      }

    </PanelBody>
  );
};
