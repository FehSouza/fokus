import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

export const EditIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_3341_77)">
        <Path
          d="M16 31.5C24.5604 31.5 31.5 24.5604 31.5 16C31.5 7.43959 24.5604 0.5 16 0.5C7.43959 0.5 0.5 7.43959 0.5 16C0.5 24.5604 7.43959 31.5 16 31.5Z"
          stroke="#021123"
        />
        <Path
          d="M23.75 11.5833L22.125 13.2084L18.7916 9.875L20.4167 8.25C20.5833 8.08333 20.7916 8 21.0417 8C21.2916 8 21.5 8.08333 21.6667 8.25L23.75 10.3333C23.9166 10.5 24 10.7084 24 10.9583C24 11.2084 23.9166 11.4167 23.75 11.5833ZM8 20.6667L17.8333 10.8333L21.1667 14.1667L11.3333 24H8V20.6667Z"
          fill="#021123"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3341_77">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
