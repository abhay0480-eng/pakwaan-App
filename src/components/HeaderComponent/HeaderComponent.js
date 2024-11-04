import { Link } from "react-router-dom";
import logo from "../../../public/bglogo.png";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useContext, useEffect, useRef, useState } from "react";
import { LocationContext } from "../Layout/GlobalLayout";
import useGetLocationData from "../../utils/useGetLocationData";
import axios from "axios";

const HeaderComponent = () => {
  const [place, setPlace] = useState("");
  const locationName = useGetLocationData()
  const onlineStatus = useOnlineStatus();
  const [placeOptions, setPlaceOption] = useState([])
  const { setCoordinates,currentCoordinates,coordinates } = useContext(LocationContext);
  const isFirstRender = useRef(true);
  const dropdownRef = useRef(null);
  const debounceTimer = useRef(null);
  const [isCurrentLocation,setIsCurrentLocation] = useState(false);

  const handleInputChange = (event) => {
    setPlace(event.target.value);
  };

  console.log("HeaderComponent called");
  
  const getCoordinates = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search`,
        {
          params: {
            q: place,
            format: "json",
          },
        }
      );
     

      if (response.data && response.data.length > 0) {
        const location = response.data[0];

        setPlaceOption(response?.data);

      } else {
        console.error("No results found for the place name");
      }
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Skip the first render
    } else {
      // Clear previous debounce timer if it exists
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      // Set up a new debounce timer
      debounceTimer.current = setTimeout(() => {
        getCoordinates();
      }, 500); // Adjust the delay as needed
    }

    // Cleanup function to clear timer if component unmounts
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [place]);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setPlaceOption([])
      setPlace("") // Hide dropdown when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleCurrentLocation = () => {
    const handleSuccess = (position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setIsCurrentLocation(false)
    };

    const handleError = (error) => {
      console.error("Geolocation error:", error);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }

  function areObjectsEqual(obj1, obj2) {
    // Check if both are objects and not null
   console.log("obj1 obj2",obj1,obj2);

   if(obj1?.lat===obj2?.lat && obj1?.lng===obj2?.lng){
    setIsCurrentLocation(true)
   }else{
    setIsCurrentLocation(false)
   }
  }


  useEffect(()=>{
    areObjectsEqual(currentCoordinates,coordinates)
  },[currentCoordinates,coordinates])

  return (
    <div className="p-5  rounded-xl ">
      <div className=" max-w-screen-2xl mx-auto flex justify-between">
        <div className="flex justify-start items-center gap-5">
            <Link to="/" className="w-40 h-20 ">
            <img
                src={logo}
                alt=""
                className="object-cover w-full h-full bg-transparent"
            />
            </Link>
            <div className="flex justify-start items-center gap-x-5">
              <div className="relative"  ref={dropdownRef}>
                <input
                    type="text"
                    value={ place }
                    onChange={handleInputChange}
                    placeholder={ locationName?.locationdata?.display_name }
                    className="px-5 py-2 w-96"
                />
                <div className="absolute top-11 z-30 w-max shadow-lg rounded-xl max-h-80 overflow-y-scroll  bg-white">
                  {placeOptions?.map((items,index)=>{
                      return(<div className="px-5 py-2 border-b-[1px] cursor-pointer border-gray-500" onClick={()=>{setCoordinates({
                          lat:items?.lat,
                          lng: items?.lon,
                        }),setPlaceOption([])}} key={items?.osm_id}>{items?.display_name}</div>)
                  })}
                </div>
              </div>

              <div>
                 <button onClick={()=>handleCurrentLocation()}   className={`px-4 ${isCurrentLocation?"hidden":"block"} py-2 bg-slate-600 text-white rounded-xl`}>Get Current Location</button> 
              </div>
            </div>
            
        </div>
       
        <div className="flex justify-between gap-5 items-center cursor-pointer ">
          <div
            className={`bg-black bg-opacity-35 h-1/3 absolute top-0 left-0 w-full overflow-hidden z-30  ${
              onlineStatus ? "max-h-0" : "max-h-[1200px]"
            } duration-700`}
          >
            <div className={`flex items-center justify-center `}>
              <div className="relative">
                <div className="w-1 h-10 bg-gray-800 mx-auto"></div>
                <div
                  className={`swing  bg-white text-black text-2xl font-bold py-4 px-8 rounded shadow-md border-4 `}
                >
                  {onlineStatus ? "You are Online" : "You are Offline"}
                </div>
              </div>
            </div>
          </div>

          <Link to="search">Search</Link>
          <Link to="help">Help</Link>
          <Link to="offers">Offers</Link>
          <Link to="about">About</Link>
          <button>Sign in</button>
          <Link to="cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
