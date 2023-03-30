export default  {
  name: 'AsUnitConvert',
  id: 'AsUnitConvert',
  description: 'AsUnitConvert',
  children: [
    {
      name: 'type',
      description: 'The type of unit, The optional values are "time" | "size"',
      children: [
        {
          name: 'time',
        },
        {
          name: 'size',
        }
      ]
    },
    {
      name: 'minUnit',
      description: 'The min unit (default show all unit), The optional values are ms/s/m/h/d/b/k/m/g "',
      children: [
        {
          name: 'ms',
        },
        {
          name: 's',
        },
        {
          name: 'm',
        },
        {
          name: 'h',
        },
        {
          name: 'd',
        },
        {
          name: 'b',
        },
        {
          name: 'k',
        },
        {
          name: 'm',
        },
        {
          name: 'g',
        }
      ]
    },
    {
      name: 'value',
      description: 'Init value, The value type is Number',
      type: 'blank'
    },
    {
      name: 'max',
      description: 'Max value, The value type is Number',
      type: 'blank'
    },
    {
      name: 'borderColor',
      description: 'Underline color, The value type is hex color, default is #0e71eb',
      type: 'blank'
    }
  ]
}