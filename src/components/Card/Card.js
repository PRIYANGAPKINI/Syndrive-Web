import React from 'react';
import Contacts from '../Contacts';
import './Card.css'
import SimpleMap from '../Map';
// import GoogleMapLoader from '../Map/Map';
// import MapContainer from '../Maps/Maps';

const Card = ({ name, dob, bloodGroup, id, contacts }) => {
	const year = Number(dob.substr(4, 4));
	const month = Number(dob.substr(2, 2)) - 1;
	const day = Number(dob.substr(0, 2));
	let today = new Date();
	let age = today.getFullYear() - year;
	if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
		age--;
	}

	return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 h-25 w-40'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='profile photo' />
			<div>
				<p className='f4'><b>Name: </b>{name}</p>
				<p className='f5 tl'><b>DOB: </b>{day}.{month+1}.{year} (Age: {age})</p>
				<p className='f5 tl'><b>Blood Group: </b>{bloodGroup}</p>
				{/*<div id="map"></div>
					<script async defer
				    	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBI-f0FOJkTgdaurY2Zy41GimJIFHRukGc&callback=initMap">
				    </script>*/}
				<p className='f5 tl'></p>
				<SimpleMap />
				{/*<MapContainer />*/}
				<p className='f5 tl'><b>Emergency Contacts: </b></p>
				{
					contacts.map((contact, i) => {
						return (
							<Contacts key={i}
								name={contacts[i].name} 
								number={contacts[i].number}
								relation={contacts[i].relation}
							/>
						);
					})
				}
				<input 
					className='addressbox'
					type='checkbox'
					name='action'
					value='addressed'
				/> Issue Addressed
			</div>
		</div>
	);
}

export default Card;