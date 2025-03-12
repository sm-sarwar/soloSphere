import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { compareAsc, format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const JobDetails = () => {
    const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  const [job, setJob] = useState({});

  const {
    deadline,
    job_title,
    description,
    category,
    buyer,
    _id,
    max_price,
    min_price,
  } = job;

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_api_URL}/job/${id}`
    );
    console.log(data);
    setJob(data);
  };

  // bid data stored in database
  const handleToSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const comment = form.comment.value;
    const price = form.price.value;
    const jobId = _id

    // 0. bid permission validation 
    if (user?.email === buyer?.email){
      return toast.error('You cannot bid on your own job')
    }
    // 1. deadline validation
    if(compareAsc(new Date(), new Date(deadline))=== 1) {
      return toast.error('Deadline crossed bidding forbidden')
    };

    // 2. price validation
    if(price > max_price) {
      return toast.error('Bid price exceeds maximum allowed price')
    }
    const bidData = {
      email,
      comment,
      price,
      jobId,
      date: startDate,
      job_title,
      category,
      buyer: buyer?.email,
      status: 'pending'
    };
    console.log(bidData);

    try {
      await axios.post(`${import.meta.env.VITE_api_URL}/bid`, bidData);
      toast.success(" bid data saved");
      navigate("/my-bids");
    } catch (err) {
      console.log(err);
      toast.error(err?.
        response?.data);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          {deadline && (
            <span className="text-sm font-light text-gray-800 ">
              Deadline: {format(new Date(job.deadline), "PP")}
            </span>
          )}
          <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
            {category}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {job_title}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">{description}</p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Buyer Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                Name: {buyer?.name}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: {buyer?.email}
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src={buyer?.photo} alt={buyer?.name} />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            Range: ${min_price} - ${max_price}
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Place A Bid
        </h2>

        <form onSubmit={handleToSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Comment
              </label>
              <input
                id="comment"
                name="comment"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className={`px-8 ${user?.email === buyer?.email && 'btn btn-disabled'} py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600`}
            >
              Place Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default JobDetails;
