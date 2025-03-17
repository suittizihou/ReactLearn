import "../css/button.css";

export function MyButton({ title, onClick }: { title: string, onClick: () => void }) {
  return (
    <button className="my-button" onClick={ onClick }>{title}</button>
  )
}