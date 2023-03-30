export default {
  name: 'AsCodeEditor',
  id: 'AsCodeEditor',
  description: 'AsCodeEditor',
  children: [
    {
      name: 'input',
      id: 'input',
      desc: 'value input'
    },
    {
      name: 'change',
      id: 'change',
      desc: 'value change'
    },
    {
      name: 'focus',
      id: 'focus',
      desc: 'Fires whenever the editor is focused.'
    },
    {
      name: 'blur',
      id: 'blur',
      desc: 'Fires whenever the editor is unfocused.'
    },
    {
      name: 'scroll',
      id: 'scroll',
      desc: 'Fires when the editor is scrolled.'
    },
    {
      name: 'refresh',
      id: 'scroll',
      desc: 'Fires when the editor is refreshed or resized. Mostly useful to invalidate cached values that depend on the editor or character size.'
    }
  ]
}