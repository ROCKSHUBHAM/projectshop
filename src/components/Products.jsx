import React from 'react'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    let navigate = useNavigate();
    return (
        <div class="container pt-20 mb-5 px-6 mx-auto ">
            <section class="mb-32 text-gray-800 text-center">
                <h2 class="text-3xl font-bold mb-12 pb-4 text-center">Projects we are proud of</h2>
                <div class="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                    <div class="mb-6 lg:mb-0">
                        <div class="relative block  rounded-lg shadow-md bg-white cursor-pointer" onClick={()=>{
                             navigate("/productView")
                        }}>
                            <div class="flex">
                                <div
                                    class="relative overflow-hidden bg-no-repeat bg-cover bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp" class="w-full" />
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </div>
                            </div>
                            <div class="p-3">
                                <h5 class="font-bold text-lg mb-3">White city</h5>
                            </div>
                        </div>
                    </div>   
                    <div class="mb-6 lg:mb-0">
                        <div class="relative block  rounded-lg shadow-md bg-white cursor-pointer" onClick={()=>{
                             navigate("/productView")
                        }}>
                            <div class="flex">
                                <div
                                    class="relative overflow-hidden bg-no-repeat bg-cover bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp" class="w-full" />
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </div>
                            </div>
                            <div class="p-3">
                                <h5 class="font-bold text-lg mb-3">White city</h5>
                            </div>
                        </div>
                    </div>                    
                    <div class="mb-6 lg:mb-0">
                        <div class="relative block  rounded-lg shadow-md bg-white cursor-pointer" onClick={()=>{
                             navigate("/productView")
                        }}>
                            <div class="flex">
                                <div
                                    class="relative overflow-hidden bg-no-repeat bg-cover bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp" class="w-full" />
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </div>
                            </div>
                            <div class="p-3">
                                <h5 class="font-bold text-lg mb-3">White city</h5>
                            </div>
                        </div>
                    </div>    
                    <div class="mb-6 lg:mb-0">
                        <div class="relative block  rounded-lg shadow-md bg-white cursor-pointer" onClick={()=>{
                             navigate("/productView")
                        }}>
                            <div class="flex">
                                <div
                                    class="relative overflow-hidden bg-no-repeat bg-cover bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp" class="w-full" />
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </div>
                            </div>
                            <div class="p-3">
                                <h5 class="font-bold text-lg mb-3">White city</h5>
                            </div>
                        </div>
                    </div>    
                    <div class="mb-6 lg:mb-0">
                        <div class="relative block  rounded-lg shadow-md bg-white cursor-pointer" onClick={()=>{
                             navigate("/productView")
                        }}>
                            <div class="flex">
                                <div
                                    class="relative overflow-hidden bg-no-repeat bg-cover bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp" class="w-full" />
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </div>
                            </div>
                            <div class="p-3">
                                <h5 class="font-bold text-lg mb-3">White city</h5>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>

        </div>
    )
}

export default Products