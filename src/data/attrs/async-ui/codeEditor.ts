export default {
  name: 'AsCodeEditor',
  id: 'AsCodeEditor',
  description: 'AsCodeEditor',
  children: [
    {
      name: 'value',
      description: 'Bound value, The type is [String, json Object]',
      type: 'blank'
    },
    {
      name: 'enableFold',
      description: 'enable json fold',
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
      name: 'options',
      description: 'CodeMirror options, overwrite the original, The type is Json Object',
      type: 'blank'
    },
    {
      name: 'height',
      description: 'height, The type is String',
      type: 'blank'
    },
    {
      name: 'minHeight',
      description: 'minHeight, The type is String',
      type: 'blank'
    },
    {
      name: 'maxHeight',
      description: 'maxHeight, The type is String',
      type: 'blank'
    },
  ]
}