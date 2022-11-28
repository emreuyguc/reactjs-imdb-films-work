import { ArrowLeftIcon, ArrowBackIcon, ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton,Text } from "@chakra-ui/react";

const Pagination = function({dataCount,pageItemCount,currentPageState} : {dataCount : number,pageItemCount:number,currentPageState: [number, React.Dispatch<React.SetStateAction<number>>]}){
    let [currentPage,setCurrentPage] = currentPageState;
    
    return <Box w={"full"} pt={10}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                    <IconButton   icon={<ArrowLeftIcon />} onClick={() => setCurrentPage(1)} aria-label={""}/>
                    <IconButton   icon={<ArrowBackIcon />} disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)} aria-label={""}/>
                        <Text bg={"white"}>{currentPage}</Text>
                    <IconButton   icon={<ArrowForwardIcon />} disabled={currentPage >= (dataCount / pageItemCount)} onClick={() => setCurrentPage(currentPage + 1)} aria-label={""} />
                    <IconButton   icon={<ArrowRightIcon />} onClick={() => setCurrentPage(Math.round(dataCount / pageItemCount))} aria-label={""} />
                </Flex>
            </Box>
}

export default Pagination;