import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer1() {
  return (
    <Footer container>
      <div className="w-full h-auto">
        <div className="grid w-full h-auto p-5 justify-center sm:flex sm:justify-between md:flex md:grid-cols-1 bg-black">
          <div>
            <h1 className='text-gray-400 sm:text-left md:text-left text-center  sm:pl-8  md:pl-8 pl-12 font-relif pt-2 p-1 text-2xl font-semibold font '  >ABOUT AIK</h1>
            <h3 className='text-gray-400 sm:text-left md:text-left text-center sm:pl-8 md:pl-8 pl-12  font-relif mt-3  text-xl '  >AIK combines constantly evolving creative <br/>methods with  modern technology to serve <br/> the woman of today.</h3>
            {/* <FooterBrand
               href="https://flowbite.com"
               src="https://flowbite.com/docs/images/logo.svg"
               alt="Flowbite Logo"
               name="Flowbite"
            /> */}
          </div>
          <div className="grid grid-cols-3 gap-8  sm:mt-4 md:grid-cols-3 sm:grid-cols-2 sm:text-center sm:gap-8  text-center   w-auto ">
            <div>
              <FooterTitle className='text-gray-400  pb-2 text-2xl' title="Company" />
              <FooterLinkGroup col>
                <FooterLink className='text-gray-400 mt-2 mb-1'   href="#">Blog</FooterLink>
                <FooterLink className='text-gray-400 mt-2 mb-1'   href="#">Press</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className='text-gray-400 pb-2  text-2xl' title="Solutions" />
              <FooterLinkGroup col>
                <FooterLink className='text-gray-400 mt-2 mb-1'  href="#">Marketing</FooterLink>
                <FooterLink className='mt-2 mb-1 text-gray-400'  href="#">Analytics</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className='text-gray-400   pb-2 text-2xl' title="Legal" />
              <FooterLinkGroup col>
                <FooterLink className='text-gray-400 mt-2 mb-1' href="#">Privacy Policy</FooterLink>
                <FooterLink className='text-gray-400 mt-2 mb-1' href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider className='text-gray-400 bg-gray-400' />
        <div className="w-full sm:flex sm:items-center text-center sm:justify-between p-5 text-gray-400  bg-black">
          <FooterCopyright href="#" by=" - AIK ATELIER | LUXURY WOMENSWEAR POWERED BY IRTEZA.co" year={2024} />
          <div className=" mt-4 flex space-x-6 sm:mt-0 md:px-24 sm:px-14 px-20 justify-center sm:justify-center justify-items-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footer1