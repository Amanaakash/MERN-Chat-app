import Avatar from "./Avatar";

export default function Contact({ id, username, onClick, selected, online }) {
  return (
    <div
      key={id}
      onClick={() => {
        onClick(id);
      }}
      className={`border-b border-gray-800 py-2 pl-2 flex items-center gap-2 cursor-pointer ${
        selected ? "bg-blue-300" : ""
      }`}
    >
      <Avatar online={online} username={username} userId={id} />
      <span>{username}</span>
    </div>
  );
}
