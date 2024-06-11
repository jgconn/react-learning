// import React from 'react';
// import { useState } from 'react';

// function collect<T extends keyof U, U extends object>(key: T, arr: U[]) {
//     return arr.map(el => el[key]);
// }
// const result = collect('name', [
//     {count: 1, name: 'sdasda'},
//     {count: 20, name: 'bill'}
// ]);

// // constraints to objects
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return {...objA, ...objB};
// }

// const result = merge(
//     {id: 'q2eo'},
//     {color: 'red'}
// );

// // use generic type for useState
// function ColorPicker() {
//     const [colors, setColors] = useState<string[]>([]);

//     const handleClick = () => {
//         setColors([...colors, 'red'])
//     };

//     return <button onClick={handleClick}>Click</button>
// }


// function callAndReturn<T>(fn: () => T): T {
//  return fn();
// }

// const result = callAndReturn(() => 5);

// function wrapInArray<T>(value: T): (T)[] {
//     return [value];
// }

// // you dont have to mention type due to type inference (generic)
// const result = wrapInArray('asdsada');
// const result2 = wrapInArray(10);

// interface Image {
//     src: string;
// }

// interface User {
//     username: string;
// }

// interface Message {
//     messages: string;
// }

// interface Image {
//     src: string;
// }

// async function fetchData<T>(path: string): Promise<T> {
//     const res = await fetch(path);
//     const json = await res.json();

//     return json as T;
// }

// const run = async () => {
//     const user = await fetchData<User>('/users');
//     const message = await fetchData<Message>('/messages');
//     const image = await fetchData<Image>('./images');
// }

// function toRecord<T, U>(id: T, value: U) {
//     return {
//         id,
//         value
//     }
// }

// const result = toRecord<number, string>(123, 'my@email.com');
// const result2 = toRecord<string, string>('e10sa', 'my@email.com');
// const result3 = toRecord<string, number[]>('e10sa', [1, 2, 5]);


// function wrapInArray<T>(value: T): (T)[] {
//     return [value];
// }

// const result = wrapInArray<string>('asdsada');
// const result2 = wrapInArray<number>(10);

// interface Image {
//     src: string;
// }

// type LoggabeValue = string | number | string[] | Image;

// function logValue(value: LoggabeValue) {
//     return ;
// }

// interface Book {
//     title: string;
// }

// // Promise<Book> is optional as ts includes this automatically
// async function fetchBook(): Promise<Book> {
//     const res = await fetch('./book');
//     const data: unknown = await res.json();
    
//     // use type guard for unknown
//     if (data && typeof data === 'object' && 'title' in data && typeof data.title === 'string') {
//         return data as Book
//     }

//     throw new Error('Expected to get book but didnt');
// };

// async function run() {
//     const book = await fetchBook();
// }

// interface UserProfie {
//     likes: string[];
// }

// // the ? makes value optional
// interface User {
//     id: string;
//     username: string;
//     profile?: UserProfie;
// }

// const user: User = {
//     id: 'abc',
//     username: 'me'
// }

// const user1: User = {
//     id: 'xyz',
//     username: 'you',
//     profile: {
//         likes: ['cats']
//     }
// }

// if (user1.profile) {
//     user1.profile.likes
// }

// or

// user1.profile?.likes;
// user.profile?.likes;

// function logValue(value: string, message?: string) {
//  if (message) {
//     console.log(message, value)
//  } else {
//     console.log(value)
//  }
// }

// interface Image {
//     src: string;
// }

// interface User {
//     username: string
// }

// predicate 
// function isUser(value: Image | User): value is User {
//     return 'username' in value;
// }

// function logOutput(value: Image | User) {
//     if (isUser(value)) {
//         console.log(value.username);
//     } else {
//         console.log(value.src);
//     }
// }

// logOutput({src: 'img.jpg'});
// logOutput({username: 'asdasd'});

// function logOutput(value: string | number | string[] | Image ) {
//     if (typeof value === 'string') {
//         value
//     } 
//     else if (typeof value === 'number') {
//         value
//     }
//     else if (Array.isArray(value)) {
//         value
//     }
//     else if (typeof value === 'object' && !Array.isArray(value)) {
//         value
//     }
// }

// logOutput('hi there');
// logOutput(123);
// logOutput(['hi', 'there']);
// logOutput({src: 'img.jpg'});



// interface ButtonProps {
//     label: string;
//     onClick: () => void;
// }

// interface IconButtonProps extends ButtonProps {
//     icon: string;
// }

// function Button({label, onClick}: ButtonProps) {
//     return ;
// }

// function IconButton({label, onClick, icon}: IconButtonProps) {
//     return ;
// }


// interface Car {
//     model: string;
//     year: number;
//     setYear: (year: number) => void;
//     setModel: (model: string) => void;
//     description: () => string;
// };

// const mustang: Car = {
//     model: 'Ford',
//     year: 1998,
//     setYear(nextYear: number) {
//         this.year = nextYear;
//     },
//     setModel(nextModel: string) {
//         this.model = nextModel;
//     },
//     description() {
//         return `model: ${this.model}, year: ${this.year}`;
//     }
// };

// ts for props
// interface TaskShowProps {
//     title: string,
//     completed: boolean
// }

// function TaskShow({title, completed}: TaskShowProps) {
//     return (
//         <div>
//             {title} - {completed ? 'Done' : 'No'}
//         </div>
//     )
// }

// <TaskShow title={'Heeray'} completed={true} />



// const color: string = 'red';

// interface Car {
//     year: number;
//     make: string;
//     model: string
// }

// function formCar(car: Car) {
//     return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`
// }

// Using interface is better than this 
// function formCar(car: {year: number, model: string, make: string}) {
//     return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`
// }

// formCar({
//     year: 2015,
//     make: 'Ford',
//     model: 'Mustang'
// })