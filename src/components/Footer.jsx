import { Box, Flex, Text, Link, VStack, HStack, Stack } from '@chakra-ui/react'
import { FaFireFlameCurved } from 'react-icons/fa6'

export default function Footer() {
  return (
    <Box as='footer' bg='#101827' color='white' py={10}>
      <Stack>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          mx={{ base: '16px', md: '109px' }}
          px={4}
          pb='42px'
          justifyContent='space-between'
          alignItems='flex-start'
          borderBottom='1px solid #252C39'
        >
          <VStack align='flex-start' mb={{ base: 10, md: 0 }}>
            <Link
              href='#'
              fontSize='xl'
              fontWeight='bold'
              display='flex'
              gap={4}
              alignItems='center'
            >
              <Text
                sx={{
                  bg: '#FC1774',
                  padding: '10px',
                  borderRadius: '50%',
                  color: 'black',
                }}
              >
                <FaFireFlameCurved />
              </Text>{' '}
              BookADoc
            </Link>
            <Text fontSize='sm' maxW='400px'>
              BookADoc is a patient-facing web / mobile application where
              patients can search and discover providers by illness, specialist
              or name of the provider.
            </Text>
          </VStack>
          <HStack spacing={8} align='flex-start' gap={{ base: 0, md: '96px' }}>
            <VStack align='flex-start'>
              <Text
                fontSize='sm'
                fontWeight={600}
                textTransform='uppercase'
                mb={2}
              >
                Services for Patients
              </Text>
              <Link href='#' fontSize='sm'>
                Doctor Search
              </Link>
              <Link href='#' fontSize='sm'>
                Appointment Booking
              </Link>
              <Link href='#' fontSize='sm'>
                Patient Reviews
              </Link>
            </VStack>
            <VStack align='flex-start'>
              <Text
                fontSize='sm'
                fontWeight={600}
                textTransform='uppercase'
                mb={2}
              >
                Services for Doctors
              </Text>
              <Link href='#' fontSize='sm'>
                Profile Listing
              </Link>
              <Link href='#' fontSize='sm'>
                Appointment Management
              </Link>
              <Link href='#' fontSize='sm'>
                Patient Feedback
              </Link>
            </VStack>
            <VStack align='flex-start'>
              <Text
                fontSize='sm'
                fontWeight={600}
                textTransform='uppercase'
                mb={2}
              >
                Contact Us
              </Text>
              <Link href='tel:1-888-123-4567' fontSize='sm'>
                1-888-123-4567
              </Link>
              <Link href='mailto:help@bookadoc.com' fontSize='sm'>
                help@bookadoc.com
              </Link>
            </VStack>
          </HStack>
        </Flex>
        <Stack
          mx={{ base: '16px', md: '109px' }}
          color='#5D616A'
          fontSize='14px'
          gap={1}
        >
          <Text>
            <Text as='span' fontWeight='bold'>
              {' '}
              BookADoc
            </Text>{' '}
            is a patient-facing web / mobile application where patients can
            search and discover providers by illness, specialist or name of the
            provider.
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium earum asperiores expedita sit nihil deleniti eum, quo
            nemo eaque aspernatur voluptatum! Et enim ratione amet ullam,
            dolorem odit? Cupiditate nostrum nemo sequi deleniti error aliquam
            iure est modi ut voluptatem.
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}
