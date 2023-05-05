import { Component } from "react";
import Form from "./Form/form";
import ContactsList from "./Contacts/contacts";


class App extends Component {
  state = {
    contacts: [],
}
  addContacts = data => {
   
    this.setState(({ contacts }) => {
      console.log('contacts in app',contacts)
      const cont = [...contacts]
        cont.push(data)
      return {
        contacts: cont,
    }      
    })
  }
     

render() {  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={this.addContacts} />
      <ContactsList list={this.state.contacts } />
    </div>
  );}
};

export default App
