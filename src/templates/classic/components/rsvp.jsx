import { Selina, Catamaran } from "@/styles/fonts";

export default function Rsvp() {
  return (
    <section
      className="bg-secondary-bg text-secondary-text flex flex-col items-center justify-start h-fit py-10"
      name="event"
    >
      <h1 className={`${Selina.className} text-6xl text-center mb-8`}>RSVP</h1>
      <form action="#" className="space-y-6 w-80 py-5">
        <div>
          <label for="name" className={`${Catamaran.className} block text-lg`}>
            Nama
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.166 10.565l-1.25-1.25 6.666-6.667 1.25 1.25-6.666 6.667zm14.334 2.879V15h-1.556l-5.61-5.61 1.556-1.556 5.61 5.61zm-4.257-1.714l1.556 1.556-1.154 1.154c-.4.4-.933.666-1.497.666h-3.048v-1.778h2.537l1.153-1.153z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            for="attendance"
            className={`${Catamaran.className} block text-lg`}
          >
            Kehadiran
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="attendance"
              id="attendance"
              className="block w-full pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.166 10.565l-1.25-1.25 6.666-6.667 1.25 1.25-6.666 6.667zm14.334 2.879V15h-1.556l-5.61-5.61 1.556-1.556 5.61 5.61zm-4.257-1.714l1.556 1.556-1.154 1.154c-.4.4-.933.666-1.497.666h-3.048v-1.778h2.537l1.153-1.153z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            for="guests"
            className={`${Catamaran.className} block text-lg`}
          >
            Jumlah tamu
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              name="guests"
              id="guests"
              className="block w-full pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.166 10.565l-1.25-1.25 6.666-6.667 1.25 1.25-6.666 6.667zm14.334 2.879V15h-1.556l-5.61-5.61 1.556-1.556 5.61 5.61zm-4.257-1.714l1.556 1.556-1.154 1.154c-.4.4-.933.666-1.497.666h-3.048v-1.778h2.537l1.153-1.153z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            for="wishes"
            className={`${Catamaran.className} block text-lg`}
          >
            Wishes
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="wishes"
              id="wishes"
              className="block w-full pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.166 10.565l-1.25-1.25 6.666-6.667 1.25 1.25-6.666 6.667zm14.334 2.879V15h-1.556l-5.61-5.61 1.556-1.556 5.61 5.61zm-4.257-1.714l1.556 1.556-1.154 1.154c-.4.4-.933.666-1.497.666h-3.048v-1.778h2.537l1.153-1.153z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className={`${Catamaran.className} w-full mt-10 py-2 px-4 border border-secondary-text rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
}
