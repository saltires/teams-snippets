import * as vscode from 'vscode'

function getTagAtPosition(doc: any, pos: any) {
  let offset = doc.offsetAt(pos)
  let text = doc.getText()
  // 因为引号里可能会有任何字符，所以做一层替换处理
  let attrFlagText = text.replace(/("[^"]*"|'[^']*')/g, replacer('%'))

  // 标签起始位置 [start,length]
  const range = getBracketRange(attrFlagText, offset)

  if (!range) {
    return null
  }
  const [start, end] = range
  offset = offset - start
  text = text.substr(start, end)
  attrFlagText = attrFlagText.substr(start, end)

  const tagNameMatcher = attrFlagText.match(/^<([\w-:.]+)/)
  if (!tagNameMatcher) {
    return null
  }
  const name = tagNameMatcher[1] // 标签名称

  const isOnAttrValue = attrFlagText[offset] === '%'
  const attrName = isOnAttrValue ? getAttrName(attrFlagText.substring(0, offset)) : '' // 当前输入对应的属性
  const isOnTagName = offset <= name.length + 1

  const isOnAttrName = !isOnTagName && !isOnAttrValue

  return {
    name,            // 标签名
    attrName,        // 属性名
    isOnTagName,     // 是否处于 tag 上
    isOnAttrName,    // 是否处于属性名上
    isOnAttrValue,   // 是否处于属性值上
  }
}

function getAttrName(str: string) {
  if (/\s([\w-:.]+)=%*$/.test(str)) {
    return RegExp.$1
  }
  return ''
}

// 字符替换的方法
const replacer = (char: string) => (raw: string) => char.repeat(raw.length)

// 获取 <> 标签的位置
function getBracketRange(text: any, pos: any) {
  const textBeforePos = text.substr(0, pos)
  const startBracket = textBeforePos.lastIndexOf('<')
  if (startBracket < 0 || textBeforePos[startBracket + 1] === '!' || textBeforePos.lastIndexOf('>') > startBracket) {
    // 前没有开始符<，
    // 或者正在注释中： <!-- | -->
    // 或者不在标签中： <view > | </view>
    return null
  }
  // 从光标位置后面找 > 标签
  let endBracket = text.indexOf('>', pos + 1)
  if (endBracket < 0) {
    // 未找到闭合 > 文件结束位置为结束
    // 如 <image ... | EOF
    endBracket = text.length
  }

  // 可能尚未输入闭合标签，取下一个标签的头<
  // 此时找到的闭合标签是下一个标签
  // <view xxx | ... <view ></view>
  const nextStart = text.indexOf('<', pos + 1)
  if (nextStart > 0 && nextStart < endBracket) {
    endBracket = nextStart
  }
  return [startBracket, endBracket - startBracket]
}

function getAttrCompletionArr(completionArr: any) {
  const arr = []
  if (completionArr.length > 0) {
    for (let j = 0; j < completionArr.length; j++) {
      const item = completionArr[j]
      const { name, type = '', description = '' } = item
      if (item && name) {
        const commandCompletion = new vscode.CompletionItem(name)
        commandCompletion.kind = vscode.CompletionItemKind.Field
        commandCompletion.documentation = new vscode.MarkdownString(description)
        
        if (type === 'blank') {
          commandCompletion.insertText = new vscode.SnippetString(name + '="${5:test}"')
        }

        arr.push(commandCompletion)
      }
    }
  }
  return arr
}

function getAttrValueCompletionArr(attrName: any, completionArr: any) {
  const enumValue = completionArr.find((item: any) => item.name === attrName) || {}

  if (enumValue.children && enumValue.children.length > 0) {
    const arr = []
    for (let i = 0; i < enumValue.children.length; i++) {
      const commandCompletion = new vscode.CompletionItem(enumValue.children[i].name)
      commandCompletion.documentation = new vscode.MarkdownString(enumValue.children[i].name)
      commandCompletion.kind = vscode.CompletionItemKind.EnumMember
      commandCompletion.insertText = new vscode.SnippetString(enumValue.children[i].name + '"')
      arr.push(commandCompletion)
    }
    return arr
  }

  return []
}

export {
  getTagAtPosition,
  getAttrCompletionArr,
  getAttrValueCompletionArr
}