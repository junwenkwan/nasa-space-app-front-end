import React from 'react';

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import ApiController from './ApiController'

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

let apiController = new ApiController()
var firstTime = true;
var firstTimeCurrent = true;

export default function Home() {
    
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      });

    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const [predictions, setPredictions] = React.useState([]);
    const [currentFires, setCurrentFires] = React.useState([]);

    const onMapClick = React.useCallback((e) => {
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
    
    //[-18.0, 130] [-18.5, 135.8]
    if (markers.length === 2 && firstTime) {
      var topLeftCoor =  [markers[0].lat, markers[0].lng];
      var bottomRightCoor = [markers[1].lat, markers[1].lng];  
      firstTime = false;

      apiController.getPredictionAPI(topLeftCoor , bottomRightCoor, new Date()).then(
        object => {
          for (var i = 0; i < object.length; i++) {
            if (object[i].class_id === 1) {
              var latlng = new window.google.maps.LatLng(object[i].latitude, object[i].longitude); 
              setPredictions((current) => [
                ...current,
                {
                lat: latlng.lat(),
                lng: latlng.lng(),
                },
              ]);
            }
          }
        }
      )
    }

    if (firstTimeCurrent) {
      firstTimeCurrent = false
      apiController.getCurrentFireAPI().then(
        object => {
          
          for (var i = 0; i < 200; i++) {
            var latlng = new window.google.maps.LatLng(object[i].latitude, object[i].longitude); 
              setCurrentFires((current) => [
                ...current,
                {
                lat: latlng.lat(),
                lng: latlng.lng(),
                acq_date: object[i].acq_date,
                acq_time: object[i].acq_time,
                bright: object[i].bright_ti4

                },
              ]);
          }
        }
      )
     
    }

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

            />
          ))}

          {predictions.map((prediction) => (
              <Marker
              key={`${new Date()}+${prediction.lat}-${prediction.lng}`}
              position={{ lat: prediction.lat, lng: prediction.lng }}
              icon={{
                url: `warning.svg`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(15, 15),
              }}
            />
          ))}

          {currentFires.map((currentFire) => (
              <Marker
              key={`${currentFire.acq_date}-${currentFire.acq_time}-${currentFire.lat}-${currentFire.lng}-${currentFire.bright}`}
              position={{ lat: currentFire.lat, lng: currentFire.lng }}
              icon={{
                url: `fire.svg`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(15, 15),
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