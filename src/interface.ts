// a interface é basicamente um contrato, onde é especificado todos os atributos que determinado projeto precisa ter e ele precisa cumprir todos.

interface User {
    nome: string;
    age: number;
    maior: boolean;
    estado: "solteiro" | "casado";
}

let usuario: User;

usuario = {
    nome: "Gabriel",
    age: 34,
    maior: true,
    estado: "solteiro"
};


const printUser = (user:User) => {
    console.log(user.nome);
    console.log(user.age);
    console.log(user.maior);
    console.log(user.estado);
}

printUser(usuario);
