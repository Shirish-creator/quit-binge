export default function Time() {
  return (
    <main className="flex flex-col relative gap-0 h-full bg-[#FFF9F3]">
      <div className="h-[80px] pt-4 lg:h-[116px] lg:pt-16  px-6 w-full items-end z-1 bg-white rounded-b-[32px]" style={{boxShadow: '0 -4px 0 0 rgba(0, 0, 0, 0.15) inset'}}> 
      <div className="flex flex-row">
          <div className="flex flex-row items-center gap-6">
          <div className="rounded-full border-1 border-gray-400 w-10 h-10 flex items-center justify-center"> 
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4417 17.4998C11.2952 17.7524 11.0849 17.962 10.8319 18.1078C10.5788 18.2535 10.292 18.3302 10 18.3302C9.70802 18.3302 9.42116 18.2535 9.16814 18.1078C8.91513 17.962 8.70484 17.7524 8.55833 17.4998M15 6.6665C15 5.34042 14.4732 4.06865 13.5355 3.13097C12.5979 2.19329 11.3261 1.6665 10 1.6665C8.67392 1.6665 7.40215 2.19329 6.46447 3.13097C5.52678 4.06865 5 5.34042 5 6.6665C5 12.4998 2.5 14.1665 2.5 14.1665H17.5C17.5 14.1665 15 12.4998 15 6.6665Z" stroke="#1E1E1E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-xl font-bold">Time Tracking</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-8 px-6 items-center">
        <h2 className="font-bold text-lg">Track Your Time</h2>
        <p className="text-center text-gray-600">Monitor how you spend your time throughout the day</p>
      </div>
    </main>
  );
}
