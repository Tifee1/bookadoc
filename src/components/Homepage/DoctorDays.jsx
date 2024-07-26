import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

const DoctorDays = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState('')

  const selectTheDate = (day) => {
    if (day.get('day') === 0 || day.get('day') === 6) return
    setSelectedDate(day.toISOString())
  }

  const numDaysToShow = 7

  const generateDaysArray = (startDate, numDays) => {
    return Array.from({ length: numDays }, (_, i) =>
      dayjs(startDate).add(i, 'day')
    )
  }

  const days = generateDaysArray(startDate, numDaysToShow)

  const handlePrev = () => {
    setStartDate((prev) => dayjs(prev).subtract(numDaysToShow, 'day'))
  }

  const handleNext = () => {
    setStartDate((prev) => dayjs(prev).add(numDaysToShow, 'day'))
  }

  return (
    <Flex alignItems='center' justifyContent='center'>
      <IconButton
        bg='inherit'
        _hover={{}}
        fontSize={36}
        icon={<IoMdArrowDropleft />}
        onClick={handlePrev}
        aria-label='Previous'
      />
      <HStack mx={4} flex={2}>
        {days.map((day, index) => {
          const isSelected = selectedDate === day.toISOString()

          const isDisabled = day.get('day') === 0 || day.get('day') === 6
          return (
            <Box
              key={index}
              textAlign='center'
              paddingX={7}
              paddingY={5}
              flex={4}
              borderRadius='md'
              borderWidth='1px'
              bg='white'
              sx={{
                bg: isDisabled ? '#F9FAFB' : isSelected ? '#F2F1FF' : 'white',
                borderColor: isSelected ? '#977CFA' : '#eee',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
              }}
              onClick={() => selectTheDate(day)}
            >
              <Text fontSize={20} fontWeight={400} textTransform='uppercase'>
                {dayjs(day).format('ddd')}
              </Text>
              <Text fontSize={14} fontWeight={400}>
                {dayjs(day).format('D')}
              </Text>
            </Box>
          )
        })}
      </HStack>
      <IconButton
        bg='inherit'
        _hover={{}}
        fontSize={36}
        icon={<IoMdArrowDropright />}
        onClick={handleNext}
        aria-label='Next'
      />
    </Flex>
  )
}

export default DoctorDays
