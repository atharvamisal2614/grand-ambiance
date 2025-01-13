import { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-toastify/dist/ReactToastify.css";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Default theme CSS

const Booking = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleBooking=()=>{
    alert("Rooms are not available...")
  }

  return (
    <div className="min-h-screen flex bg-sky-50">
      {/* Left Side: Large Image */}
      <div className="w-1/2 h-screen overflow-hidden">
        <img
          src="/images/image1.jpg" // Replace with your image path
          alt="Large Room"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Date Range Picker */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-sky-500 text-white px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Book Your Stay</h1>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            rangeColors={["#0ea5e9"]}
          />
        </div>
        <button
          onClick={handleBooking}
          className="mt-8 bg-white text-sky-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-sky-100 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
