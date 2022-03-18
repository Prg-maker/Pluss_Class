import {
  Container,
  Avatar,
  Name,
  Separete
} from './styles'

interface Props{
  name: string;
  avatar: string;
}

export function User({
  avatar,
  name
}:Props){
  return(
    <Container>
      <div>
        <div className='profile'>
          <Avatar src={avatar} alt={name}/>
          <Name>{name}</Name>
        </div>
        <Separete className='separete'/>
      </div>
    </Container>
  )
}