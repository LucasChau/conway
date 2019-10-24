import React from 'react'
import {Card} from 'react-bootstrap'

export default function Instruction() {
    return (
        <Card>
        <Card.Header as="h5">Instructions</Card.Header>
        <Card.Body>
            <Card.Text>Click any cell to activate it.</Card.Text>
            <Card.Title>Patterns</Card.Title>
            <Card.Subtitle>Still lifes</Card.Subtitle>
            <Card.Text>
                which do not change from one generation to the next
            </Card.Text>
            <Card.Subtitle>Oscillators</Card.Subtitle>
            <Card.Text>
                which return to their initial state after a finite number of generations
            </Card.Text>
            <Card.Subtitle>Spaceships</Card.Subtitle>
            <Card.Text>
                which translate themselves across the grid
            </Card.Text>
        </Card.Body>
        </Card>
    )
}
