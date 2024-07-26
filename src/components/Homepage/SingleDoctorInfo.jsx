import React, { useState } from 'react'
import DoctorInfoAlert from './DoctorInfoAlert'
import DoctorDays from './DoctorDays'
import { Box, Button, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import {
  MdFavoriteBorder,
  MdLocationPin,
  MdOutlineFavorite,
} from 'react-icons/md'
import { FaRegCalendarCheck, FaStar } from 'react-icons/fa'
import { insuranceImage } from '../../constants/dummy-data'
import { IoAlertCircleOutline } from 'react-icons/io5'

const SingleDoctorInfo = ({ doctor, selected, setSelected, index }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <Stack
      bg='white'
      padding={5}
      flex={1}
      gap={6}
      sx={{
        borderWidth: '2px',
        borderColor: selected === index ? '#977CFA' : 'eee',
        borderRadius: '20px',
      }}
      onClick={() => setSelected(index)}
    >
      <DoctorInfoAlert doctor={doctor} />
      <Flex alignItems='start' mt={2} justifyContent='space-between'>
        <HStack alignItems='start' mt={2}>
          <Box
            sx={{
              borderRadius: '10px',

              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src={`/assets/images/${doctor.images[0]}`}
              alt={doctor.name}
              width={150}
              height={150}
            />
            <Button
              onClick={() => setIsFavorite(!isFavorite)}
              sx={{
                position: 'absolute',
                top: '6px',
                left: '6px',
                background: 'white',
                padding: '6px',
                borderRadius: '50%',
                color: isFavorite ? '#FC1774' : 'black',
                fontSize: '16px',
              }}
            >
              {isFavorite ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
            </Button>
          </Box>
          <Box className='ml-4'>
            <Text fontSize='larger' fontWeight={600}>
              {doctor.name}
            </Text>
            <Text fontSize='small' fontWeight={400}>
              {doctor.type}
            </Text>
            <HStack color='#eee' mt={2}>
              <MdLocationPin />{' '}
              <Text color='black' fontSize='medium' fontWeight={300}>
                {doctor.address}
              </Text>
            </HStack>
            <HStack mt={2}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '4px',
                  alignItems: 'center',
                  bg: '#FCEBD6',
                  color: '#EF6820',
                  paddingY: '4px',
                  paddingX: '8px',
                  borderRadius: '6px',
                }}
              >
                <FaStar />
                <Text fontSize='medium' fontWeight={600}>
                  {doctor.rating}
                </Text>
              </Box>
              <Text
                textDecoration='underline'
                fontSize='medium'
                fontWeight={300}
              >
                ({doctor.reviews} reviews)
              </Text>
            </HStack>
            <Stack direction={'row'} marginTop='8px'>
              <Stack
                direction={'row'}
                sx={{
                  position: 'relative',
                  marginRight: '0',
                }}
              >
                {insuranceImage.map((sub, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: '24px',
                      height: '24px',
                      background: '#fff',
                      border: '2px solid #fff',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative',
                      left: `-${i * 15}px`,
                    }}
                  >
                    <Image
                      src={`/assets/images/${sub}`}
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                      alt={sub}
                      width={24}
                      height={24}
                    />
                  </Box>
                ))}
              </Stack>
              <Text marginLeft='-30px' fontSize='small' fontWeight={400}>
                Dyson, and 2+ more insurance accepted
              </Text>
            </Stack>
          </Box>
        </HStack>
        <HStack>
          <Button
            sx={{
              bg: 'inherit',
              fontSize: '14px',
              fontWeight: '500',
              border: '1px solid #eee',
              borderRadius: '24px',
              paddingY: '4px',
              display: 'flex',
              gap: '4px',
            }}
            _hover={{}}
          >
            <Text fontWeight={700} fontSize='20px'>
              <IoAlertCircleOutline />
            </Text>
            More Info
          </Button>
          {doctor.canBeBooked && (
            <Button
              sx={{
                bg: '#101828',
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',

                borderRadius: '24px',
                paddingY: '4px',
                display: 'flex',
                gap: '4px',
              }}
              _hover={{}}
            >
              <Text fontWeight={700} fontSize='20px'>
                <FaRegCalendarCheck />
              </Text>
              {doctor.alreadyBooked ? 'Book Again' : 'Book Appointment'}
            </Button>
          )}
        </HStack>
      </Flex>
      <Box borderBottom='0.5px solid #eee'></Box>
      {!doctor.alreadyBooked && <DoctorDays />}
    </Stack>
  )
}

export default SingleDoctorInfo
