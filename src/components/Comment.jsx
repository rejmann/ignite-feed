import Avatar from "./Avatar";

import avatarUrl from './../assets/img/profiler.jpeg'
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useState } from 'react';

export default function Comment({ name, role, content }) {
  const [like, setLike] = useState(0);

  function handleLike() {
    setLike(state => state + 1)
  }

  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 hidden md:block">
        <Avatar
          url={avatarUrl}
          className="w-full"
        />
      </div>
      <div className="w-full space-y-3">
        <div className="p-3 h-28 bg-i-gray-500 w-full rounded-md space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-semibold">
                {name}
              </p>
              <p className="hidden md:block text-sm text-i-gray-400">
                {role}
              </p>
            </div>
            <span className="text-i-gray-300 hover:text-i-red-500">
              <Trash size={22} />
            </span>
          </div>
          <p className="text-sm">
            {content}
          </p>
        </div>
        <button
          type="button" 
          className="flex items-center gap-2 text-xs md:text-sm text-i-gray-300"
          onClick={handleLike}
        >
          <ThumbsUp size={22} />
          <span>Curtir</span>
          <div className="w-1 h-1 rounded-full border-2"></div>
          <span>{like}</span>
        </button>
      </div>
    </div>
  )
}
