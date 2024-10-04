import React, { useState } from "react";

const truncateParagraph = (
  paragraph: string,
  charLimit: number = 200
): string => {
  if (paragraph.length > charLimit) {
    return paragraph.slice(0, charLimit) + "...";
  }
  return paragraph;
};

interface FeedbackParasProps {
  paragraphs: string[];
  charLimit?: number;
}

const FeedbackParas: React.FC<FeedbackParasProps> = ({
  paragraphs,
  charLimit = 200,
}) => {
  const [showAll, setShowAll] = useState(false);

  const shouldTruncate =
    paragraphs.length > 1 || paragraphs[0].length > charLimit;

  return (
    <div className="paragraph-component bg-[rgb(30,30,30)] rounded p-6 flex flex-col space-y-4">
      {shouldTruncate && !showAll ? (
        <>
          <p>{truncateParagraph(paragraphs[0], charLimit)}</p>
          <button
            className="text-blue-400 hover:text-blue-300 transition-colors ml-auto"
            onClick={() => setShowAll(true)}
          >
            Read More
          </button>
        </>
      ) : (
        <>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {shouldTruncate && (
            <button
              className="text-blue-400 hover:text-blue-300 transition-colors ml-auto"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default FeedbackParas;
