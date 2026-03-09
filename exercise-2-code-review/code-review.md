# Code Review - UserManagement.js

## 1 - Alteração direta no state

handleNameChange(event) {
this.state.newUserName = event.target.value;
}

### Problema e solução
O state não deveria ser alterado diretamente, o ideal seria usar o 'setState', como no exemplo abaixo:

handleNameChange(event) {
this.setState({ newUserName: event.target.value });
}

## 2 - Uso de push no state e forceUpdate()

addUser() {
const newUser = {
id: this.state.users.length + 1,
name: this.state.newUserName,
email: this.state.newUserEmail
};
this.state.users.push(newUser);
this.forceUpdate();
}

### Problema e solução
O push não deveria ser usado direto no state, e o uso do forceUpdate também não é recomendado. Solução:

addUser() {
const newUser = {
id: this.state.users.length + 1,
name: this.state.newUserName,
email: this.state.newUserEmail
};
this.setState({
    users: [...this.state.users, newUser]
})
}

## 3 - Primeiro input sem onChange

<input
type="text"
placeholder="Nome do usuário"
value={this.state.newUserName}
/>

### Problema e solução
Sem o onChange e com a propriedade value, o usuário não irá conseguir digitar. Solução:

<input
  type="text"
  placeholder="Nome do usuário"
  value={this.state.newUserName}
  onChange={(e) => this.handleNameChange(e)}
/>

## 4 - Falta de key no map

<ul>
{this.state.users.map(user => (
<li>{user.name} ({user.email})</li>
))}
</ul>

### Problema e solução
O React precisa do atributo key no map para identificar os elementos da lista. Solução:

<ul>
{this.state.users.map(user => (
<li key={user.id}>{user.name} ({user.email})</li>
))}
</ul>

## 5 - Uso de class component

## Problema e solução
Atualmente o mais indicado seria usar Function Components com Hooks. Por mais que o class component funcione, seria uma melhoria na arquitetura do código.