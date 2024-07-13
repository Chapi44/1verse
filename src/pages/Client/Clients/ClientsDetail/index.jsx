import React, { useState } from 'react'
import { Layout } from '../../../../Components/Layout'
import { View } from './View'

export const ClientsDetail = () => {
    const [minimize ,setMinimize]= useState(true)
  return (
    <Layout setMinimize={setMinimize} minimize={minimize}>
        <View />
    </Layout>
  )
}
