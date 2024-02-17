import Comment from "./Container/Comment";
import Profiler from "./Container/Profiler";

export default function Container() {
  return (
    <div className="container pt-6 px-24 flex gap-6">
      <Profiler />
      <Comment />
    </div>
  )
}
