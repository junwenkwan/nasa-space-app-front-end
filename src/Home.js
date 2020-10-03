import React from 'react';

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";

import usePlacesAutocomplete, {
getGeocode,
getLatLng,
} from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

import { formatRelative } from "date-fns";

const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
const center = {
lat: -37.560902,
lng: 143.854965,
};

export default function Home() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      });

    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());
        // fetch('http://3.133.101.18/predict', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     latitude: e.latLng.lat(),
        //     longitude: e.latLng.lng(),
        //   })
        // })
        // probably where the POST API will be which then will setState GoogleMap InfoWindow below
    
        setMarkers((current) => [
            ...current,
            {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date(),
            },
        ]);
      }, []);
    
      const mapRef = React.useRef();
          const onMapLoad = React.useCallback((map) => {
          mapRef.current = map;
      }, []);
    
      const panTo = React.useCallback(({ lat, lng }) => {
          mapRef.current.panTo({ lat, lng });
          mapRef.current.setZoom(14);
      }, []);
    
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>
        <Search panTo={panTo} />
        <Locate panTo={panTo} />
  
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng, time: marker.time }}
              onClick={() => {
                setSelected(marker);
              }}
              icon={{
                url: `/logo.svg`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
  
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>
                  Fire spotted !
                </h2>
                <p>Spotted {formatRelative(selected.time, new Date())}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    )
}

function Locate({panTo}) {
    return (
      <button
        className="locate" 
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
          () => null
          );
        }}>
        <img src='/locate_me.png' alt="compass - locate me"/>
      </button>
    );
  }
  
  function Search({ panTo }) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => -37.560902, lng: () => 143.854965 },
        radius: 100 * 1000,
      },
    });
  
    const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
  
      try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        panTo({ lat, lng });
      } catch (error) {
        console.log("😱 Error: ", error);
      }
    };
  
    return (
      <div className="search">
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search your location"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  }