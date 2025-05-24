import { GenteRomantica, Catamaran } from "@/styles/fonts";

export default function Rsvp() {
    return (
        <section
            className=" bg-[#333333] flex items-center justify-center min-h-screen p-8"
            name="event"
        >
            <div className="bg-white shadow-lg w-full mx-auto rounded-tl-full rounded-tr-full">
                <div className="text-center bg-[#5C5C5C] rounded-tl-full rounded-tr-full py-4">
                    <h2 className="text-xl font-bold mb-4 pt-5">Reservation</h2>
                    <p className="text-sm mb-6">Please confirm your attendance before, <br /> Feb 24th, 2024</p>

                    <p className="mb-2">Will you attend our wedding?</p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow">Will Attend</button>
                        <button className="bg-transparent border border-white px-4 py-2 rounded-lg shadow">Unable to Attend</button>
                    </div>

                    <p className="mb-2">Which event will you attend?</p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="bg-transparent border border-white px-4 py-2 rounded-lg shadow">Akad Nikah</button>
                        <button className="bg-transparent border border-white px-4 py-2 rounded-lg shadow">Resepsi</button>
                    </div>
                    <div className="flex justify-center mb-6">
                        <button className="bg-transparent border border-white px-4 py-2 rounded-lg shadow">Attend All</button>
                    </div>

                    <p className="mb-2">People you bring including you?</p>
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        <button className="bg-transparent border border-white px-4 py-2 rounded-lg shadow">-</button>
                        <span className="px-4 py-2">1</span>
                        <button className="bg-transparent border border-white px-4 py-2 rounded-lg shadow">+</button>
                    </div>

                    <button className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow">Confirm</button>
                </div>
            </div>
        </section>
    );
}
