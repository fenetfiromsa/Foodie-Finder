import image from '../assets/food.jpg'
export default function Aboutus() {
  return (
    <div>
      <h1 className="font-bold text-red-600 text-center m-5 text-5xl">About Us</h1>
      <div className="flex p-10 gap-10 bg-slate-100 mt-12 h-[450px]">
        <div className='text-black text-2xl font-serif w-[600px] h-[200px]'>
          <p className='text-black'>At Foodie Finder, we believe that food is more than just sustenance—it's a journey, a culture, and a connection to the world. Our mission is to bring the flavors of the globe to your fingertips by helping you discover delicious meals from every corner of the planet. Whether you're craving exotic street food, classic comfort dishes, or healthy new recipes, Foodie Finder lets you explore by ingredient, cuisine, or country—all powered by the open-source TheMealDB API. We’re here to inspire your next culinary adventure, right from your kitchen.</p>
        </div>

        <div>
        <img src={image} alt="php" className='pl-10 h-[400px] w-[600px] rounded-1g '></img>"
        </div>
      </div>
      
    </div>
  );
}