export const createACard = payload => {
    console.log(payload);
    return { message: "Succesafuly created a card: " + payload.name }
}

export const getCardList = () => {
    let list = [];
    for (var i = 0; i < 5; i++) list.push({ id: i, name: "Card name " + i, someField: Math.random() * 100 });
    return list;
};