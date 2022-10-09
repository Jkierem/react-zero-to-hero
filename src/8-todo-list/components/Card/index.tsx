import styled, { StyledComponent } from "styled-components"
import { boxShadow, foldProp, propWithDefault } from "../../utils/styled-components"

interface CardProps {
    $elevated?: boolean | 0 | 1 | 2 | 3 ,
    $position?: string
}

const CardComp = styled.div<CardProps>`
    display: block;
    position: ${propWithDefault("$position", "relative")};
    background-color: white;
    border-radius: 4px;
    min-width: 275px;
    overflow: hidden;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: ${foldProp(
        "$elevated",
        () => boxShadow(0),
        ({ $elevated }) => {
            if( typeof $elevated === "number" ){
                return boxShadow($elevated)
            }
            return boxShadow(1)
        }
    )};
`

CardComp.displayName = "Card"

const ContentComp = styled.div`
    padding: 16px;
`

ContentComp.displayName = "Card.Content"

type StyledDiv<P extends object = {}> = StyledComponent<"div", any, P, never>

const Card = CardComp as StyledDiv<CardProps> & { Content: StyledDiv }
Card.Content = ContentComp;

export default Card