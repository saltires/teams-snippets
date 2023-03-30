export default  {
  name: 'AsInfiniteScroll',
  id: 'AsInfiniteScroll',
  description: 'AsInfiniteScroll',
  children: [
    {
      name: 'api',
      description: 'load API (required), type is Function',
      type: 'blank'
    },
    {
      name: 'data',
      description: 'data array (required), type is Array',
      type: 'blank'
    },
    {
      name: 'rowKey',
      description: 'the Key of the data item, temporarily supports the attribute key of the data item, type is String',
      type: 'blank'
    },
    {
      name: 'defaultActive',
      description: 'the key to activate the item, type is String | Number',
      type: 'blank'
    },
    {
      name: 'disableFn',
      description: 'function to determine whether to disable a data item, type is Function',
      type: 'blank'
    },
    {
      name: 'noMore',
      description: 'whether to display after all loading is complete',
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
      description: 'height, The type is String',
      type: 'blank'
    },
    {
      name: 'width',
      description: 'width, The type is String',
      type: 'blank'
    }
  ]
}