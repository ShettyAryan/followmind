export default function IntegrationBar() {
  return (
    <section className="py-10 border-y border-white/5" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66] whitespace-nowrap">
          Connects with
        </span>
        <div className="flex flex-wrap items-center gap-4">
          {[
            {
              name: "Google Sheets",
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19.8 3H4.2C3.5 3 3 3.5 3 4.2v15.6c0 .7.5 1.2 1.2 1.2h15.6c.7 0 1.2-.5 1.2-1.2V4.2c0-.7-.5-1.2-1.2-1.2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm7 8h-5v-2h5v2zm0-4h-5v-2h5v2zm0-4h-5V7h5v2z"/>
                </svg>
              ),
            },
            {
              name: "Gmail",
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              ),
            },
            {
              name: "Google Contacts",
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              ),
            },
            {
              name: "Google Calendar",
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-full glass border border-white/8 text-[#7A8BA8] hover:text-[#F0F4FF] hover:border-white/15 transition-all duration-200 cursor-default"
            >
              {item.icon}
              <span className="text-[11px] font-medium whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="hidden sm:block flex-1 h-px bg-white/5" />
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC97] animate-pulse-dot" />
          <span className="font-mono text-[10px] text-[#3DDC97]">All systems operational</span>
        </div>
      </div>
    </section>
  );
}
