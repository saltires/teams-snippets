export default {
  name: 'zm-table-column',
  id: 'zm-table-column',
  description: 'zm-table-column',
  children: [
    {
      name: 'type',
      description: '对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮；如果设置了 draggable 则说明这是一个可拖拽排序的表格',
      children: [
        {
          name: 'selection',
        },
        {
          name: 'index',
        },
        {
          name: 'expand',
        },
        {
          name: 'draggable',
        }
      ]
    },
    {
      name: 'index',
      description: '如果设置了 type=index，可以通过传递 index 属性来自定义索引, type is number | Function(index)',
      type: 'blank'
    },
    {
      name: 'column-key',
      description: 'column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件, the type is string',
      type: 'blank'
    },
    {
      name: 'label',
      description: '显示的标题, the type is string',
      type: 'blank'
    },
    {
      name: 'prop',
      description: '对应列内容的字段名，也可以使用 property 属性, the type is string',
      type: 'blank'
    },
    {
      name: 'width',
      description: '对应列的宽度, the type is string',
      type: 'blank'
    },
    {
      name: 'min-width',
      description: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列, the type is string',
      type: 'blank'
    },
    {
      name: 'fixed',
      description: '列是否固定在左侧或者右侧，true 表示固定在左侧, the type is string | boolean',
      children: [
        {
          name: 'true',
        },
        {
          name: 'left',
        },
        {
          name: 'right',
        }
      ]
    },
    {
      name: 'render-header',
      description: '列标题 Label 区域渲染使用的 Function, the type is Function(h, { column, $index })',
      type: 'blank'
    },
    {
      name: 'sortable',
      description: '对应列是否可以排序，如果设置为 "custom"，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件, the type is boolean | string',
      children: [
        {
          name: 'true',
        },
        {
          name: 'false',
        },
        {
          name: 'custom',
        }
      ]
    },
    {
      name: 'sort-orders',
      description: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序,数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序，the type is Array',
      children: [
        {
          name: '["ascending", "descending", "null"]',
        }
      ]
    },
    {
      name: 'resizable',
      description: '对应列是否可以通过拖动改变宽度（需要在 zm-table 上设置 border 属性为真）, the type is Boolean',
      children: [
        {
          name: 'true',
        },
        {
          name: 'false',
        }
      ]
    },
    {
      name: 'formatter',
      description: '用来格式化内容, the type is Function(row, column, cellValue, index)',
      type: 'blank'
    },
    {
      name: 'show-overflow-tooltip',
      description: '当内容过长被隐藏时显示 tooltip, the type is Boolean',
      children: []
    },
    {
      name: 'align',
      description: '对齐方式, the type is left/center/right',
      children: [
        {
          name: 'left',
        },
        {
          name: 'center',
        },
        {
          name: 'right',
        }
      ]
    },
    {
      name: 'header-align',
      description: '表头对齐方式，若不设置该项，则使用表格的对齐方式, the type is left/center/right',
      children: [
        {
          name: 'left',
        },
        {
          name: 'center',
        },
        {
          name: 'right',
        }
      ]
    },
    {
      name: 'class-name',
      description: '列的 className, the type is String',
      type: 'blank'
    },
    {
      name: 'label-class-name',
      description: '当前列标题的自定义类名, the type is String',
      type: 'blank'
    },
    {
      name: 'selectable',
      description: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选, the type is Function(row, index)',
      type: 'blank'
    },
    {
      name: 'selectable-header',
      description: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定头部的 CheckBox 是否可以勾选, the type is Function()',
      type: 'blank'
    },
    {
      name: 'select-key',
      description: '仅对 type=selection 的列有效，类型为 String，可以设置为列的prop，aria-label默认为“Select This Row”,若设置了select-key为列的prop，aria-label为“Select ${prop}”, the type is String',
      type: 'blank'
    },
    {
      name: 'reserve-selection',
      description: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）, the type is Boolean',
      children: [
        {
          name: 'true',
        },
        {
          name: 'false',
        }
      ]
    },
    {
      name: 'filters',
      description: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。, the type is Array[{ text, value }]',
      type: 'blank'
    },
    {
      name: 'filter-placement',
      description: '过滤弹出框的定位, 与 Tooltip 的 placement 属性相同,the type is String',
      type: 'blank'
    },
    {
      name: 'filter-multiple',
      description: '数据过滤的选项是否多选,the type is Boolean',
      children: [
        {
          name: 'true',
        },
        {
          name: 'false',
        }
      ]
    },
    {
      name: 'filter-method',
      description: '数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示,the type is Function(value, row, column)',
      type: 'blank'
    },
    {
      name: 'filtered-value',
      description: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性,the type is Array',
      type: 'blank'
    },
    {
      name: 'word-wrap',
      description: '表体内容当文字超出的折行方式，默认会折行,the type is String',
      children: [
        {
          name: 'ellipsis',
        },
        {
          name: 'break',
        }
      ]
    },
    {
      name: 'header-word-wrap',
      description: '表头内容当文字超出的折行方式，默认会折行,the type is String',
      children: [
        {
          name: 'ellipsis',
        },
        {
          name: 'break',
        }
      ]
    },
    {
      name: 'no-column-prefix',
      description: '不插入前缀元素，包括indent, placeholder, expand-icon,the type is Boolean',
      children: [
        {
          name: 'true',
        },
        {
          name: 'false',
        }
      ]
    }
  ]
}