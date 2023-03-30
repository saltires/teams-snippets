export default  {
  name: 'as-menu',
  id: 'as-menu',
  description: 'as-menu',
  children: [
    {
      name: 'activeAll',
      description: 'Expand all menu-item, The value type is Boolean',
      children: [
        {
          name: 'false',
        },
        {
          name: 'true',
        }
      ]
    },
    {
      name: 'activeTab',
      description: 'Current tab, The value type is String',
      type: 'blank'
    },
    {
      name: 'canSearch',
      description: 'Use search, The value type is Boolean',
      children: [
        {
          name: 'false',
        },
        {
          name: 'true',
        }
      ]
    },
    {
      name: 'height',
      description: 'Height of menu, The value type is Number/String',
      type: 'blank'
    },
    {
      name: 'menuConfig',
      description: 'Menu config, The value type is Array/Object',
      type: 'blank'
    },
    {
      name: 'router',
      description: 'Use router, The value type is Boolean',
      children: [
        {
          name: 'false',
        },
        {
          name: 'true',
        }
      ]
    },
    {
      name: 'showCollapse',
      description: 'Use collapse of menu, The value type is Boolean',
      children: [
        {
          name: 'false',
        },
        {
          name: 'true',
        }
      ]
    },
    {
      name: 'tabList',
      description: 'Tab list, The value type is Array',
      type: 'blank'
    },
    {
      name: 'width',
      description: 'Width of menu, The value type is Number',
      type: 'blank'
    },
  ]
}