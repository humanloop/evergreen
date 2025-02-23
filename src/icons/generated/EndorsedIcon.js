import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15.86 7.5l-.81-1.42V4.5c0-.36-.19-.68-.49-.87l-1.37-.8-.81-1.41c-.19-.31-.51-.49-.86-.49H9.89L8.5.14a.948.948 0 00-1 0l-1.39.8H4.52a1 1 0 00-.86.49l-.8 1.37-1.44.83c-.3.19-.49.51-.49.87v1.65l-.8 1.37c-.08.15-.13.32-.13.49s.05.34.14.49l.8 1.37v1.65c0 .36.19.68.49.87l1.42.81.8 1.37c.19.31.51.49.86.49H6.1l1.39.8c.15.09.32.14.48.14s.34-.05.49-.14l1.39-.8h1.63a1 1 0 00.86-.49l.81-1.41 1.37-.8c.3-.19.49-.51.49-.87V9.93l.81-1.42a.89.89 0 00.04-1.01zm-4.12-.82l-4.01 4.01c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-2-2c-.18-.19-.3-.44-.3-.71a1.003 1.003 0 011.71-.71l1.3 1.3 3.3-3.3a1.003 1.003 0 011.71.71.95.95 0 01-.29.7z'
]
const svgPaths20 = [
  'M19.83 9.38L18.81 7.6V5.62c0-.45-.23-.85-.61-1.08l-1.71-1-1.02-1.76a1.25 1.25 0 00-1.08-.61h-2.03l-1.74-1c-.38-.23-.87-.23-1.25 0l-1.74 1H5.65c-.44 0-.85.23-1.08.61L3.58 3.5l-1.8 1.04c-.38.24-.62.64-.62 1.08v2.06L.17 9.4c-.11.19-.17.4-.17.61s.06.42.17.61l.99 1.72v2.06c0 .45.23.85.61 1.08l1.78 1.02.99 1.72c.23.38.63.61 1.08.61h1.99l1.74 1c.19.11.41.17.62.17.21 0 .42-.06.61-.17l1.74-1h2.03c.44 0 .85-.23 1.08-.61l1.02-1.76 1.71-1c.38-.23.61-.64.61-1.08v-1.97l1.02-1.78c.27-.38.27-.85.04-1.25zm-5.08-.71l-5.01 5.01c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29l-3.01-3.01a1.003 1.003 0 011.42-1.42l2.3 2.3 4.31-4.3a1.003 1.003 0 011.71.71c0 .28-.12.53-.3.71z'
]

export const EndorsedIcon = memo(
  forwardRef((props, ref) => (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      name="endorsed"
      {...props}
    />
  ))
)
