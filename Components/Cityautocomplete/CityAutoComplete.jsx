import React, { useState } from 'react';

const PlaceSearch = ({ setCityName, sendMessage }) => {
    const [input, setInput] = useState('');
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInput(inputValue);

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
    };

    const handlePlaceSelect = (placeId) => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ placeId }, (results, status) => {
            if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
                const selectedPlace = results[0];
                setSelectedPlace(selectedPlace);
                setInput(selectedPlace.formatted_address);
                setSuggestions([]);
                console.log(selectedPlace.formatted_address)

                const cityComponent = selectedPlace.address_components.find(
                    (component) => component.types.includes('locality')
                );
                const cityName = cityComponent ? cityComponent.short_name : '';
                setCityName(cityName);
                console.log(cityName);
                console.log(input)
            }
        });
    };

    return (
        <div className="flex flex-col mt-4 w-full mx-auto">
            {suggestions.length > 0 && (
                <ul className="mt-2 w-full mx-auto">
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
                    value={input}
                    placeholder="Enter a location"
                    onChange={handleInputChange}
                    className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />

                <div className="absolute right-0 top-0 h-full flex justify-center items-center gap-3">
                    <button onClick={() => sendMessage(input)} className="py-2 bg-blue rounded-lg text-white px-2">
                        Send
                    </button>
                </div>
            </div>


        </div>
    );
};

export default PlaceSearch;