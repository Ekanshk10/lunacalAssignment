import React from "react";

const LeftSide = () => {
  return (
    <div className="w-full max-w-[836px] h-[689px] rounded-[27px] border-(--leftSide-border) bg-[#616161D1] px-8 py-4 overflow-auto wrap-break-words">
      <ol className="text-white font-medium text-[16px] list-decimal leading-[30px] space-y-2">
        <li>
          Make a duplicate of this Figma by clicking on the drop-down next to
          the name ‘Assignment’ (visible on the top left side of the screen).
          Then you can use your local file.
        </li>
        <li>
          Create a new GitHub repository for the assignment. Build the
          assignment using React or Next.js.
        </li>
        <li>
          You may use any styling or UI library, such as Tailwind CSS, shadcn,
          Chakra UI, or Material UI.
        </li>
        <li>
          Keep the left half of the screen empty (but it should be responsive
          for laptop, not mobile).
        </li>
        <li>Focus on the two widgets on the right-hand side.</li>
        <li>
          The first widget has three tabs: "about me", "experiences" &
          "recommended", these should be clickable.
        </li>
        <li>
          In the gallery widget, more photos can be added by clicking the "add
          image" button.
        </li>
        <li>
          All the components should be responsive (for laptop screens;
          everything above 768px width).
        </li>
        <li>
          Replicate the exact UI; with exact padding, margins, shadows,
          interactions (if any).
        </li>
        <li>
          Ensure that the two widgets are accurately aligned with each other
          (relative right, left padding).
        </li>
        <li>
          Submit the following:
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Live Assignment Link – Host the assignment on any platform (e.g.,
              Vercel, Netlify, Render, etc.) and share the live URL.
            </li>
            <li>
              Public GitHub Repository Link – Provide the link to your public
              GitHub repository containing the assignment code.
            </li>
          </ol>
        </li>
      </ol>

      <p className="text-white font-medium text-[16px] leading-[30px] mt-4">
        NOTE: Recreate all interactions and effects visible in the prototype
        preview (accessible by clicking the Play button at the top right in
        Figma).
      </p>
    </div>
  );
};

export default LeftSide;
