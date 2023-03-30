export default {
  name: 'zm-button',
  id: 'zm-button',
  description: 'zm-button',
  children: [
    {
      name: 'size',
      description: '尺寸, The type is string, The default is small',
      children: [
        {
          name: 'mini',
        },
        {
          name: 'large',
        },
        {
          name: 'small',
        }
      ]
    },
    {
      name: 'type',
      description: '类型, The type is string',
      children: [
        {
          name: 'primary',
        },
        {
          name: 'danger',
        },
        {
          name: 'plain',
        }, 
        {
          name: 'link',
        },
        {
          name: 'icon',
        },
      ]
    },
    {
      name: 'href',
      description: '超链接地址（渲染成a 标签 而非 button）, The type is string/number',
      type: 'blank'
    },
    {
      name: 'target',
      description: '超链接打开方式（只对超链接有效）, The type is string',
      children: [
        {
          name: '_self',
        },
        {
          name: '_blank',
        },
      ]
    },
    {
      name: 'plain',
      description: '是否朴素按钮, The Type is Boolean, The default is false',
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
      name: 'ghost',
      description: '是否是幽灵按钮（没有边框和背景）, The Type is Boolean, The default is false',
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
      name: 'round',
      description: '是否圆角按钮, The Type is Boolean, The default is false',
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
      name: 'circle',
      description: '是否圆形按钮, The Type is Boolean, The default is false',
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
      name: 'loading',
      description: '是否加载中状态, The Type is Boolean, The default is false',
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
      name: 'disabled',
      description: '是否禁用状态, The Type is Boolean, The default is false',
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
      name: 'icon',
      description: '图标类名, The Type is String, The default is null',
      type: 'blank'
    },
    {
      name: 'aria-label',
      description: '按钮聚焦时屏幕阅读器读的内容（icon 形式的 button 时 必须配置该属性）, The Type is String, The default is null',
      type: 'blank'
    },
    {
      name: 'native-type',
      description: '原生 type 属性, The Type is String, The default is button',
      children: [
        {
          name: 'button',
        },
        {
          name: 'submit',
        },
        {
          name: 'reset',
        }
      ]
    },
  ]
}