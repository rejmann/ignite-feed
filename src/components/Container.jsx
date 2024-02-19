import Comment from "./Container/Comment";
import Profiler from "./Container/Profiler";

export default function Container() {
  return (
    <div className="pt-6 px-24 flex max-w-screen-xl gap-6">
      <Profiler />
      <div className="inline-block w-full">
        <Comment />
        <Comment />
      </div>
    </div>
  )
}
