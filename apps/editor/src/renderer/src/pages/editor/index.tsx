import { GlassPanel } from '@elixira/ui/src/components/GlassPanel'

type EditorProps = {}

export const Editor = ({}: EditorProps) => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-[60px]">
          <GlassPanel rounded={false} backgroundColor="black" opacity={0.3} shadowStrength="lg" />
        </div>
        <div className="flex flex-row w-full h-full">
          <div className="w-[350px] h-full">
            <GlassPanel
              rounded={false}
              padding="sm"
              opacity={0.3}
              backgroundColor={'black'}
            ></GlassPanel>
          </div>
          <div className="h-6/12 w-full"></div>
          <div className="w-[350px] h-full">
            <GlassPanel
              rounded={false}
              padding="sm"
              opacity={0.3}
              backgroundColor={'black'}
            ></GlassPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
