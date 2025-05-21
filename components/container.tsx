

const Container = ({children}:{children:React.ReactNode}) =>{
    return(
        <div className='max-w-[1920px] w-ful mx-auto xl:px-20 px-4 py-4 flex justify-between'>
            {children}
        </div>
    )
}

export default Container