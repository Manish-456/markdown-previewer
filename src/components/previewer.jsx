import React from 'react'
import { Header } from './header'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export function Previewer({value, handleEditorMode, isEditorOn}) {
  return (
    <div className='md:max-w-2xl flex flex-col shadow-black shadow-xl border border-black max-w-xl w-full'>
    <Header title={"Preview"} isExpanded={!isEditorOn} handleExpansion={handleEditorMode}/>
    <div id='preview' className={`px-2  bg-editor ${!isEditorOn ? "min-h-screen" : "min-h-64"}`}>
      <Markdown 
      children={value}
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const {children, className, node, ...rest} = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        )
      }
    }}
      />
    </div>
</div>
  )
}
