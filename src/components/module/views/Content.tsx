import {myData} from '../../../data.ts'


const data: myData[] = [
    {
        id: '1',
        title: 'Paris',
        description: 'Paris, the capital of France, is known for its iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. Famous for its art, culture, and fashion, Paris is often called \'The City of Light.\' It is renowned for its cafés, historical architecture, and romantic ambiance. The city is also a global hub for business, finance, and diplomacy.',
        img:{ src:'https://handluggageonly.co.uk/wp-content/uploads/2023/10/Best-Things-To-Do-In-Paris-France-17.jpg',
            alt: 'paris image'
        },
        mapLink: 'https://maps.app.goo.gl/z1nov7Y1JTPxzuoQ8',
        country: 'France',
        dates: '14 Jul, 2022 - 21 Jul, 2022'

    },
    {
        id: '2',
        title: 'London',
        description: 'London, the capital of the United Kingdom, is a vibrant and historic city known for its iconic landmarks such as the Tower of London, Buckingham Palace, the British Museum, and Big Ben. It is a global center for finance, culture, and education. London is famous for its diverse population, rich history, world-class theater scene, and beautiful parks. The city is also a major hub for art, fashion, and international diplomacy.',
        img: { src:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/1280px-London_Big_Ben_Phone_box.jpg',
            alt: 'london image'
        },
        mapLink: 'https://maps.app.goo.gl/ChmB7rucy7SA142J8',
        country:'England',
        dates: '02 May, 2024 - 12 May, 2024'
    },
    {
        id: '3',
        title: 'Barcelona',
        description: 'Barcelona, the capital of Catalonia in Spain, is renowned for its unique architecture, vibrant culture, and beautiful Mediterranean coastline. The city is famous for the works of architect Antoni Gaudí, including the Sagrada Família and Park Güell. Barcelona offers a mix of modernist and Gothic architecture, lively street life, and a rich history. It is also known for its football club, beautiful beaches, and delicious cuisine, especially tapas. The city\'s cultural scene, including art galleries, museums, and festivals, attracts visitors from all over the world.',
        img: { src:'https://as2.ftcdn.net/v2/jpg/09/38/60/37/1000_F_938603775_WgmOg2yRWVn6OW3SdLDQcfFsFDZyU5gO.jpg',
            alt: 'barcelona image'
        },
        mapLink: 'https://maps.app.goo.gl/rv2Ef6xWmw7DLPPA6',
        country: 'Spain',
        dates: '12 Mar, 2019 - 18 Mar, 2019'
    },
    {
        id: '4',
        title: 'Lisbon',
        description: 'Lisbon, the capital of Portugal, is a picturesque city known for its charming hills, historic neighborhoods, and stunning views over the Tagus River. The city blends old-world charm with modern innovation, offering attractions like the Belém Tower, Jerónimos Monastery, and the Alfama district. Lisbon is famous for its colorful buildings, cobblestone streets, and vibrant nightlife. The city is also known for its traditional Fado music, delicious cuisine (including pastéis de nata), and iconic tram rides. With a mild climate and welcoming atmosphere, Lisbon is a popular destination for tourists.',
        img:{ src:'https://avaz.ba/media/2021/12/16/1676962/lisabon.jpg',
            alt: 'lisbon image'
        },
        mapLink: 'https://maps.app.goo.gl/kSbbRLdL9ZQztUtU9',
        country: 'Portugal',
        dates: '10 Mar, 2019 - 12 Mar, 2019'
    },
    {
        id: '5',
        title: 'Porto',
        description: 'Porto, located in northern Portugal, is a historic city known for its rich culture, stunning architecture, and world-famous port wine. The city is famous for its medieval Ribeira district, the iconic Dom Luís I Bridge, and the Livraria Lello, one of the most beautiful bookstores in the world. Porto\'s riverside offers picturesque views of the Douro River, while the city\'s colorful buildings and narrow streets add to its charm. Known for its wine cellars and vibrant culinary scene, Porto is a perfect blend of tradition and modernity, offering visitors a unique and welcoming experience.',
        img: {src:'https://voyagefox.net/wp-content/uploads/2023/11/porto-city-view.jpg',
              alt: 'porto image'
        },
        mapLink: 'https://maps.app.goo.gl/aAwSaVPtNQy5tnid7',
        country: 'Portugal',
        dates: '7 Mar, 2019 - 10 Mar, 2019'
    },
    {
        id: '6',
        title: 'Vienna',
        description: 'Vienna, the capital of Austria, is a city renowned for its imperial history, classical music, and stunning architecture. Famous for being the home of composers like Mozart, Beethoven, and Strauss, Vienna is often called the "City of Music." The city boasts majestic landmarks such as the Schönbrunn Palace, the Hofburg, and St. Stephen\'s Cathedral. Vienna is also known for its elegant coffee houses, rich cultural scene, and artistic heritage, with numerous museums, galleries, and theaters. Its high quality of life, along with its blend of old-world charm and modern sophistication, makes Vienna a top cultural destination.',
        img: {src:'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt942d2e50dcfcf607/64ff1d3dbb60f7baf4480775/0_-BCC-2023-BEST-PLACES-TO-VISIT-IN-VIENNA-0.webp?format=webp&auto=avif&width=860&quality=80',
             alt: 'vienna image'
        },
        mapLink: 'https://maps.app.goo.gl/sT2AxEEC4yNRZKTM8',
        country: 'Austria',
        dates: '20 Jun, 2019 - 30 Jun, 2019'
    },
    {
        id: '7',
        title: 'Milan',
        description: 'Milan, located in northern Italy, is a global fashion and design capital known for its elegance and innovation. The city is famous for landmarks such as the stunning Gothic cathedral, the Duomo di Milano, and Leonardo da Vinci\'s masterpiece, The Last Supper, housed in the Santa Maria delle Grazie church. Milan is a hub for high-end shopping, with luxurious boutiques lining the Galleria Vittorio Emanuele II. The city\'s vibrant cultural scene also includes art galleries, theaters, and a strong culinary tradition. Milan blends historical charm with modern sophistication, making it a dynamic and stylish destination.',
        img: {src:'https://amoureux-du-monde.com/wp-content/uploads/2023/08/Couv-Milan-1r-2048x1365.jpg',
             alt: 'milan image'
        },
        mapLink: 'https://maps.app.goo.gl/suY24ETN2LDLUews6',
        country: 'Italy',
        dates: '27 Fab, 2019 - 3 Mar, 2019'
    },
    {
        id: '8',
        title: 'New York',
        description: 'New York City, often simply called New York, is one of the most iconic and diverse cities in the world. Known for its towering skyscrapers, including the Empire State Building and One World Trade Center, the city is a global hub for finance, culture, art, and fashion. Famous landmarks include Times Square, Central Park, the Statue of Liberty, and Broadway theaters. New York is a melting pot of cultures, offering a dynamic food scene, vibrant neighborhoods, and world-class museums. Its fast-paced energy and constant innovation make it an exciting and ever-evolving destination.',
        img: {src: 'https://images.photowall.com/products/44316/new-york-city.jpg?h=699&q=85',
             alt: 'new york image'
        },
        mapLink: 'https://maps.app.goo.gl/AvMEkd3h2CBJbVv67',
        country: 'United States of America',
        dates: '17 Dec, 2024 - 27 Dec, 2024'
    },
    {
        id: '9',
        title: 'Istanbul',
        description: 'Istanbul, Turkeys largest city, is a vibrant metropolis that blends rich history with modern life. It spans two continents, Europe and Asia, divided by the Bosphorus Strait. Known for its iconic landmarks, including the Hagia Sophia, Blue Mosque, and Topkapi Palace, Istanbul reflects its Byzantine, Roman, and Ottoman past. The city\'s bustling bazaars, such as the Grand Bazaar, offer a taste of Turkish culture, while its lively streets, cafes, and art scenes attract visitors from around the world. Istanbul is a unique fusion of tradition and modernity, offering a diverse and dynamic experience.',
        img: {src: 'https://visit.istanbul/images/v/hist5.jpg',
            alt: 'istanbul image'
        },
        mapLink: 'https://maps.app.goo.gl/thsF5VfAW4DyW6iv7',
        country: 'Turkey',
        dates: '17 Nov, 2019 - 23 Nov, 2019'
    }
]

export default data
