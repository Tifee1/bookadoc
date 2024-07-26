import React from 'react'

import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from '@chakra-ui/react'

import { CiSearch } from 'react-icons/ci'
import { TfiTarget } from 'react-icons/tfi'
import { LuShield } from 'react-icons/lu'
import { FaFireFlameCurved } from 'react-icons/fa6'
import { FaAngleDown } from 'react-icons/fa6'
import { Link } from '@chakra-ui/next-js'

const Header = () => {
  return (
    <Box
      as='header'
      mx={4}
      my={8}
      py={4}
      borderRadius={24}
      bgGradient='linear(to-r, #FFF6F9, #E6E4FF)'
    >
      <Flex px={12} justifyContent='space-between' alignItems='center'>
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
              color: 'white',
            }}
          >
            <FaFireFlameCurved />
          </Text>{' '}
          BookADoc
        </Link>
        <HStack spacing={10}>
          <Link href='#' display='flex' gap={2} alignItems='center'>
            Services <FaAngleDown />
          </Link>
          <Link href='#' display='flex' gap={2} alignItems='center'>
            Doctors <FaAngleDown />
          </Link>
          <Link href='#'>About Us</Link>
          <Link href='#'>Blog</Link>
          <Link href='#'>Contact Us</Link>
        </HStack>
        <HStack spacing={4}>
          <Button bg='white' px={8} borderRadius={20} fontWeight={400}>
            Sign In
          </Button>
          <Button bg='white' px={8} borderRadius={20} fontWeight={400}>
            Clinic Sign Up
          </Button>
        </HStack>
      </Flex>
      <Flex
        mx={20}
        bg='white'
        gap={4}
        borderRadius={40}
        mt='76px'
        mb='32px'
        px={6}
        alignItems='center'
      >
        <InputGroup borderRight='1px solid #eee' py={4} flex={1.5}>
          <InputLeftAddon
            pointerEvents='none'
            bg='white'
            border='none'
            px={1}
            fontSize={24}
            color='#eee'
          >
            <CiSearch />
          </InputLeftAddon>
          <Input
            pl={2}
            type='text'
            placeholder='Search'
            border='none'
            _focusVisible={{
              outline: 'none',
            }}
          />
        </InputGroup>
        <InputGroup borderRight='1px solid #eee' py={4} flex={1}>
          <InputLeftAddon
            pointerEvents='none'
            bg='white'
            border='none'
            px={1}
            fontSize={24}
            color='#ccc'
          >
            <TfiTarget />
          </InputLeftAddon>
          <Input
            pl={2}
            type='number'
            placeholder='40361'
            border='none'
            _focusVisible={{
              outline: 'none',
            }}
          />
        </InputGroup>
        <InputGroup py={4} flex={1.5}>
          <InputLeftAddon
            pointerEvents='none'
            bg='white'
            border='none'
            px={1}
            fontSize={24}
            color='#ccc'
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
        <Button
          bg='#FC1774'
          px={9}
          py={4}
          borderRadius={20}
          fontWeight={600}
          textColor='white'
          fontSize={12}
          _hover={{}}
        >
          SEARCH
        </Button>
      </Flex>
    </Box>
  )
}

export default Header
