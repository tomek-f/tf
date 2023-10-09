export default abstract class Department {
    constructor(public name: string) {
        this.name = name;
    }

    static elo = 'elo';

    printName(): void {
        console.log(`Department name: ${this.name}`); // eslint-disable-line no-console
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}
