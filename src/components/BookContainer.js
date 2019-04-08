import React, { Component } from 'react'
import BookCard from './BookCard'
import { Grid } from 'semantic-ui-react'

class BookContainer extends Component {
    
    render(){
    
        let style = {
            width: '85%',
            margin: 'auto',
            paddingTop: '25px'
        }
    
    const {books} = this.props
    
    const makeBooks = () => {
        return books.map(book => <BookCard key={book.id} book={book}/>)
    }
    
    return (
        <div style={style}>
        <div className="bookCont">
            <Grid stackable columns={3} >
             <Grid.Row>
                <Grid.Column>
                    {makeBooks()[0]}
                </Grid.Column>
                <Grid.Column>
                    {makeBooks()[1]}
                </Grid.Column>
                <Grid.Column>
                    {makeBooks()[2]}
                </Grid.Column>
             </Grid.Row>

             <Grid.Row>
                <Grid.Column>
                    {makeBooks()[3]}
                </Grid.Column>
                <Grid.Column>
                    {makeBooks()[4]}
                </Grid.Column>
                <Grid.Column>
                    {makeBooks()[5]}
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    {makeBooks()[6]}
                </Grid.Column>
                <Grid.Column>
                    {makeBooks()[7]}
                </Grid.Column>
                <Grid.Column>
                    {makeBooks()[8]}
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
        </div>
      )
    }
}

export default BookContainer