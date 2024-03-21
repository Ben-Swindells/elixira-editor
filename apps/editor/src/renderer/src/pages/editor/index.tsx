import { GlassPanel, Button, BoxIcon } from '@elixira/ui/src/components/'
import { useEffect, useState } from 'react'

type EditorProps = {}

export const Editor = ({}: EditorProps) => {
  const [selected, setSelected] = useState<number | null>(null)
  const toolbarItems = [
    {
      icon: <BoxIcon color="white" />
    },
    {
      icon: <BoxIcon color="white" />
    }
  ]
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest('button')) {
        setSelected(null)
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-[60px]">
          <GlassPanel rounded={false} shadowStrength="lg">
            <div className="flex justify-center items-center group-hover:bg-black">
              {toolbarItems.map((item, index) => (
                <Button
                  key={index}
                  index={index}
                  padding="sm"
                  backgroundColor="toggledOff"
                  hoverBackgroundColor="toggledOn"
                  clickedBackgroundColor="toggledOn"
                  shadowStrength="none"
                  rounded="md"
                  clicked={selected === index}
                  onClick={(index) => {
                    setSelected(index === selected ? null : index)
                  }}
                >
                  {item.icon}
                </Button>
              ))}
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
