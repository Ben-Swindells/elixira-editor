import { GlassPanel } from '@elixira/ui/src/components/'
import { Toolbar } from '../../components/Toolbar'

type EditorProps = {}

export const Editor = ({}: EditorProps) => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-[60px]">
          <GlassPanel rounded={false} shadowStrength="lg">
            <div className="flex justify-center items-center group-hover:bg-black">
              <Toolbar />
            </div>
          </GlassPanel>
        </div>
        <div className="flex flex-row w-full h-full">
          <div className="w-[350px] h-full">
            <GlassPanel rounded={false} padding="sm"></GlassPanel>
          </div>
          <div className="h-6/12 w-full"></div>
          <div className="w-[350px] h-full">
            <GlassPanel rounded={false} padding="sm"></GlassPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
