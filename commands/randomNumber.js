export const randomNumberName = 'random'

export const randomNumber = {
    name: randomNumberName,
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

export function randomNumberHandle(request) {
    let min = request.body.data.options.find((item) => item.name === 'min').value;
    let max = request.body.data.options.find((item) => item.name === 'max').value;

    if (!!min && !!max) {
        if (min > max) {
            return 'It totally wrong, i can see it'
        }
        if (min === max){
            return 'Why you find random number with min value equal max value???'
        }

        let randomNumber = Math.floor(Math.random() * max) + min
        return 'Your random number is ' + randomNumber
    }

    return 'Something wrong, i can feel it'

}

