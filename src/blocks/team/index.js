/**
 * BLOCK: Laboratory Blocks Container
 */

// Guttenberg Imports.
const { InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const {
  PanelRow,
  SelectControl,
} = wp.components;

// <ServerSideRender block={props.name} />,

/**
 * Register Block.
 */
registerBlockType('laboratory-blocks/team', {
  title: 'Team',
  icon: 'groups',
  category: 'laboratory-blocks',
  description: 'Display your team members',
  keywords: [
    'Team',
    'Team members',
    'Employees',
  ],
  attributes: {
    memberDisplayType: {
      type: 'string',
    },
    memberImageLocation: {
      type: 'string',
    },
  },

  edit(props) {
    const {
      isSelected,
      attributes,
      setAttributes,
    } = props;

    const {
      memberDisplayType,
      memberImageLocation,
    } = attributes;

    const setDisplayType = value => setAttributes({ memberDisplayType: value });
    const setImgLocation = value => setAttributes({ memberImageLocation: value });

    return [
      !!isSelected && (
        <InspectorControls key="inspector">
          <PanelRow>
            <SelectControl
              key="member-display-type"
              label={__('I would like team member details to appear:')}
              value={memberDisplayType || 'together'}
              options={[
                { label: __('Alongside each team-member'), value: 'together' },
                { label: __('Seperate from each team member (e.g. in a modal)'), value: 'seperate' },
                { label: __('On a seperate page'), value: 'page' },
              ]}
              onChange={setDisplayType}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl
              key="member-image-location"
              label={__('I would each team members\' picture to appear:')}
              value={memberImageLocation || 'together'}
              options={[
                { label: __('As a background image'), value: 'background' },
                { label: __('As an seperate image'), value: 'element' },
              ]}
              onChange={setImgLocation}
            />
          </PanelRow>
        </InspectorControls>
      ),
      <div className="lab-blocks-team-edit">
        Adjust how your team is displayed in the settings.
      </div>,
    ];
  },

  // Render via PHP
  save() {
    return null;
  },
});
