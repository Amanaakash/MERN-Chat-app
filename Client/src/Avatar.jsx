export default function Avatar({ userId, username, online }) {
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-teal-200",
  ];
  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];
  const firstLetter = username[0];
  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center " + color}>
      <div className="text-center w-full opacity-60">
        {firstLetter.toUpperCase()}
      </div>
      {online && (
        <div className="absolute w-3 h-3 bg-green-500 rounded-full bottom-0 right-0 border border-white"></div>
      )}
      {!online && (
        <div className="absolute w-3 h-3 bg-gray-400 rounded-full bottom-0 right-0 border border-white"></div>
      )}
    </div>
  );
}
