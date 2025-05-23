'use client'

import { Search } from "lucide-react"
import { Input } from "./ui/input"

const SearchInput = () => {
  return (
    <div className="relative justify-items-center sm:block hidden" >
        <Search  className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
        <Input placeholder="Search" className="pl-10 bg-primary/10"/>
    </div>
  )
}

export default SearchInput