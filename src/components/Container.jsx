import Comment from "./Container/Comment";
import Profiler from "./Container/Profiler";

export default function Container() {
  return (
    <div className="pt-6 px-24 flex w-full gap-6">
      <Profiler />
      <Comment />
    </div>
  )
}
