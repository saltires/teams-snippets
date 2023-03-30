export default {
  name: 'zm-table',
  id: 'zm-table',
  description: 'zm-table',
  children: [
    {
      name: 'data',
      description: '显示的数据, 类型: array',
      type: 'blank'
    },
    {
      name: 'height',
      description: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式, The type is string/number',
      type: 'blank'
    },
    {
      name: 'max-height',
      description: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度, The type is string/number',
      type: 'blank'
    },
    {
      name: 'stripe',
      description: '是否为斑马纹 Table',
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
      name: 'border',
      description: '是否带有纵向边框',
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
      name: 'size',
      description: 'Table 的尺寸',
      children: [
        {
          name: 'medium',
        },
        {
          name: 'small',
        },
        {
          name: 'mini',
        }
      ]
    },
    {
      name: 'fit',
      description: '列的宽度是否自撑开',
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
      name: 'show-header',
      description: '是否显示表头',
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
      name: 'highlight-current-row',
      description: '是否要高亮当前行',
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
      name: 'current-row-key',
      description: '当前行的 key，只写属性, The type is String/Number',
      type: 'blank'
    },
    {
      name: 'row-class-name',
      description: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className, The type is Function({row, rowIndex})/String',
      type: 'blank'
    },
    {
      name: 'row-style',
      description: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 style, The type is Function({row, rowIndex})/Object',
      type: 'blank'
    },
    {
      name: 'cell-class-name',
      description: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className, The type is Function({row, column, rowIndex, columnIndex})/String',
      type: 'blank'
    },
    {
      name: 'cell-style',
      description: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 style, The type is Function({row, column, rowIndex, columnIndex})/Object',
      type: 'blank'
    },
    {
      name: 'header-row-class-name',
      description: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className, The type is Function({row, rowIndex})/String',
      type: 'blank'
    },
    {
      name: 'header-row-style',
      description: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 style, The type is Function({row, rowIndex})/Object',
      type: 'blank'
    },
    {
      name: 'header-cell-class-name',
      description: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className, The type is Function({row, column, rowIndex, columnIndex})/String',
      type: 'blank'
    },
    {
      name: 'header-cell-style',
      description: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 style, The type is Function({row, column, rowIndex, columnIndex})/Object',
      type: 'blank'
    },
    {
      name: 'row-key',
      description: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function, The type is Function(row)/String',
      type: 'blank'
    },
    {
      name: 'show-empty-image',
      description: '空数据时显示的装饰图片，通过 slot="empty" 插槽方法定义空数据时，此设置无效, The type is Boolean',
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
      name: 'empty-text',
      description: '空数据时显示的文本内容，也可以通过 slot="empty" 设置, The type is String',
      type: 'blank'
    },
    {
      name: 'default-expand-all',
      description: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效, The type is Boolean',
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
      name: 'expand-row-keys',
      description: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组, The type is Array',
      type: 'blank'
    },
    {
      name: 'default-sort',
      description: '默认的排序列的 prop 和顺序。它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序, The type is Object',
      type: 'blank'
    },
    {
      name: 'tooltip-effect',
      description: 'tooltip effect 属性, The type is String',
      children: [
        {
          name: 'dark',
        },
        {
          name: 'light',
        }
      ]
    },
    {
      name: 'show-summary',
      description: '是否在表尾显示合计行, The type is Boolean',
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
      name: 'sum-text',
      description: '合计行第一列的文本, The type is String',
      type: 'blank'
    },
    {
      name: 'summary-method',
      description: '自定义的合计计算方法, The type is Function({ columns, data })',
      type: 'blank'
    },
    {
      name: 'span-method',
      description: '合并行或列的计算方法, The type is Function({ row, column, rowIndex, columnIndex })',
      type: 'blank'
    },
    {
      name: 'select-on-indeterminate',
      description: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行, The type is Boolean',
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
      name: 'indent',
      description: '展示树形数据时，树节点的缩进, The type is Number',
      type: 'blank'
    },
    {
      name: 'lazy',
      description: '是否懒加载子节点数据, The type is Boolean',
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
      name: 'load',
      description: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息, The type is Function(row, treeNode, resolve)',
      type: 'blank'
    },
    {
      name: 'tree-props',
      description: '渲染嵌套数据的配置选项, The type is Object',
      type: 'blank'
    },
    {
      name: 'init-displayed-column',
      description: '初始展示的列，和列的 prop 对应，所以创建列的时候需要为每个列指定 prop，当用户操作设置选择列后，前端会存储下来，所以你要为每个表格指定唯一的 key，比如是 user 表格业务，key 可以是 user。如果不想使用前端存储的列，则可以配置 useStorage 为 false，该值默认为 true, The type is Object',
      type: 'blank'
    },
    {
      name: 'sticky-bar',
      description: '底部滚动条是否需要 sticky, The type is Boolean',
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
      name: 'sticky-header',
      description: 'header 是否需要 sticky，当配置为 Object 的时候，可以配置 offset 设置距离顶部距离, The type is Boolean,Object',
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
      name: 'force-expand',
      description: '是否强制展开列, The type is Boolean,Object',
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
      name: 'aria-label',
      description: '给 Table 表格配置 aria-label, The type is String',
      type: 'blank'
    },
    {
      name: 'use-memo',
      description: '优化数据量大、非分页且带有 checkbox 选中交互表格的更新渲染性能，必须配合 row-key 使用, The type is Boolean',
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
      name: 'show-header-when-no-data',
      description: '当数据为空时，仍然展示 header, The type is Boolean',
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
      name: 'determine-tooltip',
      description: '确定 tooltip 字符串展示的位置, The type is String',
      type: 'blank'
    },
    {
      name: 'use-grid',
      description: '是否用表格的 AX, The type is Boolean',
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
      name: 'use-flip',
      description: '是否翻转表格, The type is Boolean',
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
      name: 'adjust-column',
      description: '是否调整列宽, The type is Boolean, Object',
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
      name: 'data-fixed-scrolling-position',
      description: '数据变化会固定滚动位置, The type is Boolean',
      children: [
        {
          name: 'true',
        },
        {
          name: 'false',
        }
      ]
    },
  ]
}