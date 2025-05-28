// components/ForumTopicCard.tsx
import React from "react";

interface ForumTopic {
  id: number;
  title: string;
  category: string;
  replies: number;
  lastReply: string;
  author: string;
  authorAvatar: string;
}

export function ForumTopicCard({ topic }: { topic: ForumTopic }) {
  return (
    <div
      role="article"
      aria-label={`Tópico: ${topic.title} por ${topic.author}`}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold"
        >
          {topic.authorAvatar}
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-lg">{topic.title}</h4>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-sm text-gray-600">Por {topic.author}</span>
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
              {topic.category}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">{topic.replies} respostas</div>
          <div className="text-xs text-gray-500">{topic.lastReply}</div>
        </div>
      </div>
    </div>
  );
}
