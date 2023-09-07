const productsData = [
    {
        id: 1,
        name: "Rockerz 450 DC Edition",
        description: "Over Ear Bluetooth Headphones with Upto 15 Hours Playback, Adaptive Headband, 40mm Dynamic Driver, 300 mah Battery...",
        price: "₹1499",
        image: "./images/headphone-prod-1.webp",
    },
    {
        id: 2,
        name: "Rockerz 420",
        description: "Wireless Bluetooth Headphone with 40mm Dyanmic Drivers, 8 Hours Non-Stop Playback, Lightweight & Portable...",
        price: "₹999",
        image: "./images/headphone-prod-4.webp",
    },
    {
        id: 3,
        name: "Rockerz 518",
        description: "Wireless Headphone with Dynamic 50mm Driver, Up To 20 Hours Of Playtime, Easy Control & Lightweight...",
        price: "₹1599",
        image: "./images/headphone-prod-3.webp",
    },
    {
        id: 4,
        name: "Rockerz 550",
        description: "Over Ear Bluetooth Headphones with Upto 20H Playback, 50mm Dynamic Driver, 500mAh Battery...",
        price: "₹1999",
        image: "./images/headphone-prod-2.webp",
    },
    {
        id: 5,
        name: "Party Pal 50",
        description: "Wireless Bluetooth Speaker with 20W RMS Stereo Sound, RGB LEDs, 4.5 Hrs Playback, USB, FM, AUX, BT...",
        price: "₹3999",
        image: "./images/speaker-prod-5.webp",
    },
    {
        id: 6,
        name: "Wave Neo",
        description: "'1.69' HD Display, Upto 7 Days Battery Life, IP68 Sweat & Water Resistant, 100+ Watch Faces...",
        price: "₹1999",
        image: "./images/watch-prod-1.webp",
    },
    {
        id: 7,
        name: "Airdopes 170",
        description: "Wireless Bluetooth Earbuds with 13mm Drivers, Upto 50 hours of battery life, BEAST™ Mode, Quad Mics with ENx™ Technology...",
        price: "₹1299",
        image: "./images/earbuds-prod-3.webp",
    },
    {
        id: 8,
        name: "Stone 1000v2",
        description: "14W Powerful Stereo Sound, Up to 8hrs Nonstop Playback, Travel & Party Booster, 3000mah Battery...",
        price: "₹2999",
        image: "./images/speaker-prod-2.webp",
    },
    {
        id: 9,
        name: "Ultima Chronos",
        price: "₹2999",
        description: "'Smartwatch with 1.96' AMOLED Display, BT Calling, Crest OS+, 100+ Watch Faces",
        image: "./images/watch-prod-2.webp",
    },
    {
        id: 10,
        name: "Lunar Connect Pro",
        price: "₹4299",
        description: "'Premium Round Dial Smartwatch with 1.39' (3.53 cms) Big Amoled Display, Watch Face Studio, 700+ Active Modes, 15 Days Of Battery Life",
        image: "./images/watch-prod-3.webp",
    },
    {
        id: 11,
        name: "Nirvana Ion",
        price: "₹2299",
        description: "Bluetooth Wireless Earbuds with Crystal Bionic Sound powered by HiFi®️ DSP, 120HRS Playback, Dual EQ Modes, Quad Mics with ENx™ Technology",
        image: "./images/earbuds-prod-1.webp",
    },
    {
        id: 12,
        name: "Immortal 121",
        price: "₹1399",
        description: "Bluetooth Gaming Wireless Earbuds with BEAST™️ Mode (40ms Low Latency), ASAP™️ Charge, 40 Hours Playback, & Blazing RGB Lights",
        image: "./images/earbuds-prod-2.webp",
    },
    {
        id: 13,
        name: "Airdopes 190",
        price: "₹1299",
        description: "Wireless Earbuds with 40 Hours of Playtime, Beast Mode, RGB Lights Featuring ENx™ tech",
        image: "./images/earbuds-prod-4.webp",
    },
    {
        id: 14,
        name: "Stone 580",
        price: "₹1999",
        description: "Portable Bluetooth Speaker with 12W RMS Stereo Sound, Bluetooth v5.1, AUX, and USB",
        image: "./images/speaker-prod-1.webp",
    },
    {
        id: 15,
        name: "Party Pal 200",
        price: "₹7999",
        description: "Bluetooth Speaker with 70W Sound Experience & Dynamic RGB Lights, 7HRS of non stop playback",
        image: "./images/speaker-prod-1.webp",
    },
];

const trendingProducts = [
    {
        id: 1,
        name: "Rockerz 450 DC Edition",
        description: "Over Ear Bluetooth Headphones with Upto 15 Hours Playback, Adaptive Headband, 40mm Dynamic Driver, 300 mah Battery...",
        price: "₹1499",
        image: "./images/headphone-prod-1.webp",
    },
    {
        id: 2,
        name: "Rockerz 420",
        description: "Wireless Bluetooth Headphone with 40mm Dyanmic Drivers, 8 Hours Non-Stop Playback, Lightweight & Portable...",
        price: "₹999",
        image: "./images/headphone-prod-4.webp",
    },
    {
        id: 3,
        name: "Rockerz 518",
        description: "Wireless Headphone with Dynamic 50mm Driver, Up To 20 Hours Of Playtime, Easy Control & Lightweight...",
        price: "₹1599",
        image: "./images/headphone-prod-3.webp",
    },
    {
        id: 4,
        name: "Rockerz 550",
        description: "Over Ear Bluetooth Headphones with Upto 20H Playback, 50mm Dynamic Driver, 500mAh Battery...",
        price: "₹1999",
        image: "./images/headphone-prod-2.webp",
    },
    {
        id: 5,
        name: "Party Pal 50",
        description: "Wireless Bluetooth Speaker with 20W RMS Stereo Sound, RGB LEDs, 4.5 Hrs Playback, USB, FM, AUX, BT...",
        price: "₹3999",
        image: "./images/speaker-prod-5.webp",
    },
    {
        id: 6,
        name: "Wave Neo",
        description: "'1.69' HD Display, Upto 7 Days Battery Life, IP68 Sweat & Water Resistant, 100+ Watch Faces...",
        price: "₹1999",
        image: "./images/watch-prod-1.webp",
    },
    {
        id: 7,
        name: "Airdopes 170",
        description: "Wireless Bluetooth Earbuds with 13mm Drivers, Upto 50 hours of battery life, BEAST™ Mode, Quad Mics with ENx™ Technology...",
        price: "₹1299",
        image: "./images/earbuds-prod-3.webp",
    },
    {
        id: 8,
        name: "Stone 1000v2",
        description: "14W Powerful Stereo Sound, Up to 8hrs Nonstop Playback, Travel & Party Booster, 3000mah Battery...",
        price: "₹2999",
        image: "./images/speaker-prod-2.webp",
    },
]

const productContainer = document.getElementById("btn-search");
const mainContent = document.querySelector("main");

const ShowData = (value) => {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const data = value ?  productsData.filter(item => item.name.toLowerCase().includes(value.toLowerCase())) : [];

    if (data.length === 0 && value) {
        resultsContainer.innerHTML = '<p class="p-4">No results found.</p>';
    } else {
        data.map(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('border', 'border-gray-300', 'w-[270px]', 'sm:w-[400px]', 'sm:p-1', 'lg:w-[800px]', 'my-3', 'sm:mx-2', 'rounded-md', 'cursor-pointer');
            resultItem.innerHTML = `
                <div class="flex items-center">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg mr-4">
                    <div>
                        <p class="font-semibold">${item.name}</p>
                        <p class="text-gray-500">${item.price}</p>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }


}

// const hideData = () => {
//     resultsContainer.classList.remove('visible', 'opacity-100');
//     resultsContainer.classList.add('invisible', 'opacity-0');
// }

// const search = document.getElementById('search');
search.addEventListener('input', () => {
    const value = search.value;
    // if (value == "") {
    //     // location.replace("./index.html");
    // } else if (value.length >= 1) {
        ShowData(value);
    // }
    // else {
    //     hideData();
    // }
});



// POPULAR PRODUCTS SECTION START

const popularProducts = document.getElementById("dynamic-Product");

trendingProducts.map((item) => {
    const productCard = document.createElement("div");
    productCard.className = "bg-gray-300 w-[250px] h-[350px] rounded-lg border border-gray-600 md:cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out md:duration-500 md:ease-in-out mt-10 md:ml-5 md:w-[300px] md:h-[420px] md:pr-2 md:mx-5";

    // const productImages = document.createElement("img");
    // productImages.className = "w-[220px] h-[130px] mt-3 md:w-[280px] md:h-[240px]";

    const productImages = document.createElement("img");
    productImages.src = item.image;
    productImages.className = "w-[220px] h-[130px] mt-3 md:w-[280px] md:h-[240px]";
    // productImages.img = item.image;


    const productName = document.createElement("h2");
    productName.className = "ml-3 mt-2 font-bold";
    productName.textContent = item.name;

    const productDesc = document.createElement("p");
    productDesc.className = "text-sm font-semibold ml-3 mt-2";
    productDesc.textContent = item.description;

    const productPrice = document.createElement("h2");
    productPrice.className = "font-bold ml-3 mt-2";
    productPrice.textContent = item.price;

    productCard.appendChild(productImages);
    productCard.appendChild(productName);
    productCard.appendChild(productDesc);
    productCard.appendChild(productPrice);

    popularProducts.appendChild(productCard);

})

const searchedProducts = () => {
    const seachedValue = document.getElementById("search").value;

    const searchedArea = document.getElementById("dynamic-Product");
    searchedArea.innerHTML = " ";

    const searchedData = productsData.filter(item => item.name.toLowerCase().includes(seachedValue.toLowerCase()));

    searchedData.map(item => {
        const dataItem = document.createElement("div");
        dataItem.className = "flex flex-col items-center justify-center mt-10 md:flex-row flex-wrap sm:w-[30vh] md:w-[80vw] md:mx-48 mb-10";

        dataItem.innerHtml = `
        <div class="flex items-center">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg mr-4">
            <div>
                <p class="font-semibold">${item.name}</p>
                <p class="text-gray-500">${item.price}</p>
                <p>${item.description}</p>
            </div>
        </div>
    `;

        searchedArea.appendChild(dataItem);
        document.querySelector("#container").style.display = "none";
    })
}

const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('active');
    });

    closeIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('active');
    });


