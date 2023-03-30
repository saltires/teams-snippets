export default  {
  name: 'AsStatus',
  id: 'AsStatus',
  description: 'AsStatus',
  children: [
    {
      name: 'mode',
      description: 'The shape displayed by the Status component, The optional values are "tab" | "default"',
      children: [
        {
          name: 'tab',
        },
        {
          name: 'default',
        }
      ]
    },
    {
      name: 'status',
      description: 'The color of the Status component to indicate different states, The optional values are "success" | "warning" | "error" | "primary" | "info"',
      children: [
        {
          name: 'success',
        },
        {
          name: 'warning',
        },
        {
          name: 'error',
        },
        {
          name: 'primary',
        },
        {
          name: 'info',
        }
      ]
    },
    {
      name: 'popoverText',
      description: 'Hover the mouse over the display of the prompt text, The value type is String',
      type: 'blank'
    }
  ]
}