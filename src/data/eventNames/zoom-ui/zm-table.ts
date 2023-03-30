export default {
  name: 'zm-table',
  id: 'zm-table',
  description: 'zm-table',
  children: [
    {
      name: 'select',
      id: 'select',
      desc: '当用户手动勾选数据行的 Checkbox 时触发的事件, 参数: selection, row'
    },
    {
      name: 'select-all',
      id: 'select-all',
      desc: '当用户手动勾选全选 Checkbox 时触发的事件, 参数: selection'
    },
    {
      name: 'selection-change',
      id: 'selection-change',
      desc: '当选择项发生变化时会触发该事件, 参数: selection'
    },
    {
      name: 'cell-mouse-enter',
      id: 'cell-mouse-enter',
      desc: '当单元格 hover 进入时会触发该事件, 参数: row, column, cell, event'
    },
    {
      name: 'cell-mouse-leave',
      id: 'cell-mouse-leave',
      desc: '当单元格 hover 退出时会触发该事件, 参数: row, column, cell, event'
    },
    {
      name: 'cell-click',
      id: 'cell-click',
      desc: '当某个单元格被点击时会触发该事件, 参数: row, column, cell, event'
    },
    {
      name: 'cell-dblclick',
      id: 'cell-dblclick',
      desc: '当某个单元格被双击击时会触发该事件, 参数: row, column, cell, event'
    },
    {
      name: 'row-click',
      id: 'row-click',
      desc: '当某一行被点击时会触发该事件, 参数: row, column, event'
    },
    {
      name: 'row-contextmenu',
      id: 'row-contextmenu',
      desc: '当某一行被鼠标右键点击时会触发该事件, 参数: row, column, event'
    },
    {
      name: 'row-dblclick',
      id: 'row-dblclick',
      desc: '当某一行被双击时会触发该事件, 参数: row, column, event'
    },
    {
      name: 'header-click',
      id: 'header-click',
      desc: '当某一列的表头被点击时会触发该事件, 参数: column, event'
    },
    {
      name: 'header-contextmenu',
      id: 'header-contextmenu',
      desc: '当某一列的表头被鼠标右键点击时触发该事件, 参数: column, event'
    },
    {
      name: 'sort-change',
      id: 'sort-change',
      desc: '当表格的排序条件发生变化的时候会触发该事件, 参数: { column, prop, order }'
    },
    {
      name: 'filter-change',
      id: 'filter-change',
      desc: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组, 参数: filters'
    },
    {
      name: 'current-change',
      id: 'current-change',
      desc: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性, 参数: currentRow, oldCurrentRow'
    },
    {
      name: 'header-change',
      id: 'header-change',
      desc: '当拖动表头改变了列的宽度的时候会触发该事件, 参数: newWidth, oldWidth, column, event'
    },
    {
      name: 'expand-change',
      id: 'expand-change',
      desc: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）, 参数: row, (expandedRows | expanded)'
    },
    {
      name: 'drag-end',
      id: 'drag-end',
      desc: '当用户拖拽完成某行时会触发该事件，必须配置拖拽列, 参数: value'
    }
  ]
}