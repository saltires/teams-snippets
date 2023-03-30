export const tagNames = [
  {
    name: 'zm-select(single)',
    id: 'zm-select(single)',
    description: 'zm-select single mode',
    template: `zm-select\n` +
      '  v-model="${0:testValue}"\n' +
      '  placeholder="${1:Please Select}"\n' +
      '>\n' +
      '    <zm-option\n' +
      '     v-for="item in ${2:testOptions}"\n' +
      '     :key="${3:item.value}"\n' +
      '     :label="${4:item.label}"\n' +
      '     :value="${5:item.value}">\n' +
      '    </zm-option>\n' +
      `</zm-select>`
  },
  {
    name: 'zm-select(multi)',
    id: 'zm-select(multi)',
    description: 'zm-select multi mode',
    template: `zm-select\n` +
      '  v-model="${0:testValue}"\n' +
      '  multiple\n' +
      '  placeholder="${1:Please Select}"\n' +
      '  :multiple-limit="${2:3}"\n' +
      '  label="${3:multiple select demo}"\n' +
      '  :checkbox-options="${4:options}"\n' +
      '>\n' +
      `</zm-select>`
  },
  {
    name: 'zm-input-number',
    id: 'zm-input-number',
    description: 'zm-input-number',
    template: `zm-input-number\n` +
      '  v-model="${0:num1}"\n' +
      '  :min="${1:1}"\n' +
      '  :max="${2:10}"\n' +
      '  label="${3:description text}"\n' +
      '  @change="${4:handleChange}"\n' +
      '>\n' +
      `</zm-input-number>`
  },
  {
    name: 'AsStatus',
    id: 'AsStatus',
    description: 'AsStatus',
    template: `AsStatus\n` +
      '  popoverText="${0:SUCCESS}"\n' +
      '  status="${1:success}">\n' +
      `</AsStatus>`
  },
  {
    name: 'AsTimeRange',
    id: 'AsTimeRange',
    description: 'AsTimeRange',
    template: `AsTimeRange\n` +
      '  ref="${0:timeRange}"\n' +
      '  class="${1:mgt-md mgb-md}"\n' +
      '  v-model="${2:timeVal}"\n' +
      '  :timezone.sync="${3:timezone}"\n' +
      '  businessKey="${4:timerange1}"\n' +
      '  @change="${5:timeValChange}"\n' +
      '>\n' +
      `</AsTimeRange>`
  },
  {
    name: 'ASTableColumnListPopover',
    id: 'ASTableColumnListPopover',
    description: 'ASTableColumnListPopover',
    template: `ASTableColumnListPopover\n` +
      '  :data="${0:row.names || []}">\n' +
      `</ASTableColumnListPopover>`
  },
  {
    name: 'AsRuleMap',
    id: 'AsRuleMap',
    description: 'AsRuleMap',
    template: `AsRuleMap\n` +
      '  v-model="${0:form.conditions}"\n' +
      '  :rules="${1:conditionRules}"\n' +
      '  :showLabel="${2:false}"\n' +
      '>\n' +
      `</AsRuleMap>`
  },
  {
    name: 'AsCodeEditor',
    id: 'AsCodeEditor',
    description: 'AsCodeEditor',
    template: `AsCodeEditor\n` +
      '  v-model="${0:filedMap}"\n' +
      '  ref="${1:jsonEditor}"\n' +
      '  @change="${2:change}"\n' +
      '>\n' +
      `</AsCodeEditor>`
  },
  {
    name: 'AsInfiniteScroll',
    id: 'AsInfiniteScroll',
    description: 'AsInfiniteScroll',
    template: `AsInfiniteScroll\n` +
      '  :data="${0:list}"\n' +
      '  :api="${1:load}"\n' +
      '  rowKey="${2:value}"\n' +
      '  height="${3:200px}"\n' +
      '  :noMore="${4:list.length > 12}"\n' +
      '>\n' +
      '   <template v-slot="{ item }">\n' +
      '    <span>The value of this column is {{ item.value }}</span>\n' +
      '   </template>\n' +
      `</AsInfiniteScroll>`
  },
  {
    name: 'AsParse',
    id: 'AsParse',
    description: 'AsParse',
    template: `AsParse` +
      ' :uploadFn="${0:uploadFn}">' +
      `</AsParse>`
  },
  {
    name: 'AsUnitConvert',
    id: 'AsUnitConvert',
    description: 'AsUnitConvert',
    template: `AsUnitConvert` +
      ' value="${0:testValue}">' +
      `</AsUnitConvert>`
  },
  {
    name: 'as-menu',
    id: 'as-menu',
    description: 'as-menu',
    template: `as-menu` +
      ' :menuConfig="${0:menuConfig}">' +
      `</as-menu>`
  }
]