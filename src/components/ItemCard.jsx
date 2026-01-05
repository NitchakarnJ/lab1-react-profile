import { useState } from "react";

function ItemCard({ name, desc, cost, price, total }) {
  const [likes, setLikes] = useState(0); // State เก็บจำนวน Like

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{name}</h2>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>{bio}</p>

      {/* ส่วนที่เพิ่มใหม่ */}
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Like: {likes}
      </button>
    </div>
  );
}

export default ProfileCard;
