import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const BookCard = (props) => {
    const {book} = props
  return (
      <Card>
          <Image src={book.image} />
          <Card.Content>
              <Card.Header>{book.title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Icon name='user' />
            {book.author}
          </Card.Content>
      </Card>
  )
}

export default BookCard
