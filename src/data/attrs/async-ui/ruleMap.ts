export default {
  name: 'AsRuleMap',
  id: 'AsRuleMap',
  description: 'AsRuleMap',
  children: [
    {
      name: 'value',
      description: 'binding value (v-model), The type of value is Array',
      type: 'blank'
    },
    {
      name: 'showLabel',
      description: 'whether to display the title of each item form, The type of value is Boolean',
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
      name: 'rules',
      description: 'the custom form item configuration, The type of value is Array[RuleObject]',
      type: 'blank'
    }
  ]
}