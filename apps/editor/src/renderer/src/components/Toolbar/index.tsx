import { BoxIcon, Button, Dropdown } from '@elixira/ui/src/components/'
import { colorStyles } from '@elixira/ui/src/components/StyleGuide'
import { useEffect, useState } from 'react'

export const Toolbar = () => {
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
    <>
      {toolbarItems.map((item, index) => (
        <div key={index}>
          <Button
            index={index}
            onClick={() => setSelected(index === selected ? null : index)}
            padding="sm"
            backgroundColor="toggledOff"
            hoverBackgroundColor="toggledOn"
            clickedBackgroundColor="toggledOn"
            shadowStrength="none"
            rounded="md"
            clicked={selected === index}
          >
            {item.icon}
          </Button>
          <div className="mt-5 absolute ml-[-65px]">
            {selected === index && (
              <Dropdown
                backgroundColor="rgba(189, 66, 255, 0.7)"
                buttonBackgroundColor={colorStyles.toggledOff}
                hoverBackgroundColor={colorStyles.toggledOn}
                items={[
                  {
                    icon: <BoxIcon color="white" />,
                    label: 'Add cube',
                    onClick: () => console.log('Add cube')
                  },
                  {
                    icon: <BoxIcon color="white" />,
                    label: 'Add sphere',
                    onClick: () => console.log('Add sphere')
                  }
                ]}
              />
            )}
          </div>
        </div>
      ))}
    </>
  )
}
