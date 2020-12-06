import {Container, Jumbotron} from "react-bootstrap";
import Dashboard from "./Dashboard"
import Head from "next/head";

export default function Home() {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    return (
        <div className='App'>
            <Head>
                <title>Axe's Garage</title>
            </Head>
            <main>
            <Container fluid>
                <Jumbotron>
                    <h1>Axe's Garage</h1>
                    <h6>Kicking ass & taking names since 2001</h6>
                </Jumbotron>
                <Dashboard baseUrl={baseUrl}/>
            </Container>
            </main>
            <footer>
                Axe's Garage LLC &copy; 2020
            </footer>
        </div>
    )
}
