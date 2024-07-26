'use client'

import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Text,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FiCalendar } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { LuShield } from 'react-icons/lu'
import { TbUserSquare } from 'react-icons/tb'
import { TfiTarget } from 'react-icons/tfi'

const HomeHeader = () => {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <Text as='h2' color='#FC1774' fontSize='xxx-large' fontWeight={500}>
        Migrane{' '}
        <Text as='span' color='black'>
          Illness with
        </Text>{' '}
        Agile Health Insurance
      </Text>
      <Flex gap='8px' justifyContent='space-between' my='28px'>
        <Flex gap='8px'>
          <InputGroup
            bg='white'
            border='1px solid #eee'
            borderRadius={8}
            width='auto'
            alignItems='center'
          >
            <InputLeftAddon
              pointerEvents='none'
              bg='white'
              border='none'
              px={1}
              fontSize={24}
              color='#eee'
            >
              <FiCalendar />
            </InputLeftAddon>
            <DatePicker
              dateFormat='MM.yyyy'
              showMonthYearPicker
              onChange={(date) => setDate(date)}
              value={dayjs(date).format('MMM YYYY')}
              f
            />
            <InputRightAddon
              bg='white'
              border='none'
              px={1}
              fontSize={24}
              color='#000'
            >
              <IoMdArrowDropdown />
            </InputRightAddon>
          </InputGroup>
          <InputGroup
            bg='white'
            border='1px solid #eee'
            borderRadius={8}
            width='auto'
            alignItems='center'
          >
            <InputLeftAddon
              pointerEvents='none'
              bg='white'
              border='none'
              pl={4}
              pr={0}
              fontSize={24}
              color='#eee'
            >
              <TbUserSquare />
            </InputLeftAddon>
            <Select
              pr={4}
              border='none'
              _focusVisible={{
                outline: 'none',
              }}
            >
              <option>In-Person</option>
              <option>Remote</option>
            </Select>
          </InputGroup>
          <InputGroup
            bg='white'
            border='1px solid #eee'
            borderRadius={8}
            width='auto'
            alignItems='center'
          >
            <InputLeftAddon
              pointerEvents='none'
              bg='white'
              border='none'
              pl={4}
              pr={0}
              fontSize={24}
              color='#eee'
            >
              <LuShield />
            </InputLeftAddon>
            <Select
              border='none'
              _focusVisible={{
                outline: 'none',
              }}
            >
              <option>Agile Health Insurance</option>
            </Select>
          </InputGroup>
          <InputGroup
            bg='white'
            border='1px solid #eee'
            borderRadius={8}
            width='auto'
            alignItems='center'
          >
            <InputLeftAddon
              pointerEvents='none'
              bg='white'
              border='none'
              pl={4}
              pr={0}
              fontSize={24}
              color='#eee'
            >
              <TfiTarget />
            </InputLeftAddon>
            <Input
              width='96px'
              pl={2}
              type='number'
              placeholder='40361'
              border='none'
              _focusVisible={{
                outline: 'none',
              }}
            />
          </InputGroup>
        </Flex>
        <Button
          bg='inherit'
          _hover={{}}
          textDecoration='underline'
          fontSize='sm'
          fontWeight={400}
        >
          Clear All Filters
        </Button>
      </Flex>
      <Text my='28px'>100+ Results</Text>
    </>
  )
}

export default HomeHeader
