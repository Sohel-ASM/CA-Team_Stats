// creating a team object with _players and -games properties in it. The properties' values are arrays.
const teamBarca = {
    _players: [
        {
            firstName: 'Lionel',
            lastName: 'Messi',
            age: 32
    },
        {
            firstName: 'Neymar',
            lastName: 'Junior',
            age: 27
    },
        {
            firstName: 'Andres',
            lastName: 'Iniesta',
            age: 28
    }

    ],
    _games: [
        {
            opponent: 'Bayern Munich',
            teamGoal: 1,
            opponentGoal: 1
    },
        {
            opponent: 'Real Madrid',
            teamGoal: 2,
            opponentGoal: 1
    },
        {
            opponent: 'Man Utd.',
            teamGoal: 3,
            opponentGoal: 2
    }
    ],
    //getter methods for _players and _games. Program users are not allowed to change these properties' values, so no setter methods. 
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    // method for adding new player in the teamBarca object
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age
        };
        this.players.push(player);
    },
    addGame(opponent, teamGoal, oppGoal) {
        const game = {
            opponent,
            teamGoal,
            oppGoal
        };
        this.games.push(game);
    }
}; // this is const's closing closing brace
