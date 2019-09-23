import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

export const ParagraphOptions = (props) => {
  const {
    styleColor,
    onChangeStyleColor,
    removeStyle,
    styleSize,
    onChangeStyleSize,
  } = props;

  return (
    <Fragment>
      {removeStyle !== true &&
        <PanelBody title={__('Paragraph Details', 'eightshift-task')}>

          {styleColor &&
            <SelectControl
              label={__('Paragraph Color', 'eightshift-task')}
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
              label={__('Paragraph Size', 'eightshift-task')}
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
      }
    </Fragment>
  );
};
