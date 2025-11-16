import Blackshirt from '../../assets/Products/black-shirt.png';
import Caps from '../../assets/Products/Cap.png';
import Tshirt from '../../assets/Products/Tshirt.png';
import Hoodie from '../../assets/Products/Hoodie.png';
import DenimJacket from '../../assets/Products/Denim-Jacket.png';
import Jeans from '../../assets/Products/Slim-Fit-Jeans.png';
import Wallet from '../../assets/Products/Leather-Wallet.png';
import Smartwatch from '../../assets/Products/Smartwatch-Pro.png';
import LinenShirt from '../../assets/Products/Printed-Linen-Shirt.png';
import Shorts from '../../assets/Products/Cotton-Shorts.png';
import FlipFlops from '../../assets/Products/Flip-Flop.png';
import StrawHat from '../../assets/Products/Straw-Hat.png';
import Glass from '../../assets/Products/Glass.png';
import Watch from '../../assets/Products/Analog-Wrist-Watch.png';
import Backpack from '../../assets/Products/Travel-Backpack.png';
import Bracelet from '../../assets/Products/Chain-Bracelet.png';
import Sneakers from '../../assets/Products/Classic-White-Sneakers.png';
import CrewTshirt from '../../assets/Products/Crew-Neck.png';
import Socks from '../../assets/Products/Cotton-Socks.png';
import EverydayHoodie from '../../assets/Products/Everyday-Hoodie.png';

const Products = [
 // --- New Arrivals ---
 {
   "id": 1,
   "name": "Cotton Shirt",
   "category": "New arrivals",
   "price": 1499,
   "offerPrice": 999,
   "image": Blackshirt,
   "description": "A comfortable casual cotton shirt perfect for daily wear with breathable fabric and modern fit."
 },
 {
   "id": 2,
   "name": "Stylish Baseball Cap",
   "category": "New arrivals",
   "price": 799,
   "offerPrice": 499,
   "image": Caps,
   "description": "Classic baseball cap made with durable cotton twill. Adjustable strap ensures a perfect fit."
 },
 {
   "id": 3,
   "name": "Graphic T-Shirt",
   "category": "New arrivals",
   "price": 999,
   "offerPrice": 699,
   "image": Tshirt,
   "description": "Soft cotton t-shirt featuring a bold graphic print. Ideal for casual outings and summer days."
 },
 {
   "id": 4,
   "name": "Hoodie",
   "category": "New arrivals",
   "price": 1299,
   "offerPrice": 1199,
   "image": Hoodie,
   "description": "Comfortable black hoodie made from soft fleece fabric. Perfect for layering during cooler days."
 },


 // --- Best Seller ---
 {
   "id": 5,
   "name": "Denim Jacket",
   "category": "Best seller",
   "price": 2499,
   "offerPrice": 1899,
   "image": DenimJacket,
   "description": "Classic blue denim jacket with button closure and side pockets. A timeless wardrobe essential."
 },
 {
   "id": 6,
   "name": "Slim Fit Jeans",
   "category": "Best seller",
   "price": 2799,
   "offerPrice": 2199,
   "image": Jeans,
   "description": "Stylish slim fit denim jeans designed for all-day comfort and modern look."
 },
 {
   "id": 7,
   "name": "Leather Wallet",
   "category": "Best seller",
   "price": 1499,
   "offerPrice": 999,
   "image": Wallet,
   "description": "Genuine leather wallet with multiple card slots and a compact, minimal design."
 },
 {
   "id": 8,
   "name": "Smartwatch Pro",
   "category": "Best seller",
   "price": 4999,
   "offerPrice": 3799,
   "image": Smartwatch,
   "description": "Feature-packed smartwatch with fitness tracking, notifications, and long-lasting battery life."
 },


 // --- Summer Collections ---
 {
   "id": 9,
   "name": "Printed Linen Shirt",
   "category": "Summer collections",
   "price": 1599,
   "offerPrice": 1199,
   "image": LinenShirt,
   "description": "Lightweight printed linen shirt designed for summer comfort. Breathable and stylish."
 },
 {
   "id": 10,
   "name": "Cotton Shorts",
   "category": "Summer collections",
   "price": 1299,
   "offerPrice": 899,
   "image": Shorts,
   "description": "Soft cotton shorts with elastic waistband for ultimate summer comfort and ease."
 },
 {
   "id": 11,
   "name": "Flip Flops",
   "category": "Summer collections",
   "price": 699,
   "offerPrice": 499,
   "image": FlipFlops,
   "description": "Lightweight flip-flops made from soft rubber sole, perfect for beach or casual wear."
 },
 {
   "id": 12,
   "name": "Straw Hat",
   "category": "Summer collections",
   "price": 899,
   "offerPrice": 649,
   "image": StrawHat,
   "description": "Stylish woven straw hat providing perfect sun protection for sunny days."
 },


 // --- Accessories ---
 {
   "id": 13,
   "name": "Doflamingo Glasses",
   "category": "Accessories",
   "price": 1299,
   "offerPrice": 899,
    "image": Glass,
   "description": "Premium polarized sunglasses that reduce glare and protect your eyes from harmful UV rays."
 },
 {
   "id": 14,
   "name": "Analog Wrist Watch",
   "category": "Accessories",
   "price": 2999,
   "offerPrice": 2499,
   "image": Watch,
   "description": "Elegant analog wrist watch with leather strap and stainless steel case."
 },
 {
   "id": 15,
   "name": "Travel Backpack",
   "category": "Accessories",
   "price": 3499,
   "offerPrice": 2899,
   "image": Backpack,
   "description": "Durable and spacious backpack with multiple compartments for travel and daily use."
 },
 {
   "id": 16,
   "name": "Chain Bracelet",
   "category": "Accessories",
   "price": 1199,
   "offerPrice": 799,
   "image": Bracelet,
   "description": "Stylish metal chain bracelet adding a bold and elegant touch to your outfit."
 },


 // --- Essentials ---
 {
   "id": 17,
   "name": "Classic White Sneakers",
   "category": "Essentials",
   "price": 2999,
   "offerPrice": 2499,
   "image": Sneakers,
   "description": "Versatile white sneakers made with durable leather and cushioned sole for all-day comfort."
 },
 {
   "id": 18,
   "name": "Basic Crew Neck T-shirt",
   "category": "Essentials",
   "price": 799,
   "offerPrice": 599,
   "image": CrewTshirt,
   "description": "Soft cotton basic t-shirt available in multiple colors. A must-have wardrobe essential."
 },
 {
   "id": 19,
   "name": "Cotton Socks Pack",
   "category": "Essentials",
   "price": 499,
   "offerPrice": 349,
   "image": Socks,
   "description": "Pack of 3 high-quality cotton socks offering comfort and durability for everyday wear."
 },
 {
   "id": 20,
   "name": "Everyday Hoodie",
   "category": "Essentials",
   "price": 1599,
   "offerPrice": 1199,
   "image": EverydayHoodie,
   "description": "Soft fleece everyday hoodie that combines warmth and casual style perfectly."
 }
]

 export default Products