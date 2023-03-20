

export default function NotesGrid() {
    const rowSpanAmount = 3
    return (
        <div className="w-full h-full grid grid-cols-2 grid-flow-dense items-stretch gap-4">
            <div className="flex rounded-lg bg-gray-200">1</div>
            <div className="flex rounded-lg bg-gray-300">2</div>
            <div className="flex rounded-lg col-span-2 bg-gray-400">3</div>
            <div className="flex rounded-lg col-span-2 bg-gray-500">4</div>
            <div className={`flex rounded-lg col-span-2 row-span-${rowSpanAmount} bg-gray-600`}>5</div>
            {/* <div className="flex rounded-lg bg-gray-700">6</div> */}
        </div>
    )
}

