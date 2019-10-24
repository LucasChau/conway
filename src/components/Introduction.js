import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default function Header() {
    return (
        <Jumbotron>
            <h1>Welcome to Conway's Game of Life</h1>
            Conway chose his rules carefully, after considerable experimentation, to meet these criteria:
            <ol>
                <li>There should be no explosive growth.</li>
                <li>There should exist small initial patterns with chaotic, unpredictable outcomes.</li>
                <li>There should be potential for von Neumann universal constructors.</li>
                <li>The rules should be as simple as possible, whilst adhering to the above constraints.</li>
            </ol>
            <p>
                <Button variant="primary" href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target="blank">Learn more</Button>
            </p>
        </Jumbotron>
    )
}
