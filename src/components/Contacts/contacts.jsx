import { Item, Button } from "./contacts.styled"

const ContactsList = ({ list }) => (
 <ul>
    {list.map(({id, name, number}) => (
         <Item key={id}>
            <p>{name}: {number}</p>
            <Button type="button">delit</Button>
        </Item>
    ))}
</ul>
 )

export default ContactsList