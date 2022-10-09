import Card from "./components/Card";
import Flex from "./components/Flex";

const App = () => <Flex 
    $fullsize 
    $direction="column" 
    $justify="flex-start" 
    $align="flex-start"
>
    <div style={{ margin: "8px"}}>
        <Card $elevated={3}>
            <Card.Content>
                <h1>Hi There</h1>
            </Card.Content>
        </Card>
    </div>
</Flex>

export default App