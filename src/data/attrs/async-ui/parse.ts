export default  {
  name: 'AsParse',
  id: 'AsParse',
  description: 'AsParse',
  children: [
    {
      name: 'dialogPlaceholder',
      description: 'The description in input of dialog, The value type is String, default is "copy or input to parse"',
      type: 'blank'
    },
    {
      name: 'height',
      description: 'The height of as-parse, The value type is String, default is "auto"',
      type: 'blank'
    },
    {
      name: 'icon',
      description: 'Which icon do you want show, The value type is String, default is "zm-icon-upload-alt"',
      type: 'blank'
    },
    {
      name: 'iconSize',
      description: 'The size of icon, The value type is Number, default is "16"',
      type: 'blank'
    },
    {
      name: 'iconColor',
      description: 'The color of icon, The value type is String, default is "inherit"',
      type: 'blank'
    },
    {
      name: 'tips',
      description: 'Use tooltip, The value type is String/Object, default is null',
      type: 'blank'
    },
    {
      name: 'uploadFn',
      description: 'Upload data function, default is null',
      type: 'blank'
    },
    {
      name: 'width',
      description: 'Width of as-parse, The value type is String, default is "auto"',
      type: 'blank'
    }
  ]
}