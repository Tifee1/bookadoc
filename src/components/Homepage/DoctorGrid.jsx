import React, { useState } from 'react'
import { dummyDoctors } from '../../constants/dummy-data'
import SingleDoctorInfo from './SingleDoctorInfo'
import { Stack } from '@chakra-ui/react'

const DoctorGrid = () => {
  const [selected, setSelected] = useState('')
  return (
    <Stack gap='18px'>
      {dummyDoctors.map((doctor, i) => {
        return (
          <SingleDoctorInfo
            doctor={doctor}
            key={i}
            index={i}
            selected={selected}
            setSelected={setSelected}
          />
        )
      })}
    </Stack>
  )
}

export default DoctorGrid
