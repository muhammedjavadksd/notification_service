"use client"
import BannerForCreating from '@/_component/FundRaiser/BannerForCreating'
import Header from '@/_component/Header/Header'
import Footer from '@/_component/Util/Footer'
import React, { useState } from 'react'
import {CreateFormComponent} from './Logic'
import { bannerData } from './Data'


function CreateFundRaisingPost() {

  let [createFormIndex, setCreateFormIndex] = useState(0)
  let StepForm = CreateFormComponent(createFormIndex);

  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 mt-5 flex items-center'>
          <div>
            <BannerForCreating image={bannerData[createFormIndex].image} title={bannerData[createFormIndex].title} subTitle={bannerData[createFormIndex].subTitle} />
          </div>
          <div className='w-full'>
            <StepForm  state={setCreateFormIndex} />
          </div>
        </div>
      </div>
      <Footer />
    </div>


  )
}

export default CreateFundRaisingPost