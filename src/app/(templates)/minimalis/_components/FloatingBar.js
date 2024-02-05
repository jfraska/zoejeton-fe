"use client";

export default function FloatingBar() {
  return (
    <div className="fixed flex justify-center items-center bottom-16 left-5 z-50 w-10 h-10 border border-transparent rounded-full bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-60">
      <svg
        width="14"
        height="21"
        viewBox="0 0 22 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6.3983V23.02M8 2V27M14 20.7457V8.23709M20 10.3057V18.4714"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
