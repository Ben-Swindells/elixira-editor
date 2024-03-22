import { Canvas } from '@react-three/fiber'

export type GameWindowProps = {
  children: React.ReactNode
}

export const GameWindow = ({ children }: GameWindowProps) => {
  return <Canvas>{children}</Canvas>
}
