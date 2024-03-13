import { useState } from 'react'
import { Editor } from './components/editor'
import { Previewer } from './components/previewer'
import { MARKDOWN_VALUE } from './constants'

export default function App() {
  const [value, setValue] = useState(MARKDOWN_VALUE);
  const [isEditorOn, setIsEditorOn] = useState(true);
  const [isPreviewerOn, setIsPreviewerOn] = useState(true);

  const handlePreviewerMode = () => setIsPreviewerOn(prev => !prev);
  const handleEditorMode = () => setIsEditorOn(prev => !prev);
  
  const setMarkDownValue = (md_value) => setValue(md_value)
  return (
    <div className='py-4  min-h-screen bg-primary'> 
    <div className='flex flex-col space-y-8 items-center '>
      {
        isEditorOn && (
          <Editor value={value} setMarkDownValue={setMarkDownValue} isPreviewerOn={isPreviewerOn} handlePreviewerMode={handlePreviewerMode}/>
        )
      }
      {
        isPreviewerOn && (
          <Previewer value={value} isEditorOn={isEditorOn} handleEditorMode={handleEditorMode} />
        )
      }
    </div>
    </div>
  )
}
