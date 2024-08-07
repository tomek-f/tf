function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(1)); // 1

function identity2<T, U>(value: T, message: U): T {
    console.log(message);

    return value;
}

console.log(identity2<number, string>(1, 'a')); // 1

class Car {
    label = 'Generic Car';

    numWheels = 4;

    horn(): string {
        return 'beep beep!';
    }
}

class Truck extends Car {
    label = 'Truck';

    numWheels = 18;
}

class Vespa extends Car {
    label = 'Vespa';

    numWheels = 2;
}

export function washCar<T extends Car>(car: T): T {
    console.log(`Received a ${car.label} in the car wash.`);
    console.log(`Cleaning all ${car.numWheels} tires.`);
    console.log('Beeping horn -', car.horn());
    console.log('Returning your car now');

    return car;
}

const myVespa = new Vespa();

washCar<Vespa>(myVespa);

const myTruck = new Truck();

washCar<Truck>(myTruck);
