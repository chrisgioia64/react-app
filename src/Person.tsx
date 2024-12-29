
class Person {
    name: string;
    age: number;
    location: string;

    constructor(name: string, age: number, location: string) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
}

const personInstance = new Person('Christopher Gioia', 32, 'Richmond, CA');

export default function ProfileComponent(person : Person) {
    return (
        <div>
            <h1>{person.name}</h1>
            Age: {person.age} <br />
            Location: {person.location}
        </div>
    )
}