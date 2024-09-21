import Header from "./Header1";



export function Sponsors(){
    const images = [
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/VISION_MP_09_2023.png"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/SNJ_MP_04_2023.png"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/BE_MP_05_2023.png"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/CC_MP_12_2023.png"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/boldfit.png"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/IC_PP_02_2023.png"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/FF_MP_17_2023.png"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/jsw-paints-logo-new.png"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/ETIHADLOGO.png"
        },
        {
            url:"https://cdnflags.dream11.com/d11-static-pages/images/fp-logo.webp"
        },
        {
            url:"https://gallery.chennaisuperkings.com/PROD/SPN_PART/GULF_PP_03_2023.png"
        },
        {
            url:"https://cdnflags.dream11.com/d11-static-pages/images/dream11LogoWhite.webp"
        }
    ]


    return(
        <>
        <Header name="SPONSORS"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-10 ">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {images.map((image) => (
                        <div> 
                            <img src={image.url}/>
                            

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}