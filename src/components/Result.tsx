export default function Result({ props }: { props: string | null }) {
  return <div className="result">{props ? props : ""}</div>;
}
