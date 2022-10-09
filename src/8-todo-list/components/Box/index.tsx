import styled from "styled-components"
import { foldProp, propWithDefault } from "../../utils/styled-components"


type BoxObject = Record<"top" | "bottom" | "left" | "right", string>

const evaluateBoxValue = (val: string | BoxObject) => {
    if( typeof val === "string" ){
        return val
    }
    const { top, right, bottom, left } = val
    return `${top} ${right} ${bottom} ${left}`
}

interface BoxProps {
    $width?: string
    $height?: string
    $position: "static" | "relative" | "fixed" | "absolute" | "sticky"
    $border: string | BoxObject
    $padding: string | BoxObject
    $margin: string | BoxObject
    $boxSizing: "content-box" | "border-box" | "initial" | "inherit"
}

const Box = styled.div<BoxProps>`
    width: ${propWithDefault("$width", "unset")};
    height: ${propWithDefault("$height", "unset")};
    position: ${propWithDefault("$position", "static")};
    box-sizing: ${propWithDefault("$boxSizing", "content-box")};
    border: ${foldProp("$border",
        () => "none",
        ({ $border }) => evaluateBoxValue($border)
    )};
    margin: ${foldProp("$margin",
        () => "none",
        ({ $margin }) => evaluateBoxValue($margin)
    )};
    padding: ${foldProp("$padding",
        () => "none",
        ({ $padding }) => evaluateBoxValue($padding)
    )};
`

export default Box