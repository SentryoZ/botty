const randomFoodChoices = [
    'Cơm gà', 'Cơm rang', 'Cơm tấm',
    'Bún đậu', 'Bún cá', 'Bún cua', 'BÚn CUa', 'Bún vịt nướng', 'Bún bò', 'Bún bò Huế', 'Bún chả',
    'Phở bò', 'Phở gà', 'Phở trộn', 'Phở quấn', 'Phở xào',
    'Miến trộn', 'Miến xào',
    'Bánh xèo', 'Bánh tráng', 'Bánh giò',
    'Lẩu ếch', 'Lẩu gà', 'Lẩu cua', 'Lẩu bò',
    'Nướng', 'Nwngs',
    'Em', 'Anh'
]

const suggestThing = [
    'Ăn %s i',
    'Có cái %s ngon nè',
    ''
]

export const randomFoodName = 'randomfood'
export const randomFood = {
    name: randomFoodName,
    description: 'Ăn dì ăn dì',
    type: 1,
};

export function handleChooseRandomFood(request) {
    const maxLength = randomFoodChoices.length

    const randomIndex = Math.floor(Math.random() * maxLength);
    let choice = randomFoodChoices[randomIndex] ?? randomFoodChoices[0];

    if (choice === 'Em' || choice === 'Anh') {
        const userId = request.body.member.user.id
        if (choice === "Em" && userId === '1089569411733655602') {
            choice = 'Anh'
        }
        if (choice === "Anh" && userId === '346163995625127939') {
            choice = 'Em'
        }
        return choice + ' nè <:acquy:1169819434051973120><:acquy:1169819434051973120><:acquy:1169819434051973120>'
    }


    return 'I suggest to u the ' + choice;
}
