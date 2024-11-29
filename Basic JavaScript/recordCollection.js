const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    } else if (prop !== 'tracks') {
        records[id][prop] = value;
    } else {
        if (!records[id].hasOwnProperty('tracks')) {
            records[id]['tracks'] = [];
        }
        records[id]['tracks'].push(value);

    }
    return records;
}
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// Expected: { artist: 'ABBA', albumTitle: 'ABBA Gold' }

console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me'));
// Expected: { albumTitle: 'ABBA Gold', tracks: ['Take a Chance on Me'], artist: 'ABBA' }

console.log(updateRecords(recordCollection, 2548, 'artist', ''));
// Expected: { albumTitle: 'Slippery When Wet', tracks: ['Let It Rock', 'You Give Love a Bad Name'] }

console.log(updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love'));
// Expected: { artist: 'Robert Palmer', tracks: ['Addicted to Love'] }

console.log(updateRecords(recordCollection, 2468, 'tracks', 'Free'));
// Expected: { albumTitle: '1999', artist: 'Prince', tracks: ['1999', 'Little Red Corvette', 'Free'] }

console.log(updateRecords(recordCollection, 2548, 'tracks', ''));
// Expected: { albumTitle: 'Slippery When Wet', artist: 'Bon Jovi', tracks: ['Let It Rock', 'You Give Love a Bad Name'] }

console.log(updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide'));
// Expected: { artist: 'Robert Palmer', tracks: ['Addicted to Love'], albumTitle: 'Riptide' }