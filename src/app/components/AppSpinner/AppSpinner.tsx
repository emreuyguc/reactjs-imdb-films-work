import { Box, Heading, Spinner } from "@chakra-ui/react"

const AppSpinner = () => <Box h={'full'} w={'full'} textAlign={'center'}  my={20}>
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
/>
<Heading color={'white'}>
    Bağlanıyor ...
</Heading>
</Box>

export default AppSpinner;