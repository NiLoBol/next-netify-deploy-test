import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt, HipenCilAlt } from "react-icons/hi";

const getTopic = async () => {
  const api =process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${api}/api/topics`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch ");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopic();
  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

