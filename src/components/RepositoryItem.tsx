type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

export default function RepositoryItem({
  repository: { name, description, html_url },
}: RepositoryItemProps) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}
