import React from 'react'

const About = () => {
    return (
        <div class="container min-h-screen flex justify-center items-center mx-auto pt-10">
            <section class=" text-gray-800 text-center">
                <div class="px-6 py-12 md:px-6">
                    <div class=" mx-auto xl:px-32">
                        <div class="grid lg:grid-cols-2 flex items-center">
                            <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                <div
                                    class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                    style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)" }}
                                >
                                    <h2 class="text-3xl font-bold mb-12">
                                        Trusted by the best companies <br />
                                        <span class="">around the world</span>
                                    </h2>
                                    <div class="grid md:grid-cols-2 gap-x-6">
                                        <div class="mb-12">
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo6-1.png"
                                                class="grayscale px-6"
                                                alt="Nasa - logo"
                                            />
                                        </div>

                                        <div class="mb-12">
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo5-1.png"
                                                class="grayscale px-6"
                                                alt="Amazon - logo"
                                            />
                                        </div>

                                        <div class="mb-12 md:mb-0">
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo3-1.png"
                                                class="grayscale px-6"
                                                alt="Nike - logo"
                                            />
                                        </div>

                                        <div class="">
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo4-1.png"
                                                class="grayscale px-6"
                                                alt="Ikea - logo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md:mb-12 lg:mb-0">
                                <img
                                    src="https://mdbootstrap.com/img/new/textures/full/166.jpg"
                                    class="w-full rounded-lg shadow-lg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About