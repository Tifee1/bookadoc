import { Link } from '@chakra-ui/next-js'
import { Alert } from '@chakra-ui/react'
import React from 'react'
import { IoAlertCircleOutline } from 'react-icons/io5'

const DoctorInfoAlert = ({ doctor }) => {
  return (
    <>
      {doctor.alreadyBooked ? (
        <Alert
          status='error'
          bg='#FEF0C7'
          color='red.500'
          alignItems='center'
          gap={1}
          paddingY={1}
          borderRadius={6}
        >
          <IoAlertCircleOutline />
          You have an existing appointment with this doctor.{' '}
          <Link href='#' color='black' textDecoration='underline'>
            View details
          </Link>
        </Alert>
      ) : doctor.hasBeenBookedBefore ? (
        <Alert
          status='error'
          bg='#F9FAFB'
          color='#000'
          alignItems='center'
          gap={1}
          paddingY={1}
          borderRadius={6}
        >
          <IoAlertCircleOutline />
          You booked this provider in the past.
        </Alert>
      ) : (
        ''
      )}
    </>
  )
}

export default DoctorInfoAlert
