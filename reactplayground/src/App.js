import CurrentMessage from "./components/CurrentMessage";

import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <div className="App">
     <Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>

<Alert status='error'>
  <AlertIcon />
  <AlertTitle>Your browser is outdated!</AlertTitle>
  <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
</Alert>

    </div>
  );
}

export default App;

