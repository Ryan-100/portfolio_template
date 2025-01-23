import Button from "components/ui/button";
import { ChatIcon, FacebookIcon, InstagramIcon, LeafIcon, MailIcon, MessengerIcon, PhoneIcon, TelegramIcon } from "assets/icons";

export function Welcome() {
  return (
    <main className="w-full h-full min-h-screen">
      <div className="flex flex-col lg:flex-row gap-5 items-start justify-center pt-14 mx-4 md:mx-20 py-[56px] md:py-[72px] lg:py-[157.5px]">
       <div className="lg:w-[64%] flex flex-col">
          <p className="font-syncopate font-bold text-black text-[32px] md:text-[40px] lg:text-5xl">Hey There! It's</p>
          <p className="font-syncopate font-bold text-[40px] md:text-5xl lg:text-[64px] gradient-text mt-2 mb-4">Dee Dee</p>
          <div className="relative w-fit mb-6">
            <div className="gradient-text text-sm md:text-base font-normal underline">Sharing Stories, Skills, and Smiles</div>
            <div className="bg-gradient h-[1px] w-full -mt-[6px]"></div>
          </div>
          <p className="text-xl leading-[32px] text-wrap whitespace-normal break-words font-normal max-w-[738px] mb-6">
            I’m from Myanmar and love sharing my adventures, tips, and ideas with the world. Whether it’s discovering hidden gems, sharing wellness advice, or exploring the latest trends, I enjoy inspiring others to live their best lives. My goal is to turn everyday experiences into something meaningful and exciting for my community.
          </p>
          <Button>
            <div className="gradient-text px-[34px] py-2 text-xl">Let's Explore Together</div>
          </Button>
          <div className="hidden lg:flex items-start gap-5 mt-[72px] flex-wrap">
            <div className="bg-card bg-no-repeat bg-center bg-cover p-6 rounded-3xl w-[359px] h-[237px] flex flex-col gap-4">
              <img src={ChatIcon} width={64} height={64} alt="chat-icon" />
              <p className="font-bold text-2xl">Let’s chat!</p>
              <div className="flex items-center gap-2">
                <img src={PhoneIcon} width={24} height={24} alt="phone-icon" />
                <p className="text-lg">09123456789 • 09123456789</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={MailIcon} width={24} height={24} alt="mail-icon" />
                <p className="text-lg">austintao.lifestyle@gmail.com</p>
              </div>
            </div>
            <div className="bg-card bg-no-repeat bg-center bg-cover p-6 rounded-3xl w-[359px] h-[237px] flex flex-col gap-4">
              <img src={LeafIcon} width={64} height={64} alt="chat-icon" />
              <p className="font-bold text-2xl">Follow me on</p>
              <div className="flex items-center gap-3">
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} width={36} height={36} alt="facebook-icon" />
                </a>
                <a href="http://www.telegram.org" target="_blank" rel="noopener noreferrer">
                  <img src={TelegramIcon} width={36} height={36} alt="telegram-icon" />
                </a>
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} width={36} height={36} alt="instagram-icon" />
                </a>
                <a href="http://www.messenger.com" target="_blank" rel="noopener noreferrer">
                  <img src={MessengerIcon} width={36} height={36} alt="messenger-icon" />
                </a>
              </div>
            </div>
          </div>
       </div>
        <div className="lg:w-[36%] flex items-start justify-center">
          <img src="/images/person.png" alt="A Person" className="w-full h-[576.55px] md:h-[981px] lg:w-[522px] lg:h-[760px] rounded-tl-[56px] rounded-tr-[56px] rounded-br-[0px] rounded-bl-[220px] border-white border-[20px] object-cover" />
        </div>
        <div className="block lg:hidden w-full">
          <div className="flex flex-col md:flex-row items-start gap-5 mt-8 flex-wrap">
            <div className="card flex-1 w-full p-6 rounded-3xl h-[237px] flex flex-col gap-4">
              <img src={ChatIcon} width={64} height={64} alt="chat-icon" />
              <p className="font-bold text-xl md:text-2xl">Let’s chat!</p>
              <div className="flex items-center gap-2">
                <img src={PhoneIcon} width={24} height={24} alt="phone-icon" />
                <p className="text-base md:text-lg">09123456789 • 09123456789</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={MailIcon} width={24} height={24} alt="mail-icon" />
                <p className="text-base md:text-lg">austintao.lifestyle@gmail.com</p>
              </div>
            </div>
            <div className="card flex-1 w-full p-6 rounded-3xl h-[237px] flex flex-col gap-4">
              <img src={LeafIcon} width={64} height={64} alt="chat-icon" />
              <p className="font-bold text-xl md:text-2xl">Follow me on</p>
              <div className="flex items-center gap-3">
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} width={36} height={36} alt="facebook-icon" />
                </a>
                <a href="http://www.telegram.org" target="_blank" rel="noopener noreferrer">
                  <img src={TelegramIcon} width={36} height={36} alt="telegram-icon" />
                </a>
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} width={36} height={36} alt="instagram-icon" />
                </a>
                <a href="http://www.messenger.com" target="_blank" rel="noopener noreferrer">
                  <img src={MessengerIcon} width={36} height={36} alt="messenger-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
