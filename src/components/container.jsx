const Container = ({ children, className }) => {
    return (
        <div className={`container mx-auto max-w-[1300px] ${className} px-4 md:px-0`}>
            {children}
        </div>
    )
}

export default Container;