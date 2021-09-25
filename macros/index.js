module.exports = {
    common: {
        moods: [
            { name: 'Food mood'},
            { name: 'Drink mood'},
            { name: 'Culture mood'},
            { name: 'Sport mood'},
            { name: 'Open mind'}
        ]
    },
    back: {
        users: {
            projection: {
                password: 0,
                __v: 0
            }
        },
        mongoose: {
            fieldsFilters: ['sort', 'skip', 'limit', 'order']
        },
        sessions: {
            populate: [
                { path: 'userId', select: 'name familyName mail'}
            ]
        }
    },
    front: {},
}