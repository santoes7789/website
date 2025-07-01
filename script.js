const countriesByUTC = [

	// UTC±0
	["Burkina Faso", "Gambia", "Ghana", "Guinea", "Iceland", "Ireland", "Liberia", "Mali", "Mauritania", "Portugal", "Senegal", "Sierra Leone", "Togo", "United Kingdom"],

	// UTC+1
	["Algeria", "Andorra", "Austria", "Belgium", "Benin", "Cameroon", "Central African Republic", "Chad", "Republic of the Congo", "Croatia", "Czech Republic", "Denmark", "Equatorial Guinea", "France", "Germany", "Hungary", "Italy", "Liechtenstein", "Luxembourg", "Monaco", "Morocco", "Netherlands", "Niger", "Nigeria", "Norway", "Poland", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Tunisia", "Vatican City"],

	// UTC+2
	["Bulgaria", "Botswana", "Burundi", "Cyprus", "Democratic Republic of the Congo", "Egypt", "Estonia", "Finland", "Gabon", "Greece", "Israel", "Jordan", "Latvia", "Lesotho", "Lithuania", "Malawi", "Malta", "Mozambique", "Namibia", "Palestine", "Romania", "Rwanda", "South Africa", "South Sudan", "Sudan", "Syria", "Swaziland", "Tanzania", "Turkey", "Uganda", "Zambia", "Zimbabwe"],

	// UTC+3
	["Bahrain", "Comoros", "Djibouti", "Eritrea", "Ethiopia", "Iraq", "Kenya", "Kuwait", "Madagascar", "Qatar", "Moscow", "Saudi Arabia", "Somalia", "Tanzania", "Uganda", "United Arab Emirates", "Yemen", "Iran"],

	// UTC+4
	["Armenia", "Azerbaijan", "Georgia", "Mauritius", "Oman", "Seychelles", "United Arab Emirates", "Afghanistan"],

	// UTC+5
	["Kazakhstan", "Maldives", "Pakistan", "Tajikistan", "Turkmenistan", "Uzbekistan", "India", "Sri Lanka", "Nepal"],

	// UTC+6
	["Bangladesh", "Bhutan", "Kyrgyzstan", "Cocos (Keeling) Islands", "Myanmar"],

	// UTC+7
	["Cambodia", "Laos", "Thailand", "Vietnam"],

	// UTC+8
	["Brunei", "China", "Hong Kong", "Indonesia", "Malaysia", "Mongolia", "Philippines", "Singapore", "Taiwan"],

	// UTC+9
	["Japan", "Australia", "South Korea", "Palau", "Timor-Leste"],

	// UTC+10
	["Guam", "Papua New Guinea"],

	// UTC+11
	["Solomon Islands", "New Caledonia", "Vanuatu"],

	// UTC+12
	["Fiji", "Marshall Islands", "Nauru", "New Zealand", "Tuvalu", "Wallis and Futuna"],

	// UTC+13
	["Kiribati", "Samoa", "Tonga", "American Samoa", "Niue"],

	// UTC−10
	["Cook Islands", "French Polynesia", "Hawaii"],

	// UTC−9
	["Alaska"],

	// UTC−8
	["Canada", "United States"],

	// UTC−7
	["Mexico"],

	// UTC−6
	["Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua"],

	// UTC−5
	["Bahamas", "Cuba", "Dominican Republic", "Haiti", "Jamaica", "Panama", "Peru", "Trinidad and Tobago", "United States"],

	// UTC−4
	["Barbados", "Bolivia", "Guyana", "Paraguay", "Puerto Rico", "Saint Lucia", "Venezuela"],

	// UTC−3
	["Argentina", "Brazil", "Chile", "Suriname", "Uruguay"],

	// UTC−2
	["South Georgia and the South Sandwich Islands"],

	// UTC−1
	["Cape Verde", "Portugal (Azores)"],
];
document.addEventListener("DOMContentLoaded", () => {

	const countriesText = document.getElementById("morning-countries");
	const UTCHour = new Date().getUTCHours();
	const morningRange = [5, 10];

	for (let i = 0; i <= morningRange[1] - morningRange[0]; i++) {
		for (let country of countriesByUTC[(24 + (morningRange[0] - UTCHour + i)) % 24]) {
			countriesText.textContent += "     " + country;
		}
	}

	countriesText.textContent = countriesText.textContent + " " + countriesText.textContent;
})
