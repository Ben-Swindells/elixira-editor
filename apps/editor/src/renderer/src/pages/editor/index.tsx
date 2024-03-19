import { GlassPanel } from '@elixira/ui/src/components/GlassPanel'

type EditorProps = {}

export const Editor = ({}: EditorProps) => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row w-full h-full">
          <div className="w-3/12 h-full">
            <GlassPanel rounded={false} />
          </div>
          <div className="h-6/12 w-full"></div>
          <div className="w-3/12 h-full">
            <GlassPanel rounded={false} />
          </div>
        </div>
        <div className="w-full h-12">
          <GlassPanel rounded={false} />
        </div>
      </div>
    </div>
  )
}
