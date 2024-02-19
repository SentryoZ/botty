export const RandomNumber = {
    name: 'random',
    description: 'Get random number between specific range',
    type: 1,
    options: [
        {
            type: 4,
            name: 'min',
            description: 'Min value',
            required: true
        },
        {
            type: 4,
            name: 'max',
            description: 'Max value',
            required: true
        }
    ]
};

export function randomNumberHandle(request, result) {
    console.log(request)
}

