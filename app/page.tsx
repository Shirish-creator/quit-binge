"use client";
import { useEffect, useState } from "react";
import { useRiveAnimation } from "./hooks/useRiveAnimation";

export default function Home() {
  // First Rive component instance (in header)
  const { RiveComponent: HeaderRiveComponent } = useRiveAnimation();
  
  // Second Rive component instance (in main content)
  const { RiveComponent: ContentRiveComponent, handleMoodChange } = useRiveAnimation();
  
  // Third Rive component instance (in modal)
  const { RiveComponent: ModalRiveComponent } = useRiveAnimation();

  const [currentMood, setCurrentMood] = useState("I'm feeling neutral");
  const [activeMoodValue, setActiveMoodValue] = useState(0);
  const [showMoodWheel, setShowMoodWheel] = useState(false);
  
  const moodTexts = {
    0: "I'm feeling neutral",
    1: "I'm feeling confident",
    2: "I'm happy",
    3: "I'm sad",
    4: "I'm angry"
  };

  const handleMoodChangeWithText = (value: number) => {
    handleMoodChange(value);
    setCurrentMood(moodTexts[value as keyof typeof moodTexts]);
    setActiveMoodValue(value);
    setShowMoodWheel(false);
  };

  const [videoLoaded, setVideoLoaded] = useState(false);
  useEffect(() => {
    // Trigger fade-in after small delay (ensures page is ready)
    const timer = setTimeout(() => setVideoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <main className="flex flex-col relative gap-0  h-full ">
      <div className="h-[80px] pt-4 lg:h-[116px] lg:pt-16  px-6 w-full items-end z-1 bg-white rounded-b-[32px]" style={{boxShadow: '0 -4px 0 0 rgba(0, 0, 0, 0.15) inset'}}> 
        
       <div className="flex flex-row">
        <div className="flex flex-row w-full justify-between items-center gap-6 relative">

          <div className="flex flex-row gap-4 items-center">
  <button className="cursor-pointer rounded-full border-1 border-gray-400 w-10 h-10 flex items-center justify-center"> 
          
            <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4417 17.4998C11.2952 17.7524 11.0849 17.962 10.8319 18.1078C10.5788 18.2535 10.292 18.3302 10 18.3302C9.70802 18.3302 9.42116 18.2535 9.16814 18.1078C8.91513 17.962 8.70484 17.7524 8.55833 17.4998M15 6.6665C15 5.34042 14.4732 4.06865 13.5355 3.13097C12.5979 2.19329 11.3261 1.6665 10 1.6665C8.67392 1.6665 7.40215 2.19329 6.46447 3.13097C5.52678 4.06865 5 5.34042 5 6.6665C5 12.4998 2.5 14.1665 2.5 14.1665H17.5C17.5 14.1665 15 12.4998 15 6.6665Z"
        stroke="#1E1E1E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  
          </button>
                  
          <svg
            width={118}
            height={24}
            viewBox="0 0 118 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_36_1442)">
              <path
                d="M15.193 5.39886C15.5591 8.27825 12.8727 9.59755 12.8727 9.59755C12.9953 -0.120817 5.30047 -0.000417896 5.30047 -0.000417896C6.88881 1.19848 8.72057 5.51756 4.07987 8.27656C4.01254 8.31725 3.94521 8.35795 3.87787 8.39865C-3.24374 12.8059 0.112479 23.7164 8.52376 23.9945C8.62907 23.9979 8.73266 23.9996 8.83797 23.9996C13.8965 23.9996 17.9208 19.9705 17.9985 15.0019C18.0676 10.5709 15.1913 5.39717 15.1913 5.39717L15.193 5.39886ZM10.4229 21.6255C7.27208 22.6481 3.87269 20.9676 2.83164 17.8711C1.79059 14.7764 3.50151 11.4374 6.65401 10.4149C6.65401 10.4149 3.51705 13.8861 5.68547 16.9452C5.68547 16.9452 5.40406 14.9663 7.21683 14.0387C7.21683 14.0387 5.24868 19.9145 10.8027 21.5017L10.4229 21.6255Z"
                fill="url(#paint0_linear_36_1442)"
              />
            </g>
            <path
              d="M32.4773 5.86364V17.5H29.3182V8.77273H29.25L26.7045 10.2955V7.61364L29.5682 5.86364H32.4773ZM34.8665 17.5V15.2273L39.2074 11.6364C39.4953 11.3977 39.7415 11.1742 39.946 10.9659C40.1544 10.7538 40.3134 10.536 40.4233 10.3125C40.5369 10.089 40.5938 9.84091 40.5938 9.56818C40.5938 9.26894 40.5294 9.01326 40.4006 8.80114C40.2756 8.58901 40.1013 8.42614 39.8778 8.3125C39.6544 8.19508 39.3968 8.13636 39.1051 8.13636C38.8134 8.13636 38.5559 8.19508 38.3324 8.3125C38.1127 8.42992 37.9422 8.60227 37.821 8.82955C37.6998 9.05682 37.6392 9.33333 37.6392 9.65909H34.6392C34.6392 8.84091 34.8229 8.13636 35.1903 7.54545C35.5578 6.95455 36.0767 6.5 36.7472 6.18182C37.4176 5.86364 38.2036 5.70455 39.1051 5.70455C40.0369 5.70455 40.8438 5.85417 41.5256 6.15341C42.2112 6.44886 42.7396 6.86553 43.1108 7.40341C43.4858 7.94129 43.6733 8.57197 43.6733 9.29545C43.6733 9.74242 43.5805 10.1875 43.3949 10.6307C43.2093 11.0701 42.8759 11.5568 42.3949 12.0909C41.9138 12.625 41.2301 13.2614 40.3438 14L39.2528 14.9091V14.9773H43.7983V17.5H34.8665Z"
              fill="url(#paint1_linear_36_1442)"
            />
            <g clipPath="url(#clip1_36_1442)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61 6.87055L66.6384 10.7378L82.9593 10.8428L89 6.92919L84.9213 2.3366L74.6441 0.592773L66.0659 2.3366L61 6.87055Z"
                fill="#86CAEF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.9593 10.8426L89 6.92902L84.9213 2.33643L81.3037 5.81173L82.9593 10.8426Z"
                fill="#52BCEB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.6384 10.7375L82.9593 10.8425L81.3037 5.81162L69.374 5.69434L66.6384 10.7375Z"
                fill="#3AABE1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61 6.87038L66.6384 10.7377L69.374 5.69445L66.0659 2.33643L61 6.87038Z"
                fill="#52BCEB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61 6.87061L75.5106 24.0002L66.6384 10.7379L61 6.87061Z"
                fill="#2F85C7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.9593 10.8427L66.6384 10.7378L75.5106 24.0001L82.9593 10.8427Z"
                fill="#4392CF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M89 6.9292L82.9593 10.8428L75.5106 24.0002L89 6.9292Z"
                fill="#2F85C7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.4333 0C82.458 0.996914 82.4704 3.04938 83.1945 4.20062C83.5164 4.70988 84.0981 4.91358 84.6923 4.95988C84.061 5.01852 83.3709 5.37654 83.0398 5.9321C82.3745 7.08333 82.458 8.95679 82.4333 9.91975C82.4085 8.69753 82.492 6.96605 81.8855 5.9321C81.4801 5.24383 80.6724 4.99383 79.6852 4.95988C80.6012 4.92284 81.3873 4.76852 81.7896 4.16358C82.4797 3.13272 82.4085 1.28086 82.4333 0Z"
                fill="#FEFEFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M69.6711 8.74365H69.6835C69.6958 9.96587 69.7206 12.4937 70.6118 13.8918C71.0049 14.5338 71.7166 14.7683 72.4562 14.8301C71.6826 14.9011 70.8378 15.3393 70.4231 16.0399C69.603 17.4412 69.6989 19.7406 69.6866 20.9288H69.6742C69.6494 19.435 69.7454 17.2992 69.0088 16.0307C68.5199 15.1758 67.5234 14.8795 66.3073 14.8332C67.4244 14.7961 68.3899 14.6079 68.8882 13.8609C69.733 12.6048 69.6494 10.327 69.6742 8.74674L69.6711 8.74365Z"
                fill="#FEFEFE"
              />
            </g>
            <path
              d="M103.477 5.86364V17.5H100.318V8.77273H100.25L97.7045 10.2955V7.61364L100.568 5.86364H103.477ZM110.526 17.6591C109.632 17.6591 108.838 17.5019 108.145 17.1875C107.455 16.8693 106.912 16.4318 106.514 15.875C106.12 15.3182 105.92 14.678 105.912 13.9545H108.98C108.991 14.3561 109.147 14.6761 109.446 14.9148C109.749 15.1534 110.109 15.2727 110.526 15.2727C110.848 15.2727 111.132 15.2045 111.378 15.0682C111.624 14.928 111.817 14.7311 111.957 14.4773C112.098 14.2235 112.166 13.928 112.162 13.5909C112.166 13.25 112.098 12.9545 111.957 12.7045C111.817 12.4508 111.624 12.2557 111.378 12.1193C111.132 11.9792 110.848 11.9091 110.526 11.9091C110.192 11.9091 109.884 11.9905 109.599 12.1534C109.319 12.3125 109.113 12.5341 108.98 12.8182L106.207 12.2727L106.662 5.86364H114.48V8.38636H109.253L109.026 10.9545H109.094C109.276 10.6023 109.59 10.3106 110.037 10.0795C110.484 9.8447 111.003 9.72727 111.594 9.72727C112.287 9.72727 112.904 9.88826 113.446 10.2102C113.991 10.5322 114.421 10.9773 114.736 11.5455C115.054 12.1098 115.211 12.7614 115.207 13.5C115.211 14.3106 115.018 15.0303 114.628 15.6591C114.241 16.2841 113.698 16.7746 112.997 17.1307C112.296 17.483 111.473 17.6591 110.526 17.6591Z"
              fill="#52BCEB"
            />
            <defs>
              <linearGradient
                id="paint0_linear_36_1442"
                x1="9.05378"
                y1="23.8181"
                x2="8.93386"
                y2="3.14687"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D3631E" />
                <stop offset="0.13" stopColor="#D67421" />
                <stop offset="0.53" stopColor="#DFA52B" />
                <stop offset="0.83" stopColor="#E4C331" />
                <stop offset={1} stopColor="#E7CF34" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_36_1442"
                x1="29.2534"
                y1="32.0737"
                x2="42.7478"
                y2="28.0454"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D3631E" />
                <stop offset="0.13" stopColor="#D67421" />
                <stop offset="0.53" stopColor="#DFA52B" />
                <stop offset="0.83" stopColor="#E4C331" />
                <stop offset={1} stopColor="#E7CF34" />
              </linearGradient>
              <clipPath id="clip0_36_1442">
                <rect width={18} height={24} fill="white" />
              </clipPath>
              <clipPath id="clip1_36_1442">
                <rect width={28} height={24} fill="white" transform="translate(61)" />
              </clipPath>
            </defs>
          </svg>
          </div>
        
         <div className="w-10 h-10"> <HeaderRiveComponent className="w-full h-full" /></div>
       

        </div>
       
       </div>
        </div>
          

        <video
        className={`absolute inset-0 w-full h-full object-cover -z-0 top-16 transition-opacity duration-[2000ms] ease-out pointer-events-none ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        style={{ mixBlendMode: "multiply" }}
      >
        <source src="/bg/bgvideoone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col gap-3 pt-4 px-6 justify-center items-center" 
      >
        <div className=" w-fit flex flex-row gap-2 items-center bg-[#D3F1A7] text-[#6A9A23] py-2 px-4 z-20 rounded-full whitespace-nowrap">
         <svg
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
    fill="#6A9A23"
  />
</svg>

          <p className="text-sm">10 days binge free</p>
        </div>
        <div className="flex flex-col gap-1 items-center relative">
        <svg
  width={38}
  height={28}
  viewBox="0 0 38 28"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.6 27.648C6.72 27.648 4.384 26.656 2.592 24.672C0.864 22.688 0 19.968 0 16.512C0 12.8 1.088 9.6 3.264 6.912C5.504 4.16 8.384 2.176 11.904 0.959999L14.592 0L17.184 6.432L14.496 7.392C12.512 8.096 11.008 8.832 9.984 9.6C8.96 10.368 8.224 11.392 7.776 12.672C8.544 12.48 9.28 12.384 9.984 12.384C11.904 12.384 13.632 13.152 15.168 14.688C16.704 16.16 17.472 17.952 17.472 20.064C17.472 22.112 16.672 23.904 15.072 25.44C13.536 26.912 11.712 27.648 9.6 27.648ZM29.76 27.648C26.88 27.648 24.544 26.656 22.752 24.672C21.024 22.688 20.16 19.968 20.16 16.512C20.16 12.8 21.248 9.6 23.424 6.912C25.664 4.16 28.544 2.176 32.064 0.959999L34.752 0L37.344 6.432L34.656 7.392C32.672 8.096 31.168 8.832 30.144 9.6C29.12 10.368 28.384 11.392 27.936 12.672C28.704 12.48 29.44 12.384 30.144 12.384C32.064 12.384 33.792 13.152 35.328 14.688C36.864 16.16 37.632 17.952 37.632 20.064C37.632 22.112 36.832 23.904 35.232 25.44C33.696 26.912 31.872 27.648 29.76 27.648Z"
    fill="#7F7F7F"
    fillOpacity="0.5"
    style={{ mixBlendMode: "luminosity" }}
  />
  <path
    d="M9.6 27.648C6.72 27.648 4.384 26.656 2.592 24.672C0.864 22.688 0 19.968 0 16.512C0 12.8 1.088 9.6 3.264 6.912C5.504 4.16 8.384 2.176 11.904 0.959999L14.592 0L17.184 6.432L14.496 7.392C12.512 8.096 11.008 8.832 9.984 9.6C8.96 10.368 8.224 11.392 7.776 12.672C8.544 12.48 9.28 12.384 9.984 12.384C11.904 12.384 13.632 13.152 15.168 14.688C16.704 16.16 17.472 17.952 17.472 20.064C17.472 22.112 16.672 23.904 15.072 25.44C13.536 26.912 11.712 27.648 9.6 27.648ZM29.76 27.648C26.88 27.648 24.544 26.656 22.752 24.672C21.024 22.688 20.16 19.968 20.16 16.512C20.16 12.8 21.248 9.6 23.424 6.912C25.664 4.16 28.544 2.176 32.064 0.959999L34.752 0L37.344 6.432L34.656 7.392C32.672 8.096 31.168 8.832 30.144 9.6C29.12 10.368 28.384 11.392 27.936 12.672C28.704 12.48 29.44 12.384 30.144 12.384C32.064 12.384 33.792 13.152 35.328 14.688C36.864 16.16 37.632 17.952 37.632 20.064C37.632 22.112 36.832 23.904 35.232 25.44C33.696 26.912 31.872 27.648 29.76 27.648Z"
    fill="#3D3D3D"
    style={{ mixBlendMode: "overlay" }}
  />
</svg>
<button className="rounded-full border-1 border-gray-400 w-10 h-10 flex items-center justify-center absolute right-0 top-0 bg-white cursor-pointer "> 
          
<svg
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_63_611)">
    <path
      d="M19.1667 3.33331V8.33332M19.1667 8.33332H14.1667M19.1667 8.33332L15.3 4.69998C14.4044 3.80391 13.2964 3.14932 12.0793 2.79729C10.8623 2.44527 9.57593 2.40727 8.34025 2.68686C7.10456 2.96645 5.95984 3.55451 5.0129 4.39616C4.06595 5.23782 3.34765 6.30564 2.92501 7.49998M0.833344 16.6666V11.6666M0.833344 11.6666H5.83334M0.833344 11.6666L4.70001 15.3C5.59563 16.1961 6.70365 16.8506 7.92068 17.2027C9.13771 17.5547 10.4241 17.5927 11.6598 17.3131C12.8955 17.0335 14.0402 16.4455 14.9871 15.6038C15.9341 14.7621 16.6524 13.6943 17.075 12.5"
      stroke="#1E1E1E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_63_611">
      <rect width={20} height={20} fill="white" />
    </clipPath>
  </defs>
</svg>


        </button>
        <h1 className="font-bold text-xl mt-4 text-[var(--colors-text-primary)]">Today’s Quote</h1>
        <p  className="text-[var(--colors-text-secondary)] text-center">Even storms have breaks between them — you are becoming your calm </p>
        </div>
        <div className="w-full flex justify-center py-8 gap-0 relative">
        <svg
className="absolute z-0 top-[30px]"
width={239}
  height={239}
  viewBox="0 0 239 239"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M119.5 239C185.498 239 239 185.498 239 119.5C239 53.5019 185.498 0 119.5 0C53.502 0 0 53.5019 0 119.5C0 185.498 53.502 239 119.5 239Z"
    fill="#FFE5CA"
  />
  <path
    d="M119.5 229C179.975 229 229 179.975 229 119.5C229 59.0248 179.975 10 119.5 10C59.0248 10 10 59.0248 10 119.5C10 179.975 59.0248 229 119.5 229Z"
    fill="#FFEDDA"
  />
  <path
    d="M119.5 229C179.975 229 229 179.975 229 119.5C229 59.0248 179.975 10 119.5 10C59.0248 10 10 59.0248 10 119.5C10 179.975 59.0248 229 119.5 229Z"
    fill="#FFEBD8"
  />
  <path
    d="M119.5 218C173.9 218 218 173.9 218 119.5C218 65.0999 173.9 21 119.5 21C65.0999 21 21 65.0999 21 119.5C21 173.9 65.0999 218 119.5 218Z"
    fill="#FFF2E5"
  />
</svg>

        <div className="w-52 h-52 z-1" >
        <ContentRiveComponent className="w-full h-full" />
        </div></div>
        <h3 style={{fontFamily:'Cal Sans'}} className="text-center text-2xl" >{currentMood}</h3>
          <div className="relative flex justify-center relative">
            <button onClick={() => setShowMoodWheel(true)} style={{fontFamily:'Cal Sans'}} className="cursor-pointer rounded-xl bg-[var(--colors-surface-bg)] px-4 py-1 border-2 border-zinc-200 w-fit mt-4 shadow-[inset_0_-3px_0_0_rgb(228,228,231)] active:shadow-[inset_0_0_0_0_transparent] active:translate-y-[3px] transition-all duration-75"> Change Mood</button>
            
            {/* Mood Wheel Popup */}
            {showMoodWheel && (
              <div className="animate-slideUpFadeIn absolute -top-92 left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-[3rem] px-8 py-6  max-w-sm shadow-2xl z-50 animate-[slideInFromTopRight_0.3s_ease-out]">
            <h2 style={{fontFamily:'Cal Sans'}} className="text-2xl font-bold text-center mb-6">How are you feeling?</h2>
            
            {/* Mood Wheel */}
            <div className="relative w-64 h-64 mx-auto mb-6">
              {/* Central Character */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <ModalRiveComponent className="w-24 h-24" />
                </div>
              </div>
              
              {/* Mood Selection Buttons around the wheel */}
              <button 
                onClick={() => handleMoodChangeWithText(2)}
                className={`  animate-bounceScaleIn1 absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center cursor-pointer justify-center text-2xl shadow-lg   transition-transform ${
                  activeMoodValue === 2 ? 'bg-[var(--colors-accent-500)] scale-110' : 'bg-white'
                }`}
              >
                😊
              </button>
              
              <button 
                onClick={() => handleMoodChangeWithText(1)}
                className={` animate-bounceScaleIn2 absolute top-1/2 right-2 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center cursor-pointer justify-center text-2xl shadow-lg   transition-transform ${
                  activeMoodValue === 1 ? 'bg-[var(--colors-accent-500)] scale-110' : 'bg-white'
                }`}
              >
                😏
              </button>
              
              <button 
                onClick={() => handleMoodChangeWithText(3)}
                className={` animate-bounceScaleIn3 absolute bottom-2 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center cursor-pointer justify-center text-2xl shadow-lg   transition-transform ${
                  activeMoodValue === 3 ? 'bg-[var(--colors-accent-500)] scale-110' : 'bg-white'
                }`}
              >
                😨
              </button>
              
              <button 
                onClick={() => handleMoodChangeWithText(4)}
                className={` animate-bounceScaleIn4 absolute top-1/2 left-2 transform -translate-y-1/2 w-14 h-14 rounded-full flex items-center cursor-pointer justify-center text-2xl shadow-lg   transition-transform ${
                  activeMoodValue === 4 ? 'bg-[var(--colors-accent-500)] scale-110' : 'bg-white'
                }`}
              >
                😠
              </button>
              
              <button 
                onClick={() => handleMoodChangeWithText(0)}
                className={` animate-bounceScaleIn5 absolute top-4 left-4 cursor-pointer w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg   transition-transform ${
                  activeMoodValue === 0 ? 'bg-[var(--colors-accent-500)] scale-110' : 'bg-white'
                }`}
              >
                😐
              </button>
            </div>
            <button onClick={() => setShowMoodWheel(false)} style={{fontFamily:'Cal Sans'}} className="cursor-pointer rounded-xl bg-[var(--colors-surface-bg)] px-4 py-1 border-2 border-zinc-200 w-full mt-4 shadow-[inset_0_-3px_0_0_rgb(228,228,231)] active:shadow-[inset_0_0_0_0_transparent] active:translate-y-[3px] transition-all duration-75">
            Cancel</button>

            {/* <button 
              
              className="w-full py-3 rounded-full bg-gray-100 text-gray-600 font-medium cursor-pointer"
            >
              Cancel
            </button> */}
              </div>
            )}
          </div>
        {/* <div className="flex gap-2 mt-8">
          <button className="cursor-pointer" onClick={() => handleMoodChangeWithText(0)}>😐 Neutral</button>
          <button className="cursor-pointer" onClick={() => handleMoodChangeWithText(1)}>😊 Smirk</button>
          <button className="cursor-pointer" onClick={() => handleMoodChangeWithText(2)}>😊 Happy</button>
          <button className="cursor-pointer" onClick={() => handleMoodChangeWithText(3)}>😢 Sad</button>
          <button className="cursor-pointer" onClick={() => handleMoodChangeWithText(4)}>😡 Angry</button>
        </div> */}
       
      </div>
    </main>
  );
}
