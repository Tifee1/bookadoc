'use client'

import { Box, Button, Grid, Stack, VStack } from '@chakra-ui/react'
import { BiMapPin } from 'react-icons/bi'

import 'react-datepicker/dist/react-datepicker.css'

import Image from 'next/image'
import HomeHeader from '../components/Homepage/HomeHeader'
import DoctorGrid from '../components/Homepage/DoctorGrid'
import DoctorFilters from '../components/Homepage/DoctorFilters'

export default function Home() {
  return (
    <Box
      mt={8}
      mb={16}
      pt='46px'
      px='40px'
      pb='40px'
      mx={4}
      bg='#F9FAFB'
      borderRadius={24}
    >
      <HomeHeader />
      <Grid templateColumns='1fr 400px' gap={5} alignItems='start'>
        <DoctorGrid />
        <Stack as='aside' gap='18px'>
          <Stack
            p={4}
            gap={4}
            border='1px solid #EEEEF2'
            borderRadius='lg'
            bg='white'
          >
            <VStack justifyContent='center'>
              <Image
                src='/assets/images/map-image.png'
                height={190}
                width={368}
              />
              <Button
                sx={{
                  display: 'flex',
                  gap: '16px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                  bg: 'inherit',
                  border: '1px solid #eee',
                  borderRadius: '24px',
                  fontWeight: '400',
                }}
                _hover={{}}
              >
                <BiMapPin />
                View in a map
              </Button>
            </VStack>
          </Stack>
          <DoctorFilters />
        </Stack>
      </Grid>
    </Box>
  )
}
