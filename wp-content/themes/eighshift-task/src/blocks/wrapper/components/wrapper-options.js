import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, SelectControl, ToggleControl } from '@wordpress/components';

export const WrapperOptions = (props) => {
  const {
    attributes: {
      styleBackgroundColor,
      styleTextColor,
      styleContentWidth,
      styleContentOffset,
      styleContainerWidth,
      styleContainerSpacing,
      styleSpacingTop,
      styleSpacingTopTablet,
      styleSpacingTopMobile,
      styleSpacingBottom,
      styleSpacingBottomTablet,
      styleSpacingBottomMobile,
      styleShowOnlyMobile,
      id,
    },
    actions: {
      onChangeStyleBackgroundColor,
      onChangeStyleTextColor,
      onChangeStyleContentWidth,
      onChangeStyleContentOffset,
      onChangeStyleContainerWidth,
      onChangeStyleContainerSpacing,
      onChangeStyleSpacingTop,
      onChangeStyleSpacingTopTablet,
      onChangeStyleSpacingTopMobile,
      onChangeStyleSpacingBottom,
      onChangeStyleSpacingBottomTablet,
      onChangeStyleSpacingBottomMobile,
      onChangeStyleShowOnlyMobile,
      onChangeId,
    },
  } = props;

  const maxCols = 12;
  const colsOutput = [];

  for (let index = 1; index <= maxCols; index++) {
    colsOutput.push({ label: `${index} - (${Math.round((100 / maxCols) * index)}%)`, value: index });
  }

  const spacingOptions = [
    { label: __('Not Set', 'eighshift-task'), value: '' },
    { label: __('Biggest (100px)', 'eighshift-task'), value: 'biggest' },
    { label: __('Bigger (90px)', 'eighshift-task'), value: 'bigger' },
    { label: __('Big (80px)', 'eighshift-task'), value: 'big' },
    { label: __('Largest (70px)', 'eighshift-task'), value: 'largest' },
    { label: __('Larger (60px)', 'eighshift-task'), value: 'larger' },
    { label: __('Large (50px)', 'eighshift-task'), value: 'large' },
    { label: __('Default (40px)', 'eighshift-task'), value: 'default' },
    { label: __('Medium (30px)', 'eighshift-task'), value: 'medium' },
    { label: __('Small (20px)', 'eighshift-task'), value: 'small' },
    { label: __('Tiny (10px)', 'eighshift-task'), value: 'tiny' },
    { label: __('No padding (0px)', 'eighshift-task'), value: 'no-spacing' },
  ];

  return (
    <PanelBody title={__('Utility', 'eighshift-task')}>
      <h3>{__('Colors', 'eighshift-task')}</h3>

      {onChangeStyleBackgroundColor &&
        <SelectControl
          label={__('Background Color', 'eighshift-task')}
          value={styleBackgroundColor}
          options={[
            { label: __('Default', 'eighshift-task'), value: 'default' },
            { label: __('Primary', 'eighshift-task'), value: 'primary' },
            { label: __('Black', 'eighshift-task'), value: 'black' },
          ]}
          onChange={onChangeStyleBackgroundColor}
        />
      }

      {onChangeStyleTextColor &&
        <SelectControl
          label={__('Text Color', 'eighshift-task')}
          value={styleTextColor}
          options={[
            { label: __('Default', 'eighshift-task'), value: 'default' },
          ]}
          onChange={onChangeStyleTextColor}
        />
      }

      <hr />
      <h3>{__('Content', 'eighshift-task')}</h3>

      {onChangeStyleContentWidth &&
        <SelectControl
          label={__('Content Width', 'eighshift-task')}
          value={styleContentWidth}
          options={colsOutput}
          onChange={onChangeStyleContentWidth}
        />
      }

      {onChangeStyleContentOffset &&
        <SelectControl
          label={__('Content Offset', 'eighshift-task')}
          value={styleContentOffset}
          options={[
            { label: __('No offset', 'eighshift-task'), value: 'none' },
            { label: __('Center', 'eighshift-task'), value: 'center' },
          ]}
          onChange={onChangeStyleContentOffset}
        />
      }

      <hr />
      <h3>{__('Container', 'eighshift-task')}</h3>
      {onChangeStyleContainerWidth &&
        <SelectControl
          label={__('Container Width', 'eighshift-task')}
          value={styleContainerWidth}
          options={[
            { label: __('Default', 'eighshift-task'), value: 'default' },
            { label: __('Medium', 'eighshift-task'), value: 'medium' },
            { label: __('No Width', 'eighshift-task'), value: 'no-width' },
          ]}
          onChange={onChangeStyleContainerWidth}
        />
      }

      {onChangeStyleContainerSpacing &&
        <SelectControl
          label={__('Container Spacing', 'eighshift-task')}
          value={styleContainerSpacing}
          options={[
            { label: __('Default', 'eighshift-task'), value: 'default' },
            { label: __('No Spacing', 'eighshift-task'), value: 'no-spacing' },
          ]}
          onChange={onChangeStyleContainerSpacing}
        />
      }

      <hr />
      <h3>{__('Spacing TOP', 'eighshift-task')}</h3>

      {onChangeStyleSpacingTop &&
        <SelectControl
          label={__('Desktop', 'eighshift-task')}
          value={styleSpacingTop}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTop}
        />
      }

      {onChangeStyleSpacingTopTablet &&
        <SelectControl
          label={__('Tablet', 'eighshift-task')}
          value={styleSpacingTopTablet}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTopTablet}
        />
      }

      {onChangeStyleSpacingTopMobile &&
        <SelectControl
          label={__('Mobile', 'eighshift-task')}
          value={styleSpacingTopMobile}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTopMobile}
        />
      }

      <hr />
      <h3>{__('Spacing BOTTOM', 'eighshift-task')}</h3>
      {onChangeStyleSpacingBottom &&
        <SelectControl
          label={__('Desktop', 'eighshift-task')}
          value={styleSpacingBottom}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottom}
        />
      }

      {onChangeStyleSpacingBottomTablet &&
        <SelectControl
          label={__('Tablet', 'eighshift-task')}
          value={styleSpacingBottomTablet}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottomTablet}
        />
      }

      {onChangeStyleSpacingBottomMobile &&
        <SelectControl
          label={__('Mobile', 'eighshift-task')}
          value={styleSpacingBottomMobile}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottomMobile}
        />
      }

      <hr />
      <h3>{__('Visibility', 'eighshift-task')}</h3>
      {onChangeStyleShowOnlyMobile &&
        <ToggleControl
          label={__('Show Block Only On Mobile', 'eighshift-task')}
          checked={styleShowOnlyMobile}
          onChange={onChangeStyleShowOnlyMobile}
        />
      }
      
      <hr />
      <h3>{__('General', 'eighshift-task')}</h3>
      {onChangeId &&
        <TextControl
          label={__('Section ID', 'eighshift-task')}
          value={id}
          onChange={onChangeId}
        />
      }
    </PanelBody>
  );
};
