'use client';
import construction from '@images/under-construction.svg'
import Image from 'next/image'
import Button from '../Button'
import { Undo2 } from 'lucide-react'

const UnderConstructionComponent = () => {
    return (
        <section className="h-screen grid place-items-center">
            <div className='box-container py-10'>
                <div className='max-w-[576px] mx-auto'>
                    <Image 
                        src={construction}
                        alt='under construction'
                    />
                </div>
                <div className=''>
                    <h1 className='flex text-center flex-col items-center font-space-mono'>
                        <span className='text-3xl medium:text-5xl font-semibold'> Ooops! </span>
                        <span className='text-xl medium:text-3xl max-w-[700px]'> Our website is under construction, but we&apos;ll be launching soon. Stay tuned! </span>
                    </h1>
                    <Button
                        href='/'
                        icon={Undo2}
                        variant='secondary'
                        className='w-fit px-10 mx-auto mt-5'
                    >
                        Go to Homepage
                    </Button>

                </div>
            </div>
        </section>
    )
}
export default UnderConstructionComponent