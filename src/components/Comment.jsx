import Avatar from "./Avatar";

import avatarUrl from './../assets/img/profiler.jpeg'
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export default function Comment({ name, role }) {
  return (
    <div className="flex gap-4">
      <Avatar
        url={avatarUrl}
        className="w-12 h-12"
      />
      <div className="w-full space-y-3">
        <div className="p-3 h-28 bg-i-gray-500 w-full rounded-md space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-semibold">
                {name}
              </p>
              <p className="text-sm text-i-gray-400">
                {role}
              </p>
            </div>
            <Trash size={22} />
          </div>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <ThumbsUp size={22} />
          <span>Curtir</span>
          <div className="w-1 h-1 rounded-full border-2"></div>
          <span>3</span>
        </div>
      </div>
    </div>
  )
}
