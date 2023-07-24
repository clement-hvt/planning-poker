type CardProps =  {
    storyPoint: number|string,
    onClick: () => void,
}
export default function Card({storyPoint, onClick}: CardProps) {
    return (
        <div className="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer aspect-square items-center justify-center">
            <p className={"font-normal text-gray-700 text-8xl text-center" + typeof storyPoint === 'string' ? "diagonal-fractions" : ""} onClick={onClick}>{storyPoint}</p>
        </div>
    )
}