import '@testing-library/jest-dom';
import { act, render, screen } from "@testing-library/react"
import HeaderComponent from "../HeaderComponent/HeaderComponent"
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import { LocationContext } from "../Layout/GlobalLayout";
import { Provider } from 'react-redux';
import { store } from "../../store/store";


global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ /* mock data */ }),
    })
  );

it("Should render HeaderComponent with a Login Button", async() => {

    
    // Define the missing variables
    const coordinates = { lat: 23.076253, lng: 72.5478069 }; // Example coordinates
    const setCoordinates = jest.fn(); // Mock function
    const currentCoordinates = { lat: 23.076253, lng: 72.5478069 }; // Example current coordinates

    await act(async () => {
        render(
            <Provider store={store}>
                <LocationContext.Provider value={{ coordinates, setCoordinates, currentCoordinates }}>
                <Router> 
                    <HeaderComponent />
                </Router> 
                </LocationContext.Provider>
            </Provider>
        )
      });

      const loginButtons = screen.getByRole("button",{name: "Sign in"});

      
      expect(loginButtons).toBeInTheDocument();

   
})