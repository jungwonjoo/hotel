'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Container from '../container'
import { useRouter } from 'next/navigation'

const NavBar = () => {

  const router = useRouter()

  return (
    <div className='sticky top-0 border border-b-primary/10 bg-secondary p-[20px]'
      onClick={()=> router.push('/')}
    >
      <Container>
        <div className='flex items-center gap-2 cursor-pointer'>
          <Image src='/next.svg' alt='logo' width={100} height={30}/>
          <div className='font-bold text-xl text-fuchsia-950'>StaySavvy</div>
        </div>
        <div>
          <UserButton />
          <SignInButton />
          <SignedIn>
          </SignedIn>
          <SignedOut>
          </SignedOut>
        </div>
      </Container>
    </div>
  )
}

export default NavBar