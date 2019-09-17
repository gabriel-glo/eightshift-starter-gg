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
        <PanelBody title={__('Paragraph Details', 'eighshift-task')}>

          {styleColor &&
            <SelectControl
              label={__('Paragraph Color', 'eighshift-task')}
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
              label={__('Paragraph Size', 'eighshift-task')}
              value={styleSize}
              options={[
                { label: __('Small', 'eighshift-task'), value: 'small' },
                { label: __('Default', 'eighshift-task'), value: 'default' },
                { label: __('Big', 'eighshift-task'), value: 'big' },
              ]}
              onChange={onChangeStyleSize}
            />
          }
        </PanelBody>
      }
    </Fragment>
  );
};
