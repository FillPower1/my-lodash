const items = [
    {
        id: 1,
        items: [
            {
                id: 11,
                items: [
                    {
                        id: 111,
                        items: [
                            {
                                id: 1111,
                                items: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        items: [
            {
                id: 21,
                items: [
                    {
                        id: 211,
                        items: [
                            {
                                id: 2111,
                                items: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 22,
        items: [],
    },
]

const getIds = (items) => {
    let arr = []

    for (const elem of items) {
        arr.push(elem.id)

        if (elem.items) {
            arr = [...arr, ...getIds(elem.items)]
        }
    }

    return arr
}

console.log(getIds(items))

const getItemsIds = (items) => {
    let arr = []

    items.forEach((element) => {
        arr.push(element.id)

        if (element.items) {
            arr = [...arr, ...getItemsIds(element.items)]
        }
    })

    return arr
}

console.log(getItemsIds(items))

const getReduceItemsIds = (items) => {
    return items.reduce((acc, value) => {
        acc.push(value.id)

        if (value.items) {
            return [...acc, ...getReduceItemsIds(value.items)]
        }
    }, [])
}

console.log(getReduceItemsIds(items))

const students = [
    {
        name: 'john',
        userId: '123123',
    },
    {
        name: 'Chris',
        userId: '95125',
    },
    {
        name: 'Piter',
        userId: '592096',
    },
]

const studentObj = students.reduce((acc, student) => {
    return { ...acc, [student.name]: student }
}, {})

console.log(JSON.stringify(studentObj, null, 2))
