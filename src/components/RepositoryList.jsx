import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://api.github.com/users/yan-carlosif/repos"
    );
    const data = await response.json();

    setRepositories(data);
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
