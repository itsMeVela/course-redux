import { useState, useEffect } from "react";

const ProducctList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
       const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
       }

       fetchProducts();
    }, []);

    return (
        <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-5">
            {products.map((product) => {
                return (
                    <div key={product.id} className="group bg-white rounded-xl border shadow p-4 w-full">
                        <div className="relative w-[80%] h-[300px] mx-auto overflow-hidden">
                            <img src={product.image}
                             alt={product.title} 
                             className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out" />
                        </div>
                       <div className="flex flex-col gap-6 mt-8">  {/* gap untuk atur jarak per element */}
                            <button
                            type="button"
                            className="bg-purple-400 text-purple-100 hover:bg-purple-500 rounded-lg text-sm py-3 px-8">
                                BUY NOW
                            </button>
                        <h3 className="font-bold">{product.title}</h3>
                        <h3>{product.price}</h3>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ProducctList;