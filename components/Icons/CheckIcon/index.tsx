import { theme } from '@/theme'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

interface CheckIconProps {
  checked: boolean
}

export const CheckIcon = ({ checked }: CheckIconProps) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_3341_81)">
        <Path
          d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z"
          fill={checked ? theme.colors.green500 : theme.colors.white}
          stroke="#021123"
        />
        <Path
          d="M12.3467 20.6434L24.4001 8L26 9.67833L12.3467 24L6 17.3426L7.59999 15.6643L12.3467 20.6434Z"
          fill="#021123"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3341_81">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
