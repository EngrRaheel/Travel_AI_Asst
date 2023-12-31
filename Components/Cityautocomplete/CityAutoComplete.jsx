import React, { useState, useCallback } from 'react';
import { BsSend } from 'react-icons/bs';

const PlaceSearch = ({ setCityName, sendMessage, CityInput, setCityInput}) => {

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = useCallback((event) => {
    const inputValue = event.target.value;
    setCityInput(inputValue);

    if (inputValue) {
      const autocompleteService = new window.google.maps.places.AutocompleteService();
      autocompleteService.getPlacePredictions(
        { input: inputValue },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  }, []);

  const handlePlaceSelect = useCallback((placeId) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ placeId }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
        const selectedPlace = results[0];
        setSelectedPlace(selectedPlace);
        setCityInput(selectedPlace.formatted_address);
        setSuggestions([]);

        const cityComponent = selectedPlace.address_components.find(
          (component) => component.types.includes('locality')
        );
        const cityName = cityComponent ? cityComponent.short_name : '';
        setCityName(cityName);


      }
    });
  }, [setCityName]);

  return (
    <div className="flex flex-col mt-4 w-full mx-auto rounded-md">
      {suggestions.length > 0 && (
        <ul className="mt-2 w-full mx-auto px-2 bg-[white]/75">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handlePlaceSelect(suggestion.place_id)}
              className="cursor-pointer p-2 hover:bg-gray-200 rounded-md"
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
      <div className="flex mx-auto w-full relative">
        <input
          type="text"
          value={CityInput}
          placeholder="Enter a location"
          onChange={handleInputChange}
          className="w-full px-4 py-6 border border-y-[gray]/70 border-l-0 border-r-0 rounded outline-none "
        />

        <div className="absolute right-0 top-0 h-full flex justify-center items-center gap-3">
          <button
            onClick={() => sendMessage(CityInput)}
            className="py-2 rounded-lg text-white px-6 outline-none"
          >
            <BsSend size={28} color="#5BB08B" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceSearch;
