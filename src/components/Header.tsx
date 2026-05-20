type HeaderProps = {
    title: string
}


export function Header({title}:HeaderProps){
    return(
        <h1 className="text-6xl font-medium text-gray-800">
            {title}
        </h1>
    )
}