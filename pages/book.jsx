import { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Default theme CSS

const Booking = () => {
  // Store the dates as ISO strings to avoid serialization issues
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date().toISOString(),
      endDate: addDays(new Date(), 7).toISOString(),
      key: "selection",
    },
  ]);

  // Handle booking button click
  const handleBooking = () => {
    toast.error("Rooms are not available...", {
      position: "top-center",
      autoClose: 3000,
    });
  };

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
            ranges={[{
              startDate: new Date(dateRange[0].startDate),
              endDate: new Date(dateRange[0].endDate),
              key: "selection",
            }]}
            onChange={(item) =>
              setDateRange([
                {
                  startDate: item.selection.startDate.toISOString(),
                  endDate: item.selection.endDate.toISOString(),
                  key: "selection",
                },
              ])
            }
            rangeColors={["#0ea5e9"]} // Sky blue color
          />
        </div>
        <button
          onClick={handleBooking}
          className="mt-8 bg-white text-sky-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-sky-100 transition"
        >
          Book Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Booking;
