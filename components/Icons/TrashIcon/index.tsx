import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

export const TrashIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_3341_88)">
        <Path
          d="M16 31.5C24.5604 31.5 31.5 24.5604 31.5 16C31.5 7.43959 24.5604 0.5 16 0.5C7.43959 0.5 0.5 7.43959 0.5 16C0.5 24.5604 7.43959 31.5 16 31.5Z"
          stroke="#021123"
        />
        <G clip-path="url(#clip1_3341_88)">
          <Path
            d="M19.2814 7.92969H22.5189V9.83333H9.48145V7.92969H12.7189L13.6814 7H18.3189L19.2814 7.92969ZM12.2814 12.6667V22.0963H19.7189V12.6667H12.2814ZM10.4002 22.0963V10.763H21.6002V22.0963C21.6002 22.5981 21.4106 23.0408 21.0314 23.4245C20.6523 23.8082 20.2148 24 19.7189 24H12.2814C11.7856 24 11.3481 23.8082 10.9689 23.4245C10.5898 23.0408 10.4002 22.5981 10.4002 22.0963Z"
            fill="#021123"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_3341_88">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
        <ClipPath id="clip1_3341_88">
          <Rect width="14" height="17" fill="white" transform="translate(9 7)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
