export default {
  name: 'AsTimeRange',
  id: 'AsTimeRange',
  description: 'AsTimeRange',
  children: [
    {
      name: 'timezone',
      description: '时区, The type is String',
      type: 'blank'
    },
    {
      name: 'businessKey',
      description: 'recent/common中利用了浏览器缓存，如果有特殊的业务存储需求，可以设置；如果不设置，默认以format格式为key进行缓存',
      type: 'blank'
    }
  ]
}