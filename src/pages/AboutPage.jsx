import Card from "../components/shared/Card"

import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p> This is a React app to leave feedback for a product or service </p>
        <p> Version : 1.0.0</p>
        <p>
          Coded by <a href="https://github.com/P-Rut">PR</a>.
        </p>
        <p>
          <Link to="/">Back to HomePage </Link>
          {/* Lepiej uzywac Link i potem "to={]" bo dzieki temu przechadzac
           na inna zakladke storny strona nie musi sie odswierzac i jest szybsza  */}
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
