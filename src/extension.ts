// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { eventNames, tagNames, attrs, directives } from './data'
import {
	getTagAtPosition,
	getAttrCompletionArr,
	getAttrValueCompletionArr
} from './util'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const completion = vscode.languages.registerCompletionItemProvider(
		['javascript', 'xml', 'vue'],
		{
			provideCompletionItems(
				document, // 命令被调用的文档
				position, // 命令被调用的位置
				token, // 取消令牌
				context // 自动补全是怎么触发的
			) {
				// 如果校验命中了取消令牌，就不提示
				if (token.isCancellationRequested) {
					return Promise.resolve([])
				}

				let char = context.triggerCharacter
				switch (char) {
					case '<': // 标签名提示
						// todo
						return handleTagSnippets()
					case '@': // 绑定事件
						// todo
						let tag1 = getTagAtPosition(document, position)
						if (!tag1) {
							return null
						}

						const targetObj1 = eventNames.find(x => x.name === tag1?.name)
						if (targetObj1 && targetObj1.children) {
							return handleEventSnippets(targetObj1.children)
						}
						return null
					default: // 属性名、属性值等
						// todo
						let tag = getTagAtPosition(document, position)
						if (!tag) {
							return null
						}

						const targetObj = attrs.find(x => x.name === tag?.name)
						// 属性值提示
						if (tag.isOnAttrValue && targetObj && targetObj.children) {
							return getAttrValueCompletionArr(tag.attrName || '', targetObj?.children)
						} else {
							const x = handleDirectiveSnippets()
							const y = targetObj && targetObj.children ? getAttrCompletionArr(targetObj?.children) : []
							return [...x, ...y]
						}
				}
			}
		},
		'-',
		'@',
		'\n',
		' ',
		'"',
		"'",
		'<',
	)

	context.subscriptions.push(completion)
}

function handleTagSnippets() {
	return tagNames.map(i => {
		const { template, name, description } = i
		const commandCompletion = new vscode.CompletionItem(name)
		commandCompletion.kind = vscode.CompletionItemKind.Field
		commandCompletion.documentation = new vscode.MarkdownString(description)
		commandCompletion.insertText = new vscode.SnippetString(template)
		return commandCompletion
	})
}

function handleEventSnippets(eventNames: any) {
	if (eventNames && eventNames.length > 0) {
		const arr = []

		for (let i = 0; i < eventNames.length; i++) {
			const item = eventNames[i]
			const commandCompletion = new vscode.CompletionItem('Event: '+ item.name)
			commandCompletion.kind = vscode.CompletionItemKind.Method
			commandCompletion.documentation = new vscode.MarkdownString(item.desc || 'desc')
			let snippet = `${item.name}="handleEvent"`

			commandCompletion.insertText = new vscode.SnippetString(snippet)
			arr.push(commandCompletion)
		}
		return arr
	}
	return []
}

function handleDirectiveSnippets() {
	return directives.map(i => {
		const { name, desc, type = '' } = i
		const template = type === '' ? `${name}=` + '"${0:test}"' : `${name}`
		const commandCompletion = new vscode.CompletionItem(name)
		commandCompletion.kind = vscode.CompletionItemKind.Field
		commandCompletion.documentation = new vscode.MarkdownString(desc)
		commandCompletion.insertText = new vscode.SnippetString(template)
		return commandCompletion
	})
}


// This method is called when your extension is deactivated
export function deactivate() { }
