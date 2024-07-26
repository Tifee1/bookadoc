import {
  Box,
  Checkbox,
  Flex,
  InputGroup,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
  VStack,
  Select,
} from '@chakra-ui/react'
import React from 'react'

const DoctorFilters = () => {
  return (
    <Stack
      p={4}
      gap={8}
      border='1px solid #EEEEF2'
      borderRadius='lg'
      bg='white'
    >
      <Text fontSize={20} fontWeight={600}>
        All Filters
      </Text>
      <Box borderBottom='1px solid #eee'></Box>
      <VStack align='stretch' spacing={4}>
        <Text fontWeight={500} fontSize={16}>
          Preferred Time
        </Text>
        <Checkbox colorScheme='purple' size='lg' fontWeight={300}>
          Early Morning (Before 9am)
        </Checkbox>
        <Checkbox colorScheme='purple' size='lg' fontWeight={300}>
          Mornings (9am - noon)
        </Checkbox>
        <Checkbox colorScheme='purple' size='lg' fontWeight={300}>
          Afternoon (Noon - 4pm)
        </Checkbox>
        <Checkbox colorScheme='purple' size='lg' fontWeight={300}>
          Evening (After 4pm)
        </Checkbox>
      </VStack>
      <VStack align='stretch' spacing={4}>
        <Text fontWeight={500} fontSize={16}>
          Provider Gender
        </Text>
        <RadioGroup colorScheme='purple' size='lg' fontWeight={300}>
          <Stack>
            <Radio value='1'>No Preference</Radio>
            <Radio value='2'>Male</Radio>
            <Radio value='3'>Female</Radio>
          </Stack>
        </RadioGroup>
      </VStack>

      <VStack align='stretch' spacing={4}>
        <Text fontWeight={500} fontSize={16}>
          Visit Reason
        </Text>

        <InputGroup
          bg='white'
          border='1px solid #eee'
          borderRadius={8}
          width='auto'
          alignItems='center'
        >
          <Select
            border='none'
            _focusVisible={{
              outline: 'none',
            }}
          >
            <option>Anxiety</option>
            <option>Alcholism</option>
          </Select>
        </InputGroup>
      </VStack>

      <VStack align='stretch' spacing={4}>
        <Text fontWeight={500} fontSize={16}>
          Specialty
        </Text>
        <InputGroup
          bg='white'
          border='1px solid #eee'
          borderRadius={8}
          width='auto'
          alignItems='center'
        >
          <Select
            border='none'
            _focusVisible={{
              outline: 'none',
            }}
          >
            <option>Addicted</option>
            <option>Psychology</option>
          </Select>
        </InputGroup>
      </VStack>

      <VStack align='stretch' spacing={4}>
        <Text fontWeight={500} fontSize={16}>
          Rating / Review
        </Text>
        <Flex gap={4}>
          <Box
            border='1px solid #eee'
            paddingX={5}
            paddingY={3}
            borderRadius='lg'
          >
            1
          </Box>

          <RangeSlider
            defaultValue={[0, 4]}
            min={1}
            max={5}
            step={1}
            colorScheme='purple'
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Box
            border='1px solid #eee'
            paddingX={5}
            paddingY={3}
            borderRadius='lg'
          >
            5
          </Box>
        </Flex>
      </VStack>
      <VStack align='stretch' spacing={4}>
        <Text fontWeight={500} fontSize={16}>
          Language Spoken
        </Text>
        <InputGroup
          bg='white'
          border='1px solid #eee'
          borderRadius={8}
          width='auto'
          alignItems='center'
        >
          <Select
            border='none'
            _focusVisible={{
              outline: 'none',
            }}
          >
            <option>English</option>
            <option>Deutsch</option>
          </Select>
        </InputGroup>
      </VStack>
    </Stack>
  )
}

export default DoctorFilters
