import styled from 'styled-components'
import { foldProp, propWithDefault } from '../../utils/styled-components'

type FlexKeywords = 'normal' | 'stretch'

type PartialPositionalAlignment = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end'

type PositionalAlignment = 'left' | 'right' | PartialPositionalAlignment

type BaselineAlignment = 'baseline' | 'first baseline' | 'last baseline'

type DistributedAlignment = 'space-between' | 'space-around' | 'space-evenly'

type OverflowAlignment = 'safe center' | 'unsafe center'

type Global = 'inherit' | 'initial' | 'revert' | 'unset'

type FlexDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse'

interface FlexProps {
  $align?: FlexKeywords | PartialPositionalAlignment | BaselineAlignment | OverflowAlignment | Global
  $justify?: FlexKeywords | PositionalAlignment | DistributedAlignment | OverflowAlignment | Global
  $direction?: FlexDirection | Global
  $fullsize?: boolean
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${propWithDefault('$direction', 'row')};
  justify-content: ${propWithDefault('$justify', 'center')};
  align-items: ${propWithDefault('$align', 'center')};
  ${foldProp("$fullsize",
    () => "",
    () => "width: 100%; height: 100%;"
  )}
`

Flex.displayName = 'Flex'

export default Flex