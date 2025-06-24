import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function loadRepositories() {
      const response = await fetch(
        "https://api.github.com/users/yan-carlosif/repos"
      );
      const data = await response.json();

      setRepositories(data);
    }

    loadRepositories();
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
