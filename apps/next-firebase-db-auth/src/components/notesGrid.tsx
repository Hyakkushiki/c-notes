

export default function NotesGrid() {
    const rowSpanAmount = 2
    // const isOddEle=i % 2 == 0
    const colorsT = [
        'bg-gradient-to-r from-grey-200 via-zinc-300',
        'bg-gray-200',
        'bg-gray-300',
        'bg-gray-400',
        'bg-gradient-to-r from-gray-300 via-zinc-400 to-gray-200',

        'bg-gradient-to-r from-indigo-100 via-purple-100',
        'bg-gradient-to-r from-indigo-200 via-zinc-200 to-purple-200'
    ];
    const colors = (ind: number) => {
        const i = ind > 4 ? Math.floor(ind / 5) - 1 : ind

        return colorsT[i]
    };



    return (
        <div className="w-full h-min grid grid-cols-2 grid-flow-dense items-stretch gap-2">
            <div className={`flex flex-col h-min rounded-lg row-span-${rowSpanAmount} bg-gray-400 items-center justify-between p-1 col-span-2}`}>
                <Note title={'note.title'} content={'note.content'} id={1} />
            </div>
            <div className={`'flex flex-col h-min rounded-lg items-center justify-between p-1 col-span-2' ${colors(4)} `}>
                <Note title={'note.title'} content={'note.content'} id={2} />
            </div>
            {
                testNotes.map((note, i) => {
                    return (
                        <div key={i} className={`flex flex-col h-min rounded-lg col-span-1 row-span-${rowSpanAmount} ${colors(i)} items-center justify-between p-1 last:${i % 2 == 0 ? `col-span-2` : ``} `}>
                            <Note title={note.title} content={note.content} id={i} />
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

interface NoteI {
    title: string
    content: string
    id: number
}
const Note = (note: NoteI) => {
    const titleStyle = !!note.title ? '' : 'invisible'
    return (
        <div className={`flex flex-col items-center justify-between p-1`}>
            <h1 className={`${titleStyle}`}>
                {note.title}
            </h1>
            <p className="p-2">
                {note.content}
            </p>
        </div>
    )
}

const testNotes = [
    {
        title: '1',
        content: 'my content'
    },
    {
        title: '2nd',
        content: 'my content 2'
    },
    {
        title: '',
        content: 'my content'
    },
    {
        title: '4th title',
        content: 'my content'
    },
    {
        title: '5',
        content: 'my content should be larger than the others. I wonder how long it should be to have the effect that I want. So I will type a lot and see how it comes out. This is also some interesting typing practice.'
    },
    // {
    //     title: '6',
    //     content: 'test test test test test!!!'
    // }
]
