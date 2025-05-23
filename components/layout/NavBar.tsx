'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Container from '../container'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import SearchInput from '../searchInput'
import { ModeToggle } from '../theme-toggle'
import { NavMenu } from './NavMenu'

const NavBar = () => {

  const router = useRouter()
  const {userId} = useAuth()

  return (
    <div className='sticky top-0 border border-b-primary/10 bg-secondary p-[20px]'
      onClick={()=> router.push('/')}
    >
      <Container>
        <div className='flex items-center gap-2 cursor-pointer'>
          <Image src='/next.svg' alt='logo' width={100} height={30}/>
          <div className='font-bold text-xl text-fuchsia-950'>StaySavvy</div>
        </div>
        <SearchInput/>
        <div className='flex items-center gap-2'>
          <div>
            <ModeToggle/>
            <NavMenu/>
          </div>
          <UserButton/>
          {!userId &&
            <>
              <Button onClick={()=>router.push('/sign-in')} variant={'outline'} size={'sm'}>Sign in</Button>
              <Button onClick={()=>router.push('/sign-up')} size={'sm'}>Sign up</Button>
            </>
          }
        </div>       
      </Container>
    </div>
  )
}

export default NavBar