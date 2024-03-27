import { GlassPanel } from '@elixira/ui/src/components/'
import { Toolbar } from '../../components/Toolbar'
import { GameWindow } from '@renderer/components/GameWindow'
import { OrbitControls } from '@react-three/drei'

type EditorProps = {}

export const Editor = ({}: EditorProps) => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-full h-full flex flex-col">
      <div className="w-full h-[60px]">
        <GlassPanel rounded={false} shadowStrength="lg">
          <div className="flex justify-center items-center group-hover:bg-black">
            <Toolbar />
          </div>
        </GlassPanel>
      </div>
      <div className="flex flex-row w-full h-full relative">
        <div className="flex-none w-[300px] h-full">
          <GlassPanel rounded={false} padding="sm"></GlassPanel>
        </div>
        <div className="grow flex-auto w-full h-full overflow-hidden">
          <GameWindow>
            <gridHelper />
            <OrbitControls />
          </GameWindow>
        </div>
        <div className="flex-none w-[300px] h-full">
          <GlassPanel rounded={false} padding="sm"></GlassPanel>
        </div>
      </div>
    </div>
  )
}
