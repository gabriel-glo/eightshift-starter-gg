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
    { label: __('Not Set', 'eightshift-task'), value: '' },
    { label: __('Biggest (100px)', 'eightshift-task'), value: 'biggest' },
    { label: __('Bigger (90px)', 'eightshift-task'), value: 'bigger' },
    { label: __('Big (80px)', 'eightshift-task'), value: 'big' },
    { label: __('Largest (70px)', 'eightshift-task'), value: 'largest' },
    { label: __('Larger (60px)', 'eightshift-task'), value: 'larger' },
    { label: __('Large (50px)', 'eightshift-task'), value: 'large' },
    { label: __('Default (40px)', 'eightshift-task'), value: 'default' },
    { label: __('Medium (30px)', 'eightshift-task'), value: 'medium' },
    { label: __('Small (20px)', 'eightshift-task'), value: 'small' },
    { label: __('Tiny (10px)', 'eightshift-task'), value: 'tiny' },
    { label: __('No padding (0px)', 'eightshift-task'), value: 'no-spacing' },
  ];

  return (
    <PanelBody title={__('Utility', 'eightshift-task')}>
      <h3>{__('Colors', 'eightshift-task')}</h3>

      {onChangeStyleBackgroundColor &&
        <SelectControl
          label={__('Background Color', 'eightshift-task')}
          value={styleBackgroundColor}
          options={[
            { label: __('Default', 'eightshift-task'), value: 'default' },
            { label: __('Primary', 'eightshift-task'), value: 'primary' },
            { label: __('Black', 'eightshift-task'), value: 'black' },
          ]}
          onChange={onChangeStyleBackgroundColor}
        />
      }

      {onChangeStyleTextColor &&
        <SelectControl
          label={__('Text Color', 'eightshift-task')}
          value={styleTextColor}
          options={[
            { label: __('Default', 'eightshift-task'), value: 'default' },
          ]}
          onChange={onChangeStyleTextColor}
        />
      }

      <hr />
      <h3>{__('Content', 'eightshift-task')}</h3>

      {onChangeStyleContentWidth &&
        <SelectControl
          label={__('Content Width', 'eightshift-task')}
          value={styleContentWidth}
          options={colsOutput}
          onChange={onChangeStyleContentWidth}
        />
      }

      {onChangeStyleContentOffset &&
        <SelectControl
          label={__('Content Offset', 'eightshift-task')}
          value={styleContentOffset}
          options={[
            { label: __('No offset', 'eightshift-task'), value: 'none' },
            { label: __('Center', 'eightshift-task'), value: 'center' },
          ]}
          onChange={onChangeStyleContentOffset}
        />
      }

      <hr />
      <h3>{__('Container', 'eightshift-task')}</h3>
      {onChangeStyleContainerWidth &&
        <SelectControl
          label={__('Container Width', 'eightshift-task')}
          value={styleContainerWidth}
          options={[
            { label: __('Default', 'eightshift-task'), value: 'default' },
            { label: __('Medium', 'eightshift-task'), value: 'medium' },
            { label: __('No Width', 'eightshift-task'), value: 'no-width' },
          ]}
          onChange={onChangeStyleContainerWidth}
        />
      }

      {onChangeStyleContainerSpacing &&
        <SelectControl
          label={__('Container Spacing', 'eightshift-task')}
          value={styleContainerSpacing}
          options={[
            { label: __('Default', 'eightshift-task'), value: 'default' },
            { label: __('No Spacing', 'eightshift-task'), value: 'no-spacing' },
          ]}
          onChange={onChangeStyleContainerSpacing}
        />
      }

      <hr />
      <h3>{__('Spacing TOP', 'eightshift-task')}</h3>

      {onChangeStyleSpacingTop &&
        <SelectControl
          label={__('Desktop', 'eightshift-task')}
          value={styleSpacingTop}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTop}
        />
      }

      {onChangeStyleSpacingTopTablet &&
        <SelectControl
          label={__('Tablet', 'eightshift-task')}
          value={styleSpacingTopTablet}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTopTablet}
        />
      }

      {onChangeStyleSpacingTopMobile &&
        <SelectControl
          label={__('Mobile', 'eightshift-task')}
          value={styleSpacingTopMobile}
          options={spacingOptions}
          onChange={onChangeStyleSpacingTopMobile}
        />
      }

      <hr />
      <h3>{__('Spacing BOTTOM', 'eightshift-task')}</h3>
      {onChangeStyleSpacingBottom &&
        <SelectControl
          label={__('Desktop', 'eightshift-task')}
          value={styleSpacingBottom}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottom}
        />
      }

      {onChangeStyleSpacingBottomTablet &&
        <SelectControl
          label={__('Tablet', 'eightshift-task')}
          value={styleSpacingBottomTablet}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottomTablet}
        />
      }

      {onChangeStyleSpacingBottomMobile &&
        <SelectControl
          label={__('Mobile', 'eightshift-task')}
          value={styleSpacingBottomMobile}
          options={spacingOptions}
          onChange={onChangeStyleSpacingBottomMobile}
        />
      }

      <hr />
      <h3>{__('Visibility', 'eightshift-task')}</h3>
      {onChangeStyleShowOnlyMobile &&
        <ToggleControl
          label={__('Show Block Only On Mobile', 'eightshift-task')}
          checked={styleShowOnlyMobile}
          onChange={onChangeStyleShowOnlyMobile}
        />
      }

      <hr />
      <h3>{__('General', 'eightshift-task')}</h3>
      {onChangeId &&
        <TextControl
          label={__('Section ID', 'eightshift-task')}
          value={id}
          onChange={onChangeId}
        />
      }
    </PanelBody>
  );
};
